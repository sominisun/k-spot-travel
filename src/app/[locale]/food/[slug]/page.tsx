import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { l, LOCALES } from "@/i18n/config";
import { resolveLocale } from "@/lib/page-utils";
import { allRestaurants, getRestaurant } from "@/lib/data";
import { lRestaurant, regionLabel } from "@/lib/localize";
import { googleMapsUrl, naverMapUrl, SITE } from "@/lib/site";
import { FactRow, Icon, Pill, Rule } from "@/components/ui";
import { WishHeart } from "@/components/WishHeart";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allRestaurants.map((r) => ({ locale, slug: r.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getRestaurant(slug);
  if (!source) return {};
  const r = lRestaurant(source, locale);
  return { title: `${r.name} — ${dict.food.booking}`, description: r.description };
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getRestaurant(slug);
  if (!source) notFound();
  const r = lRestaurant(source, locale);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-xs font-semibold text-ink-faint">
        <Link href={l(locale, "/food")} className="hover:text-indigo">
          {dict.nav.food}
        </Link>{" "}
        / {r.name}
      </nav>

      <header className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-1.5">
            {r.sourceShow ? <Pill tone="indigo">{r.sourceShow}</Pill> : null}
            <Pill>{r.cuisine}</Pill>
            <Pill>{r.priceRange}</Pill>
          </div>
          <h1 className="mt-2 font-display text-3xl leading-tight font-bold">
            {r.name}
            {r.koreanName ? (
              <span className="ml-2 text-lg font-semibold text-ink-faint">
                {r.koreanName}
              </span>
            ) : null}
          </h1>
          {r.chef ? (
            <p className="mt-1 text-sm font-semibold text-ink-faint">{r.chef}</p>
          ) : null}
        </div>
        <WishHeart id={`food:${r.slug}`} size={18} />
      </header>

      <p className="mt-5 text-lg leading-relaxed text-ink-soft">{r.description}</p>

      {/* Booking box — the point of this page */}
      <section className="mt-7 rounded-[8px] border-2 border-indigo/20 bg-indigo-soft/40 p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-indigo">
          <Icon name="calendar" size={18} />
          {dict.food.booking}
        </h2>
        <p className="mt-2 leading-relaxed text-ink-soft">{r.bookingMethod}</p>
        {r.bookingUrl ? (
          <a
            href={r.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep"
          >
            {dict.food.reserve} <Icon name="external" size={14} />
          </a>
        ) : null}
      </section>

      <section className="mt-7 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-bold">{dict.food.signature}</h2>
          <ul className="mt-2 space-y-1.5">
            {r.signature.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {s}
              </li>
            ))}
          </ul>
          <h2 className="mt-5 font-display text-lg font-bold">{dict.common.tips}</h2>
          <ul className="mt-2 space-y-1.5">
            {r.tips.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <dl>
            <FactRow label={dict.common.address}>{r.address}</FactRow>
            <FactRow label="Area">
              {regionLabel(r.region, locale)} · {r.area}
            </FactRow>
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={googleMapsUrl(r.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:border-indigo hover:text-indigo"
            >
              {dict.common.openInGoogleMaps} <Icon name="external" size={13} />
            </a>
            <a
              href={naverMapUrl(r.koreanName ?? r.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:border-indigo hover:text-indigo"
            >
              {dict.common.openInNaverMap} <Icon name="external" size={13} />
            </a>
          </div>
        </div>
      </section>

      <Rule className="mt-10" />
      <p className="mt-4 text-xs text-ink-faint">
        {dict.common.lastVerified}: {SITE.lastVerified} ·{" "}
        <Link
          href={l(locale, "/contact")}
          className="underline underline-offset-2 hover:text-indigo"
        >
          {dict.common.reportInfo}
        </Link>
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: r.name,
          servesCuisine: r.cuisine,
          address: r.address,
          priceRange: r.priceRange,
          description: r.description,
        }}
      />
    </article>
  );
}
