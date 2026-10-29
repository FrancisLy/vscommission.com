// GET /api/auth/google
// Starts the Google OAuth flow: redirects the user to Google's consent screen.
// Required environment variables: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET (used in callback).
// Requested scopes: Google Ads (read via the adwords scope) + email/profile for sign-in.

const env = (name) => process.env[name] ?? process.env[name.toLowerCase()];

export default function handler(req, res) {
  const clientId = env("GOOGLE_CLIENT_ID");
  if (!clientId) {
    return res.status(503).send("OAuth is not configured. Set GOOGLE_CLIENT_ID.");
  }

  const origin =
    process.env.NODE_ENV === "production"
      ? `https://${req.headers.host}`
      : `http://${req.headers.host}`;

  const state = crypto.randomUUID().replace(/-/g, "");

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/auth/google/callback`,
    response_type: "code",
    scope: "openid email profile https://www.googleapis.com/auth/adwords",
    access_type: "offline",
    include_granted_scopes: "true",
    prompt: "consent",
    state,
  });

  res.setHeader(
    "Set-Cookie",
    `gn_oauth_state=${state}; Path=/api/auth/google/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );
  return res.redirect(302, `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
}
