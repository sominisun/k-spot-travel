import Link from "next/link";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { OTT_LABELS } from "@/lib/data";
import { categoryLabel, regionLabel, typeLabel } from "@/lib/localize";
import type { Article, Restaurant, Show, Spot, TravelRoute } from "@/lib/types";
import { SourcedImage } from "./SourcedImage";
import { Icon, Pill } from "./ui";
import { WishHeart } from "./WishHeart";

export function ShowCard({
  show,
  locale,
  dict,
  heroSpot,
}: {
  show: Show;
  locale: Locale;
  dict: Dict;
  heroSpot?: string;
}) {
  return (
    <article className="group relative">
      <Link href={l(locale, `/shows/${show.slug}`)} className="block">
        <SourcedImage
          slug={heroSpot ?? show.filmingSpots[0]?.spotSlug ?? show.slug}
          alt={show.title}
          ratio="aspect-[3/2]"
          fallbackTitle={show.title}
          captionLink={false}
        />
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {show.status === "trending" ? (
            <Pill tone="red">{dict.common.trending}</Pill>
          ) : (
            <Pill tone="celadon">{dict.common.evergreen}</Pill>
          )}
          {show.ott.slice(0, 2).map((o) => (
            <Pill key={o}>{OTT_LABELS[o]}</Pill>
          ))}
        </div>
        <h3 className="mt-1.5 font-display text-lg leading-snug font-bold group-hover:text-indigo">
          {show.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{show.whyVisit}</p>
        <p className="mt-1.5 text-xs font-semibold text-ink-faint">
          {show.filmingSpots.length} {dict.shows.filmingSpots.toLowerCase()} · {show.years}
        </p>
      </Link>
    </article>
  );
}

export function SpotCard({
  spot,
  locale,
  dict,
  showCount,
}: {
  spot: Spot;
  locale: Locale;
  dict: Dict;
  showCount: number;
}) {
  return (
    <article className="group relative rounded-[8px] border border-line bg-paper p-3 transition-shadow hover:shadow-md">
      <div className="absolute top-5 right-5 z-10">
        <WishHeart id={`spot:${spot.slug}`} />
      </div>
      <Link href={l(locale, `/spots/${spot.slug}`)} className="block">
        <SourcedImage
          slug={spot.slug}
          alt={spot.name}
          ratio="aspect-[16/10]"
          fallbackTitle={spot.name}
          fallbackNote={dict.common.noPhotoYet}
          captionLink={false}
        />
        <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-ink-faint">
          <Icon name="pin" size={13} />
          {regionLabel(spot.region, locale)} · {typeLabel(spot.type, locale)}
        </div>
        <h3 className="mt-1 font-display text-base leading-snug font-bold group-hover:text-indigo">
          {spot.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{spot.description}</p>
        <p className="mt-1.5 text-xs font-semibold text-indigo">
          {dict.common.appearsIn} · {showCount}
        </p>
      </Link>
    </article>
  );
}

export function RouteCard({
  route,
  locale,
  dict,
}: {
  route: TravelRoute;
  locale: Locale;
  dict: Dict;
}) {
  const heroSpot = route.dayPlans[0]?.stops.find((s) => s.spotSlug)?.spotSlug;
  return (
    <article className="group relative">
      <div className="absolute top-2 right-2 z-10">
        <WishHeart id={`route:${route.slug}`} />
      </div>
      <Link href={l(locale, `/routes/${route.slug}`)} className="block">
        <SourcedImage
          slug={heroSpot ?? route.slug}
          alt={route.title}
          ratio="aspect-[3/2]"
          fallbackTitle={route.title}
          captionLink={false}
        />
        <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-ink-faint">
          <Pill tone="indigo">
            {route.days} {route.days === 1 ? dict.common.day : dict.common.days}
          </Pill>
          <span>{route.city}</span>
          <span>
            ${route.budgetUSD[0]}–{route.budgetUSD[1]}
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-lg leading-snug font-bold group-hover:text-indigo">
          {route.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{route.tagline}</p>
      </Link>
    </article>
  );
}

export function RestaurantCard({
  r,
  locale,
  dict,
}: {
  r: Restaurant;
  locale: Locale;
  dict: Dict;
}) {
  return (
    <article className="group relative rounded-[8px] border border-line p-4 transition-shadow hover:shadow-md">
      <div className="absolute top-3 right-3">
        <WishHeart id={`food:${r.slug}`} />
      </div>
      <Link href={l(locale, `/food/${r.slug}`)} className="block">
        <div className="flex items-center gap-1.5">
          {r.sourceShow ? <Pill tone="indigo">{r.sourceShow}</Pill> : null}
          <Pill>{r.priceRange}</Pill>
        </div>
        <h3 className="mt-2 font-display text-lg leading-snug font-bold group-hover:text-indigo">
          {r.name}
        </h3>
        {r.chef ? (
          <p className="text-xs font-semibold text-ink-faint">{r.chef}</p>
        ) : null}
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{r.description}</p>
        <p className="mt-2 text-xs text-ink-faint">
          {r.cuisine} · {regionLabel(r.region, locale)}
        </p>
        <p className="mt-1 line-clamp-1 text-xs font-semibold text-celadon">
          {dict.food.booking}: {r.bookingMethod}
        </p>
      </Link>
    </article>
  );
}

export function ArticleCard({
  article,
  locale,
  dict,
}: {
  article: Article;
  locale: Locale;
  dict: Dict;
}) {
  return (
    <article className="group border-t border-line pt-4">
      <Link href={l(locale, `/guide/${article.slug}`)} className="block">
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-ink-faint uppercase">
          <span className="text-indigo">{categoryLabel(article.category, locale)}</span>
          <span>
            {article.readMinutes} {dict.common.minRead}
          </span>
        </div>
        <h3 className="mt-1.5 font-display text-lg leading-snug font-bold group-hover:text-indigo">
          {article.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">{article.excerpt}</p>
      </Link>
    </article>
  );
}
