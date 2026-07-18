// Route intelligence for the planner: greedy nearest-neighbor ordering and
// transit-time estimates. Pure functions — deterministic given the same input,
// which preserves the planner's seeded-variety contract.

export interface GeoPt {
  lat: number;
  lng: number;
}

export function haversineKm(a: GeoPt, b: GeoPt): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/**
 * Order items into a walkable/rideable chain: start at `startIndex` (the
 * seeded-variety knob), then always hop to the nearest unvisited item.
 * Items without coordinates keep their relative order at the end.
 */
export function orderByProximity<T>(
  items: T[],
  geoOf: (t: T) => GeoPt | null | undefined,
  startIndex: number,
): T[] {
  const withGeo = items.filter((i) => geoOf(i));
  const noGeo = items.filter((i) => !geoOf(i));
  if (withGeo.length < 2) return [...withGeo, ...noGeo];

  let cur = withGeo[Math.max(0, Math.min(startIndex, withGeo.length - 1))];
  const rest = new Set(withGeo);
  rest.delete(cur);
  const out: T[] = [cur];
  while (rest.size) {
    let best: T | null = null;
    let bestD = Infinity;
    for (const cand of rest) {
      const d = haversineKm(geoOf(cur)!, geoOf(cand)!);
      if (d < bestD) {
        bestD = d;
        best = cand;
      }
    }
    out.push(best!);
    rest.delete(best!);
    cur = best!;
  }
  return [...out, ...noGeo];
}

/**
 * Door-to-door transit estimate between two stops. Short hops walk
 * (~15 min/km incl. crossings); anything longer rides the subway
 * (~12 min access/wait overhead + ~3 min/km). Unknown coords get a
 * conservative city-average 25 min.
 */
export function travelMinutes(a?: GeoPt | null, b?: GeoPt | null): number {
  if (!a || !b) return 25;
  const km = haversineKm(a, b);
  if (km <= 1.3) return Math.max(5, Math.round(km * 15));
  return Math.round(12 + km * 3);
}

/** Round to the nearest 5 minutes (itineraries shouldn't say 10:23). */
export function round5(minutes: number): number {
  return Math.round(minutes / 5) * 5;
}

/** Minutes-since-midnight → "HH:MM". */
export function fmtClock(minutes: number): string {
  const m = Math.max(0, Math.min(minutes, 23 * 60 + 55));
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}
