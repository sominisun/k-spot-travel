import { NextRequest } from "next/server";
import { allShows } from "@/lib/data";
import { ogCard } from "@/lib/og-card";

export const runtime = "nodejs";

// Share card for a planner result: "?shows=slug,slug&days=4".
// Show slugs are validated against the catalog — no free-text injection.
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const days = Math.min(Math.max(Number(q.get("days")) || 3, 1), 7);
  const titles = (q.get("shows") ?? "")
    .split(",")
    .map((s) => allShows.find((x) => x.slug === s.trim())?.title)
    .filter((x): x is string => Boolean(x))
    .slice(0, 3);

  const list = titles.length ? titles.join(" · ") : "my watchlist";
  return ogCard({
    kicker: "MY ROUTE",
    title: `${days} day${days === 1 ? "" : "s"} in Korea`,
    sub: `Built from ${list} — every stop is a verified filming location.`,
  });
}
