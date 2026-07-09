import type { Show, Spot } from "../lib/types";

// Evergreen classics — consistently loved titles international fans still travel for.
export const shows: Show[] = [
  {
    slug: "crash-landing-on-you",
    title: "Crash Landing on You",
    koreanTitle: "사랑의 불시착",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Romance", "Drama"],
    years: "2019–2020",
    status: "evergreen",
    popularity: 92,
    synopsis:
      "A South Korean heiress crash-lands in North Korea after a paragliding accident and is hidden by a stoic army captain. What begins as a survival pact becomes one of the most beloved cross-border love stories ever filmed.",
    whyVisit:
      "The Swiss scenes became a genuine pilgrimage: fans from across Asia still line up at a tiny lakeside pier to recreate the piano scene. It is the defining example of K-drama set-jetting — and proof that one scene can change a village's tourism forever.",
    filmingSpots: [
      {
        spotSlug: "iseltwald-pier",
        sceneNote:
          "The lakeside pier where Captain Ri plays piano as a student — now so popular the village installed a photo turnstile.",
      },
      {
        spotSlug: "first-cliff-walk-grindelwald",
        sceneNote:
          "The dramatic cliffside walkway from Se-ri's Swiss memories, suspended over the Grindelwald valley.",
      },
    ],
    themeColor: "mint",
  },
  {
    slug: "goblin",
    title: "Guardian: The Lonely and Great God (Goblin)",
    koreanTitle: "도깨비",
    ott: ["viki", "other"],
    category: "kdrama",
    genres: ["Fantasy", "Romance"],
    years: "2016–2017",
    status: "evergreen",
    popularity: 90,
    synopsis:
      "An immortal goblin has waited 900 years for the human bride who can end his cursed eternity — then a bright, unlucky high schooler walks into his life. A fantasy romance whose imagery defined a K-drama era.",
    whyVisit:
      "Goblin turned ordinary Korean places into shrines: a bare breakwater in Gangneung became one of the country's most photographed proposal spots. Standing there with a bouquet of buckwheat flowers is a rite of passage for fans.",
    filmingSpots: [
      {
        spotSlug: "jumunjin-breakwater",
        sceneNote:
          "The iconic seaside meeting — Ji Eun-tak summons the Goblin here with a candle. Fans queue to recreate the buckwheat-bouquet shot.",
      },
      {
        spotSlug: "deoksugung-stonewall-path",
        sceneNote:
          "The atmospheric stone-wall walk beside Deoksugung Palace, backdrop to several quiet, fateful strolls.",
      },
      {
        spotSlug: "woljeongsa-fir-forest",
        sceneNote:
          "The snowy fir-tree avenue from the drama's most ethereal sequences, at the entrance to Woljeongsa Temple.",
      },
    ],
    themeColor: "night",
  },
  {
    slug: "itaewon-class",
    title: "Itaewon Class",
    koreanTitle: "이태원 클라쓰",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Drama", "Revenge"],
    years: "2020",
    status: "evergreen",
    popularity: 84,
    synopsis:
      "An ex-convict with unbreakable principles opens a tiny bar-restaurant in Itaewon and takes on a food-industry empire. A story about stubborn integrity set in Seoul's most international neighborhood.",
    whyVisit:
      "Itaewon itself is the co-star: the neighborhood's slopes, rooftops and night views carry the show's underdog energy. Fans come to walk Park Saeroyi's streets and toast on a rooftop with the N Seoul Tower glowing behind them.",
    filmingSpots: [
      {
        spotSlug: "itaewon-street",
        sceneNote:
          "The main drag and side alleys where DanBam's story unfolds — especially cinematic after dark, during the Halloween-free quieter seasons.",
      },
      {
        spotSlug: "namsan-seoul-tower",
        sceneNote:
          "The tower dominates the show's skyline shots; the classic view is from the Noksapyeong overpass looking up Itaewon-ro.",
      },
    ],
    themeColor: "sunset",
  },
  {
    slug: "hometown-cha-cha-cha",
    title: "Hometown Cha-Cha-Cha",
    koreanTitle: "갯마을 차차차",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Romance", "Slice of life"],
    years: "2021",
    status: "evergreen",
    popularity: 82,
    synopsis:
      "A perfectionist Seoul dentist relocates to the seaside village of Gongjin and collides with Chief Hong, the town's beloved jack-of-all-trades. Comfort television at its warmest.",
    whyVisit:
      "The fictional Gongjin was assembled from real fishing villages around Pohang. Visiting feels like stepping into the show's hug — slow lanes, a working harbor, and locals who remember the film crew fondly.",
    filmingSpots: [
      {
        spotSlug: "cheongha-market",
        sceneNote:
          "The real traditional market that played Gongjin's town center — several storefronts still carry drama-era signage.",
      },
      {
        spotSlug: "igari-anchor-observatory",
        sceneNote:
          "The anchor-shaped seaside deck from the show's coastal panoramas, on the Pohang shore road.",
      },
    ],
    themeColor: "ocean",
  },
  {
    slug: "extraordinary-attorney-woo",
    title: "Extraordinary Attorney Woo",
    koreanTitle: "이상한 변호사 우영우",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Legal", "Drama"],
    years: "2022",
    status: "evergreen",
    popularity: 86,
    synopsis:
      "A brilliant rookie attorney on the autism spectrum navigates cases, colleagues and whale facts at a top Seoul law firm. A global word-of-mouth phenomenon.",
    whyVisit:
      "One episode made a 500-year-old hackberry tree a national celebrity — it was later designated a Natural Monument after fans campaigned for its protection. Few filming spots anywhere carry this much real-world impact.",
    filmingSpots: [
      {
        spotSlug: "changwon-hackberry-tree",
        sceneNote:
          "The majestic village tree at the heart of the 'Sodeok-dong' episode — the case that made the whole country look up.",
      },
    ],
    themeColor: "forest",
  },
  {
    slug: "winter-sonata",
    title: "Winter Sonata",
    koreanTitle: "겨울연가",
    ott: ["viki", "other"],
    category: "kdrama",
    genres: ["Romance", "Melodrama"],
    years: "2002",
    status: "evergreen",
    popularity: 70,
    synopsis:
      "The first-love melodrama that launched the Korean Wave across Asia. Two decades on, its snow-dusted imagery still defines romantic Korea for millions of fans.",
    whyVisit:
      "Winter Sonata invented K-drama tourism: Nami Island's metasequoia lane remains one of Asia's most visited drama locations, drawing couples year-round. Visiting is touching the origin point of everything this site celebrates.",
    filmingSpots: [
      {
        spotSlug: "nami-island",
        sceneNote:
          "The tree-lined lanes of the couple's first walks — the metasequoia path is the single most recreated K-drama photo in history.",
      },
      {
        spotSlug: "yongpyong-resort",
        sceneNote:
          "The ski slopes and lodge from the drama's snowy turning points, in the Pyeongchang mountains.",
      },
    ],
    themeColor: "plum",
  },
];

export const spots: Spot[] = [
  {
    slug: "iseltwald-pier",
    name: "Iseltwald Lake Pier",
    type: "landmark",
    region: "overseas",
    area: "Lake Brienz, Switzerland",
    address: "Seestrasse, 3807 Iseltwald, Switzerland",
    description:
      "A small wooden pier on Lake Brienz that became world-famous as Captain Ri's piano spot in Crash Landing on You. The village now manages the crowds with a small photo turnstile — a striking case study in how one K-drama scene reshapes a destination.",
    howToGet:
      "From Interlaken Ost, bus 103 to Iseltwald (about 20 min). By car, 15 min from Interlaken along the lake's south shore.",
    admission: "Small turnstile fee (about CHF 5) to step onto the pier",
    tips: [
      "Go before 9am — tour buses from Interlaken arrive mid-morning.",
      "The classic angle is from the shore slightly left of the pier, with the Alps behind.",
      "Combine with Giessbach Falls, one boat stop away on Lake Brienz.",
    ],
    mapQuery: "Iseltwald pier, Switzerland",
  },
  {
    slug: "first-cliff-walk-grindelwald",
    name: "First Cliff Walk",
    type: "nature",
    region: "overseas",
    area: "Grindelwald, Switzerland",
    address: "First, 3818 Grindelwald, Switzerland",
    description:
      "A metal walkway bolted to the cliff face at the First summit above Grindelwald, featured in Se-ri's Swiss memory scenes. The one-way platform juts out over a sheer drop with the Eiger in view.",
    howToGet:
      "Gondola from Grindelwald First station to the top (about 25 min); the cliff walk starts beside the summit terrace.",
    admission: "Included with the First gondola ticket",
    tips: [
      "Weather changes fast — check the First webcam before riding up.",
      "The walkway is free once you are at the summit; queues peak at midday.",
    ],
    mapQuery: "First Cliff Walk, Grindelwald",
  },
  {
    slug: "jumunjin-breakwater",
    name: "Jumunjin Breakwater",
    koreanName: "주문진 방사제",
    type: "beach",
    region: "gangwon",
    area: "Gangneung, Gangwon",
    address: "Hyanghoro, Jumunjin-eup, Gangneung-si, Gangwon-do",
    description:
      "A plain concrete breakwater that Goblin transformed into Korea's most romantic seaside stage. On weekends fans line up — bouquet in hand, red scarf optional — to recreate the summoning scene frame for frame.",
    howToGet:
      "KTX from Seoul Station to Gangneung (about 2 hrs), then bus 300/302 or a 20-min taxi to Jumunjin. The breakwater is just north of Jumunjin Beach.",
    admission: "Free",
    tips: [
      "A vendor near the entrance often rents the exact bouquet-and-scarf props on busy days.",
      "Best light is late afternoon with the sea behind the poser.",
      "Pair it with Jumunjin's famous fish market for a seafood lunch, 10 minutes on foot.",
    ],
    mapQuery: "Jumunjin Breakwater, Gangneung",
  },
  {
    slug: "deoksugung-stonewall-path",
    name: "Deoksugung Stonewall Path",
    koreanName: "덕수궁 돌담길",
    type: "street",
    region: "seoul",
    area: "Jung-gu, Seoul",
    address: "Jeongdong-gil, Jung-gu, Seoul",
    description:
      "A gently curving lane along the stone wall of Deoksugung Palace, a favorite of K-drama location scouts for decades and one of Goblin's signature strolls. Gingko season turns it gold.",
    howToGet:
      "Subway Line 1/2 to City Hall Station, Exit 1 or 12; the path starts beside the palace's Daehanmun Gate.",
    admission: "Free (palace entry KRW 1,000)",
    tips: [
      "Come at opening time on a weekday for an empty path.",
      "Late October to mid-November is peak gingko gold.",
      "Duck into Jeongdong Observatory (13F, Seosomun Bldg) for a free bird's-eye view of the palace.",
    ],
    mapQuery: "Deoksugung Stonewall Path, Seoul",
  },
  {
    slug: "woljeongsa-fir-forest",
    name: "Woljeongsa Fir Forest",
    koreanName: "월정사 전나무숲",
    type: "nature",
    region: "gangwon",
    area: "Pyeongchang, Gangwon",
    address: "Odaesan-ro, Jinbu-myeon, Pyeongchang-gun, Gangwon-do",
    description:
      "A kilometer-long avenue of centuries-old fir trees leading to Woljeongsa Temple in Odaesan National Park. Goblin's otherworldly forest scenes made it a four-season favorite; in snow it is pure drama.",
    howToGet:
      "KTX to Jinbu Station (Pyeongchang), then a 20-min taxi or local bus toward Woljeongsa.",
    admission: "Free (park entry may apply in season)",
    tips: [
      "Winter mornings after snowfall are the Goblin look — bring proper boots.",
      "The temple's teahouse is a serene warm-up stop.",
    ],
    mapQuery: "Woljeongsa Fir Forest, Pyeongchang",
  },
  {
    slug: "itaewon-street",
    name: "Itaewon Main Street & Alleys",
    koreanName: "이태원",
    type: "street",
    region: "seoul",
    area: "Yongsan-gu, Seoul",
    address: "Itaewon-ro, Yongsan-gu, Seoul",
    description:
      "Seoul's most international quarter — the slopes, rooftop bars and neon alleys that gave Itaewon Class its underdog heartbeat. World food, vintage shops and nightlife pack the streets fanning off the main road.",
    howToGet: "Subway Line 6 to Itaewon Station; the drama's alleys spread from Exits 1–3.",
    admission: "Free",
    tips: [
      "Golden hour from a rooftop bar delivers the show's signature tower view.",
      "Weeknights are more atmospheric (and less crowded) than weekends.",
    ],
    mapQuery: "Itaewon, Seoul",
  },
  {
    slug: "namsan-seoul-tower",
    name: "N Seoul Tower (Namsan)",
    koreanName: "N서울타워",
    type: "landmark",
    region: "seoul",
    area: "Yongsan-gu, Seoul",
    address: "105 Namsangongwon-gil, Yongsan-gu, Seoul",
    description:
      "The city's watchtower and the single most-filmed landmark in K-content — from Itaewon Class rooftop shots to the animated finale stage of KPop Demon Hunters. The plaza's love-lock fences and city panorama are open to all.",
    howToGet:
      "Namsan cable car from near Myeongdong Station (Line 4, Exit 3), or the Namsan shuttle bus 01 from Chungmuro.",
    hours: "Plaza open daily; observatory typically 10:00–23:00",
    admission: "Plaza free; observatory ticket around KRW 21,000",
    tips: [
      "Sunset slot gives you both day and night skylines in one visit.",
      "The free outdoor terraces already deliver the classic drama view — the paid deck is optional.",
    ],
    mapQuery: "N Seoul Tower",
  },
  {
    slug: "cheongha-market",
    name: "Cheongha Traditional Market",
    koreanName: "청하공진시장",
    type: "market",
    region: "gyeongsang",
    area: "Pohang, North Gyeongsang",
    address: "Cheongha-myeon, Buk-gu, Pohang-si, Gyeongsangbuk-do",
    description:
      "The small-town market that became Gongjin's beating heart in Hometown Cha-Cha-Cha. Drama photo zones and preserved set storefronts sit among real grandmother-run stalls.",
    howToGet:
      "KTX to Pohang, then bus 5000/500 toward Cheongha (about 40 min) or a 30-min taxi.",
    admission: "Free",
    tips: [
      "Weekday mornings are when the market feels most like the show.",
      "Look for the DanBang-style coffee shop set piece kept for visitors.",
    ],
    mapQuery: "Cheongha Market, Pohang",
  },
  {
    slug: "igari-anchor-observatory",
    name: "Igari Anchor Observatory",
    koreanName: "이가리 닻 전망대",
    type: "nature",
    region: "gyeongsang",
    area: "Pohang, North Gyeongsang",
    address: "Igari, Cheongha-myeon, Buk-gu, Pohang-si, Gyeongsangbuk-do",
    description:
      "An anchor-shaped viewing deck stretching over the East Sea on Pohang's coastal road, featured in Hometown Cha-Cha-Cha's sweeping shoreline scenes.",
    howToGet:
      "Best by taxi or rental car along the Pohang coastal road, 10 min from Cheongha Market.",
    admission: "Free",
    tips: [
      "Morning light hits the deck straight-on — ideal for photos.",
      "The pine-backed beach below is a quiet picnic spot.",
    ],
    mapQuery: "Igari Anchor Observatory, Pohang",
  },
  {
    slug: "changwon-hackberry-tree",
    name: "Bukbu-ri Hackberry Tree",
    koreanName: "북부리 팽나무",
    type: "nature",
    region: "gyeongsang",
    area: "Changwon, South Gyeongsang",
    address: "Bukbu-ri, Daesan-myeon, Uichang-gu, Changwon-si, Gyeongsangnam-do",
    description:
      "A 500-year-old hackberry tree crowning a village hill, star of Extraordinary Attorney Woo's beloved 'Sodeok-dong' episodes. After the show aired it was designated a national Natural Monument.",
    howToGet:
      "KTX/SRT to Changwon Jungang, then a 30–40 min taxi. A rental car is the practical option in this rural area.",
    admission: "Free",
    tips: [
      "This is a living village — keep voices down and stay on the path.",
      "Late afternoon backlights the canopy beautifully over the rice fields.",
    ],
    mapQuery: "Bukbu-ri hackberry tree, Daesan-myeon, Changwon",
  },
  {
    slug: "nami-island",
    name: "Nami Island",
    koreanName: "남이섬",
    type: "island",
    region: "gangwon",
    area: "Chuncheon, Gangwon",
    address: "1 Namisum-gil, Namsan-myeon, Chuncheon-si, Gangwon-do",
    description:
      "The half-moon river island whose metasequoia lane launched K-drama tourism with Winter Sonata. Now a car-free 'fairy-tale republic' of tree tunnels, ostriches and picnic lawns, still drawing fans from across Asia.",
    howToGet:
      "ITX-Cheongchun from Yongsan/Cheongnyangni to Gapyeong (about 1 hr), then shuttle/taxi to the wharf and a 5-min ferry (or the zip-wire, if you dare).",
    hours: "Ferries roughly 07:30–21:00",
    admission: "Entry (ferry included) around KRW 16,000",
    tips: [
      "First ferries mean empty tree lanes — by 11am it is a photo queue.",
      "Autumn (late Oct–early Nov) and snow days are the two iconic looks.",
      "Combine with Petite France or Garden of Morning Calm on the same Gapyeong loop.",
    ],
    mapQuery: "Nami Island",
  },
  {
    slug: "yongpyong-resort",
    name: "Yongpyong Resort",
    koreanName: "용평리조트",
    type: "themepark",
    region: "gangwon",
    area: "Pyeongchang, Gangwon",
    address: "715 Olympic-ro, Daegwallyeong-myeon, Pyeongchang-gun, Gangwon-do",
    description:
      "Korea's original alpine resort and a Winter Sonata pilgrimage site — its slopes, gondola and Dragon Peak have appeared in dramas for two decades, including scenes tied to the 2018 Olympics era.",
    howToGet:
      "KTX to Jinbu Station, then the resort shuttle or a 20-min taxi.",
    tips: [
      "The Dragon Peak gondola runs in summer too — green-season views are underrated.",
      "Winter Sonata photo points are signposted around the main lodge.",
    ],
    mapQuery: "Yongpyong Resort, Pyeongchang",
  },
];
