import type { ContentOverlay } from "./types";
import { esShows, esSpots } from "./es-core";
import { esBeauty, esRestaurants, esRoutes } from "./es-extra";
import { esArticlesPractical } from "./es-articles-practical";
import { esArticlesCulture } from "./es-articles-culture";
import { esArticlesExperiences } from "./es-articles-experiences";

export const es: ContentOverlay = {
  shows: esShows,
  spots: esSpots,
  routes: esRoutes,
  restaurants: esRestaurants,
  beauty: esBeauty,
  articles: { ...esArticlesPractical, ...esArticlesCulture, ...esArticlesExperiences },
};
