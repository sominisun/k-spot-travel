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
  return Boolean(SECRET && process.env.CREEM_API_KEY);
}

export type PassTier = "pass" | "insider";

/** Issue a signed pass token. Returns "" if no secret is configured. */
export function issuePassToken(tier: PassTier = "pass"): string {
  if (!SECRET) return "";
  const exp = Math.floor(Date.now() / 1000) + TTL_DAYS * 86400;
  const nonce = crypto.randomBytes(6).toString("hex");
  const body = `${exp}.${tier}.${nonce}`;
  const sig = crypto.createHmac("sha256", SECRET).update(body).digest();
  return `${body}.${b64url(sig)}`;
}

/** Verify a pass token: valid signature and not expired. */
export function verifyPassToken(token: string | null | undefined): boolean {
  if (!SECRET || !token) return false;
  const parts = token.split(".");
  // 4 parts = exp.tier.nonce.sig; 3 parts = legacy exp.nonce.sig (tier=pass)
  if (parts.length !== 3 && parts.length !== 4) return false;
  const sig = parts[parts.length - 1];
  const body = parts.slice(0, -1).join(".");
  const expStr = parts[0];
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
 * Validate a Creem license key. Tries to activate an instance first (which
 * consumes one of the product's activation slots); if activation is refused
 * (e.g. the limit is reached but the license itself is fine), falls back to
 * plain validation. Returns validity plus the product id, so the caller can
 * distinguish a Route Pass purchase from an Insider membership
 * (CREEM_INSIDER_PRODUCT_ID). Set CREEM_TEST_MODE=1 to hit the sandbox API.
 */
export async function validateLicenseKey(
  licenseKey: string,
): Promise<{ valid: boolean; productId?: string }> {
  const apiKey = process.env.CREEM_API_KEY;
  if (!apiKey || !licenseKey) return { valid: false };
  const base = process.env.CREEM_TEST_MODE
    ? "https://test-api.creem.io"
    : "https://api.creem.io";
  const call = (path: string, body: Record<string, string>) =>
    fetch(`${base}/v1/licenses/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify(body),
    });
  try {
    const key = licenseKey.trim();
    let res = await call("activate", { key, instance_name: "kspot-web" });
    if (!res.ok) res = await call("validate", { key });
    if (!res.ok) return { valid: false };
    const data = (await res.json()) as {
      status?: string;
      product_id?: string;
      license?: { status?: string; product_id?: string };
    };
    const status = data.status ?? data.license?.status;
    const productId = data.product_id ?? data.license?.product_id;
    return { valid: status === "active", productId };
  } catch {
    return { valid: false };
  }
}
