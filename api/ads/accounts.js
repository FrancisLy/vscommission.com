// GET /api/ads/accounts
// Read-only verification endpoint: uses the stored authorization to call the
// Google Ads API ListAccessibleCustomers method and returns the customer IDs
// the signed-in user can access.

const ADS_API_VERSION = process.env.ADS_API_VERSION || process.env.ads_api_version || "v25";

const env = (name) => process.env[name] ?? process.env[name.toLowerCase()];

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

export default async function handler(req, res) {
  try {
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
      return res.status(503).json({
        error: "GOOGLE_ADS_DEVELOPER_TOKEN is not configured.",
        hint: "Copy the developer token from the Google Ads API Overview page in Cloud Console and add it to your Vercel environment variables.",
      });
    }

    const adsResponse = await fetch(
      `https://googleads.googleapis.com/${ADS_API_VERSION}/customers:listAccessibleCustomers`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "developer-token": developerToken,
        },
      }
    );

    if (!adsResponse.ok) {
      const detail = await adsResponse.text();
      return res.status(502).json({
        error: `Google Ads API call failed (${adsResponse.status}).`,
        apiVersion: ADS_API_VERSION,
        detail: detail.slice(0, 600),
      });
    }

    const data = await adsResponse.json();
    return res.status(200).json({
      ok: true,
      method: `customers.listAccessibleCustomers (${ADS_API_VERSION}, read-only)`,
      account: user.email || sub,
      customerIds: (data.resourceNames || []).map((name) => name.replace("customers/", "")),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
