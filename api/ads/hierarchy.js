// GET /api/ads/hierarchy?mcc=<10-digit-id>
// Read-only: walks the account hierarchy under a manager account (MCC) using
// the Google Ads API customer_client resource with login-customer-id.

const ADS_API_VERSION = process.env.ADS_API_VERSION || process.env.ads_api_version || "v25";

const env = (name) => process.env[name] ?? process.env[name.toLowerCase()];

const GAQL = [
  "SELECT",
  "customer_client.client_customer,",
  "customer_client.status,",
  "customer_client.manager,",
  "customer_client.descriptive_name,",
  "customer_client.currency_code,",
  "customer_client.time_zone,",
  "customer_client.level",
  "FROM customer_client",
  "WHERE customer_client.level <= 1",
].join(" ");

const MAX_ACCOUNTS = 800;
const MAX_MANAGER_EXPANSIONS = 40;

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const cookies = {};
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx > -1) cookies[part.slice(0, idx).trim()] = part.slice(idx + 1).trim();
  }
  return cookies;
}

async function kvCommand(args) {
  const response = await fetch(`${env("UPSTASH_REDIS_REST_URL")}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${env("UPSTASH_REDIS_REST_TOKEN")}` },
    body: JSON.stringify([args]),
  });
  const json = await response.json();
  return Array.isArray(json) ? json[0]?.result : json?.result;
}

async function decrypt(ciphertextB64, keyB64) {
  const raw = Uint8Array.from(atob(keyB64), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
  const data = Uint8Array.from(atob(ciphertextB64), (c) => c.charCodeAt(0));
  const iv = data.slice(0, 12);
  const ciphertext = data.slice(12);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return new TextDecoder().decode(plaintext);
}

async function refreshAccessToken(refreshToken) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env("GOOGLE_CLIENT_ID"),
      client_secret: env("GOOGLE_CLIENT_SECRET"),
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Token refresh failed (${response.status}): ${detail.slice(0, 300)}`);
  }
  const tokens = await response.json();
  return tokens.access_token;
}

async function queryChildren(accessToken, developerToken, mccId, customerId) {
  const response = await fetch(
    `https://googleads.googleapis.com/${ADS_API_VERSION}/customers/${customerId}/googleAds:search`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "developer-token": developerToken,
        "login-customer-id": mccId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GAQL }),
    }
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `Google Ads API search failed on customer ${customerId} (${response.status}): ${detail.slice(0, 500)}`
    );
  }

  const data = await response.json();
  return (data.results || [])
    .map((row) => row.customerClient)
    .filter(Boolean)
    .map((c) => ({
      id: (c.clientCustomer || "").replace("customers/", ""),
      name: c.descriptiveName || "",
      manager: !!c.manager,
      status: c.status || "UNKNOWN",
      currency: c.currencyCode || "",
      timezone: c.timeZone || "",
    }))
    .filter((c) => c.id && c.id !== customerId);
}

export default async function handler(req, res) {
  try {
    const mccParam = (req.query.mcc || "").replace(/-/g, "");
    if (!/^\d{10}$/.test(mccParam)) {
      return res.status(400).json({ error: "Provide ?mcc=<10-digit manager account ID>" });
    }

    const sessionId = parseCookies(req)["gn_session"];
    if (!sessionId) {
      return res.status(401).json({ error: "Not signed in. Visit /api/auth/google first, then retry." });
    }

    const sessionRaw = await kvCommand(["get", `session:${sessionId}`]);
    if (!sessionRaw) {
      return res.status(401).json({ error: "Session not found or expired. Re-authorize at /api/auth/google." });
    }
    const { sub } = JSON.parse(sessionRaw);

    const userRaw = await kvCommand(["get", `user:${sub}`]);
    const user = userRaw ? JSON.parse(userRaw) : null;
    if (!user || !user.encryptedRefreshToken) {
      return res.status(401).json({ error: "No stored authorization. Visit /api/auth/google." });
    }

    const refreshToken = await decrypt(user.encryptedRefreshToken, env("ENCRYPTION_KEY"));
    const accessToken = await refreshAccessToken(refreshToken);

    const developerToken = env("GOOGLE_ADS_DEVELOPER_TOKEN");
    if (!developerToken) {
      return res.status(503).json({ error: "GOOGLE_ADS_DEVELOPER_TOKEN is not configured." });
    }

    const accounts = [];
    const seen = new Set([mccParam]);
    let queue = [{ id: mccParam, parent: null, depth: 0 }];
    let expansions = 0;
    let truncated = false;

    while (queue.length && !truncated) {
      const nextQueue = [];
      for (const node of queue) {
        if (node.manager === false) continue;
        if (expansions >= MAX_MANAGER_EXPANSIONS) { truncated = true; break; }
        expansions++;

        const children = await queryChildren(accessToken, developerToken, mccParam, node.id);
        for (const child of children) {
          if (seen.has(child.id)) continue;
          seen.add(child.id);
          accounts.push({ ...child, parent: node.id === mccParam ? null : node.id, depth: node.depth + 1 });
          if (child.manager && child.status !== "CANCELED") {
            nextQueue.push({ id: child.id, manager: true, depth: node.depth + 1 });
          }
          if (accounts.length >= MAX_ACCOUNTS) { truncated = true; break; }
        }
        if (truncated) break;
      }
      queue = nextQueue;
    }

    return res.status(200).json({
      ok: true,
      mcc: mccParam,
      total: accounts.length,
      truncated,
      counts: {
        managers: accounts.filter((a) => a.manager).length,
        clients: accounts.filter((a) => !a.manager).length,
        canceled: accounts.filter((a) => a.status === "CANCELED").length,
        enabled: accounts.filter((a) => a.status === "ENABLED").length,
      },
      accounts,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
}
