// Content-layer translations. Each locale ships an overlay; any missing field
// falls back to the English source data, so partial overlays never break pages.
export interface ShowL10n {
  /** Localized display title (official local title where one exists) */
  title?: string;
  synopsis?: string;
  whyVisit?: string;
  /** sceneNote per spotSlug */
  scenes?: Record<string, string>;
  genres?: string[];
}

export interface SpotL10n {
  name?: string;
  description?: string;
  howToGet?: string;
  hours?: string;
  admission?: string;
  tips?: string[];
  area?: string;
}

export interface RouteL10n {
  title?: string;
  tagline?: string;
  /** day themes by index */
  themes?: string[];
  /** stop notes: [dayIndex][stopIndex] */
  notes?: string[][];
  /** stop titles (non-spot stops) keyed "day-stop" index, e.g. "0-1" */
  stopTitles?: Record<string, string>;
  tips?: string[];
  bestFor?: string[];
}

export interface RestaurantL10n {
  description?: string;
  bookingMethod?: string;
  signature?: string[];
  tips?: string[];
  cuisine?: string;
}

export interface BeautyL10n {
  title?: string;
  description?: string;
  /** pick "why" by index */
  whys?: string[];
  whereToBuy?: string;
  oliveYoungTip?: string;
  tips?: string[];
}

export interface ArticleSectionL10n {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  tip?: string;
}

export interface ArticleL10n {
  title?: string;
  excerpt?: string;
  /** by section index; provided fields replace, absent fields fall back */
  sections?: ArticleSectionL10n[];
  faq?: { q: string; a: string }[];
  /** related link labels by index (hrefs stay canonical) */
  relatedLabels?: string[];
}

export interface ContentOverlay {
  shows: Record<string, ShowL10n>;
  spots: Record<string, SpotL10n>;
  routes: Record<string, RouteL10n>;
  restaurants: Record<string, RestaurantL10n>;
  beauty: Record<string, BeautyL10n>;
  articles: Record<string, ArticleL10n>;
}

export const EMPTY_OVERLAY: ContentOverlay = {
  shows: {},
  spots: {},
  routes: {},
  restaurants: {},
  beauty: {},
  articles: {},
};
