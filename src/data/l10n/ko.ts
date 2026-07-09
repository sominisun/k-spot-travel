import type { ContentOverlay } from "./types";
import { koShows, koSpots } from "./ko-core";
import { koBeauty, koRestaurants, koRoutes } from "./ko-extra";
import { koArticlesPractical } from "./ko-articles-practical";
import { koArticlesCulture } from "./ko-articles-culture";

export const ko: ContentOverlay = {
  shows: koShows,
  spots: koSpots,
  routes: koRoutes,
  restaurants: koRestaurants,
  beauty: koBeauty,
  articles: { ...koArticlesPractical, ...koArticlesCulture },
};
