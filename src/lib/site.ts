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
 * Outbound partners. Replace with tracked affiliate deep links as programs are
 * approved (Klook 2–20%, Olive Young ≤13%, StyleKorean 12%, YesStyle 10%).
 */
export const PARTNERS = {
  klookSearch: (q: string) =>
    `https://www.klook.com/en-US/search/result/?query=${encodeURIComponent(q)}`,
  trazySearch: (q: string) =>
    `https://www.trazy.com/search?q=${encodeURIComponent(q)}`,
  oliveYoungGlobal: "https://global.oliveyoung.com/",
  styleKorean: "https://www.stylekorean.com/",
  yesStyle: "https://www.yesstyle.com/",
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
