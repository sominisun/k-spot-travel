export type LensConnectionType =
  | "exact"
  | "cultural-context"
  | "editorial-pairing";

export type VerificationState = "confirmed" | "not-confirmed" | "editorial";

export interface EvidenceRecord {
  id: string;
  publisher: string;
  title: string;
  url: string;
  sourceTier: "A" | "B" | "C";
  sourceType: "official-title" | "filming" | "place-operations" | "culture";
  supports: string[];
  accessedAt: string;
  language: string;
}

export interface OperationalFact {
  kind: "hours" | "closure" | "admission" | "transit";
  label: string;
  value: string;
  sourceId: string;
  checkedAt: string;
  volatility: "low" | "medium" | "high";
}

export interface PlaceRecord {
  slug: string;
  name: string;
  koreanName: string;
  region: "jeju";
  area: string;
  officialAddress: string;
  lat: number;
  lng: number;
  coordinateType: "entrance" | "center" | "approximate";
  visitability: "public" | "limited";
  officialSourceIds: string[];
  operationalFacts: OperationalFact[];
}

export interface LensExperience {
  id: string;
  placeSlug: string;
  connectionType: LensConnectionType;
  evidenceIds: string[];
  badge: string;
  contextLabel: string;
  whyHere: string;
  screenContext: string;
  travelerDecision: string;
  visitDecisions: string[];
  isOptional: boolean;
  imageSlug?: string;
}

export interface LensChoice {
  id: "east-jeju" | "west-jeju";
  label: string;
  eyebrow: string;
  signals: string[];
  experienceIds: string[];
  durationLabel: string;
  choiceNote: string;
  routeSummary: string;
  isPrimary: boolean;
}

export interface TripCutStop {
  timeLabel: string;
  title: string;
  note: string;
  optional?: boolean;
}

export interface KoreaLensRecord {
  slug: string;
  workSlug: string;
  status: "draft" | "review" | "published" | "stale";
  title: string;
  originalTitle: string;
  dek: string;
  lensThesis: string[];
  spoilerLevel: "light";
  durationLabel: string;
  heroMediaId: string;
  lastEditorialReview: string;
  fieldChecked: boolean;
  choices: LensChoice[];
  experiences: LensExperience[];
  places: PlaceRecord[];
  evidence: EvidenceRecord[];
  tripCuts: Record<LensChoice["id"], TripCutStop[]>;
  culturalActions: { title: string; context: string; action: string }[];
  realityChecks: {
    label: string;
    status: string;
    state: VerificationState;
  }[];
  sources: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const CHECKED_AT = "2026-09-06";

export const wlgYTJejuLens: KoreaLensRecord = {
  slug: "when-life-gives-you-tangerines",
  workSlug: "when-life-gives-you-tangerines",
  status: "review",
  title: "When Life Gives You Tangerines — The Jeju It Showed Us",
  originalTitle: "폭싹 속았수다",
  dek: "Understand the island behind the story, then choose one part of it to experience well.",
  lensThesis: [
    "Jeju is not scenery placed behind Ae-sun and Gwan-sik. Distance, weather and work shape what their family can dream of — and what it costs to keep going.",
    "Start with the people and the labor, then look at the landscape. The coast will mean more than a familiar frame.",
  ],
  spoilerLevel: "light",
  durationLabel: "5–7 hours",
  heroMediaId: "seongsan-ilchulbong",
  lastEditorialReview: CHECKED_AT,
  fieldChecked: false,
  choices: [
    {
      id: "east-jeju",
      label: "East Jeju",
      eyebrow: "The deeper Lens",
      signals: ["haenyeo", "sea labor", "volcanic coast"],
      experienceIds: ["haenyeo-museum", "seongsan", "seopjikoji"],
      durationLabel: "5–7 hours",
      choiceNote: "Choose this if the haenyeo, island work and exposed coast stayed with you.",
      routeSummary: "Museum → local lunch → Seongsan → optional cape",
      isPrimary: true,
    },
    {
      id: "west-jeju",
      label: "West Jeju",
      eyebrow: "The lighter option",
      signals: ["quiet coast", "slow walk", "sunset"],
      experienceIds: ["handam"],
      durationLabel: "2–3 hours",
      choiceNote: "Choose this if you want a simple coast walk without crossing the island.",
      routeSummary: "Aewol Port → Handam coast → Gwakji",
      isPrimary: false,
    },
  ],
  experiences: [
    {
      id: "haenyeo-museum",
      placeSlug: "jeju-haenyeo-museum",
      connectionType: "cultural-context",
      evidenceIds: ["kto-haenyeo-museum", "unesco-haenyeo"],
      badge: "Cultural context",
      contextLabel: "Start here · Indoor",
      whyHere:
        "Ae-sun’s mother belongs to Jeju’s haenyeo community. The museum turns the series’ sea scenes from picturesque images into labor, knowledge and inheritance.",
      screenContext:
        "On screen, women enter the sea as part of family survival and village life. Here, tools and donated objects reveal the system behind that work.",
      travelerDecision:
        "Visit before the coast if you want the landscape to carry the story’s meaning. Skip only if your day cannot hold an hour indoors.",
      visitDecisions: [
        "Allow about one hour for the permanent displays.",
        "Look for the reconstructed haenyeo house and food-culture sections.",
        "Treat live demonstrations as weather- and operation-dependent.",
      ],
      isOptional: false,
    },
    {
      id: "seongsan",
      placeSlug: "seongsan-ilchulbong",
      connectionType: "exact",
      evidenceIds: ["kto-wlgyt-filming", "visit-jeju-seongsan"],
      badge: "Exact place",
      contextLabel: "Officially confirmed · Outdoor",
      whyHere:
        "The Korea Tourism Organization identifies Seongsan Ilchulbong as a filming location for the series. It is the Pilot’s only screen connection that meets K-SPOT’s official-source threshold.",
      screenContext:
        "The official source does not identify an exact episode, scene or camera position. This Lens does not turn a fan association into a fact.",
      travelerDecision:
        "Choose the free lower coast for scale and sea; choose the paid summit for the crater and wider view. Strong wind and stairs should decide for you.",
      visitDecisions: [
        "Free base: the landscape without a sustained climb.",
        "Paid summit: stairs, weather exposure and a wider view.",
        "Check current hours and last ticketing before departure.",
      ],
      isOptional: false,
      imageSlug: "seongsan-ilchulbong",
    },
    {
      id: "seopjikoji",
      placeSlug: "seopjikoji",
      connectionType: "editorial-pairing",
      evidenceIds: ["visit-jeju-seopjikoji"],
      badge: "Editor’s pairing",
      contextLabel: "Optional finish · Outdoor",
      whyHere:
        "This cape gives an East Jeju day a coherent coastal ending, with Seongsan in the wider landscape, without sending you across the island.",
      screenContext:
        "K-SPOT has not found an official source confirming it as a filming location for this title. Visit it as part of the island the story helps you notice.",
      travelerDecision:
        "Go if the sky is clear and you still want open coast. Skip if wind, fading light or a full day make the extra stop feel forced.",
      visitDecisions: [
        "Make the decision after Seongsan, not before the trip.",
        "Check the live bus route if you are not driving.",
        "Parking charges may apply even without general admission.",
      ],
      isOptional: true,
      imageSlug: "seopjikoji",
    },
    {
      id: "handam",
      placeSlug: "handam-coastal-trail",
      connectionType: "editorial-pairing",
      evidenceIds: ["kto-handam"],
      badge: "Editor’s pairing",
      contextLabel: "West alternative · Outdoor",
      whyHere:
        "Handam is a compact western-coast alternative for travelers who want Jeju’s shore more than a filming-location checklist.",
      screenContext:
        "K-SPOT has not found an official source confirming Handam as a filming location for this series. The connection is thematic and openly labeled.",
      travelerDecision:
        "Choose this for a short, unhurried coast walk. Do not add the east route on the same day just to complete a list.",
      visitDecisions: [
        "The signed coastal section is about 1.2 km.",
        "Walk from Aewol toward Gwakji for a simple one-direction plan.",
        "Allow extra time for crowded cafés and parking at peak periods.",
      ],
      isOptional: false,
    },
  ],
  places: [
    {
      slug: "jeju-haenyeo-museum",
      name: "Jeju Haenyeo Museum",
      koreanName: "제주해녀박물관",
      region: "jeju",
      area: "Gujwa-eup, Jeju City",
      officialAddress: "26 Haenyeobangmulgwan-gil, Gujwa-eup, Jeju-si",
      lat: 33.52361,
      lng: 126.86343,
      coordinateType: "entrance",
      visitability: "public",
      officialSourceIds: ["kto-haenyeo-museum"],
      operationalFacts: [
        { kind: "hours", label: "Hours", value: "09:00–18:00 · last admission 17:00", sourceId: "kto-haenyeo-museum", checkedAt: CHECKED_AT, volatility: "medium" },
        { kind: "closure", label: "Closed", value: "Mondays and listed holiday dates", sourceId: "kto-haenyeo-museum", checkedAt: CHECKED_AT, volatility: "medium" },
        { kind: "admission", label: "Admission", value: "Adult KRW 1,100 at last remote check", sourceId: "kto-haenyeo-museum", checkedAt: CHECKED_AT, volatility: "medium" },
      ],
    },
    {
      slug: "seongsan-ilchulbong",
      name: "Seongsan Ilchulbong",
      koreanName: "성산일출봉",
      region: "jeju",
      area: "Seongsan-eup, Seogwipo",
      officialAddress: "284-12 Ilchul-ro, Seongsan-eup, Seogwipo-si",
      lat: 33.45889,
      lng: 126.94082,
      coordinateType: "entrance",
      visitability: "public",
      officialSourceIds: ["visit-jeju-seongsan"],
      operationalFacts: [
        { kind: "hours", label: "Hours", value: "Seasonal opening; last ticketing one hour before close", sourceId: "visit-jeju-seongsan", checkedAt: CHECKED_AT, volatility: "high" },
        { kind: "closure", label: "Closed", value: "First Monday of each month; holiday exceptions apply", sourceId: "visit-jeju-seongsan", checkedAt: CHECKED_AT, volatility: "medium" },
        { kind: "admission", label: "Summit", value: "Adult KRW 5,000 at last remote check", sourceId: "visit-jeju-seongsan", checkedAt: CHECKED_AT, volatility: "medium" },
      ],
    },
    {
      slug: "seopjikoji",
      name: "Seopjikoji",
      koreanName: "섭지코지",
      region: "jeju",
      area: "Seongsan-eup, Seogwipo",
      officialAddress: "262 Seopjikoji-ro, Seongsan-eup, Seogwipo-si",
      lat: 33.42369,
      lng: 126.9296,
      coordinateType: "entrance",
      visitability: "public",
      officialSourceIds: ["visit-jeju-seopjikoji"],
      operationalFacts: [
        { kind: "admission", label: "Cost", value: "No general admission listed; parking charges apply", sourceId: "visit-jeju-seopjikoji", checkedAt: CHECKED_AT, volatility: "medium" },
      ],
    },
    {
      slug: "handam-coastal-trail",
      name: "Handam Coastal Trail",
      koreanName: "한담해안산책로",
      region: "jeju",
      area: "Aewol-eup, Jeju City",
      officialAddress: "Aewol-ri to Gwakji, Aewol-eup, Jeju-si",
      lat: 33.4653,
      lng: 126.3079,
      coordinateType: "center",
      visitability: "public",
      officialSourceIds: ["kto-handam"],
      operationalFacts: [
        { kind: "admission", label: "Trail", value: "Open year-round · free", sourceId: "kto-handam", checkedAt: CHECKED_AT, volatility: "low" },
      ],
    },
  ],
  evidence: [
    {
      id: "netflix-wlgyt-title",
      publisher: "Netflix",
      title: "When Life Gives You Tangerines",
      url: "https://www.netflix.com/title/81681535",
      sourceTier: "A",
      sourceType: "official-title",
      supports: ["Official title and series identity"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "kto-wlgyt-filming",
      publisher: "Korea Tourism Organization",
      title: "Jeju feature identifying Seongsan as a filming location",
      url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=222085",
      sourceTier: "A",
      sourceType: "filming",
      supports: ["Seongsan Ilchulbong is a filming location for the series"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "unesco-haenyeo",
      publisher: "UNESCO",
      title: "Culture of Jeju Haenyeo",
      url: "https://ich.unesco.org/en/RL/culture-of-jeju-haenyeo-women-divers-01068?RL=01068",
      sourceTier: "A",
      sourceType: "culture",
      supports: ["Haenyeo knowledge, community organization and transmission"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "kto-haenyeo-museum",
      publisher: "VISITKOREA",
      title: "Jeju Haenyeo Museum",
      url: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=103315",
      sourceTier: "A",
      sourceType: "place-operations",
      supports: ["Museum exhibits, address, hours, closures and admission"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "visit-jeju-seongsan",
      publisher: "Visit Jeju",
      title: "Seongsan Ilchulbong",
      url: "https://www.visitjeju.net/en/detail/view?contentsid=CONT_000000000500349&menuId=DOM_000001703010002000",
      sourceTier: "A",
      sourceType: "place-operations",
      supports: ["Address, seasonal access, closure and admission"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "visit-jeju-seopjikoji",
      publisher: "Visit Jeju",
      title: "Seopjikoji",
      url: "https://m.visitjeju.net/en/detail/view?contentsid=CONT_000000000500343&menuId=DOM_700000000010774",
      sourceTier: "A",
      sourceType: "place-operations",
      supports: ["Address, public access and eastern-coast context"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
    {
      id: "kto-handam",
      publisher: "VISITKOREA",
      title: "Handam Coastal Trail",
      url: "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=113111",
      sourceTier: "A",
      sourceType: "place-operations",
      supports: ["Trail length, year-round access and admission"],
      accessedAt: CHECKED_AT,
      language: "en",
    },
  ],
  tripCuts: {
    "east-jeju": [
      { timeLabel: "Morning", title: "Jeju Haenyeo Museum", note: "Understand the work before seeing the coast." },
      { timeLabel: "Midday", title: "Local lunch", note: "Choose what is open; avoid chasing one fragile must-book list." },
      { timeLabel: "Afternoon", title: "Seongsan Ilchulbong", note: "Choose the free base or paid summit for your weather and mobility." },
      { timeLabel: "If the day has room", title: "Seopjikoji", note: "Let the coast finish the day, or stop without guilt.", optional: true },
    ],
    "west-jeju": [
      { timeLabel: "Late afternoon", title: "Aewol Port", note: "Begin when the café rush starts to soften." },
      { timeLabel: "Golden hour", title: "Handam Coastal Trail", note: "Walk one coast slowly; this is an editorial pairing, not a filming claim." },
      { timeLabel: "Finish", title: "Gwakji direction", note: "Turn back whenever weather or light says the walk is complete.", optional: true },
    ],
  },
  culturalActions: [
    {
      title: "Haenyeo are a working community",
      context: "Diving is the visible part of shared knowledge, rules and family survival.",
      action: "Learn first, keep distance from active work areas, and never request a staged photo.",
    },
    {
      title: "The title is a thank-you",
      context: "The Korean title carries the sense of ‘thank you for all your hard work.’",
      action: "Notice the labor behind a meal, field and family business instead of collecting tangerine props.",
    },
    {
      title: "Distance is part of Jeju",
      context: "Transfers, coast roads and weather stretch a small-island map.",
      action: "Choose one emotional thread and leave the other coast for another day.",
    },
  ],
  realityChecks: [
    { label: "Series premise and Jeju setting", status: "Netflix official sources", state: "confirmed" },
    { label: "Seongsan as a filming location", status: "Confirmed by KTO", state: "confirmed" },
    { label: "Exact Seongsan scene and camera position", status: "Not confirmed · omitted", state: "not-confirmed" },
    { label: "Seopjikoji and Handam", status: "Editorial pairings · no filming claim", state: "editorial" },
    { label: "K-SPOT on-site visit", status: "Not yet conducted", state: "not-confirmed" },
  ],
  sources: [
    "netflix-wlgyt-title",
    "kto-wlgyt-filming",
    "unesco-haenyeo",
    "kto-haenyeo-museum",
    "visit-jeju-seongsan",
    "visit-jeju-seopjikoji",
    "kto-handam",
  ],
  seo: {
    title: "When Life Gives You Tangerines Jeju Guide: What to Experience",
    description:
      "Choose an East or West Jeju experience through When Life Gives You Tangerines, with one verified filming location, haenyeo context and a practical trip cut.",
    keywords: [
      "when life gives you tangerines jeju filming location",
      "when life gives you tangerines travel guide",
      "jeju haenyeo museum",
      "seongsan filming location",
    ],
  },
};

export function placeForLens(slug: string): PlaceRecord {
  const place = wlgYTJejuLens.places.find((item) => item.slug === slug);
  if (!place) throw new Error(`Missing Korea Lens place: ${slug}`);
  return place;
}

export function evidenceForLens(id: string): EvidenceRecord {
  const evidence = wlgYTJejuLens.evidence.find((item) => item.id === id);
  if (!evidence) throw new Error(`Missing Korea Lens evidence: ${id}`);
  return evidence;
}
