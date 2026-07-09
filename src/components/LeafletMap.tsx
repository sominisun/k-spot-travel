"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMapType } from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapMarker {
  lat: number;
  lng: number;
  label: string;
  sub?: string;
  href?: string;
  approx?: boolean;
  /** 1-based number badge (route stops); dot marker when omitted */
  num?: number;
}

export function LeafletMap({
  markers,
  polyline = false,
  height = "h-[420px]",
  className = "",
}: {
  markers: MapMarker[];
  polyline?: boolean;
  height?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMapType | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current || mapRef.current) return;

      const map = L.map(ref.current, { scrollWheelZoom: false });
      mapRef.current = map;

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const pts: [number, number][] = [];
      for (const m of markers) {
        pts.push([m.lat, m.lng]);
        const icon = L.divIcon({
          className: "",
          html: m.num
            ? `<div style="width:26px;height:26px;border-radius:50%;background:#1e3a6e;color:#fff;display:flex;align-items:center;justify-content:center;font:700 12px/1 Inter,sans-serif;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)">${m.num}</div>`
            : `<div style="width:14px;height:14px;border-radius:50%;background:#1e3a6e;border:2.5px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></div>`,
          iconSize: m.num ? [26, 26] : [14, 14],
          iconAnchor: m.num ? [13, 13] : [7, 7],
        });
        const marker = L.marker([m.lat, m.lng], { icon }).addTo(map);
        const approxNote = m.approx
          ? `<div style="color:#878d98;font-size:11px">≈ approximate</div>`
          : "";
        const link = m.href
          ? `<a href="${m.href}" style="color:#1e3a6e;font-weight:700">${m.label} →</a>`
          : `<strong>${m.label}</strong>`;
        marker.bindPopup(
          `<div style="font:500 13px/1.45 Inter,sans-serif">${link}${
            m.sub ? `<div style="color:#454a54">${m.sub}</div>` : ""
          }${approxNote}</div>`,
        );
      }

      if (polyline && pts.length > 1) {
        L.polyline(pts, { color: "#1e3a6e", weight: 3, opacity: 0.75, dashArray: "6 8" }).addTo(map);
      }

      if (pts.length === 1) map.setView(pts[0], 14);
      else if (pts.length > 1) map.fitBounds(L.latLngBounds(pts).pad(0.15));
      else map.setView([37.5665, 126.978], 11);
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // markers identity is stable per page render; re-init on length change only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(markers), polyline]);

  return (
    <div
      ref={ref}
      className={`${height} w-full overflow-hidden rounded-[8px] border border-line ${className}`}
    />
  );
}
