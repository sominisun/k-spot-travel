import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { l, LOCALES } from "@/i18n/config";
import { resolveLocale } from "@/lib/page-utils";
import {
  allSpots,
  geoOf,
  getSpot,
  restaurantsInRegion,
  routesWithSpot,
} from "@/lib/data";
import {
  lRestaurant,
  lRoute,
  lShowsAtSpot,
  lSpot,
  regionLabel,
  typeLabel,
} from "@/lib/localize";
import { googleMapsUrl, naverMapUrl, PARTNERS, SITE } from "@/lib/site";
import { sceneGuide } from "@/data/scene-guides";
import { SourcedImage } from "@/components/SourcedImage";
import { LeafletMap } from "@/components/LeafletMap";
import { StampButton } from "@/components/StampButton";
import { WishHeart } from "@/components/WishHeart";
import { FactRow, Icon, Pill, Rule, TipBox } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allSpots.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getSpot(slug);
  if (!source) return {};
  const spot = lSpot(source, locale);
  return { title: `${spot.name} — ${dict.nav.spots}`, description: spot.description };
}

export default async function SpotPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getSpot(slug);
  if (!source) notFound();
  const spot = lSpot(source, locale);

  const shows = lShowsAtSpot(spot.slug, locale);
  const routes = routesWithSpot(spot.slug).map((r) => lRoute(r, locale));
  const nearby = restaurantsInRegion(spot.region)
    .slice(0, 2)
    .map((r) => lRestaurant(r, locale));
  const g = geoOf(spot.slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-xs font-semibold text-ink-faint">
        <Link href={l(locale, "/spots")} className="hover:text-indigo">
          {dict.nav.spots}
        </Link>{" "}
        / {spot.name}
      </nav>

      <header className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Pill tone="indigo">{regionLabel(spot.region, locale)}</Pill>
            <Pill>{typeLabel(spot.type, locale)}</Pill>
          </div>
          <h1 className="mt-2 font-display text-3xl leading-tight font-bold sm:text-4xl">
            {spot.name}
            {spot.koreanName ? (
              <span className="ml-2 text-xl font-semibold text-ink-faint">
                {spot.koreanName}
              </span>
            ) : null}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <WishHeart id={`spot:${spot.slug}`} size={18} />
          <StampButton
            spotSlug={spot.slug}
            labelIdle={dict.stamps.checkIn}
            labelDone={dict.stamps.checkedIn}
          />
        </div>
      </header>

      <div className="mt-6">
        <SourcedImage
          slug={spot.slug}
          alt={spot.name}
          ratio="aspect-[2/1]"
          priority
          fallbackTitle={spot.name}
          fallbackNote={dict.common.noPhotoYet}
        />
      </div>

      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{spot.description}</p>

      {/* Appears in */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-bold">{dict.common.appearsIn}</h2>
        <div className="mt-3 space-y-3">
          {shows.map(({ show, sceneNote }) => {
            const guide = sceneGuide(show.slug, spot.slug);
            return (
              <div key={show.slug} className="rounded-[8px] border border-line p-4">
                <Link
                  href={l(locale, `/shows/${show.slug}`)}
                  className="font-display font-bold hover:text-indigo"
                >
                  {show.title} →
                </Link>
                {guide?.episode ? (
                  <span className="ml-2 rounded-[4px] border border-celadon px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-celadon uppercase">
                    {guide.episode}
                  </span>
                ) : null}
                <p className="mt-1 text-sm text-ink-soft italic">“{sceneNote}”</p>
                {guide?.shotTip ? (
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="font-bold text-indigo">{dict.common.shotTip}: </span>
                    {guide.shotTip}
                  </p>
                ) : null}
                {guide?.nowNote ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    <span className="font-bold text-celadon">{dict.common.nowNote}: </span>
                    {guide.nowNote}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      {/* Facts */}
      <section className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold">{dict.common.howToGet}</h2>
          <dl className="mt-2">
            <FactRow label={dict.common.address}>{spot.address}</FactRow>
            <FactRow label={dict.common.howToGet}>{spot.howToGet}</FactRow>
            {spot.hours ? <FactRow label={dict.common.hours}>{spot.hours}</FactRow> : null}
            {spot.admission ? (
              <FactRow label={dict.common.admission}>{spot.admission}</FactRow>
            ) : null}
          </dl>
          {source.koreanName && locale !== "ko" ? (
            <div className="mt-4 rounded-[8px] border-2 border-indigo/25 bg-band p-4">
              <p className="text-[10px] font-bold tracking-[0.18em] text-indigo uppercase">
                {dict.common.taxiCard}
              </p>
              <p className="mt-1.5 font-display text-2xl font-bold">{source.koreanName}</p>
              <p className="text-sm text-ink-soft">여기로 가 주세요</p>
              <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">{dict.common.taxiHint}</p>
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={googleMapsUrl(spot.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:border-indigo hover:text-indigo"
            >
              {dict.common.openInGoogleMaps} <Icon name="external" size={13} />
            </a>
            <a
              href={naverMapUrl(spot.koreanName ?? spot.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-2 text-[13px] font-bold text-ink-soft hover:border-indigo hover:text-indigo"
            >
              {dict.common.openInNaverMap} <Icon name="external" size={13} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold">{dict.common.tips}</h2>
          <ul className="mt-2 space-y-2">
            {spot.tips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {g ? (
        <section className="mt-8">
          <LeafletMap
            markers={[
              { lat: g.lat, lng: g.lng, label: spot.name, sub: spot.area, approx: g.approx },
            ]}
            height="h-[300px]"
          />
          {g.approx ? (
            <p className="mt-1.5 text-[11px] text-ink-faint">≈ {dict.common.approxLocation}</p>
          ) : null}
        </section>
      ) : null}

      {/* Guided tour partner CTA */}
      <div className="mt-8">
        <TipBox label={dict.shows.tourCta}>
          <a
            href={PARTNERS.klookSearch(spot.name)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-bold text-indigo underline underline-offset-2"
          >
            Klook
          </a>
          {" · "}
          <a
            href={PARTNERS.trazySearch(spot.name)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-bold text-indigo underline underline-offset-2"
          >
            Trazy
          </a>
        </TipBox>
      </div>

      {nearby.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-xl font-bold">{dict.common.nearbyFood}</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {nearby.map((r) => (
              <Link
                key={r.slug}
                href={l(locale, `/food/${r.slug}`)}
                className="rounded-[8px] border border-line p-4 hover:border-indigo"
              >
                <p className="font-display font-bold">{r.name}</p>
                <p className="mt-0.5 text-xs text-ink-faint">
                  {r.cuisine} · {r.priceRange}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {routes.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-xl font-bold">{dict.common.relatedRoutes}</h2>
          <ul className="mt-3 space-y-2">
            {routes.map((r) => (
              <li key={r.slug}>
                <Link
                  href={l(locale, `/routes/${r.slug}`)}
                  className="text-sm font-bold text-indigo hover:underline"
                >
                  {r.title} ({r.days} {dict.common.days}) →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

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
          "@type": "TouristAttraction",
          name: spot.name,
          description: spot.description,
          address: spot.address,
          ...(g ? { geo: { "@type": "GeoCoordinates", latitude: g.lat, longitude: g.lng } } : {}),
        }}
      />
    </article>
  );
}
