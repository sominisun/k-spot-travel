export const LOCALES = ["en", "ko", "ja", "zh", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  zh: "中文",
  es: "Español",
};

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

/** Locale-prefixed path helper — every internal link goes through this. */
export function l(locale: Locale, path: string): string {
  return `/${locale}${path === "/" ? "" : path}` || `/${locale}`;
}
