import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "./i18n/config";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
}

export const config = {
  matcher: ["/"],
};
