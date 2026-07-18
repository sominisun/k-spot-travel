import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { l, LOCALES } from "@/i18n/config";
import { resolveLocale } from "@/lib/page-utils";
import { allRoutes, geoOf, getRoute, getShow, getSpot } from "@/lib/data";
import { lRoute, lShow, lSpot } from "@/lib/localize";
import { googleMapsUrl, SITE } from "@/lib/site";
import { LeafletMap, type MapMarker } from "@/components/LeafletMap";
import { SourcedImage } from "@/components/SourcedImage";
import { Icon, Pill, Rule } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allRoutes.map((r) => ({ locale, slug: r.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const { slug } = await params;
  const source = getRoute(slug);
  if (!source) return {};
  const route = lRoute(source, locale);
  return { title: route.title, description: route.tagline };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const { slug } = await params;
  const source = getRoute(slug);
  if (!source) notFound();
  const route = lRoute(source, locale);

  const heroSpot = route.dayPlans[0]?.stops.find((s) => s.spotSlug)?.spotSlug;
  const shows = route.showSlugs
    .map(getShow)
    .filter(Boolean)
    .map((s) => lShow(s!, locale));

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-xs font-semibold text-ink-faint">
        <Link href={l(locale, "/routes")} className="hover:text-indigo">
          {dict.nav.routes}
        </Link>{" "}
        / {route.title}
      </nav>

      <header className="mt-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <Pill tone="indigo">
            {route.days} {dict.common.days}
          </Pill>
          <Pill>{route.city}</Pill>
          <Pill>
            {dict.routes.budget} ${route.budgetUSD[0]}–{route.budgetUSD[1]}
          </Pill>
        </div>
        <h1 className="mt-3 font-display text-3xl leading-tight font-bold sm:text-4xl">
          {route.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">{route.tagline}</p>
        <p className="mt-1 text-xs text-ink-faint">{dict.routes.perPerson}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {route.bestFor.map((b) => (
            <Pill key={b} tone="celadon">
              {b}
            </Pill>
          ))}
        </div>
      </header>

      {heroSpot ? (
        <div className="mt-6">
          <SourcedImage
            slug={heroSpot}
            alt={route.title}
            ratio="aspect-[2/1]"
            priority
            fallbackTitle={route.title}
          />
        </div>
      ) : null}

      {/* Day-by-day timeline */}
      <section className="mt-9 space-y-8">
        {route.dayPlans.map((day) => {
          const dayMarkers: MapMarker[] = [];
          let n = 0;
          for (const stop of day.stops) {
            if (!stop.spotSlug) continue;
            const g = geoOf(stop.spotSlug);
            const raw = getSpot(stop.spotSlug);
            const spot = raw ? lSpot(raw, locale) : undefined;
            if (g && spot) {
              n += 1;
              dayMarkers.push({
                lat: g.lat,
                lng: g.lng,
                label: spot.name,
                sub: stop.time,
                href: l(locale, `/spots/${spot.slug}`),
                approx: g.approx,
                num: n,
              });
            }
          }
          return (
            <div key={day.day}>
              <h2 className="flex items-baseline gap-3 font-display text-2xl font-bold">
                <span className="text-indigo">
                  {dict.routes.dayPlan} {day.day}
                </span>
                <span className="text-base font-semibold text-ink-soft">{day.theme}</span>
              </h2>
              <ol className="mt-4 space-y-4 border-l border-line pl-5">
                {day.stops.map((stop, i) => {
                  const raw = stop.spotSlug ? getSpot(stop.spotSlug) : undefined;
                  const spot = raw ? lSpot(raw, locale) : undefined;
                  return (
                    <li key={i} className="relative">
                      <span className="absolute top-1.5 -left-[26px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-indigo" />
                      <p className="text-xs font-bold tracking-wide text-ink-faint uppercase">
                        {stop.time}
                      </p>
                      {spot ? (
                        <Link
                          href={l(locale, `/spots/${spot.slug}`)}
                          className="font-bold hover:text-indigo"
                        >
                          {spot.name} →
                        </Link>
                      ) : (
                        <p className="font-bold">{stop.title}</p>
                      )}
                      <p className="text-sm text-ink-soft">{stop.note}</p>
                    </li>
                  );
                })}
              </ol>
              {dayMarkers.length > 1 ? (
                <div className="mt-4">
                  <LeafletMap markers={dayMarkers} polyline height="h-[260px]" />
                  <a
                    href={googleMapsUrl(
                      dayMarkers.map((m) => m.label).join(" to "),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-indigo hover:underline"
                  >
                    {dict.routes.openDayInMaps} <Icon name="external" size={12} />
                  </a>
                </div>
              ) : null}
            </div>
          );
        })}
      </section>

      {/* Tips */}
      <section className="mt-10 rounded-[8px] border border-line bg-band p-5">
        <h2 className="font-display text-lg font-bold">{dict.routes.routeTips}</h2>
        <ul className="mt-3 space-y-2">
          {route.tips.map((tip) => (
            <li key={tip} className="flex gap-2 text-sm text-ink-soft">
              <Icon name="check" size={15} className="mt-0.5 shrink-0 text-celadon" />
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {shows.length > 0 ? (
        <section className="mt-8">
          <p className="text-xs font-bold tracking-[0.18em] text-ink-faint uppercase">
            {dict.common.appearsIn}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {shows.map((s) => (
              <Link
                key={s.slug}
                href={l(locale, `/shows/${s.slug}`)}
                className="rounded-[8px] border border-line px-3 py-1.5 text-[13px] font-bold text-ink-soft hover:border-indigo hover:text-indigo"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 rounded-[8px] bg-indigo p-6 text-center">
        <p className="font-display text-xl font-bold text-white">
          {dict.planner.title}
        </p>
        <p className="mx-auto mt-1 max-w-xl text-sm text-white/80">{dict.planner.sub}</p>
        <Link
          href={l(locale, "/planner")}
          className="mt-4 inline-block rounded-[8px] bg-white px-5 py-2.5 text-sm font-bold text-indigo hover:bg-indigo-soft"
        >
          {dict.nav.planner} →
        </Link>
      </div>

      <Rule className="mt-10" />
      <p className="mt-4 text-xs text-ink-faint">
        {dict.common.lastVerified}: {SITE.lastVerified}
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Trip",
          name: route.title,
          description: route.tagline,
          itinerary: route.dayPlans.map((d) => ({
            "@type": "ItemList",
            name: `Day ${d.day}: ${d.theme}`,
          })),
        }}
      />
    </article>
  );
}
