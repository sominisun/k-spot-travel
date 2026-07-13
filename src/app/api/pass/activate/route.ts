import { NextRequest, NextResponse } from "next/server";
import {
  issuePassToken,
  paymentsConfigured,
  validateLicenseKey,
} from "@/lib/pass-token";

export const runtime = "nodejs";

// Exchange a Lemon Squeezy license key (from the Route Pass purchase) for a
// signed pass token. No account/DB — the token itself is the proof.
export async function POST(request: NextRequest) {
  // Demo mode (no payments configured): unlock freely so the flow is testable.
  if (!paymentsConfigured()) {
    return NextResponse.json({ ok: true, token: "demo", demo: true });
  }

  let licenseKey = "";
  try {
    const body = await request.json();
    licenseKey = typeof body.licenseKey === "string" ? body.licenseKey : "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }

  const valid = await validateLicenseKey(licenseKey);
  if (!valid) {
    return NextResponse.json({ ok: false, error: "invalid-key" }, { status: 402 });
  }

  return NextResponse.json({ ok: true, token: issuePassToken() });
}
