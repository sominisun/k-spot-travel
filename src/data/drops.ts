// The Weekly Drop — one editorial dispatch per week (fandom engine #3).
// Operator routine: add one entry at the top, push. Newest first.
// Insiders see drops the moment they publish; the newsletter recaps weekly.
export interface Drop {
  slug: string;
  date: string; // yyyy-mm-dd
  tag: "new-spots" | "re-verified" | "playbook";
  title: string;
  excerpt: string;
  body: string[];
  links: { label: string; href: string }[];
  /** Insider early access: body stays locked for the public until this date */
  insiderUntil?: string; // yyyy-mm-dd
}

export const DROPS: Drop[] = [
  {
    slug: "scene-recreation-guides",
    date: "2026-07-19",
    insiderUntil: "2026-07-26",
    tag: "playbook",
    title: "Scene-recreation guides land on 23 spot pages",
    excerpt:
      "Where to stand, which direction, what time of day — every major pilgrimage spot now carries a shot recipe and an honest 'what it's like now' note.",
    body: [
      "The one-line scene note grows up: 23 of the most-visited pairs — Goblin's breakwater, the Iseltwald pier, Geumga Plaza's rooftop, Lovely Runner's umbrella bridge and more — now tell you exactly where to plant your feet, which way to face, and which hour delivers the frame. Episode tags appear only where a scene's placement is beyond doubt.",
      "Each guide comes with a field-honest counterweight: what the place is actually like today — the queue at the photo frame, the quiet-hours rules, the seasons that match the screen. Recreating a scene should never mean being surprised by reality.",
    ],
    links: [
      { label: "Try one: Jumunjin breakwater", href: "/spots/jumunjin-breakwater" },
      { label: "All filming spots", href: "/spots" },
    ],
  },
  {
    slug: "vincenzo-geumga-plaza-photos",
    date: "2026-07-18",
    tag: "new-spots",
    title: "Vincenzo's Geumga Plaza, photographed for real",
    excerpt:
      "Sewoon Sangga and Common Ground join the photo archive — plus why the brutalist mega-arcade is Seoul's most underrated pilgrimage.",
    body: [
      "Fans kept asking whether Geumga Plaza exists. It does — it's Sewoon Sangga, the 1968 mega-arcade whose rooftop walkway serves the exact skyline the drama's finale used. We've added verified, openly licensed photography for it and for Common Ground's blue containers, both with full credits.",
      "Go at golden hour: the rooftop deck lines up Jongmyo's roofs against the towers, and the arcade's electronics stalls below are a time machine. Pair it with Gwangjang Market ten minutes east and you have Vincenzo's whole Seoul in an afternoon.",
    ],
    links: [
      { label: "Vincenzo filming spots", href: "/shows/vincenzo" },
      { label: "Sewoon Sangga guide", href: "/spots/sewoon-sangga" },
    ],
  },
  {
    slug: "six-new-shows-disney-apple",
    date: "2026-07-11",
    tag: "new-spots",
    title: "Six new worlds: Moving, Pachinko, Vincenzo, 2521, Our Blues, King the Land",
    excerpt:
      "The map now covers Disney+ and Apple TV+ — 11 newly verified locations from Busan's Yeongdo to Suwon's fortress lanes.",
    body: [
      "The lineup grows from 14 to 20 titles, and for the first time it crosses OTT lines: Moving brings Disney+'s everyday-Seoul superpowers, Pachinko anchors Apple TV+'s chapters in Busan's Yeongdo and Jagalchi, and four Netflix favorites round out the set.",
      "Every addition follows the house rule — at least two physically visitable, source-verified locations, or the show doesn't ship. Eleven new spots made the cut; each carries its scene note, transit directions and a last-verified date.",
    ],
    links: [
      { label: "All 20 shows", href: "/shows" },
      { label: "Pachinko's Busan", href: "/shows/pachinko" },
    ],
  },
  {
    slug: "ccw-booking-playbook",
    date: "2026-07-04",
    tag: "playbook",
    title: "The Culinary Class Wars booking playbook, field-tested",
    excerpt:
      "Slots open ~30 days out and evaporate. Here's the exact alarm-to-table sequence for all 12 tracked restaurants.",
    body: [
      "Every restaurant page now carries its precise booking channel, drop timing and walk-in odds. The pattern that works: set a phone alarm for the 30-day drop at midnight KST, book the hardest table first (Mosu, then Choi Dot), and keep Tian Mi Mi as the reliable walk-in anchor.",
      "The planner's Route Pass builds these deadlines into your calendar automatically — reservation alarms land in your .ics with the trip itself.",
    ],
    links: [
      { label: "Every CCW restaurant", href: "/food" },
      { label: "CatchTable step-by-step", href: "/guide/booking-restaurants-catchtable" },
    ],
  },
];
