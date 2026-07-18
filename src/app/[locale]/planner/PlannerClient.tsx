"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { l, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict";
import { grantPass, hasPass, passToken } from "@/lib/client-store";
import { fmtClock, orderByProximity, round5, travelMinutes, type GeoPt } from "@/lib/route-order";
import { PAYMENTS } from "@/lib/site";
import { Icon } from "@/components/ui";
import { LeafletMap, type MapMarker } from "@/components/LeafletMap";

export interface PlannerData {
  shows: {
    slug: string;
    title: string;
    status: "trending" | "evergreen";
    spots: {
      slug: string;
      name: string;
      region: string;
      area: string;
      scene: string;
      geo: { lat: number; lng: number; approx?: boolean } | null;
      address?: string;
      howToGet?: string;
    }[];
  }[];
  restaurants: {
    slug: string;
    name: string;
    region: string;
    sourceShow?: string;
    priceRange: string;
    booking: string;
  }[];
}

interface Stop {
  time: string;
  label: string;
  note: string;
  href?: string;
  geo?: { lat: number; lng: number; approx?: boolean } | null;
  kind: "spot" | "meal" | "evening";
  address?: string;
  howToGet?: string;
}
interface PlanDay {
  day: number;
  theme: string;
  stops: Stop[];
}

const REGION_LABELS: Record<string, string> = {
  seoul: "Seoul", busan: "Busan", jeju: "Jeju", incheon: "Incheon",
  gyeonggi: "Gyeonggi", gangwon: "Gangwon", jeolla: "Jeolla",
  gyeongsang: "Gyeongsang", chungcheong: "Chungcheong", overseas: "Overseas",
};

/** Deterministic PRNG — same seed, same plan; new seed, fresh variation. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rnd: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// spots/day, minutes spent at each spot, and the day's start time.
const PACE = {
  relaxed: { spots: 3, dwell: 95, start: 10 * 60 },
  standard: { spots: 4, dwell: 80, start: 9 * 60 + 30 },
  packed: { spots: 5, dwell: 65, start: 8 * 60 + 30 },
} as const;
type Pace = keyof typeof PACE;

export function PlannerClient({
  locale,
  dict,
  data,
  initialShows,
  initialDays,
  emailEnabled = false,
}: {
  locale: Locale;
  dict: Dict;
  data: PlannerData;
  initialShows?: string[];
  initialDays?: number;
  emailEnabled?: boolean;
}) {
  const t = dict.planner;
  const [selected, setSelected] = useState<string[]>(initialShows ?? []);
  const [days, setDays] = useState(initialDays ?? 3);
  const [pace, setPace] = useState<Pace>("standard");
  const [interests, setInterests] = useState<string[]>(["food"]);
  const [query, setQuery] = useState("");
  const [seed, setSeed] = useState(1);
  const [plan, setPlan] = useState<PlanDay[] | null>(null);
  const [pass, setPass] = useState(false);
  const [email, setEmail] = useState("");
  const [mailState, setMailState] = useState<"idle" | "busy" | "sent" | "demo">("idle");
  const [licenseKey, setLicenseKey] = useState("");
  const [keyState, setKeyState] = useState<"idle" | "busy" | "invalid">("idle");
  const [startDate, setStartDate] = useState("");
  const [shared, setShared] = useState(false);

  /** Trip start: user-picked date, else 2 weeks out (planning default). */
  const tripStart = () => {
    if (startDate) {
      const d = new Date(startDate + "T09:00:00");
      if (!Number.isNaN(d.getTime())) return d;
    }
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d;
  };

  useEffect(() => setPass(hasPass()), []);

  const activateKey = async () => {
    setKeyState("busy");
    try {
      const res = await fetch("/api/pass/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey }),
      });
      const j = await res.json();
      if (j.ok) {
        grantPass(j.token, j.tier === "insider" ? "insider" : "pass");
        setPass(true);
        setKeyState("idle");
      } else {
        setKeyState("invalid");
      }
    } catch {
      setKeyState("invalid");
    }
  };

  const filteredShows = useMemo(
    () => data.shows.filter((s) => s.title.toLowerCase().includes(query.toLowerCase())),
    [data.shows, query],
  );

  const toggleShow = (slug: string) =>
    setSelected((cur) =>
      cur.includes(slug) ? cur.filter((s) => s !== slug) : cur.length < 6 ? [...cur, slug] : cur,
    );
  const toggleInterest = (k: string) =>
    setInterests((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));

  const generate = (newSeed?: number) => {
    const s = newSeed ?? seed;
    const rnd = mulberry32(s * 7919 + selected.length * 31 + days);
    const shows = data.shows.filter((x) => selected.includes(x.slug));

    // Unique spots with merged scene notes
    const spotMap = new Map<
      string,
      { name: string; region: string; area: string; notes: string[]; href: string; geo: Stop["geo"]; address?: string; howToGet?: string }
    >();
    for (const show of shows) {
      for (const sp of show.spots) {
        const e = spotMap.get(sp.slug);
        const note = `${show.title}: ${sp.scene}`;
        if (e) e.notes.push(note);
        else
          spotMap.set(sp.slug, {
            name: sp.name, region: sp.region, area: sp.area,
            notes: [note], href: `/spots/${sp.slug}`, geo: sp.geo,
            address: sp.address, howToGet: sp.howToGet,
          });
      }
    }

    // Cluster by region → allocate days (biggest first; Seoul breaks ties)
    const regions = new Map<string, string[]>();
    for (const [slug, sp] of spotMap) {
      regions.set(sp.region, [...(regions.get(sp.region) ?? []), slug]);
    }
    const ordered = [...regions.entries()].sort((a, b) => {
      if (a[1].length !== b[1].length) return b[1].length - a[1].length;
      return a[0] === "seoul" ? -1 : b[0] === "seoul" ? 1 : 0;
    });
    const total = spotMap.size || 1;
    const alloc: { region: string; slugs: string[]; days: number }[] = [];
    let remaining = days;
    for (const [region, slugs] of ordered) {
      if (remaining <= 0) break;
      const take = Math.min(Math.max(1, Math.round((slugs.length / total) * days)), remaining);
      // Chain the region's spots by proximity so consecutive stops (and
      // consecutive days) are geographic neighbors. The seeded random start
      // point is what makes "shuffle it differently" produce fresh-but-sane
      // variations instead of zigzag routes.
      const chained = orderByProximity(
        slugs,
        (s) => (spotMap.get(s)!.geo as GeoPt | null) ?? null,
        Math.floor(rnd() * slugs.length),
      );
      alloc.push({ region, slugs: chained, days: take });
      remaining -= take;
    }
    if (remaining > 0 && alloc.length) alloc[0].days += remaining;

    const perDay = PACE[pace].spots;
    const dwell = PACE[pace].dwell;
    const result: PlanDay[] = [];
    let dayNum = 1;
    let beautyDone = false;

    for (const a of alloc) {
      // Spread scarce spots evenly across the allocated days (e.g. 4 spots
      // over 3 days -> 2/1/1) instead of front-loading and leaving days empty.
      const baseN = Math.floor(a.slugs.length / a.days);
      const extraN = a.slugs.length % a.days;
      let offset = 0;
      for (let d = 0; d < a.days; d++) {
        const takeN = Math.min(perDay, baseN + (d < extraN ? 1 : 0));
        const daySlugs = a.slugs.slice(offset, offset + takeN);
        offset += takeN;
        const stops: Stop[] = [];
        const morning = daySlugs.slice(0, Math.ceil(daySlugs.length / 2));
        const afternoon = daySlugs.slice(Math.ceil(daySlugs.length / 2));

        // Clock-driven schedule: each timestamp accumulates real dwell time
        // plus a transit estimate to the next stop — no fixed template.
        let clock = PACE[pace].start;
        let prevGeo: GeoPt | null = null;
        const pushSpot = (slug: string) => {
          const sp = spotMap.get(slug)!;
          const geo = (sp.geo as GeoPt | null) ?? null;
          if (stops.length > 0) clock += travelMinutes(prevGeo, geo);
          stops.push({ time: fmtClock(round5(clock)), label: sp.name, note: sp.notes.join(" · "), href: sp.href, geo: sp.geo, kind: "spot", address: sp.address, howToGet: sp.howToGet });
          clock += dwell;
          if (geo) prevGeo = geo;
        };

        for (const slug of morning) pushSpot(slug);

        // Lunch — prefer a restaurant tied to a selected show, in-region
        const regionRests = shuffle(
          data.restaurants.filter((r) => r.region === a.region),
          rnd,
        );
        const lunch =
          regionRests.find((r) => interests.includes("food") && shows.some((s) => r.sourceShow?.includes(s.title))) ??
          (interests.includes("food") ? regionRests[0] : undefined);
        clock = Math.max(clock + 10, 12 * 60); // walk over; never lunch before noon
        stops.push(
          lunch
            ? { time: fmtClock(round5(clock)), label: `${lunch.name} (${lunch.priceRange})`, note: lunch.sourceShow ? `As seen around ${lunch.sourceShow}.` : "Editor-tracked table.", href: `/food/${lunch.slug}`, kind: "meal" }
            : { time: fmtClock(round5(clock)), label: "Lunch — local pick", note: "Follow the office crowds; the busiest place wins.", kind: "meal" },
        );
        clock += 70; // meal

        for (const slug of afternoon) pushSpot(slug);

        const eveClock = fmtClock(round5(Math.max(clock + 20, 18 * 60 + 30)));
        if (interests.includes("beauty") && !beautyDone && a.region === "seoul") {
          beautyDone = true;
          stops.push({ time: eveClock, label: "Olive Young Myeongdong Town", note: "Flagship haul — passport for instant tax refund. Bring our shopping list.", href: "/beauty", kind: "evening" });
        } else if (interests.includes("photo")) {
          stops.push({ time: eveClock, label: "Golden-hour photo return", note: "Revisit today's favorite spot at sunset — see our photo etiquette guide.", href: "/guide/filming-location-photo-etiquette", kind: "evening" });
        } else {
          stops.push({ time: eveClock, label: "Night market / riverside", note: "Street food and city lights — the standard drama epilogue.", kind: "evening" });
        }

        const dayShows = shows.filter((sh) => sh.spots.some((sp) => daySlugs.includes(sp.slug)));
        result.push({
          day: dayNum++,
          theme: `${REGION_LABELS[a.region] ?? a.region} — ${dayShows.map((x) => x.title).slice(0, 2).join(" & ") || "explore"}`,
          stops,
        });
      }
    }
    setPlan(result.slice(0, days));
    setMailState("idle");
  };

  // --- exports -----------------------------------------------------------

  // Free tier: Day 1 in full detail as the teaser; later days list stops only.
  const planText = () =>
    !plan
      ? ""
      : [
          "My K-SPOT Travel plan", "",
          ...plan.flatMap((d) => [
            `DAY ${d.day} — ${d.theme}`,
            ...d.stops.map((s) =>
              pass || d.day === 1
                ? `  ${s.time}  ${s.label} — ${s.note}`
                : `  · ${s.label}`,
            ),
            "",
          ]),
          "Built with K-SPOT Travel — your K-content is your Korea travel map.",
        ].join("\n");

  const deadlines = useMemo(() => {
    if (!plan) return [];
    const seen = new Set<string>();
    const out: { name: string; booking: string }[] = [];
    for (const d of plan)
      for (const s of d.stops) {
        if (s.kind !== "meal" || !s.href) continue;
        const r = data.restaurants.find((x) => `/food/${x.slug}` === s.href);
        if (r && !seen.has(r.slug)) {
          seen.add(r.slug);
          out.push({ name: r.name, booking: r.booking });
        }
      }
    return out;
  }, [plan, data.restaurants]);

  // Route Pass export: itinerary events on the real trip dates PLUS booking
  // reminder events (D-30 reservation windows, D-7 reconfirm sweep).
  const downloadIcs = () => {
    if (!plan) return;
    const start = tripStart();
    const stamp = (dt: Date) => dt.toISOString().replace(/[-:]/g, "").slice(0, 15);
    const esc = (s: string) => s.replace(/,/g, "\\,");
    const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//K-SPOT Travel//EN"];
    plan.forEach((d) => {
      d.stops.forEach((s) => {
        const dt = new Date(start);
        dt.setDate(start.getDate() + d.day - 1);
        const [h, m] = s.time.split(":").map(Number);
        dt.setHours(h ?? 10, m ?? 0, 0);
        lines.push(
          "BEGIN:VEVENT",
          `DTSTART:${stamp(dt)}`,
          `SUMMARY:${esc(s.label)}`,
          `DESCRIPTION:${esc(s.note)}`,
          "END:VEVENT",
        );
      });
    });
    // Booking-ops reminders
    const addReminder = (daysBefore: number, summary: string, desc: string) => {
      const dt = new Date(start);
      dt.setDate(start.getDate() - daysBefore);
      if (dt.getTime() < Date.now()) return; // window already passed
      dt.setHours(9, 0, 0);
      lines.push(
        "BEGIN:VEVENT",
        `DTSTART:${stamp(dt)}`,
        `SUMMARY:${esc(summary)}`,
        `DESCRIPTION:${esc(desc)}`,
        "END:VEVENT",
      );
    };
    for (const dl of deadlines) {
      addReminder(30, `Booking window opens: ${dl.name}`, dl.booking);
    }
    addReminder(7, "K-SPOT trip check: reconfirm bookings", "Reconfirm restaurant reservations, check spot hours and the weather forecast.");
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kspot-plan.ics";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const requestPdf = async (sendEmail: boolean) => {
    if (!plan) return;
    setMailState("busy");
    const payload = {
      locale,
      email: sendEmail ? email : undefined,
      title: "My K-SPOT Route",
      passToken: passToken(),
      startDate: tripStart().toISOString().slice(0, 10),
      shows: data.shows.filter((s) => selected.includes(s.slug)).map((s) => s.title),
      pace,
      days: plan.map((d) => ({
        day: d.day, theme: d.theme,
        stops: d.stops.map((s) => ({
          time: s.time, label: s.label, note: s.note, kind: s.kind,
          address: s.address, howToGet: s.howToGet,
        })),
      })),
      deadlines,
    };
    const res = await fetch("/api/plan/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (sendEmail) {
      const j = await res.json();
      if (j.emailed) setMailState("sent");
      else {
        setMailState("demo");
        await requestPdfDownload(payload);
      }
    } else {
      await streamDownload(res);
      setMailState("idle");
    }
  };
  const requestPdfDownload = async (payload: object) => {
    const res = await fetch("/api/plan/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, email: undefined }),
    });
    await streamDownload(res);
  };
  const streamDownload = async (res: Response) => {
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kspot-route-pass.pdf";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const mapMarkers: MapMarker[] = (plan ?? [])
    .flatMap((d) => d.stops)
    .flatMap((s, i) => (s.geo ? [{ lat: s.geo.lat, lng: s.geo.lng, label: s.label, sub: s.time, approx: s.geo.approx, num: i + 1 }] : []));

  // --- UI -------------------------------------------------------------------

  const chip = (active: boolean) =>
    `rounded-[8px] border px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
      active ? "border-indigo bg-indigo text-white" : "border-line text-ink-soft hover:border-indigo"
    }`;

  return (
    <div className="mt-8">
      {/* Step 1 */}
      <section className="rounded-[8px] border border-line p-5">
        <h2 className="font-bold">
          1. {t.step1}{" "}
          <span className="text-sm font-normal text-ink-faint">
            ({t.step1Hint} — {selected.length}/6)
          </span>
        </h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchShows}
          className="mt-3 w-full rounded-[8px] border border-line px-3.5 py-2 text-sm outline-none focus:border-indigo"
        />
        <div className="mt-3 flex max-h-52 flex-wrap gap-2 overflow-y-auto">
          {filteredShows.map((s) => (
            <button key={s.slug} type="button" onClick={() => toggleShow(s.slug)} className={chip(selected.includes(s.slug))}>
              {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* Steps 2-4 */}
      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-[8px] border border-line p-5">
          <h2 className="font-bold">2. {t.step2}</h2>
          <div className="mt-3 flex items-center gap-3">
            <input
              type="range" min={1} max={7} value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full accent-[#1e3a6e]"
            />
            <span className="w-12 text-center font-display text-xl font-bold text-indigo">
              {days}
            </span>
          </div>
          <label className="mt-3 block text-xs font-semibold text-ink-soft">
            {t.startDate}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 w-full rounded-[8px] border border-line px-2.5 py-1.5 text-sm outline-none focus:border-indigo"
            />
          </label>
        </div>
        <div className="rounded-[8px] border border-line p-5">
          <h2 className="font-bold">3. {t.step3}</h2>
          <div className="mt-3 space-y-1.5">
            {(Object.keys(PACE) as Pace[]).map((p) => (
              <label key={p} className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="radio" name="pace" checked={pace === p} onChange={() => setPace(p)} className="accent-[#1e3a6e]" />
                <span className="font-semibold">
                  {p === "relaxed" ? t.paceRelaxed : p === "standard" ? t.paceStandard : t.pacePacked}
                </span>
                <span className="text-xs text-ink-faint">
                  {p === "relaxed" ? t.paceRelaxedHint : p === "standard" ? t.paceStandardHint : t.pacePackedHint}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] border border-line p-5">
          <h2 className="font-bold">4. {t.step4}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { k: "food", label: t.intFood },
              { k: "beauty", label: t.intBeauty },
              { k: "photo", label: t.intPhoto },
            ].map((i) => (
              <button key={i.k} type="button" onClick={() => toggleInterest(i.k)} className={chip(interests.includes(i.k))}>
                {i.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => generate()}
          disabled={selected.length === 0}
          className="flex-1 rounded-[8px] bg-indigo py-3 text-base font-bold text-white transition-colors hover:bg-indigo-deep disabled:cursor-not-allowed disabled:opacity-40"
        >
          {selected.length === 0 ? t.pickOne : t.generate}
        </button>
        {plan ? (
          <button
            type="button"
            onClick={() => { const ns = seed + 1; setSeed(ns); generate(ns); }}
            className="rounded-[8px] border border-indigo px-4 py-3 text-sm font-bold text-indigo hover:bg-indigo-soft"
          >
            {t.regenerate}
          </button>
        ) : null}
      </div>

      {/* ---- Result ---- */}
      {plan ? (
        <div className="mt-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-2xl font-bold">
              {t.yourPlan}{" "}
              <span className="align-middle text-xs font-bold text-celadon">
                {t.freeSummary}
              </span>
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={async () => {
                  const url = `${window.location.origin}${l(locale, "/planner")}?shows=${selected.join(",")}&days=${days}`;
                  await navigator.clipboard.writeText(url);
                  setShared(true);
                }}
                className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-1.5 text-[13px] font-semibold hover:border-indigo"
              >
                <Icon name="external" size={14} /> {shared ? t.sharedPlan : t.sharePlan}
              </button>
              <button type="button" onClick={() => navigator.clipboard.writeText(planText())} className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-1.5 text-[13px] font-semibold hover:border-indigo">
                <Icon name="copy" size={14} /> {t.copyPlan}
              </button>
              {pass ? (
                <button type="button" onClick={downloadIcs} className="inline-flex items-center gap-1.5 rounded-[8px] border border-line px-3.5 py-1.5 text-[13px] font-semibold hover:border-indigo">
                  <Icon name="calendar" size={14} /> {t.downloadIcs}
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-5 space-y-5">
            {plan.map((day) => {
              // Teaser paywall: Day 1 shows the full Route Pass detail level;
              // later days list the stops but hold timings & notes.
              const detailed = pass || day.day === 1;
              return (
                <section key={day.day} className="rounded-[8px] border border-line p-5">
                  <h3 className="flex items-center justify-between font-display text-lg font-bold">
                    <span>
                      <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-[8px] bg-indigo text-sm text-white">
                        {day.day}
                      </span>
                      {day.theme}
                    </span>
                    {!detailed ? (
                      <a href="#pass" className="inline-flex items-center gap-1 text-xs font-bold text-indigo hover:underline">
                        <Icon name="lock" size={13} /> {t.lockedHint}
                      </a>
                    ) : null}
                  </h3>
                  <ol className="mt-4 space-y-3 border-l border-line pl-4">
                    {day.stops.map((stop, i) => (
                      <li key={i} className="relative">
                        <span className="absolute top-1.5 -left-[21px] h-2 w-2 rounded-full border-2 border-paper bg-indigo" />
                        {detailed ? (
                          <p className="text-[11px] font-bold tracking-wide text-ink-faint uppercase">{stop.time}</p>
                        ) : null}
                        {stop.href ? (
                          <Link href={l(locale, stop.href)} className="font-bold hover:text-indigo">
                            {stop.label} →
                          </Link>
                        ) : (
                          <p className="font-bold">{stop.label}</p>
                        )}
                        {detailed ? (
                          <p className="text-sm text-ink-soft">{stop.note}</p>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                  {day.day === 1 && !pass ? (
                    <p className="mt-3 border-t border-line pt-3 text-xs text-ink-faint">{t.teaserNote}</p>
                  ) : null}
                </section>
              );
            })}
          </div>

          {mapMarkers.length > 1 ? (
            <div className="mt-5">
              <LeafletMap markers={mapMarkers} polyline height="h-[320px]" />
            </div>
          ) : null}

          {/* ---- Route Pass (paid layer) ---- */}
          <section id="pass" className="mt-8 rounded-[8px] border-2 border-indigo/25 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="flex items-center gap-2 font-display text-xl font-bold">
                  {pass ? <Icon name="check" size={18} className="text-celadon" /> : <Icon name="lock" size={18} className="text-indigo" />}
                  {t.proTitle}
                  {pass ? (
                    <span className="text-xs font-bold text-celadon">{t.unlocked}</span>
                  ) : null}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm text-ink-soft">{t.proSub}</p>
              </div>
              {!pass ? (
                <div className="text-right">
                  <p className="font-display text-lg font-bold text-indigo">{t.proPrice}</p>
                  <p className="text-xs text-ink-faint">{t.proInsider}</p>
                </div>
              ) : null}
            </div>

            {!pass ? (
              PAYMENTS.passCheckoutUrl ? (
                <div className="mt-4 space-y-4">
                  <a
                    href={PAYMENTS.passCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-[8px] bg-indigo px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
                  >
                    {t.unlock} →
                  </a>
                  <div className="border-t border-line pt-4">
                    <label className="text-sm font-semibold text-ink-soft">
                      {t.haveKey}
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <input
                        value={licenseKey}
                        onChange={(e) => { setLicenseKey(e.target.value); setKeyState("idle"); }}
                        placeholder={t.licensePlaceholder}
                        className="min-w-0 flex-1 rounded-[8px] border border-line px-3 py-2 text-sm outline-none focus:border-indigo"
                      />
                      <button
                        type="button"
                        onClick={activateKey}
                        disabled={licenseKey.trim().length < 6 || keyState === "busy"}
                        className="rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep disabled:opacity-50"
                      >
                        {t.activate}
                      </button>
                    </div>
                    {keyState === "invalid" ? (
                      <p className="mt-1.5 text-sm text-kred">{t.keyInvalid}</p>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => { grantPass(); setPass(true); }}
                    className="rounded-[8px] bg-indigo px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-deep"
                  >
                    {t.demoUnlock}
                  </button>
                  <p className="text-xs text-ink-faint">{t.demoNote}</p>
                </div>
              )
            ) : (
              <div className="mt-5 space-y-5">
                {/* Booking deadlines */}
                {deadlines.length > 0 ? (
                  <div>
                    <h4 className="text-sm font-bold">{t.bookingDeadlines}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {deadlines.map((d) => (
                        <li key={d.name} className="flex gap-2 text-sm text-ink-soft">
                          <Icon name="clock" size={15} className="mt-0.5 shrink-0 text-indigo" />
                          <span>
                            <span className="font-bold">{d.name}</span> — {d.booking}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* PDF + email */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => requestPdf(false)}
                    disabled={mailState === "busy"}
                    className="inline-flex items-center gap-1.5 rounded-[8px] border border-indigo px-4 py-2 text-sm font-bold text-indigo hover:bg-indigo-soft disabled:opacity-50"
                  >
                    <Icon name="download" size={15} /> {t.downloadPdf}
                  </button>
                  {emailEnabled ? (
                    <div className="flex flex-1 gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="min-w-0 flex-1 rounded-[8px] border border-line px-3 py-2 text-sm outline-none focus:border-indigo"
                      />
                      <button
                        type="button"
                        onClick={() => requestPdf(true)}
                        disabled={!email.includes("@") || mailState === "busy"}
                        className="inline-flex items-center gap-1.5 rounded-[8px] bg-indigo px-4 py-2 text-sm font-bold text-white hover:bg-indigo-deep disabled:opacity-50"
                      >
                        <Icon name="mail" size={15} /> {t.emailMe}
                      </button>
                    </div>
                  ) : null}
                </div>
                {!emailEnabled ? (
                  <p className="text-xs text-ink-faint">{t.emailSoon}</p>
                ) : null}
                {mailState === "sent" ? (
                  <p className="text-sm font-bold text-celadon">{t.emailSent}</p>
                ) : null}
                {mailState === "demo" ? (
                  <p className="text-sm text-ink-faint">{t.emailDemo}</p>
                ) : null}
              </div>
            )}
          </section>

          <div className="mt-6 rounded-[8px] bg-band p-5 text-center">
            <Link
              href={l(locale, "/community")}
              className="inline-block rounded-[8px] bg-[#5865F2] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
            >
              {t.shareDiscord} →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
