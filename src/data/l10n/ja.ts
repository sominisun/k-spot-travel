import type { ContentOverlay } from "./types";
import { jaShows, jaSpots } from "./ja-core";
import { jaBeauty, jaRestaurants, jaRoutes } from "./ja-extra";
import { jaArticlesPractical } from "./ja-articles-practical";
import { jaArticlesCulture } from "./ja-articles-culture";
import { jaArticlesExperiences } from "./ja-articles-experiences";

export const ja: ContentOverlay = {
  shows: jaShows,
  spots: jaSpots,
  routes: jaRoutes,
  restaurants: jaRestaurants,
  beauty: jaBeauty,
  articles: { ...jaArticlesPractical, ...jaArticlesCulture, ...jaArticlesExperiences },
};
