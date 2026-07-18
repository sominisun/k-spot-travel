import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";
import { ogCard, OG_SIZE } from "@/lib/og-card";

// Site-wide fallback share card — any page without its own OG image
// inherits this branded card (localized headline).

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "K-SPOT Travel";

export default async function OgImage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDict(locale);
  return ogCard({
    kicker: "SET-JETTING",
    title: dict.home.heroTitle,
    sub: dict.home.heroSub,
  });
}
