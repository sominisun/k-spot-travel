"use client";

import { useMemo, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import { LeafletMap } from "@/components/LeafletMap";

export interface MapSpot {
  slug: string;
  name: string;
  area: string;
  lat: number;
  lng: number;
  approx?: boolean;
  shows: string[];
}

export function MapExplorer({
  locale,
  spots,
  shows,
  allLabel,
  filterLabel,
}: {
  locale: Locale;
  spots: MapSpot[];
  shows: { slug: string; title: string }[];
  allLabel: string;
  filterLabel: string;
}) {
  const [filter, setFilter] = useState<string>("");

  const filtered = useMemo(
    () => (filter ? spots.filter((s) => s.shows.includes(filter)) : spots),
    [filter, spots],
  );

  const markers = filtered.map((s) => ({
    lat: s.lat,
    lng: s.lng,
    label: s.name,
    sub: s.area,
    href: l(locale, `/spots/${s.slug}`),
    approx: s.approx,
  }));

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-[13px] font-semibold text-ink-faint">{filterLabel}:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-[8px] border border-line bg-paper px-3 py-2 text-[13px] font-semibold outline-none focus:border-indigo"
        >
          <option value="">
            {allLabel} ({spots.length})
          </option>
          {shows.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <LeafletMap
        markers={markers}
        height="h-[560px]"
        className="mt-4"
      />
    </div>
  );
}
