import type { Show, Spot } from "../lib/types";

// v2 expansion — Disney+ / Apple TV+ / additional Netflix titles.
// Every filming claim verified against official tourism pages or major press
// (Visit Seoul "Moving" feature, Busan/IndieWire for Pachinko, Visit Seoul &
// Creatrip for Vincenzo, Jeonju City for 2521, KKday/VisitKorea for Our Blues).
export const shows: Show[] = [
  {
    slug: "moving",
    title: "Moving",
    koreanTitle: "무빙",
    ott: ["disney"],
    category: "kdrama",
    genres: ["Superhero", "Action", "Family"],
    years: "2023–",
    status: "trending",
    popularity: 88,
    synopsis:
      "Teenagers hiding superpowers — and the retired agents who happen to be their parents — are pulled out of ordinary Seoul life when their past comes calling. Disney+'s biggest Korean hit blends wire-fu spectacle with an unusually warm family core.",
    whyVisit:
      "Moving's superpowers live in deliberately ordinary places: a market stall, a riverside path, a lunch street under Namsan. Standing in them, you get the show's whole thesis — the extraordinary hiding inside the everyday.",
    filmingSpots: [
      {
        spotSlug: "dongdaemun-market",
        sceneNote:
          "The market where Jang Ju-won's past life plays out — real stalls, real steam, unchanged since the scenes aired.",
      },
      {
        spotSlug: "yongnidan-gil",
        sceneNote:
          "The Yongsan backstreets that anchor the show's present-day Seoul — now one of the city's coolest food alleys.",
      },
      {
        spotSlug: "bulgwangcheon-stream",
        sceneNote:
          "The neighborhood stream where flight scenes were staged — locals jog it daily, blissfully unaware they're on a superhero route.",
      },
    ],
    themeColor: "night",
  },
  {
    slug: "pachinko",
    title: "Pachinko",
    koreanTitle: "파친코",
    ott: ["appletv"],
    category: "kdrama",
    genres: ["Historical", "Family saga", "Drama"],
    years: "2022–2024",
    status: "evergreen",
    popularity: 78,
    synopsis:
      "Four generations of one Korean family, from a fishing village under occupation to Osaka's pachinko parlors. Apple TV+'s sweeping saga made Busan's seascapes a character of their own.",
    whyVisit:
      "Sun-ja's Korea is the emotional anchor of the whole saga. Yeongdo's cliffs and the hanok lanes that stood in for her village give the story a physical home you can actually walk.",
    filmingSpots: [
      {
        spotSlug: "taejongdae",
        sceneNote:
          "Yeongdo's cliff-and-sea scenery from Sun-ja's youth — the coastal Busan the series returns to in memory.",
      },
      {
        spotSlug: "hahoe-village",
        sceneNote:
          "The preserved Andong village whose lanes, river laundry spot and old houses played 1910s Yeongdo.",
      },
    ],
    themeColor: "ocean",
  },
  {
    slug: "vincenzo",
    title: "Vincenzo",
    koreanTitle: "빈센조",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Dark comedy", "Crime", "Romance"],
    years: "2021",
    status: "evergreen",
    popularity: 84,
    synopsis:
      "A Korean-Italian mafia consigliere returns to Seoul to recover hidden gold — and accidentally becomes the guardian devil of a shabby plaza full of misfits. Song Joong-ki at his most quotable.",
    whyVisit:
      "Geumga Plaza is real. The brutalist arcade playing the show's beloved building is one of Seoul's great retro landmarks — fans walk its walkways grinning at every corner they recognize.",
    filmingSpots: [
      {
        spotSlug: "sewoon-sangga",
        sceneNote:
          "Sewoon Plaza played Geumga Plaza, the drama's true main character — its rooftop deck has the skyline-meets-palace view.",
      },
      {
        spotSlug: "common-ground-seoul",
        sceneNote:
          "The container-mall backdrop for the show's lighter beats — Seoul's blue shipping-crate landmark in Konkuk.",
      },
    ],
    themeColor: "gold",
  },
  {
    slug: "twenty-five-twenty-one",
    title: "Twenty-Five Twenty-One",
    koreanTitle: "스물다섯 스물하나",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Coming-of-age", "Romance", "Sports"],
    years: "2022",
    status: "evergreen",
    popularity: 82,
    synopsis:
      "A teenage fencer and a young reporter grow up through the IMF years — a bittersweet first-love story that made an entire generation cry about a tunnel.",
    whyVisit:
      "Jeonju's hanok lanes and one modest riverside tunnel carry more feelings per square meter than any set in K-drama. Fans come to stand where Hee-do and Yi-jin's seasons turned.",
    filmingSpots: [
      {
        spotSlug: "hanbyeok-tunnel",
        sceneNote:
          "THE tunnel — where feelings were confessed and, seasons later, released. Go at golden hour and bring tissues.",
      },
      {
        spotSlug: "jeonju-hanok-village",
        sceneNote:
          "The neighborhood texture of Hee-do's world — hanok rooftops, stream-side paths and the alleys of every bicycle scene.",
      },
    ],
    themeColor: "mint",
  },
  {
    slug: "our-blues",
    title: "Our Blues",
    koreanTitle: "우리들의 블루스",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Slice of life", "Ensemble", "Drama"],
    years: "2022",
    status: "evergreen",
    popularity: 80,
    synopsis:
      "Fourteen lives orbit a Jeju market village — haenyeo divers, truck vendors, first loves and old wounds — in an omnibus that treats ordinary people as the main event.",
    whyVisit:
      "The drama's Pureung Village is stitched from real western Jeju: a gold-sand beach facing Biyangdo and the five-day market culture its Seopseop Market recreates. It's Jeju at its most lived-in.",
    filmingSpots: [
      {
        spotSlug: "geumneung-beach",
        sceneNote:
          "The Pureung coastline — shallow turquoise water, black rocks, Biyangdo on the horizon, haenyeo at work in the mornings.",
      },
      {
        spotSlug: "goseong-five-day-market",
        sceneNote:
          "The real five-day-market world behind the show's Seopseop Market — come on a market day and walk straight into the drama's rhythm.",
      },
    ],
    themeColor: "forest",
  },
  {
    slug: "king-the-land",
    title: "King the Land",
    koreanTitle: "킹더랜드",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Rom-com", "Workplace"],
    years: "2023",
    status: "evergreen",
    popularity: 79,
    synopsis:
      "A hotelier who must smile for a living and an heir allergic to fake smiles — a five-star rom-com that turned two real luxury resorts into the fictional King Hotel.",
    whyVisit:
      "You can sleep inside this one. The King Hotel is stitched from two real properties fans can visit for a staycation, a spa day or just a very cinematic lobby coffee.",
    filmingSpots: [
      {
        spotSlug: "paradise-city-incheon",
        sceneNote:
          "The resort's glossy interiors played the King Hotel — the lobby, pools and art pieces all appear on screen.",
      },
      {
        spotSlug: "aston-house-walkerhill",
        sceneNote:
          "Walkerhill's hillside grounds and banquet spaces stood in for the hotel's grandest occasions.",
      },
    ],
    themeColor: "plum",
  },
];

export const spots: Spot[] = [
  {
    slug: "dongdaemun-market",
    name: "Dongdaemun Market",
    koreanName: "동대문시장",
    type: "market",
    region: "seoul",
    area: "Jongno-gu, Seoul",
    address: "12 Jong-ro 36-gil, Jongno-gu, Seoul",
    description:
      "Seoul's oldest mega-market — fabric floors, mung-bean pancake alleys and wholesale energy around the clock. Moving grounded its most human backstory here, among stalls that have run for generations.",
    howToGet:
      "Subway Line 1/4 Dongdaemun Station, exit 8-9; the traditional market blocks start immediately west.",
    hours: "Most sections 08:00–19:00 (many stalls closed Sundays)",
    tips: [
      "Go hungry: the mung-bean pancake (bindaetteok) row doubles as lunch.",
      "Wholesale floors wake up at night — daytime is calmer for browsing.",
      "Pair with Gwangjang Market, one stop away, for a full market day.",
    ],
    mapQuery: "Dongdaemun Market, Seoul",
  },
  {
    slug: "yongnidan-gil",
    name: "Yongnidan-gil",
    koreanName: "용리단길",
    type: "street",
    region: "seoul",
    area: "Yongsan-gu, Seoul",
    address: "Hangang-ro 2-ga, Yongsan-gu, Seoul (between Sinyongsan & Samgakji stations)",
    description:
      "The low-rise Yongsan lanes that boomed into one of Seoul's hottest food streets — and served as Moving's everyday-Seoul backdrop. Old repair shops sit next to natural-wine bars in the show's exact palette.",
    howToGet:
      "Subway Line 4/6 Samgakji Station exit 1, or Line 1 Sinyongsan Station exit 3; the grid between them is the street.",
    tips: [
      "Weekday lunch beats weekend queues by an hour of your life.",
      "Reservations via CatchTable help for the famous spots; the alley discoveries are walk-in.",
      "Amazing Brewing and the udon bars anchor the classic first visit.",
    ],
    mapQuery: "Yongnidan-gil, Yongsan-gu, Seoul",
  },
  {
    slug: "bulgwangcheon-stream",
    name: "Bulgwangcheon Stream",
    koreanName: "불광천",
    type: "nature",
    region: "seoul",
    area: "Eunpyeong-gu, Seoul",
    address: "Bulgwangcheon walkway, Eungam-dong, Eunpyeong-gu, Seoul",
    description:
      "A cherry-tree-lined neighborhood stream in northwest Seoul where Moving staged its most quietly spectacular flying scenes. In April the banks turn into one of the city's least touristy blossom tunnels.",
    howToGet:
      "Subway Line 6 Saejeol or Eungam Station — the stream path runs directly below.",
    tips: [
      "Visit at dusk when the jogging lights come on — pure drama lighting.",
      "Cherry blossom season here is a local secret; no Yeouido crowds.",
      "Rent a bike: the path links to the Han River network.",
    ],
    mapQuery: "Bulgwangcheon, Eunpyeong-gu, Seoul",
  },
  {
    slug: "taejongdae",
    name: "Taejongdae",
    koreanName: "태종대",
    type: "nature",
    region: "busan",
    area: "Yeongdo-gu, Busan",
    address: "24 Jeonmang-ro, Yeongdo-gu, Busan",
    description:
      "Yeongdo's cliff park where pine forest drops into open sea — the coastal Busan of Pachinko's earliest, most tender chapters. Lighthouse terraces, pebble coves and the Danubi trolley loop.",
    howToGet:
      "From Busan Station: bus 88 or 101 to the Taejongdae terminus (~40 min); the Danubi train loops the park from the gate.",
    hours: "Park 05:00–24:00; Danubi train from 09:20",
    admission: "Park free; Danubi train ticketed",
    tips: [
      "Walk down to Sinseon Rock for the cliff-and-sea frame the series loves.",
      "Clear days show Japan's Tsushima on the horizon — Sun-ja's crossing made visible.",
      "Pair with Huinnyeoul Culture Village on the same island.",
    ],
    mapQuery: "Taejongdae, Yeongdo-gu, Busan",
  },
  {
    slug: "hahoe-village",
    name: "Hahoe Folk Village",
    koreanName: "안동 하회마을",
    type: "village",
    region: "gyeongsang",
    area: "Andong, Gyeongsangbuk-do",
    address: "40 Jeonseo-ro, Pungcheon-myeon, Andong-si, Gyeongsangbuk-do",
    description:
      "A UNESCO-listed riverside village of 600-year-old houses — so intact that Pachinko dressed its lanes, fields and river bend as 1910s Yeongdo. The homes are lived in; the past here is present tense.",
    howToGet:
      "KTX/bus to Andong, then bus 246 or taxi (~25 min) to the village entrance shuttle.",
    hours: "09:00–18:00 (season-dependent)",
    admission: "Adult ₩5,000 range — check current",
    tips: [
      "Stay overnight in a hanok guesthouse to have the lanes to yourself after 6pm.",
      "The Byeolsingut mask-dance performances are worth timing your visit around.",
      "Cross to Buyongdae cliff for the village-in-the-river-bend panorama.",
    ],
    mapQuery: "Hahoe Folk Village, Andong",
  },
  {
    slug: "sewoon-sangga",
    name: "Sewoon Plaza (Geumga Plaza)",
    koreanName: "세운상가",
    type: "landmark",
    region: "seoul",
    area: "Jongno-gu, Seoul",
    address: "159 Cheonggyecheon-ro, Jongno-gu, Seoul",
    description:
      "Korea's first mixed-use megastructure (1968) — electronics workshops below, walkways and studios above. As Vincenzo's Geumga Plaza it became a pilgrimage site; as 'Hipjiro' it became young Seoul's favorite retro block.",
    howToGet:
      "Subway Line 1/3/5 Jongno 3-ga Station exit 12; the arcade spine starts a block south.",
    tips: [
      "Take the escalators to the rooftop deck: palace, tower and Cheonggyecheon in one view.",
      "The surrounding 'Hipjiro' alleys hide third-wave cafes inside machine shops.",
      "Weekdays show the working arcade the drama actually filmed.",
    ],
    mapQuery: "Sewoon Plaza, Jongno-gu, Seoul",
  },
  {
    slug: "common-ground-seoul",
    name: "Common Ground",
    koreanName: "커먼그라운드",
    type: "shopping",
    region: "seoul",
    area: "Gwangjin-gu, Seoul",
    address: "200 Achasan-ro, Gwangjin-gu, Seoul",
    description:
      "Two hundred blue shipping containers stacked into Korea's signature pop-up mall — indie fashion, food trucks and terraces. Its unmistakable blue grid backdrops Vincenzo's lighter city scenes.",
    howToGet: "Subway Line 2/7 Konkuk University Station exit 6 — it's across the street.",
    hours: "11:00–22:00",
    tips: [
      "The 3F terrace gives the clean container-grid photo everyone wants.",
      "Konkuk's student food alleys next door beat the food trucks on value.",
    ],
    mapQuery: "Common Ground, Gwangjin-gu, Seoul",
  },
  {
    slug: "hanbyeok-tunnel",
    name: "Hanbyeok Tunnel",
    koreanName: "한벽굴",
    type: "landmark",
    region: "jeolla",
    area: "Jeonju, Jeollabuk-do",
    address: "Near Hanbyeokdang Pavilion, Gyo-dong, Wansan-gu, Jeonju",
    description:
      "A short, mossy former rail tunnel by the Jeonjucheon stream — and the emotional ground zero of Twenty-Five Twenty-One, where its most-replayed confessions and goodbyes were filmed.",
    howToGet:
      "15-minute walk from Jeonju Hanok Village's southeast edge, past Hanbyeokdang Pavilion.",
    tips: [
      "Golden hour light through the tunnel mouth recreates the scene exactly.",
      "It's a working path for locals — keep recreations quick and quiet.",
      "Combine with the Jaman Mural Village stairs above for a full afternoon.",
    ],
    mapQuery: "Hanbyeokdang, Jeonju",
  },
  {
    slug: "jeonju-hanok-village",
    name: "Jeonju Hanok Village",
    koreanName: "전주한옥마을",
    type: "village",
    region: "jeolla",
    area: "Wansan-gu, Jeonju",
    address: "Gyo-dong & Pungnam-dong, Wansan-gu, Jeonju",
    description:
      "Seven hundred tiled-roof hanok in Korea's food capital — the lanes, streams and rooftops that textured Hee-do's world in Twenty-Five Twenty-One, plus the bibimbap and choco-pie pilgrimages Jeonju was already famous for.",
    howToGet:
      "KTX to Jeonju (~1h40 from Yongsan), then bus or 15-min taxi to the village.",
    tips: [
      "Stay a night: the village empties beautifully after day-trippers leave.",
      "Rent a hanbok — Jeonju's rental streets rival Seoul's palaces.",
      "The 50-year kalguksu shop the cast ate at sits inside the village — queue early.",
    ],
    mapQuery: "Jeonju Hanok Village",
  },
  {
    slug: "geumneung-beach",
    name: "Geumneung Beach",
    koreanName: "금능해수욕장",
    type: "beach",
    region: "jeju",
    area: "Hallim-eup, Jeju",
    address: "Geumneung-ri, Hallim-eup, Jeju",
    description:
      "White sand, water in improbable mint gradients, and Biyangdo floating offshore — the western-Jeju coastline that played Our Blues' Pureung Village. Shallow tides make it Jeju's gentlest swim.",
    howToGet:
      "Bus 202 along the west coast to Geumneung stop (~1h from Jeju City), or 40 min by rental car.",
    tips: [
      "Low tide reveals sandbars — check tide tables for the postcard version.",
      "Haenyeo divers work the rocks in the mornings; watch from distance, never photograph without asking.",
      "Sunset behind Biyangdo is the drama's closing-credits mood, free of charge.",
    ],
    mapQuery: "Geumneung Beach, Jeju",
  },
  {
    slug: "goseong-five-day-market",
    name: "Goseong Five-Day Market",
    koreanName: "고성오일시장",
    type: "market",
    region: "jeju",
    area: "Seongsan-eup, Seogwipo, Jeju",
    address: "Goseong-ri, Seongsan-eup, Seogwipo-si, Jeju",
    description:
      "One of the working five-day markets behind Our Blues' fictional Seopseop Market — tangerine crates, sea-smelling tarps and vendors who all seem to know each other's whole biography, exactly like the show.",
    howToGet:
      "Near Seongsan; bus 201/211/212 to Goseong-ri stops. Market runs on dates ending in 4 and 9.",
    hours: "Market days only (dates ending 4 & 9), roughly 08:00–17:00",
    tips: [
      "Confirm the five-day cycle before going — no market day, no market.",
      "Cash small bills make the stall banter easier; card is spottier here.",
      "Pairs perfectly with a Seongsan Ilchulbong morning next door.",
    ],
    mapQuery: "Goseong Five-day Market, Seongsan, Jeju",
  },
];
