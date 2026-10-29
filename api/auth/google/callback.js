// GET /api/auth/google/callback
// Handles the OAuth callback: validates state, exchanges the code for tokens,
// encrypts the refresh token with AES-256-GCM, and stores it in Upstash Redis.

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";

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

function decodeIdToken(idToken) {
  try {
    const payload = idToken.split(".")[1];
    const json = Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString();
    return JSON.parse(json);
  } catch {
    return {};
  }
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

async function encrypt(plaintext, keyB64) {
  const raw = Uint8Array.from(atob(keyB64), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(plaintext);
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data));
  const out = new Uint8Array(iv.length + ciphertext.length);
  out.set(iv, 0);
  out.set(ciphertext, iv.length);
  let binary = "";
  for (const byte of out) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export default async function handler(req, res) {
  const origin =
    process.env.NODE_ENV === "production"
      ? `https://${req.headers.host}`
      : `http://${req.headers.host}`;

  const code = req.query.code;
  const state = req.query.state;
  const cookies = parseCookies(req);

  if (!code || !state || state !== cookies["gn_oauth_state"]) {
    return res.redirect(302, `${origin}/ads/?auth=invalid_state`);
  }

  const tokenResponse = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: env("GOOGLE_CLIENT_ID"),
      client_secret: env("GOOGLE_CLIENT_SECRET"),
      redirect_uri: `${origin}/api/auth/google/callback`,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenResponse.ok) {
    return res.redirect(302, `${origin}/ads/?auth=failed`);
  }

  const tokens = await tokenResponse.json();
  const claims = decodeIdToken(tokens.id_token || "");
  const sessionId = crypto.randomUUID();
  const now = Date.now();

  await kvCommand([
    "set",
    `session:${sessionId}`,
    JSON.stringify({ sub: claims.sub, createdAt: now }),
  ]);

  await kvCommand([
    "set",
    `user:${claims.sub}`,
    JSON.stringify({
      email: claims.email || null,
      name: claims.name || null,
      scope: tokens.scope || null,
      encryptedRefreshToken: tokens.refresh_token
        ? await encrypt(tokens.refresh_token, env("ENCRYPTION_KEY"))
        : null,
      updatedAt: now,
    }),
  ]);

  res.setHeader("Set-Cookie", [
    "gn_oauth_state=; Path=/api/auth/google/callback; HttpOnly; Secure; Max-Age=0",
    `gn_session=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
  ]);
  return res.redirect(302, `${origin}/ads/?auth=success`);
}
