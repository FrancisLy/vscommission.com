// GET /api/auth/disconnect
// Disconnects the signed-in user: revokes the refresh token at Google,
// deletes the stored user record and session from Upstash Redis.

const REVOKE_ENDPOINT = "https://oauth2.googleapis.com/revoke";

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

export default async function handler(req, res) {
  const origin =
    process.env.NODE_ENV === "production"
      ? `https://${req.headers.host}`
      : `http://${req.headers.host}`;

  const cookies = parseCookies(req);
  const sessionId = cookies["gn_session"];

  if (sessionId) {
    const sessionRaw = await kvCommand(["get", `session:${sessionId}`]);
    if (sessionRaw) {
      const { sub } = JSON.parse(sessionRaw);
      const userRaw = await kvCommand(["get", `user:${sub}`]);

      if (userRaw) {
        const user = JSON.parse(userRaw);
        if (user.encryptedRefreshToken) {
          try {
            const refreshToken = await decrypt(user.encryptedRefreshToken, env("ENCRYPTION_KEY"));
            await fetch(REVOKE_ENDPOINT, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({ token: refreshToken }),
            });
          } catch {
            // Token already expired or revoked; continue with local cleanup.
          }
        }
        await kvCommand(["del", `user:${sub}`]);
      }

      await kvCommand(["del", `session:${sessionId}`]);
    }
  }

  res.setHeader("Set-Cookie", "gn_session=; Path=/; HttpOnly; Secure; Max-Age=0");
  return res.redirect(302, `${origin}/ads/?auth=disconnected`);
}
