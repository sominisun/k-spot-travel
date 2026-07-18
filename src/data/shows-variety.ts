import type { Show, Spot } from "../lib/types";

// Variety, food shows and animation — the beyond-drama side of K-content travel.
export const shows: Show[] = [
  {
    slug: "kpop-demon-hunters",
    title: "KPop Demon Hunters",
    koreanTitle: "케이팝 데몬 헌터스",
    ott: ["netflix"],
    category: "animation",
    genres: ["Animation", "Fantasy", "Music"],
    years: "2025",
    status: "trending",
    popularity: 95,
    synopsis:
      "A superstar K-pop trio moonlights as demon hunters protecting their fans, until a rival boy band turns out to be the demons themselves. Netflix's animated smash sent its soundtrack — and Seoul itself — up the global charts.",
    whyVisit:
      "The film lovingly recreates real Seoul: Bukchon rooftops, the Naksan fortress wall, the tower where the final battle erupts. Netflix and Seoul's tourism board both published location guides, and 'set-jetting' fans have made these spots 2026's hottest pilgrimage.",
    filmingSpots: [
      {
        spotSlug: "namsan-seoul-tower",
        sceneNote:
          "The Saja Boys' 'Your Idol' stadium show — and the film's climactic battle — unfold beneath the tower.",
      },
      {
        spotSlug: "bukchon-hanok-village",
        sceneNote:
          "Rumi and Jinu meet among these tiled rooftops and later float above them singing 'Free'.",
      },
      {
        spotSlug: "naksan-park",
        sceneNote:
          "The fortress-wall park where Rumi and Jinu plot their next move over panoramic Seoul views.",
      },
      {
        spotSlug: "coex-kpop-square",
        sceneNote:
          "The giant curved LED screen of K-pop Square flashes through the film's idol-world montages.",
      },
      {
        spotSlug: "myeongdong-shopping-street",
        sceneNote:
          "The neon shopping streets mirrored in the trio's street-food and fan-meet scenes.",
      },
    ],
    themeColor: "plum",
  },
  {
    slug: "culinary-class-wars",
    title: "Culinary Class Wars",
    koreanTitle: "흑백요리사",
    ott: ["netflix"],
    category: "food",
    genres: ["Cooking", "Competition"],
    years: "2024–2025",
    status: "trending",
    popularity: 94,
    synopsis:
      "One hundred chefs — anonymous 'Black Spoon' challengers versus celebrated 'White Spoon' masters — battle through escalating cook-offs judged blind. The show that made the whole world hungry for Seoul.",
    whyVisit:
      "This is the rare show you can literally taste: the contestants' real restaurants saw bookings surge over 300% and pushed Korea to put gastro-tourism at the heart of its strategy. Our Food section maps every chef's restaurant we verified, with honest booking odds.",
    filmingSpots: [
      {
        spotSlug: "gwangjang-market",
        sceneNote:
          "The spiritual home of the food culture the show celebrates — bindaetteok griddles, yukhoe alley and mayak gimbap, all in one riotous arcade.",
      },
    ],
    themeColor: "gold",
  },
  {
    slug: "singles-inferno",
    title: "Single's Inferno",
    koreanTitle: "솔로지옥",
    ott: ["netflix"],
    category: "variety",
    genres: ["Dating", "Reality"],
    years: "2021–2025",
    status: "trending",
    popularity: 80,
    synopsis:
      "Gorgeous singles are stranded on a spartan island where only couples who match can escape to 'Paradise' — a luxury hotel night. Netflix's first Korean dating megahit, four seasons strong.",
    whyVisit:
      "You can book the actual Paradise: the resort used for the couples' escape nights is a real Incheon destination with pools, art and spas — a fun splurge stop before a flight home.",
    filmingSpots: [
      {
        spotSlug: "paradise-city-incheon",
        sceneNote:
          "'Paradise' itself — the art-filled resort where matched couples spend their prize night.",
      },
      {
        spotSlug: "saseungbongdo-island",
        sceneNote:
          "The uninhabited 'Inferno' island where contestants rough it between matches (viewable by boat; no regular public landing).",
      },
    ],
    themeColor: "coral",
  },
];

export const spots: Spot[] = [
  {
    slug: "bukchon-hanok-village",
    name: "Bukchon Hanok Village",
    koreanName: "북촌한옥마을",
    type: "village",
    region: "seoul",
    area: "Jongno-gu, Seoul",
    address: "Gyedong-gil, Jongno-gu, Seoul",
    description:
      "Six hundred years of tiled hanok rooftops folded between two palaces — Seoul's most photographed traditional quarter and the dreamlike stage of KPop Demon Hunters' rooftop duet.",
    howToGet: "Subway Line 3 to Anguk Station, Exit 2; follow signs uphill to Bukchon-ro 11-gil.",
    hours: "Resident-protection quiet hours enforced (roughly 17:00 close for main alleys)",
    admission: "Free",
    tips: [
      "People live here: whisper, don't block gates, and honor the posted visiting hours.",
      "Golden hour from the top of Bukchon-ro 11-gil gives the classic rooftop-and-tower shot.",
      "Weekday mornings before 10am are blissfully quiet.",
    ],
    mapQuery: "Bukchon Hanok Village, Seoul",
  },
  {
    slug: "naksan-park",
    name: "Naksan Park & Fortress Wall",
    koreanName: "낙산공원",
    type: "nature",
    region: "seoul",
    area: "Jongno-gu, Seoul",
    address: "Naksan-gil, Jongno-gu, Seoul",
    description:
      "A hilltop park where the old Seoul Fortress Wall snakes above the city — KPop Demon Hunters staged its quiet strategy scenes on these ramparts, with the skyline glittering beyond.",
    howToGet:
      "Subway Line 4 to Hyehwa Station, Exit 2, then a 15-min uphill walk through Ihwa Mural Village.",
    admission: "Free",
    tips: [
      "Go after dark — the wall is lit, the city spreads below, and the path stays safe and busy into the late evening.",
      "Approach through Ihwa Mural Village for a street-art bonus route.",
    ],
    mapQuery: "Naksan Park, Seoul",
  },
  {
    slug: "coex-kpop-square",
    name: "COEX K-pop Square",
    koreanName: "코엑스 케이팝 스퀘어",
    type: "landmark",
    region: "seoul",
    area: "Gangnam-gu, Seoul",
    address: "513 Yeongdong-daero, Gangnam-gu, Seoul",
    description:
      "The plaza with Korea's most famous curved LED mega-screen, flashing idol premieres and digital art — the beating billboard heart of KPop Demon Hunters' idol world.",
    howToGet: "Subway Line 2 to Samseong Station; direct COEX mall connection.",
    admission: "Free",
    tips: [
      "New K-pop comeback ads often premiere here — check fan schedules for takeover days.",
      "The Starfield Library inside COEX is a two-minute detour and a landmark in itself.",
    ],
    mapQuery: "COEX K-pop Square, Seoul",
  },
  {
    slug: "myeongdong-shopping-street",
    name: "Myeongdong Shopping Street",
    koreanName: "명동",
    type: "shopping",
    region: "seoul",
    area: "Jung-gu, Seoul",
    address: "Myeongdong-gil, Jung-gu, Seoul",
    description:
      "Korea's tourism ground zero: beauty flagships, street-food carts and neon canyons. It anchors KPop Demon Hunters' street scenes and doubles as the launchpad for any K-beauty haul.",
    howToGet: "Subway Line 4 to Myeongdong Station, Exits 6–8.",
    admission: "Free",
    tips: [
      "Street-food carts fire up from late afternoon; go hungry after 4pm.",
      "The Olive Young flagship here is the single best one-stop K-beauty run — see our Beauty guide.",
    ],
    mapQuery: "Myeongdong, Seoul",
  },
  {
    slug: "gwangjang-market",
    name: "Gwangjang Market",
    koreanName: "광장시장",
    type: "market",
    region: "seoul",
    area: "Jongno-gu, Seoul",
    address: "88 Changgyeonggung-ro, Jongno-gu, Seoul",
    description:
      "A century-old covered market that global food shows keep returning to — sizzling mung-bean pancakes, mayak gimbap, and the raw-beef yukhoe alley. The living context for everything Culinary Class Wars celebrates.",
    howToGet: "Subway Line 1 to Jongno 5-ga Station, Exit 8 — the arcade entrance is steps away.",
    hours: "Food alley roughly 09:00–22:00 (stalls vary; many close Sundays)",
    admission: "Free",
    tips: [
      "Sit where the ajumma waves you in — shared benches are the experience.",
      "Cash still rules some stalls; carry KRW 10,000 notes.",
      "Go at 10am or 3pm to eat without elbow combat.",
    ],
    mapQuery: "Gwangjang Market, Seoul",
  },
  {
    slug: "paradise-city-incheon",
    name: "Paradise City Resort",
    koreanName: "파라다이스시티",
    type: "themepark",
    region: "incheon",
    area: "Jung-gu, Incheon",
    address: "186 Yeongjonghaeannam-ro 321beon-gil, Jung-gu, Incheon",
    description:
      "The art-stuffed integrated resort minutes from Incheon Airport that plays 'Paradise' in Single's Inferno — hotels, pools, a chroma nightlife zone and museum-grade installations.",
    howToGet:
      "Incheon Airport Maglev or free shuttle from Terminal 1 (about 5–10 min).",
    admission: "Free to wander public zones; day-spa/pool passes sold separately",
    tips: [
      "Perfect final-night splurge before an early flight.",
      "The art collection (Kusama, Hirst) is free to view in the public halls.",
    ],
    mapQuery: "Paradise City, Incheon",
  },
  {
    slug: "saseungbongdo-island",
    name: "Saseungbongdo Island",
    koreanName: "사승봉도",
    type: "island",
    region: "incheon",
    area: "Ongjin-gun, Incheon",
    address: "Saseungbongdo, Ongjin-gun, Incheon",
    description:
      "The uninhabited sandbar island that plays 'Inferno' — wide tidal beaches and grass dunes, camera-ready in its emptiness. There is no regular ferry; fans usually admire it from Deokjeokdo-area boat tours.",
    howToGet:
      "No scheduled public access. Ferries run from Incheon to nearby Deokjeokdo; private charters occasionally circle Saseungbongdo.",
    admission: "Not publicly accessible",
    tips: [
      "Treat this one as a 'seen from the water' stop — the Deokjeokdo day trip is lovely on its own.",
      "For the Inferno vibe with actual access, the tidal flats of Ongjin's inhabited islands come close.",
    ],
    mapQuery: "Saseungbongdo, Ongjin-gun, Incheon",
  },
];
