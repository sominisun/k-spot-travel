"use client";

// localStorage-backed client state: wishlist hearts, pilgrimage stamps,
// and the Route Pass flag. No accounts needed — by design (1-person ops).

const WISH_KEY = "ks2-wishlist";
const STAMP_KEY = "ks2-stamps";
const PASS_KEY = "ks2-pass";
export const WISH_EVENT = "ks2:wish";
export const STAMP_EVENT = "ks2:stamp";

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
  } catch {
    return [];
  }
}

function write(key: string, value: string[], event: string) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(event));
}

// --- wishlist ---------------------------------------------------------------

export function wishList(): string[] {
  return read(WISH_KEY);
}
export function wishCount(): number {
  return read(WISH_KEY).length;
}
export function isWished(id: string): boolean {
  return read(WISH_KEY).includes(id);
}
export function toggleWish(id: string): boolean {
  const cur = read(WISH_KEY);
  const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
  write(WISH_KEY, next, WISH_EVENT);
  return next.includes(id);
}

// --- pilgrimage stamps --------------------------------------------------------

export function stampList(): string[] {
  return read(STAMP_KEY);
}
export function isStamped(spotSlug: string): boolean {
  return read(STAMP_KEY).includes(spotSlug);
}
export function toggleStamp(spotSlug: string): boolean {
  const cur = read(STAMP_KEY);
  const next = cur.includes(spotSlug)
    ? cur.filter((x) => x !== spotSlug)
    : [...cur, spotSlug];
  write(STAMP_KEY, next, STAMP_EVENT);
  return next.includes(spotSlug);
}

// --- route pass -----------------------------------------------------------------

export function hasPass(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(PASS_KEY) === "1";
}
export function grantPass() {
  localStorage.setItem(PASS_KEY, "1");
}
