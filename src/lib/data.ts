// ---------------------------------------------------------------------------
// Data access layer — pages import ONLY from here (swap point for a future DB).
// ---------------------------------------------------------------------------

import type {
  Article,
  BeautyGuide,
  Restaurant,
  Show,
  Spot,
  TravelRoute,
} from "./types";

import * as classics from "../data/shows-classics";
import * as recent from "../data/shows-recent";
import * as variety from "../data/shows-variety";
import * as expansion from "../data/shows-expansion";
import { restaurants as restaurantData } from "../data/restaurants";
import { routes as routeData } from "../data/routes";
import { beautyGuides as beautyData } from "../data/beauty";
import { articles as practicalArticles } from "../data/articles-practical";
import { articles as cultureArticles } from "../data/articles-culture";
import { IMAGES, type SpotImage } from "../data/images";
import { GEO } from "../data/geo";

// --- shows -------------------------------------------------------------------

const allShowsRaw: Show[] = [
  ...recent.shows,
  ...expansion.shows,
  ...classics.shows,
  ...variety.shows,
];

export const allShows: Show[] = [...allShowsRaw].sort(
  (a, b) => b.popularity - a.popularity,
);

export function getShow(slug: string): Show | undefined {
  return allShowsRaw.find((s) => s.slug === slug);
}

export const trendingShows = allShows.filter((s) => s.status === "trending");
export const evergreenShows = allShows.filter((s) => s.status === "evergreen");

// --- spots (merged across files by slug; scene notes attach per show) ---------

const spotMap = new Map<string, Spot>();
for (const spot of [
  ...classics.spots,
  ...recent.spots,
  ...variety.spots,
  ...expansion.spots,
]) {
  if (!spotMap.has(spot.slug)) spotMap.set(spot.slug, spot);
}

export const allSpots: Spot[] = [...spotMap.values()].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export function getSpot(slug: string): Spot | undefined {
  return spotMap.get(slug);
}

export function spotsOfShow(show: Show): { spot: Spot; sceneNote: string }[] {
  const seen = new Set<string>();
  const out: { spot: Spot; sceneNote: string }[] = [];
  for (const ref of show.filmingSpots) {
    const spot = spotMap.get(ref.spotSlug);
    if (spot && !seen.has(spot.slug)) {
      seen.add(spot.slug);
      out.push({ spot, sceneNote: ref.sceneNote });
    }
  }
  return out;
}

export function showsAtSpot(spotSlug: string): { show: Show; sceneNote: string }[] {
  const out: { show: Show; sceneNote: string }[] = [];
  for (const show of allShows) {
    const ref = show.filmingSpots.find((r) => r.spotSlug === spotSlug);
    if (ref) out.push({ show, sceneNote: ref.sceneNote });
  }
  return out;
}

// --- media: legally-sourced photos & coordinates -------------------------------

export function imageOf(slug: string): SpotImage | undefined {
  return IMAGES[slug];
}

export function geoOf(slug: string): { lat: number; lng: number; approx?: boolean } | undefined {
  return GEO[slug];
}

// --- routes --------------------------------------------------------------------

export const allRoutes: TravelRoute[] = routeData;

export function getRoute(slug: string): TravelRoute | undefined {
  return routeData.find((r) => r.slug === slug);
}

export function routesForShow(showSlug: string): TravelRoute[] {
  return routeData.filter((r) => r.showSlugs.includes(showSlug));
}

export function routesWithSpot(spotSlug: string): TravelRoute[] {
  return routeData.filter((r) =>
    r.dayPlans.some((d) => d.stops.some((s) => s.spotSlug === spotSlug)),
  );
}

// --- restaurants -----------------------------------------------------------------

export const allRestaurants: Restaurant[] = restaurantData;

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurantData.find((r) => r.slug === slug);
}

export function restaurantsInRegion(region: string): Restaurant[] {
  return restaurantData.filter((r) => r.region === region);
}

// --- articles --------------------------------------------------------------------

export const allArticles: Article[] = [...practicalArticles, ...cultureArticles].sort(
  (a, b) => (a.updated < b.updated ? 1 : -1),
);

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

// --- beauty ----------------------------------------------------------------------

export const allBeautyGuides: BeautyGuide[] = beautyData;

// --- labels ------------------------------------------------------------------------

export const REGION_LABELS: Record<string, string> = {
  seoul: "Seoul",
  busan: "Busan",
  jeju: "Jeju",
  incheon: "Incheon",
  gyeonggi: "Gyeonggi",
  gangwon: "Gangwon",
  jeolla: "Jeolla",
  gyeongsang: "Gyeongsang",
  chungcheong: "Chungcheong",
  overseas: "Overseas",
};

export const OTT_LABELS: Record<string, string> = {
  netflix: "Netflix",
  disney: "Disney+",
  appletv: "Apple TV+",
  prime: "Prime Video",
  viki: "Viki",
  other: "Other",
};

// --- chatbot search index ------------------------------------------------------------

export interface SearchDoc {
  title: string;
  href: string;
  kind: "show" | "spot" | "route" | "restaurant" | "article" | "beauty";
  text: string;
}

export function buildSearchIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const s of allShows)
    docs.push({
      title: s.title,
      href: `/shows/${s.slug}`,
      kind: "show",
      text: `${s.title} ${s.koreanTitle} ${s.genres.join(" ")} ${s.synopsis} ${s.whyVisit}`,
    });
  for (const s of allSpots)
    docs.push({
      title: s.name,
      href: `/spots/${s.slug}`,
      kind: "spot",
      text: `${s.name} ${s.koreanName ?? ""} ${s.area} ${s.description} ${s.howToGet}`,
    });
  for (const r of allRoutes)
    docs.push({
      title: r.title,
      href: `/routes/${r.slug}`,
      kind: "route",
      text: `${r.title} ${r.city} ${r.tagline} ${r.bestFor.join(" ")}`,
    });
  for (const r of allRestaurants)
    docs.push({
      title: r.name,
      href: `/food/${r.slug}`,
      kind: "restaurant",
      text: `${r.name} ${r.chef ?? ""} ${r.sourceShow ?? ""} ${r.cuisine} ${r.description} ${r.bookingMethod}`,
    });
  for (const a of allArticles)
    docs.push({
      title: a.title,
      href: `/guide/${a.slug}`,
      kind: "article",
      text: `${a.title} ${a.excerpt} ${a.sections.map((s) => s.heading ?? "").join(" ")}`,
    });
  for (const b of allBeautyGuides)
    docs.push({
      title: b.title,
      href: `/beauty#${b.slug}`,
      kind: "beauty",
      text: `${b.title} ${b.description} ${b.picks.map((p) => `${p.brand ?? ""} ${p.name}`).join(" ")}`,
    });
  return docs;
}
