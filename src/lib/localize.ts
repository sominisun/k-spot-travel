// Merges locale content-overlays onto English source data. Every field falls
// back to English, so a missing translation degrades gracefully, never breaks.
import type { Locale } from "@/i18n/config";
import type { Article, BeautyGuide, Restaurant, Show, Spot, TravelRoute } from "./types";
import { EMPTY_OVERLAY, type ContentOverlay } from "@/data/l10n/types";
import { ARTICLE_CATEGORY_L10N, REGION_L10N, SPOT_TYPE_L10N } from "@/data/l10n/labels";
import { ko } from "@/data/l10n/ko";
import { ja } from "@/data/l10n/ja";
import { zh } from "@/data/l10n/zh";
import { es } from "@/data/l10n/es";
import { REGION_LABELS, spotsOfShow, showsAtSpot } from "./data";

const OVERLAYS: Record<Locale, ContentOverlay> = {
  en: EMPTY_OVERLAY,
  ko,
  ja,
  zh,
  es,
};

export function regionLabel(region: string, locale: Locale): string {
  return REGION_L10N[locale]?.[region] ?? REGION_LABELS[region] ?? region;
}

export function typeLabel(type: string, locale: Locale): string {
  return SPOT_TYPE_L10N[locale]?.[type] ?? SPOT_TYPE_L10N.en[type] ?? type;
}

export function categoryLabel(category: string, locale: Locale): string {
  return ARTICLE_CATEGORY_L10N[locale]?.[category] ?? category;
}

export function hasArticleL10n(slug: string, locale: Locale): boolean {
  return Boolean(OVERLAYS[locale].articles[slug]);
}

export function lArticle(article: Article, locale: Locale): Article {
  const o = OVERLAYS[locale].articles[article.slug];
  if (!o) return article;
  return {
    ...article,
    title: o.title ?? article.title,
    excerpt: o.excerpt ?? article.excerpt,
    sections: article.sections.map((s, i) => ({
      heading: o.sections?.[i]?.heading ?? s.heading,
      paragraphs: o.sections?.[i]?.paragraphs ?? s.paragraphs,
      list: o.sections?.[i]?.list ?? s.list,
      tip: o.sections?.[i]?.tip ?? s.tip,
    })),
    faq: o.faq ?? article.faq,
    related: article.related?.map((r, i) => ({
      ...r,
      label: o.relatedLabels?.[i] ?? r.label,
    })),
  };
}

export function lShow(show: Show, locale: Locale): Show {
  const o = OVERLAYS[locale].shows[show.slug];
  if (!o && locale !== "ko") return show;
  return {
    ...show,
    title: o?.title ?? (locale === "ko" ? show.koreanTitle : show.title),
    koreanTitle: locale === "ko" ? show.title : show.koreanTitle,
    synopsis: o?.synopsis ?? show.synopsis,
    whyVisit: o?.whyVisit ?? show.whyVisit,
    genres: o?.genres ?? show.genres,
    filmingSpots: show.filmingSpots.map((f) => ({
      ...f,
      sceneNote: o?.scenes?.[f.spotSlug] ?? f.sceneNote,
    })),
  };
}

export function lSpot(spot: Spot, locale: Locale): Spot {
  const o = OVERLAYS[locale].spots[spot.slug];
  const koName = locale === "ko" ? spot.koreanName : undefined;
  if (!o && !koName) return spot;
  return {
    ...spot,
    name: o?.name ?? koName ?? spot.name,
    description: o?.description ?? spot.description,
    howToGet: o?.howToGet ?? spot.howToGet,
    hours: o?.hours ?? spot.hours,
    admission: o?.admission ?? spot.admission,
    tips: o?.tips ?? spot.tips,
    area: o?.area ?? spot.area,
  };
}

export function lRoute(route: TravelRoute, locale: Locale): TravelRoute {
  const o = OVERLAYS[locale].routes[route.slug];
  if (!o) return route;
  return {
    ...route,
    title: o.title ?? route.title,
    tagline: o.tagline ?? route.tagline,
    bestFor: o.bestFor ?? route.bestFor,
    tips: o.tips ?? route.tips,
    dayPlans: route.dayPlans.map((day, di) => ({
      ...day,
      theme: o.themes?.[di] ?? day.theme,
      stops: day.stops.map((stop, si) => ({
        ...stop,
        note: o.notes?.[di]?.[si] ?? stop.note,
        title: o.stopTitles?.[`${di}-${si}`] ?? stop.title,
      })),
    })),
  };
}

export function lRestaurant(r: Restaurant, locale: Locale): Restaurant {
  const o = OVERLAYS[locale].restaurants[r.slug];
  if (!o) return r;
  return {
    ...r,
    description: o.description ?? r.description,
    bookingMethod: o.bookingMethod ?? r.bookingMethod,
    signature: o.signature ?? r.signature,
    tips: o.tips ?? r.tips,
    cuisine: o.cuisine ?? r.cuisine,
  };
}

export function lBeauty(b: BeautyGuide, locale: Locale): BeautyGuide {
  const o = OVERLAYS[locale].beauty[b.slug];
  if (!o) return b;
  return {
    ...b,
    title: o.title ?? b.title,
    description: o.description ?? b.description,
    whereToBuy: o.whereToBuy ?? b.whereToBuy,
    oliveYoungTip: o.oliveYoungTip ?? b.oliveYoungTip,
    tips: o.tips ?? b.tips,
    picks: b.picks.map((p, i) => ({ ...p, why: o.whys?.[i] ?? p.why })),
  };
}

// Localized composite helpers -------------------------------------------------

export function lSpotsOfShow(show: Show, locale: Locale) {
  const localized = lShow(show, locale);
  return spotsOfShow(show).map(({ spot, sceneNote }) => ({
    spot: lSpot(spot, locale),
    sceneNote:
      localized.filmingSpots.find((f) => f.spotSlug === spot.slug)?.sceneNote ??
      sceneNote,
  }));
}

export function lShowsAtSpot(spotSlug: string, locale: Locale) {
  return showsAtSpot(spotSlug).map(({ show }) => {
    const ls = lShow(show, locale);
    return {
      show: ls,
      sceneNote:
        ls.filmingSpots.find((f) => f.spotSlug === spotSlug)?.sceneNote ?? "",
    };
  });
}
