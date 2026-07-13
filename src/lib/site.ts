export const SITE = {
  name: "K-SPOT Travel",
  slogan: "Your K-content is your Korea travel map",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://k-spot.travel",
  contactEmail: "hello@k-spot.travel",
  lastVerified: "2026-07",
} as const;

export const COMMUNITY = {
  discordInvite: process.env.NEXT_PUBLIC_DISCORD_INVITE ?? "",
} as const;

export const ADSENSE = {
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
  slotArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "",
  slotList: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LIST ?? "",
} as const;

/** Monetization ladder — checkout links come alive via env; demo mode otherwise. */
export const PAYMENTS = {
  passCheckoutUrl: process.env.NEXT_PUBLIC_LS_PASS_URL ?? "",
  insiderCheckoutUrl: process.env.NEXT_PUBLIC_LS_INSIDER_URL ?? "",
  get demoMode() {
    return !this.passCheckoutUrl;
  },
} as const;

/**
 * Affiliate tracking. Each program's tracking query string is supplied via env
 * (e.g. NEXT_PUBLIC_AFF_KLOOK="aid=12345&aff_adid=678"). Until a program is
 * approved and its param set, links stay plain — identical to the old behavior.
 * Commission ranges: Klook 2–20% (eSIM highest), Olive Young ≤13%,
 * StyleKorean 12%, YesStyle 10%.
 */
const AFF = {
  klook: process.env.NEXT_PUBLIC_AFF_KLOOK ?? "",
  trazy: process.env.NEXT_PUBLIC_AFF_TRAZY ?? "",
  oliveYoung: process.env.NEXT_PUBLIC_AFF_OLIVEYOUNG ?? "",
  styleKorean: process.env.NEXT_PUBLIC_AFF_STYLEKOREAN ?? "",
  yesStyle: process.env.NEXT_PUBLIC_AFF_YESSTYLE ?? "",
} as const;

/** Append an affiliate tracking query string (from env) if configured. */
function withAff(url: string, aff: string): string {
  if (!aff) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${aff}`;
}

export const PARTNERS = {
  klookSearch: (q: string) =>
    withAff(
      `https://www.klook.com/en-US/search/result/?query=${encodeURIComponent(q)}`,
      AFF.klook,
    ),
  /** Klook eSIM category — the highest-commission (up to 20%) placement. */
  klookEsim: () =>
    withAff("https://www.klook.com/en-US/wifi-sim/", AFF.klook),
  trazySearch: (q: string) =>
    withAff(`https://www.trazy.com/search?q=${encodeURIComponent(q)}`, AFF.trazy),
  oliveYoungGlobal: withAff("https://global.oliveyoung.com/", AFF.oliveYoung),
  styleKorean: withAff("https://www.stylekorean.com/", AFF.styleKorean),
  yesStyle: withAff("https://www.yesstyle.com/", AFF.yesStyle),
  // Not affiliate programs — a booking tool and two official tourism bodies.
  catchTable: "https://app.catchtable.co.kr/ct/en",
  visitKorea: "https://english.visitkorea.or.kr/",
  visitSeoul: "https://english.visitseoul.net/",
} as const;

export function googleMapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function naverMapUrl(query: string) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}
