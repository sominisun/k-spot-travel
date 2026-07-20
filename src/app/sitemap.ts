import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/config";
import { allArticles, allRestaurants, allRoutes, allShows, allSpots } from "@/lib/data";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shows",
    "/spots",
    "/map",
    "/routes",
    "/food",
    "/beauty",
    "/guide",
    "/planner",
    "/pricing",
    "/quiz",
    "/stamps",
    "/community",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const dynamicPaths = [
    ...allShows.map((s) => `/shows/${s.slug}`),
    ...allSpots.map((s) => `/spots/${s.slug}`),
    ...allRoutes.map((r) => `/routes/${r.slug}`),
    ...allRestaurants.map((r) => `/food/${r.slug}`),
    ...allArticles.map((a) => `/guide/${a.slug}`),
  ];

  const now = new Date();
  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${SITE.url}/en${path}`,
    lastModified: now,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((loc) => [loc, `${SITE.url}/${loc}${path}`]),
      ),
    },
  }));
}
