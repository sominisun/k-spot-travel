// ---------------------------------------------------------------------------
// K-SPOT Travel v2 — core content types (v1-compatible so data files carry over)
// ---------------------------------------------------------------------------

export type OTT = "netflix" | "disney" | "appletv" | "prime" | "viki" | "other";

export type ShowCategory = "kdrama" | "variety" | "movie" | "animation" | "food";

/** trending = 2024–2026 hit still charting; evergreen = consistently loved classic */
export type ShowStatus = "trending" | "evergreen";

export type Region =
  | "seoul"
  | "busan"
  | "jeju"
  | "incheon"
  | "gyeonggi"
  | "gangwon"
  | "jeolla"
  | "gyeongsang"
  | "chungcheong"
  | "overseas";

/** Kept for v1 data compatibility; v2 renders photos, not gradient cards. */
export type ArtTheme =
  | "coral"
  | "ocean"
  | "forest"
  | "sunset"
  | "plum"
  | "gold"
  | "night"
  | "mint";

export interface FilmingSpotRef {
  spotSlug: string;
  sceneNote: string;
}

export interface Show {
  slug: string;
  title: string;
  koreanTitle: string;
  ott: OTT[];
  category: ShowCategory;
  genres: string[];
  years: string;
  status: ShowStatus;
  popularity: number;
  synopsis: string;
  whyVisit: string;
  filmingSpots: FilmingSpotRef[];
  themeColor: ArtTheme;
  /** Official promo video (YouTube embed id) — embeds only, never downloads. */
  officialVideoId?: string;
}

export type SpotType =
  | "landmark"
  | "nature"
  | "palace"
  | "village"
  | "street"
  | "market"
  | "cafe"
  | "restaurant"
  | "shopping"
  | "themepark"
  | "studio"
  | "beach"
  | "island"
  | "other";

export interface Spot {
  slug: string;
  name: string;
  koreanName?: string;
  type: SpotType;
  region: Region;
  area: string;
  address: string;
  description: string;
  howToGet: string;
  hours?: string;
  admission?: string;
  tips: string[];
  mapQuery: string;
  imageUrl?: string;
  affiliateTourUrl?: string;
}

export interface RouteStop {
  time: string;
  spotSlug?: string;
  title?: string;
  note: string;
}

export interface RouteDay {
  day: number;
  theme: string;
  stops: RouteStop[];
}

export interface TravelRoute {
  slug: string;
  title: string;
  tagline: string;
  city: string;
  days: number;
  budgetUSD: [number, number];
  bestFor: string[];
  showSlugs: string[];
  dayPlans: RouteDay[];
  tips: string[];
  themeColor: ArtTheme;
}

export interface Restaurant {
  slug: string;
  name: string;
  koreanName?: string;
  chef?: string;
  sourceShow?: string;
  cuisine: string;
  region: Region;
  area: string;
  address: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  signature: string[];
  bookingMethod: string;
  bookingUrl?: string;
  description: string;
  tips: string[];
  mapQuery: string;
  themeColor: ArtTheme;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  tip?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export type ArticleCategory = "practical" | "culture" | "food" | "beauty" | "itinerary";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  readMinutes: number;
  updated: string;
  sections: ArticleSection[];
  faq?: FAQItem[];
  related?: { label: string; href: string }[];
  themeColor: ArtTheme;
}

export interface BeautyPick {
  name: string;
  brand?: string;
  why: string;
  priceHintUSD?: string;
}

export interface BeautyGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  picks: BeautyPick[];
  whereToBuy: string;
  oliveYoungTip?: string;
  affiliateUrl?: string;
  tips: string[];
  themeColor: ArtTheme;
}
