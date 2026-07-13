import crypto from "node:crypto";

// Stateless Route Pass tokens — no database required (1-person ops).
// The server signs "exp.nonce" with PASS_SECRET; only a valid signature
// unlocks the paid PDF endpoint. Client stores the opaque token; it cannot
// forge one without the secret.

const SECRET = process.env.PASS_SECRET ?? "";
const TTL_DAYS = 400; // pass is effectively permanent for the buyer

function b64url(buf: Buffer): string {
  return buf.toString("base64url");
}

/** Whether the paid gate is enforced. Off (demo) until both keys exist. */
export function paymentsConfigured(): boolean {
  return Boolean(SECRET && process.env.LEMONSQUEEZY_API_KEY);
}

/** Issue a signed pass token. Returns "" if no secret is configured. */
export function issuePassToken(): string {
  if (!SECRET) return "";
  const exp = Math.floor(Date.now() / 1000) + TTL_DAYS * 86400;
  const nonce = crypto.randomBytes(6).toString("hex");
  const body = `${exp}.${nonce}`;
  const sig = crypto.createHmac("sha256", SECRET).update(body).digest();
  return `${body}.${b64url(sig)}`;
}

/** Verify a pass token: valid signature and not expired. */
export function verifyPassToken(token: string | null | undefined): boolean {
  if (!SECRET || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [expStr, nonce, sig] = parts;
  const body = `${expStr}.${nonce}`;
  const expected = b64url(
    crypto.createHmac("sha256", SECRET).update(body).digest(),
  );
  // constant-time compare
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  const exp = Number(expStr);
  return Number.isFinite(exp) && exp > Math.floor(Date.now() / 1000);
}

/**
 * Validate a Lemon Squeezy license key via their API. Returns true only if
 * the key is genuine and active. Requires LEMONSQUEEZY_API_KEY.
 * Optionally scope to a specific store/product via env.
 */
export async function validateLicenseKey(licenseKey: string): Promise<boolean> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  if (!apiKey || !licenseKey) return false;
  try {
    const res = await fetch("https://api.lemonsqueezy.com/v1/licenses/validate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${apiKey}`,
      },
      body: new URLSearchParams({ license_key: licenseKey.trim() }),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as {
      valid?: boolean;
      license_key?: { status?: string };
    };
    return Boolean(data.valid && data.license_key?.status !== "disabled");
  } catch {
    return false;
  }
}
