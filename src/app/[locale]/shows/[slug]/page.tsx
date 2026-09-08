import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { l } from "@/i18n/config";
import { resolveLocale } from "@/lib/page-utils";
import { LOCALES } from "@/i18n/config";
import {
  allShows,
  geoOf,
  getShow,
  OTT_LABELS,
  restaurantsInRegion,
  routesForShow,
} from "@/lib/data";
import { lRestaurant, lRoute, lShow, lSpotsOfShow } from "@/lib/localize";
import { PARTNERS, SITE } from "@/lib/site";
import { SourcedImage } from "@/components/SourcedImage";
import { LeafletMap, type MapMarker } from "@/components/LeafletMap";
import { RestaurantCard, RouteCard, ShowCard } from "@/components/cards";
import { Icon, Pill, Rule } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE } from "@/lib/site";
import { KoreaLensPilot } from "@/components/KoreaLensPilot";
import { wlgYTJejuLens } from "@/data/korea-lens";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allShows.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getShow(slug);
  if (!source) return {};
  if (slug === wlgYTJejuLens.slug && locale === "en") {
    return {
      title: wlgYTJejuLens.seo.title,
      description: wlgYTJejuLens.seo.description,
      keywords: wlgYTJejuLens.seo.keywords,
      alternates: {
        canonical: `/en/shows/${wlgYTJejuLens.slug}`,
      },
    };
  }
  const show = lShow(source, locale);
  return {
    title: `${show.title} — ${dict.shows.filmingSpots}`,
    description: show.whyVisit,
  };
}

export default async function ShowPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getShow(slug);
  if (!source) notFound();

  if (slug === wlgYTJejuLens.slug && locale === "en") {
    return (
      <>
        <KoreaLensPilot locale={locale} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: wlgYTJejuLens.title,
            description: wlgYTJejuLens.seo.description,
            dateModified: wlgYTJejuLens.lastEditorialReview,
            about: {
              "@type": "TVSeries",
              name: "When Life Gives You Tangerines",
              alternateName: wlgYTJejuLens.originalTitle,
            },
          }}
        />
      </>
    );
  }
  const show = lShow(source, locale);

  const spots = lSpotsOfShow(source, locale);
  const routes = routesForShow(source.slug).map((r) => lRoute(r, locale));
  const regions = [...new Set(spots.map(({ spot }) => spot.region))];
  const food = regions
    .flatMap((r) => restaurantsInRegion(r))
    .slice(0, 3)
    .map((r) => lRestaurant(r, locale));

  // "Fans of this also watched" — shared filming spots first, then shows
  // set in the same regions (keeps readers inside the catalog).
  const spotSet = new Set(source.filmingSpots.map((f) => f.spotSlug));
  const regionSet = new Set(regions);
  const related = allShows
    .filter((s) => s.slug !== source.slug)
    .map((s) => {
      const shared = s.filmingSpots.filter((f) => spotSet.has(f.spotSlug)).length;
      const sameRegion = lSpotsOfShow(s, locale).filter(({ spot }) => regionSet.has(spot.region)).length;
      return { s, score: shared * 10 + sameRegion };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => lShow(x.s, locale));

  const markers: MapMarker[] = spots.flatMap(({ spot }) => {
    const g = geoOf(spot.slug);
    return g
      ? [{ lat: g.lat, lng: g.lng, label: spot.name, sub: spot.area, href: l(locale, `/spots/${spot.slug}`), approx: g.approx }]
      : [];
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-xs font-semibold text-ink-faint">
        <Link href={l(locale, "/shows")} className="hover:text-indigo">
          {dict.nav.shows}
        </Link>{" "}
        / {show.title}
      </nav>

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {show.status === "trending" ? (
            <Pill tone="red">{dict.common.trending}</Pill>
          ) : (
            <Pill tone="celadon">{dict.common.evergreen}</Pill>
          )}
          {show.ott.map((o) => (
            <Pill key={o}>{OTT_LABELS[o]}</Pill>
          ))}
          {show.genres.map((g) => (
            <Pill key={g}>{g}</Pill>
          ))}
          <Pill>{show.years}</Pill>
        </div>
        <h1 className="mt-3 font-display text-3xl leading-tight font-bold sm:text-4xl">
          {show.title}{" "}
          <span className="text-xl font-semibold text-ink-faint">{show.koreanTitle}</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{show.synopsis}</p>
      </header>

      <div className="mt-7">
        <SourcedImage
          slug={show.filmingSpots[0]?.spotSlug ?? show.slug}
          alt={`${show.title} filming location`}
          ratio="aspect-[2/1]"
          priority
          fallbackTitle={show.title}
        />
      </div>

      <section className="mt-8 rounded-[4px] border-l-2 border-indigo bg-indigo-soft/40 px-5 py-4">
        <p className="text-[11px] font-bold tracking-[0.18em] text-indigo uppercase">
          {dict.shows.whyVisit}
        </p>
        <p className="mt-1.5 leading-relaxed text-ink-soft">{show.whyVisit}</p>
      </section>

      {/* Filming spots */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">{dict.shows.filmingSpots}</h2>
        <div className="mt-5 space-y-6">
          {spots.map(({ spot, sceneNote }, i) => (
            <div
              key={spot.slug}
              className="grid gap-5 border-b border-line pb-6 last:border-0 sm:grid-cols-[2fr_3fr]"
            >
              <SourcedImage
                slug={spot.slug}
                alt={spot.name}
                ratio="aspect-[4/3]"
                sizes="(min-width:640px) 33vw, 100vw"
                fallbackTitle={spot.name}
                fallbackNote={dict.common.noPhotoYet}
              />
              <div>
                <p className="text-xs font-bold text-ink-faint">
                  {String(i + 1).padStart(2, "0")} · {spot.area}
                </p>
                <Link
                  href={l(locale, `/spots/${spot.slug}`)}
                  className="mt-0.5 block font-display text-xl font-bold hover:text-indigo"
                >
                  {spot.name} →
                </Link>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft italic">
                  “{sceneNote}”
                </p>
                <p className="mt-2 flex items-start gap-1.5 text-sm text-ink-soft">
                  <Icon name="train" size={15} className="mt-0.5 shrink-0 text-ink-faint" />
                  {spot.howToGet}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {markers.length > 0 ? (
        <section className="mt-8">
          <LeafletMap markers={markers} height="h-[340px]" />
        </section>
      ) : null}

      <AdSlot slot={ADSENSE.slotList} className="mt-8" />

      {/* Tour CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[8px] border border-line bg-band p-5">
        <p className="text-sm font-semibold text-ink-soft">{dict.shows.tourCta}</p>
        <a
          href={PARTNERS.klookSearch(`${show.title} tour`)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1.5 rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep"
        >
          Klook <Icon name="external" size={14} />
        </a>
      </section>

      {routes.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{dict.common.relatedRoutes}</h2>
          <div className="mt-5 grid gap-x-6 gap-y-8 sm:grid-cols-2">
            {routes.slice(0, 2).map((r) => (
              <RouteCard key={r.slug} route={r} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      ) : null}

      {food.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{dict.shows.relatedFood}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {food.map((r) => (
              <RestaurantCard key={r.slug} r={r} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold">{dict.shows.alsoWatched}</h2>
          <div className="mt-5 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ShowCard key={s.slug} show={s} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      ) : null}

      <Rule className="mt-10" />
      <p className="mt-4 text-xs text-ink-faint">
        {dict.common.lastVerified}: {SITE.lastVerified} ·{" "}
        <Link href={l(locale, "/contact")} className="underline underline-offset-2 hover:text-indigo">
          {dict.common.reportInfo}
        </Link>
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: show.title,
          alternateName: show.koreanTitle,
          description: show.synopsis,
          about: "Filming locations travel guide",
        }}
      />
    </article>
  );
}
