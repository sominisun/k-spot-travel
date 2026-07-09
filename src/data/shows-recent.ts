import type { Show, Spot } from "../lib/types";

// 2024–2026 trending global hits.
export const shows: Show[] = [
  {
    slug: "squid-game",
    title: "Squid Game",
    koreanTitle: "오징어 게임",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Thriller", "Survival"],
    years: "2021–2025",
    status: "trending",
    popularity: 98,
    synopsis:
      "Hundreds of debt-ridden players compete in deadly children's games for a life-changing prize. Across three seasons it became the most-watched series in Netflix history and a global cultural shorthand.",
    whyVisit:
      "The games were shot on sets, but Gi-hun's world is real Seoul: the working-class lanes of Ssangmun-dong and the subway platform where the Recruiter's ddakji slap changed everything. Walking them connects the phenomenon to the city that made it.",
    filmingSpots: [
      {
        spotSlug: "ssangmun-dong-neighborhood",
        sceneNote:
          "Gi-hun's home turf — the markets and hillside lanes of his northern Seoul neighborhood ground the whole series.",
      },
      {
        spotSlug: "yangjae-citizens-forest-station",
        sceneNote:
          "The platform where the Recruiter challenges Gi-hun to ddakji — the slap heard around the world.",
      },
    ],
    themeColor: "coral",
  },
  {
    slug: "when-life-gives-you-tangerines",
    title: "When Life Gives You Tangerines",
    koreanTitle: "폭싹 속았수다",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Romance", "Family saga"],
    years: "2025",
    status: "trending",
    popularity: 96,
    synopsis:
      "A sweeping four-season portrait of Ae-sun and Gwan-sik, whose love story unfolds across decades of Jeju life from the 1950s onward. 2025's most beloved K-drama worldwide — a masterpiece of tears and tangerines.",
    whyVisit:
      "This is Jeju's love letter to itself: stone-walled villages, canola fields and haenyeo shores. Jeju tourism surged after release, and following Ae-sun's island — orchards, coasts and all — is the most emotional route on this site.",
    filmingSpots: [
      {
        spotSlug: "gwangnyeong-ri-village",
        sceneNote:
          "The stone-walled lanes that played Ae-sun's hometown — lava-rock fences, low roofs and tangerine trees in the yards.",
      },
      {
        spotSlug: "handam-coastal-trail",
        sceneNote:
          "The Aewol shoreline walk that frames several of the couple's seaside moments.",
      },
      {
        spotSlug: "seongsan-ilchulbong",
        sceneNote:
          "The UNESCO sunrise peak beneath which one of the drama's most wrenching scenes — the 3,000 bows — takes place.",
      },
      {
        spotSlug: "seopjikoji",
        sceneNote:
          "The canola-covered cape of the drama's springtime imagery, gazing across to Seongsan Ilchulbong.",
      },
    ],
    themeColor: "gold",
  },
  {
    slug: "queen-of-tears",
    title: "Queen of Tears",
    koreanTitle: "눈물의 여왕",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Romance", "Drama"],
    years: "2024",
    status: "trending",
    popularity: 93,
    synopsis:
      "A chaebol heiress and her small-town husband fight to save a marriage — and each other — as empire politics and illness close in. One of tvN's highest-rated dramas ever and a global Netflix smash.",
    whyVisit:
      "The Queens' world is visitable luxury: the department store is a real Seoul mall you can shop, the family mansion is a serene stone-art museum, and the wedding garden overlooks the Han River. Few dramas let you step into every major set.",
    filmingSpots: [
      {
        spotSlug: "the-hyundai-seoul",
        sceneNote:
          "Queens Department Store in the flesh — Hae-in's glass-and-garden retail kingdom is Yeouido's most beautiful mall.",
      },
      {
        spotSlug: "korean-stone-art-museum",
        sceneNote:
          "The Queens family mansion — a hillside museum of old stone guardians and quiet gardens in Seongbuk-dong.",
      },
      {
        spotSlug: "aston-house-walkerhill",
        sceneNote:
          "Hyun-woo and Hae-in's fairytale wedding venue, a hilltop hall with the Han River spread below.",
      },
      {
        spotSlug: "aqua-planet-ilsan",
        sceneNote: "The aquarium of the proposal scene — tanks glowing behind the couple.",
      },
    ],
    themeColor: "plum",
  },
  {
    slug: "lovely-runner",
    title: "Lovely Runner",
    koreanTitle: "선재 업고 튀어",
    ott: ["viki", "other"],
    category: "kdrama",
    genres: ["Romance", "Fantasy", "Time travel"],
    years: "2024",
    status: "trending",
    popularity: 91,
    synopsis:
      "A devoted fan travels back in time to save her favorite idol from tragedy — and rewrites both their lives. The word-of-mouth hit that ruled 2024's global fandom conversation.",
    whyVisit:
      "Suwon's old town became the drama's romantic universe, and the city leaned in: the official tourism board publishes a Lovely Runner walking course. The pedestrian bridge confession and the bus chase are all within one wander of Hwaseong Fortress.",
    filmingSpots: [
      {
        spotSlug: "hwaseomun-pedestrian-bridge",
        sceneNote:
          "The stream-side footbridge of Seon-jae's confession — the scene that broke fan Twitter.",
      },
      {
        spotSlug: "hwahongmun-gate",
        sceneNote:
          "The seven-arched water gate beside the bus-chase and nose-pick comedy beats.",
      },
      {
        spotSlug: "haenggung-dong-streets",
        sceneNote:
          "The retro lanes of Suwon's fortress village, backdrop to the couple's everyday scenes — now an official themed walk.",
      },
    ],
    themeColor: "coral",
  },
  {
    slug: "welcome-to-samdal-ri",
    title: "Welcome to Samdal-ri",
    koreanTitle: "웰컴투 삼달리",
    ott: ["netflix"],
    category: "kdrama",
    genres: ["Romance", "Healing"],
    years: "2023–2024",
    status: "trending",
    popularity: 83,
    synopsis:
      "A disgraced Seoul photographer retreats to her Jeju hometown and rediscovers the weatherman who never stopped loving her. A gentle homecoming story wrapped in island light.",
    whyVisit:
      "Samdal-ri is a tour of Jeju's quieter face — a hidden cypress forest, a mountainside temple, wind-turbine coasts and tiny harbors. Official Jeju tourism maps every location, making this the easiest island drama trail to follow.",
    filmingSpots: [
      {
        spotSlug: "andol-oreum-secret-forest",
        sceneNote:
          "The cypress 'Secret Forest' beneath Andol Oreum — the drama's most photographed green tunnel.",
      },
      {
        spotSlug: "gwaneumsa-temple",
        sceneNote:
          "The Hallasan temple where Yong-pil's father finally blesses the couple.",
      },
      {
        spotSlug: "sinchang-windmill-coastal-road",
        sceneNote:
          "The turbine-lined west-coast drive from the show's wind-swept transitions.",
      },
      {
        spotSlug: "mangjangpo-port",
        sceneNote: "The small southern harbor of Sam-dal and Yong-pil's tense heart-to-heart.",
      },
    ],
    themeColor: "mint",
  },
];

export const spots: Spot[] = [
  {
    slug: "ssangmun-dong-neighborhood",
    name: "Ssangmun-dong Neighborhood",
    koreanName: "쌍문동",
    type: "street",
    region: "seoul",
    area: "Dobong-gu, Seoul",
    address: "Ssangmun-dong, Dobong-gu, Seoul",
    description:
      "Gi-hun's home district in northern Seoul — hillside lanes, mom-and-pop shops and street markets that give Squid Game its working-class soul. An authentic, untouristed slice of the city.",
    howToGet: "Subway Line 4 to Ssangmun Station; the neighborhood spreads from Exits 2–4.",
    admission: "Free",
    tips: [
      "This is a residential area, not an attraction — browse the market, eat local, photograph discreetly.",
      "Pair with a fried-chicken-and-beer stop; chimaek is the neighborhood's love language.",
    ],
    mapQuery: "Ssangmun-dong, Dobong-gu, Seoul",
  },
  {
    slug: "yangjae-citizens-forest-station",
    name: "Yangjae Citizen's Forest Station",
    koreanName: "양재시민의숲역",
    type: "landmark",
    region: "seoul",
    area: "Seocho-gu, Seoul",
    address: "Yangjae Citizen's Forest Station, Sinbundang Line, Seocho-gu, Seoul",
    description:
      "The quiet Sinbundang Line platform where Squid Game's Recruiter plays ddakji with Gi-hun. The adjacent Citizens' Forest park makes it a pleasant, low-key pilgrimage.",
    howToGet: "Sinbundang Line to Yangjae Citizen's Forest Station.",
    admission: "Standard subway fare",
    tips: [
      "Buy a ddakji set from a stationery shop beforehand for the photo.",
      "Keep recreations quick and courteous — it is a working platform.",
    ],
    mapQuery: "Yangjae Citizens Forest Station, Seoul",
  },
  {
    slug: "gwangnyeong-ri-village",
    name: "Gwangnyeong-ri Village",
    koreanName: "광령리",
    type: "village",
    region: "jeju",
    area: "Aewol-eup, Jeju City",
    address: "Gwangnyeong-ri, Aewol-eup, Jeju-si, Jeju-do",
    description:
      "A rural Aewol village of black lava-stone walls and low farmhouses that stood in for Ae-sun's hometown in When Life Gives You Tangerines — vintage Jeju, unchanged in the ways that matter.",
    howToGet:
      "Rental car recommended (25 min from Jeju Airport). Buses toward Aewol stop within a walk of the village lanes.",
    admission: "Free",
    tips: [
      "Residents live here — enjoy the lanes quietly and skip drone shots.",
      "Tangerine season (Nov–Jan) recreates the drama's golden yards.",
    ],
    mapQuery: "Gwangnyeong-ri, Aewol-eup, Jeju",
  },
  {
    slug: "handam-coastal-trail",
    name: "Handam Coastal Trail",
    koreanName: "한담해안산책로",
    type: "nature",
    region: "jeju",
    area: "Aewol-eup, Jeju City",
    address: "Aewol-ri to Gwakji Beach, Aewol-eup, Jeju-si, Jeju-do",
    description:
      "A turquoise-water walking path curling from Aewol Port to Gwakji Beach, featured in the drama's seaside interludes and beloved by cafe-hoppers — Aewol's cafe strip overlooks the trail.",
    howToGet:
      "Bus 202 along the west coast to Handam Beach stop, or 30 min by car from Jeju Airport.",
    admission: "Free",
    tips: [
      "Walk it westward in late afternoon for backlit waves.",
      "The Aewol cafe strip above the trail is ideal for a sunset finish.",
    ],
    mapQuery: "Handam Coastal Trail, Aewol, Jeju",
  },
  {
    slug: "seongsan-ilchulbong",
    name: "Seongsan Ilchulbong (Sunrise Peak)",
    koreanName: "성산일출봉",
    type: "nature",
    region: "jeju",
    area: "Seongsan-eup, Seogwipo",
    address: "Seongsan-ri, Seongsan-eup, Seogwipo-si, Jeju-do",
    description:
      "A UNESCO World Heritage tuff cone rising sheer from the sea, crowned by a grassy crater. In When Life Gives You Tangerines it towers over one of the story's most devastating acts of devotion.",
    howToGet:
      "Bus 201 from Jeju City (about 1.5 hrs) or 50 min by car; the trail to the summit takes about 25 minutes up.",
    hours: "Roughly 07:00–19:00 (season-dependent)",
    admission: "Around KRW 5,000",
    tips: [
      "Sunrise entry queues form early — arrive 40+ minutes before first light.",
      "The haenyeo divers' show at the base cove (weather permitting) is an under-visited gem.",
    ],
    mapQuery: "Seongsan Ilchulbong, Jeju",
  },
  {
    slug: "seopjikoji",
    name: "Seopjikoji",
    koreanName: "섭지코지",
    type: "nature",
    region: "jeju",
    area: "Seongsan-eup, Seogwipo",
    address: "Sinyang-ri, Seongsan-eup, Seogwipo-si, Jeju-do",
    description:
      "A wind-combed cape of grassland and volcanic rock facing Seongsan Ilchulbong — carpeted in yellow canola every spring, exactly as in the drama's brightest scenes.",
    howToGet:
      "10 min by car from Seongsan Ilchulbong; local buses connect via Sinyang-ri.",
    admission: "Free (parking fee applies)",
    tips: [
      "Canola bloom peaks late March–mid April.",
      "It is genuinely windy — secure hats and skirts for cliff photos.",
    ],
    mapQuery: "Seopjikoji, Jeju",
  },
  {
    slug: "the-hyundai-seoul",
    name: "The Hyundai Seoul",
    koreanName: "더현대 서울",
    type: "shopping",
    region: "seoul",
    area: "Yeouido, Seoul",
    address: "108 Yeoui-daero, Yeongdeungpo-gu, Seoul",
    description:
      "Seoul's most architecturally ambitious department store — a daylight-flooded atrium with an indoor garden — cast as the Queens Department Store in Queen of Tears. Shopping here is literally walking the set.",
    howToGet: "Subway Line 5/9 to Yeouido Station; direct underground connection.",
    hours: "10:30–20:00 (later on weekends)",
    admission: "Free",
    tips: [
      "The 5F Sounds Forest garden is the drama's signature backdrop.",
      "Basement food halls are destination dining — go hungry.",
      "Tax refund desk on B1 handles tourist refunds on the spot.",
    ],
    mapQuery: "The Hyundai Seoul, Yeouido",
  },
  {
    slug: "korean-stone-art-museum",
    name: "Korean Stone Art Museum",
    koreanName: "우리옛돌박물관",
    type: "landmark",
    region: "seoul",
    area: "Seongbuk-gu, Seoul",
    address: "Daesagwan-ro 13-gil, Seongbuk-gu, Seoul",
    description:
      "A hillside museum of centuries-old stone guardians, pagodas and quiet gardens that played the Queens family mansion in Queen of Tears. Serene, uncrowded, and startlingly cinematic.",
    howToGet:
      "Subway Line 4 to Hansung Univ. Station, then a 10-min taxi up Seongbuk-dong's embassy hill.",
    hours: "Check current hours before visiting (typically closed Mondays)",
    admission: "Paid admission (around KRW 7,000)",
    tips: [
      "The terrace gardens with city views are the drama's 'mansion lawn'.",
      "Combine with Seongbuk-dong's old literati houses and cafes downhill.",
    ],
    mapQuery: "Korean Stone Art Museum, Seongbuk-gu, Seoul",
  },
  {
    slug: "aston-house-walkerhill",
    name: "Aston House (Grand Walkerhill)",
    koreanName: "애스톤하우스",
    type: "landmark",
    region: "seoul",
    area: "Gwangjin-gu, Seoul",
    address: "177 Walkerhill-ro, Gwangjin-gu, Seoul",
    description:
      "A hilltop event villa on the Grand Walkerhill estate overlooking the Han River — the storybook wedding venue of Queen of Tears. It hosts private events, but the hotel grounds and river views are enjoyable to visitors.",
    howToGet:
      "Subway Line 5 to Gwangnaru or Line 2 to Gangbyeon, then the Walkerhill shuttle or a short taxi.",
    admission: "Private event venue — viewable from hotel grounds only",
    tips: [
      "Treat it as a stop on a Walkerhill afternoon: river-view cafe, forested walking paths.",
      "Do not enter the villa itself unless attending an event.",
    ],
    mapQuery: "Aston House Walkerhill, Seoul",
  },
  {
    slug: "aqua-planet-ilsan",
    name: "Aqua Planet Ilsan",
    koreanName: "아쿠아플라넷 일산",
    type: "themepark",
    region: "gyeonggi",
    area: "Goyang, Gyeonggi",
    address: "Hallyuworld-ro, Ilsanseo-gu, Goyang-si, Gyeonggi-do",
    description:
      "The aquarium whose glowing tanks framed Queen of Tears' proposal scene — a family-friendly stop in Goyang's Hallyu World district northwest of Seoul.",
    howToGet:
      "Subway Line 3 to Juyeop Station, then a 10-min taxi; about 40 min from central Seoul by car.",
    hours: "Typically 10:00–18:00",
    admission: "Around KRW 30,000",
    tips: [
      "Weekday afternoons are quietest for tank-front photos.",
      "The main tank's viewing gallery is the proposal backdrop.",
    ],
    mapQuery: "Aqua Planet Ilsan, Goyang",
  },
  {
    slug: "hwaseomun-pedestrian-bridge",
    name: "Hwaseomun Pedestrian Bridge",
    koreanName: "화서문 인도교",
    type: "landmark",
    region: "gyeonggi",
    area: "Paldal-gu, Suwon",
    address: "Near Hwaseomun Gate, Paldal-gu, Suwon-si, Gyeonggi-do",
    description:
      "The modest footbridge over Suwoncheon stream near Hwaseong Fortress's west gate — stage of Lovely Runner's confession scene, and now a magnet for fans re-enacting it umbrella in hand.",
    howToGet:
      "Subway Line 1 to Suwon Station, then bus or 10-min taxi toward Hwaseomun; part of the official Lovely Runner walk.",
    admission: "Free",
    tips: [
      "Bring the umbrella. You know why.",
      "Evening lighting along the stream flatters photos and hides crowds.",
    ],
    mapQuery: "Hwaseomun Gate, Suwon",
  },
  {
    slug: "hwahongmun-gate",
    name: "Hwahongmun Gate",
    koreanName: "화홍문",
    type: "landmark",
    region: "gyeonggi",
    area: "Paldal-gu, Suwon",
    address: "Hwahong-ro, Paldal-gu, Suwon-si, Gyeonggi-do",
    description:
      "A graceful seven-arched water gate where Suwoncheon flows through the UNESCO-listed Hwaseong Fortress — backdrop to Lovely Runner's bus chase and comic beats.",
    howToGet: "10-min walk upstream from Hwaseomun along the Suwoncheon path.",
    admission: "Free",
    tips: [
      "The stepping stones below the arches give the drama's low-angle view.",
      "Continue up to Banghwasuryujeong Pavilion for the fortress's prettiest corner.",
    ],
    mapQuery: "Hwahongmun Gate, Suwon",
  },
  {
    slug: "haenggung-dong-streets",
    name: "Haenggung-dong Village Streets",
    koreanName: "행궁동",
    type: "street",
    region: "gyeonggi",
    area: "Paldal-gu, Suwon",
    address: "Haenggung-dong, Paldal-gu, Suwon-si, Gyeonggi-do",
    description:
      "The retro fortress-village quarter inside Suwon Hwaseong — indie cafes, murals and hanok-line streets that host Lovely Runner's everyday scenes. Korea's tourism board publishes an official themed walk here.",
    howToGet:
      "Bus from Suwon Station to Haenggung-dong (15 min); the quarter spreads around Hwaseong Haenggung Palace.",
    admission: "Free",
    tips: [
      "Rent a hanbok near the palace for fortress photos.",
      "Suwon's famous wang-galbi (king ribs) restaurants cluster nearby — lunch sorted.",
    ],
    mapQuery: "Haenggung-dong, Suwon",
  },
  {
    slug: "andol-oreum-secret-forest",
    name: "Secret Forest at Andol Oreum",
    koreanName: "안돌오름 비밀의숲",
    type: "nature",
    region: "jeju",
    area: "Gujwa-eup, Jeju City",
    address: "Songdang-ri, Gujwa-eup, Jeju-si, Jeju-do",
    description:
      "A privately kept cypress forest at the foot of Andol Oreum — arrow-straight trunks, soft light, and the green tunnels that Welcome to Samdal-ri made famous.",
    howToGet: "Rental car practical (40 min from Jeju City); parking at the forest entrance.",
    admission: "Small entry fee (a few thousand won)",
    tips: [
      "Golden hour turns the trunks copper — the drama look.",
      "Wear closed shoes; paths are volcanic soil.",
    ],
    mapQuery: "Secret Forest Andol Oreum, Jeju",
  },
  {
    slug: "gwaneumsa-temple",
    name: "Gwaneumsa Temple",
    koreanName: "관음사",
    type: "landmark",
    region: "jeju",
    area: "Ara-dong, Jeju City",
    address: "Sallokbuk-ro, Ara-dong, Jeju-si, Jeju-do",
    description:
      "Jeju's head Buddhist temple on Hallasan's northern slope, lined with stone lanterns and cherry trees — the site of Welcome to Samdal-ri's quiet blessing scene.",
    howToGet: "20 min by car/taxi from Jeju City; also the trailhead of Hallasan's Gwaneumsa route.",
    admission: "Free",
    tips: [
      "Spring cherry blossoms along the entrance path are spectacular.",
      "Dress modestly; it is an active temple.",
    ],
    mapQuery: "Gwaneumsa Temple, Jeju",
  },
  {
    slug: "sinchang-windmill-coastal-road",
    name: "Sinchang Windmill Coastal Road",
    koreanName: "신창풍차해안도로",
    type: "nature",
    region: "jeju",
    area: "Hangyeong-myeon, Jeju City",
    address: "Sinchang-ri, Hangyeong-myeon, Jeju-si, Jeju-do",
    description:
      "Jeju's far-west coastal drive beneath giant offshore wind turbines — the cinematic road of Welcome to Samdal-ri's transitions and a sunset favorite.",
    howToGet: "Best by rental car (about 1 hr from Jeju City along the west coast).",
    admission: "Free",
    tips: [
      "The walkway loops over the water between turbines — go at sunset.",
      "Pair with nearby Chagwido island views for one golden evening.",
    ],
    mapQuery: "Sinchang Windmill Coastal Road, Jeju",
  },
  {
    slug: "mangjangpo-port",
    name: "Mangjangpo Port",
    koreanName: "망장포",
    type: "other",
    region: "jeju",
    area: "Namwon-eup, Seogwipo",
    address: "Mangjangpo, Namwon-eup, Seogwipo-si, Jeju-do",
    description:
      "A pocket-sized historic harbor on Jeju's quiet south coast where Welcome to Samdal-ri staged one of its tensest conversations — old stone jetty, small boats, big feelings.",
    howToGet: "Rental car recommended; about 50 min from Jeju City via the southern route.",
    admission: "Free",
    tips: [
      "It is tiny and residential — a 20-minute contemplative stop, not a half-day.",
      "The coastal olle trail passes through; walk a section either direction.",
    ],
    mapQuery: "Mangjangpo Port, Seogwipo",
  },
];
