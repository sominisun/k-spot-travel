import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDict, type Dict } from "@/i18n/dict";

/** Await + validate the locale param; 404s on junk. */
export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<{ locale: Locale; dict: Dict }> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, dict: getDict(locale) };
}

export function localeParams() {
  return LOCALES.map((locale) => ({ locale }));
}
