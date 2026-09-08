import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dict";
import { FONT_VARS, localeClass } from "@/i18n/fonts";
import { ADSENSE, SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatDock } from "@/components/ChatDock";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsBridge } from "@/components/AnalyticsBridge";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const dict = getDict(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.siteTitle,
      template: `%s · ${SITE.name}`,
    },
    description: dict.meta.siteDesc,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((loc) => [loc, `/${loc}`])),
    },
    openGraph: {
      siteName: SITE.name,
      title: dict.meta.siteTitle,
      description: dict.meta.siteDesc,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDict(locale);

  return (
    <html lang={locale} className={`${FONT_VARS} ${localeClass(locale)}`}>
      <body>
        {ADSENSE.client ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE.client}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <Header locale={locale} dict={dict.nav} />
        <main className="min-h-[70vh]">{children}</main>
        <Footer locale={locale} dict={dict} />
        <ChatDock locale={locale} dict={dict.chat} />
        <AnalyticsBridge />
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
