import type { ContentOverlay } from "./types";
import { zhShows, zhSpots } from "./zh-core";
import { zhBeauty, zhRestaurants, zhRoutes } from "./zh-extra";
import { zhArticlesPractical } from "./zh-articles-practical";
import { zhArticlesCulture } from "./zh-articles-culture";

export const zh: ContentOverlay = {
  shows: zhShows,
  spots: zhSpots,
  routes: zhRoutes,
  restaurants: zhRestaurants,
  beauty: zhBeauty,
  articles: { ...zhArticlesPractical, ...zhArticlesCulture },
};
