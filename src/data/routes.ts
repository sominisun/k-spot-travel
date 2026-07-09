import type { TravelRoute } from "../lib/types";

export const routes: TravelRoute[] = [
  {
    slug: "seoul-kdrama-classics",
    title: "Seoul K-Drama Classics",
    tagline:
      "Three days through the scenes that built the Hallyu wave — palace walls, rooftop skylines and market smoke.",
    city: "Seoul",
    days: 3,
    budgetUSD: [120, 220],
    bestFor: ["First visit", "Classic dramas", "Walkable days"],
    showSlugs: ["goblin", "itaewon-class", "queen-of-tears", "kpop-demon-hunters"],
    dayPlans: [
      {
        day: 1,
        theme: "Old Seoul — palaces & hanok rooftops",
        stops: [
          {
            time: "09:00",
            spotSlug: "bukchon-hanok-village",
            note: "Beat the crowds in the hanok alleys while the light is soft.",
          },
          {
            time: "11:30",
            title: "Lunch — Tosokchon Samgyetang",
            note: "Ginseng chicken soup in a hanok courtyard, 2 min from the palace's west gate.",
          },
          {
            time: "13:30",
            spotSlug: "deoksugung-stonewall-path",
            note: "The Goblin stroll — slow walk, gingko trees, palace wall.",
          },
          {
            time: "16:00",
            spotSlug: "gwangjang-market",
            note: "Bindaetteok and mayak gimbap for an early street-food dinner.",
          },
        ],
      },
      {
        day: 2,
        theme: "Tower views — Namsan to Itaewon",
        stops: [
          {
            time: "10:00",
            spotSlug: "namsan-seoul-tower",
            note: "Cable car up; the free terraces already give the classic drama panorama.",
          },
          {
            time: "13:00",
            spotSlug: "myeongdong-shopping-street",
            note: "Street food lunch + first K-beauty reconnaissance (see our Beauty guide).",
          },
          {
            time: "16:30",
            spotSlug: "itaewon-street",
            note: "Park Saeroyi's slopes at golden hour; stay for a rooftop toast under the tower.",
          },
        ],
      },
      {
        day: 3,
        theme: "Hidden hillsides — Seongbuk & the fortress wall",
        stops: [
          {
            time: "10:00",
            spotSlug: "korean-stone-art-museum",
            note: "The Queens mansion from Queen of Tears — stone guardians and garden terraces.",
          },
          {
            time: "12:30",
            title: "Lunch — Seongbuk-dong local",
            note: "The embassy hill hides quiet kalguksu and hanjeongsik rooms.",
          },
          {
            time: "14:30",
            spotSlug: "naksan-park",
            note: "Walk the fortress wall KPop Demon Hunters made famous; city views all the way.",
          },
          {
            time: "18:00",
            title: "Dinner — Deepin (book ahead)",
            note: "Cooking Maniac's pasta if you snagged a CatchTable slot; Gwangjang round two otherwise.",
          },
        ],
      },
    ],
    tips: [
      "Buy a T-money card on day 1 — every stop here is subway-friendly.",
      "Bukchon enforces quiet hours; go morning, not evening.",
      "Book Deepin/Choi Dot on CatchTable about 2 weeks out.",
    ],
    themeColor: "coral",
  },
  {
    slug: "seoul-trending-now",
    title: "Seoul Trending Now",
    tagline:
      "Two days inside 2024–2026's biggest hits — Squid Game's streets, KPop Demon Hunters' skyline, Queen of Tears' luxury.",
    city: "Seoul",
    days: 2,
    budgetUSD: [90, 180],
    bestFor: ["Repeat visitors", "New releases", "Instagram"],
    showSlugs: ["squid-game", "kpop-demon-hunters", "queen-of-tears"],
    dayPlans: [
      {
        day: 1,
        theme: "Gangnam gloss — screens, malls, ddakji",
        stops: [
          {
            time: "10:00",
            spotSlug: "yangjae-citizens-forest-station",
            note: "Recreate the Recruiter's ddakji challenge (bring your own ddakji).",
          },
          {
            time: "11:30",
            spotSlug: "coex-kpop-square",
            note: "The mega-screen from the idol montages; Starfield Library next door.",
          },
          {
            time: "13:00",
            title: "Lunch — Tian Mi Mi (Gangnam)",
            note: "The Queen of Dim Sum's xiao long bao — the most walk-in-able CCW stop.",
          },
          {
            time: "15:30",
            spotSlug: "the-hyundai-seoul",
            note: "Queens Department Store in real life; don't miss the 5F indoor garden.",
          },
        ],
      },
      {
        day: 2,
        theme: "Northern Seoul — Gi-hun's lanes to the fortress wall",
        stops: [
          {
            time: "10:00",
            spotSlug: "ssangmun-dong-neighborhood",
            note: "Gi-hun's real neighborhood — market browsing, respectful photos.",
          },
          {
            time: "12:30",
            title: "Lunch — neighborhood chimaek",
            note: "Fried chicken and beer, Squid Game's comfort food of choice.",
          },
          {
            time: "14:30",
            spotSlug: "naksan-park",
            note: "Fortress-wall walk with the skyline KPop Demon Hunters painted.",
          },
          {
            time: "17:30",
            spotSlug: "myeongdong-shopping-street",
            note: "Street food dinner + Olive Young flagship haul to finish.",
          },
        ],
      },
    ],
    tips: [
      "Both days end near great night markets — pace your appetite.",
      "Weekday visits make Ssangmun-dong and Naksan feel like your private set.",
    ],
    themeColor: "plum",
  },
  {
    slug: "jeju-tangerines-trail",
    title: "Jeju: The Tangerines Trail",
    tagline:
      "Four days living inside When Life Gives You Tangerines — stone-walled villages, canola capes and the sea Ae-sun loved.",
    city: "Jeju",
    days: 4,
    budgetUSD: [260, 420],
    bestFor: ["Emotional journeys", "Couples", "Slow travel"],
    showSlugs: ["when-life-gives-you-tangerines", "welcome-to-samdal-ri"],
    dayPlans: [
      {
        day: 1,
        theme: "Aewol — Ae-sun's west coast",
        stops: [
          {
            time: "10:00",
            spotSlug: "gwangnyeong-ri-village",
            note: "Lava-stone lanes of the drama's hometown; wander softly.",
          },
          {
            time: "12:30",
            title: "Lunch — Aewol seafood",
            note: "Grilled mackerel or abalone stone-pot along the coast road.",
          },
          {
            time: "14:00",
            spotSlug: "handam-coastal-trail",
            note: "The seaside walk from the drama, ending in Aewol's cafe strip.",
          },
          {
            time: "17:30",
            spotSlug: "sinchang-windmill-coastal-road",
            note: "Drive west for turbines at sunset — the island's best golden hour.",
          },
        ],
      },
      {
        day: 2,
        theme: "Seongsan — the sunrise peak",
        stops: [
          {
            time: "06:30",
            spotSlug: "seongsan-ilchulbong",
            note: "Sunrise from the crater rim; the drama's most devastating scene lives here.",
          },
          {
            time: "10:30",
            spotSlug: "seopjikoji",
            note: "Canola-field cape walk with the peak behind you (spring = gold).",
          },
          {
            time: "13:00",
            title: "Lunch/early dinner — Haenyeo's Kitchen (book ahead!)",
            note: "The divers' story-and-seafood theater in Jongdal-ri — Jeju's most moving meal.",
          },
        ],
      },
      {
        day: 3,
        theme: "Inland Jeju — forests and temples",
        stops: [
          {
            time: "10:00",
            spotSlug: "andol-oreum-secret-forest",
            note: "Cypress tunnels from Samdal-ri — soft light before noon.",
          },
          {
            time: "13:00",
            title: "Lunch — Gujwa/Songdang cafe country",
            note: "Farm cafes among the oreum hills; tangerine everything.",
          },
          {
            time: "15:00",
            spotSlug: "gwaneumsa-temple",
            note: "Hallasan's lantern-lined temple — the blessing scene's quiet grandeur.",
          },
        ],
      },
      {
        day: 4,
        theme: "South coast farewell",
        stops: [
          {
            time: "10:30",
            spotSlug: "mangjangpo-port",
            note: "The tiny harbor heart-to-heart spot; walk a stretch of the olle trail.",
          },
          {
            time: "13:00",
            title: "Tangerine orchard stop (Nov–Jan)",
            note: "Pick-your-own orchards line the southern belt in season — the title made real.",
          },
        ],
      },
    ],
    tips: [
      "Rent a car — Jeju's drama spots don't cluster around bus lines.",
      "Haenyeo's Kitchen sells out days ahead; book before you fly.",
      "Tangerine season (Nov–Jan) doubles this route's magic.",
    ],
    themeColor: "gold",
  },
  {
    slug: "jeju-healing-dramas",
    title: "Jeju Healing Dramas",
    tagline:
      "Three gentle days on the Samdal-ri trail — hidden forests, wind-turbine coasts and harbors built for heart-to-hearts.",
    city: "Jeju",
    days: 3,
    budgetUSD: [200, 330],
    bestFor: ["Slow travel", "Nature", "Solo recharge"],
    showSlugs: ["welcome-to-samdal-ri", "when-life-gives-you-tangerines"],
    dayPlans: [
      {
        day: 1,
        theme: "East — forest bathing",
        stops: [
          {
            time: "10:00",
            spotSlug: "andol-oreum-secret-forest",
            note: "The Secret Forest's cypress corridors — Samdal-ri's signature green.",
          },
          {
            time: "13:00",
            title: "Lunch — Haenyeo's Kitchen (if booked) or Gujwa noodle house",
            note: "Divers' theater-dining nearby in Jongdal-ri when seats allow.",
          },
          {
            time: "15:30",
            spotSlug: "seongsan-ilchulbong",
            note: "Afternoon climb — quieter than dawn, equally vast.",
          },
        ],
      },
      {
        day: 2,
        theme: "Mountain to south sea",
        stops: [
          {
            time: "09:30",
            spotSlug: "gwaneumsa-temple",
            note: "Morning stillness on Hallasan's slope; cherry lane in spring.",
          },
          {
            time: "12:30",
            title: "Lunch — Seogwipo old town",
            note: "Obangdolhareubang alleys and harbor markets.",
          },
          {
            time: "14:30",
            spotSlug: "mangjangpo-port",
            note: "The drama's tense-talk harbor; olle-trail stroll either direction.",
          },
        ],
      },
      {
        day: 3,
        theme: "West wind finale",
        stops: [
          {
            time: "10:30",
            spotSlug: "handam-coastal-trail",
            note: "Turquoise-water walk into Aewol's cafes.",
          },
          {
            time: "16:00",
            spotSlug: "sinchang-windmill-coastal-road",
            note: "Sunset among the turbines to close the trip.",
          },
        ],
      },
    ],
    tips: [
      "This route is deliberately unhurried — resist adding stops.",
      "West-coast sunset changes with season; check times and arrive 40 min early.",
    ],
    themeColor: "mint",
  },
  {
    slug: "foodie-seoul-culinary-class-wars",
    title: "Foodie Seoul: Culinary Class Wars",
    tagline:
      "Three days eating the show — market smoke to Michelin stars, with honest booking strategy for every table.",
    city: "Seoul",
    days: 3,
    budgetUSD: [180, 450],
    bestFor: ["Food pilgrims", "CCW fans", "Date trips"],
    showSlugs: ["culinary-class-wars", "kpop-demon-hunters"],
    dayPlans: [
      {
        day: 1,
        theme: "Street level — the flavor foundation",
        stops: [
          {
            time: "10:00",
            spotSlug: "gwangjang-market",
            note: "Bindaetteok, mayak gimbap, yukhoe alley — the culture CCW grew from.",
          },
          {
            time: "14:00",
            spotSlug: "myeongdong-shopping-street",
            note: "Walk it off through the street-food canyons; save room.",
          },
          {
            time: "17:30",
            title: "Dinner — Myeongdong Kyoja",
            note: "The 1966 kalguksu institution; queue moves fast.",
          },
        ],
      },
      {
        day: 2,
        theme: "Gangnam — the White Spoon tier",
        stops: [
          {
            time: "11:00",
            spotSlug: "coex-kpop-square",
            note: "Digital-art palate cleanser between meals.",
          },
          {
            time: "12:30",
            title: "Lunch — Choi Dot (CatchTable, ~2 weeks ahead)",
            note: "Choi Hyun-seok's theatrical Dosan flagship at the friendlier lunch price.",
          },
          {
            time: "16:00",
            spotSlug: "the-hyundai-seoul",
            note: "Basement food halls — Korea's best dessert-and-deli safari.",
          },
          {
            time: "19:00",
            title: "Dinner — Trid (if booked)",
            note: "Triple Star's tasting course; the finale on a plate.",
          },
        ],
      },
      {
        day: 3,
        theme: "Mapo/Yongsan — the Black Spoon spirit",
        stops: [
          {
            time: "12:00",
            title: "Lunch — Toledo Pasta Bar (alarm-clock booking)",
            note: "The winner's counter — set a CatchTable alarm or keep Fabri Kitchen as joyful backup.",
          },
          {
            time: "15:00",
            spotSlug: "itaewon-street",
            note: "Digestif stroll through Itaewon's slopes and coffee rooms.",
          },
          {
            time: "18:30",
            title: "Dinner — Fabri Kitchen",
            note: "Chef Fabri's Italian seafood — the friendliest CCW table for travelers.",
          },
        ],
      },
    ],
    tips: [
      "Book Trid/Choi Dot 2–4 weeks ahead on CatchTable Global; Toledo drops go in minutes.",
      "Tian Mi Mi and Myeongdong Kyoja need no reservations — your safety net.",
      "Skip breakfast daily. Trust us.",
    ],
    themeColor: "sunset",
  },
  {
    slug: "suwon-and-gapyeong-day-trips",
    title: "Lovely Runner & Winter Sonata Day Trips",
    tagline:
      "Two easy day-trips from Seoul — Suwon's fortress romance and the island lane that started K-drama tourism.",
    city: "Gyeonggi & Gapyeong",
    days: 2,
    budgetUSD: [80, 150],
    bestFor: ["Day trips", "Romance", "Fans on a budget"],
    showSlugs: ["lovely-runner", "winter-sonata"],
    dayPlans: [
      {
        day: 1,
        theme: "Suwon — run, Sol, run",
        stops: [
          {
            time: "10:00",
            spotSlug: "haenggung-dong-streets",
            note: "The official Lovely Runner walk through the fortress village; hanbok optional.",
          },
          {
            time: "12:30",
            title: "Lunch — Suwon wang-galbi",
            note: "The city's famous king ribs, clustered near the fortress.",
          },
          {
            time: "14:30",
            spotSlug: "hwahongmun-gate",
            note: "Seven arches over the stream — the bus-chase backdrop.",
          },
          {
            time: "16:30",
            spotSlug: "hwaseomun-pedestrian-bridge",
            note: "The confession bridge at golden hour. Bring the umbrella.",
          },
        ],
      },
      {
        day: 2,
        theme: "Gapyeong — the original pilgrimage",
        stops: [
          {
            time: "09:30",
            spotSlug: "nami-island",
            note: "First ferries = empty metasequoia lanes, Winter Sonata style.",
          },
          {
            time: "13:00",
            title: "Lunch — Gapyeong dakgalbi",
            note: "Spicy chicken stir-fry, the region's signature.",
          },
          {
            time: "15:00",
            title: "Optional: Petite France / Garden of Morning Calm",
            note: "Two more drama-famous gardens on the same Gapyeong loop bus.",
          },
        ],
      },
    ],
    tips: [
      "Suwon: Line 1 from Seoul Station (~1 hr). Gapyeong: ITX from Yongsan (~1 hr).",
      "The Gapyeong City Tour Bus links Nami, Petite France and the gardens cheaply.",
    ],
    themeColor: "ocean",
  },
  {
    slug: "gangwon-goblin-coast",
    title: "Gangwon: The Goblin Coast",
    tagline:
      "Two days east — the breakwater where fans summon goblins, plus fir forests and mountain slopes in drama-perfect light.",
    city: "Gangneung & Pyeongchang",
    days: 2,
    budgetUSD: [140, 260],
    bestFor: ["Winter magic", "Coast + mountains", "Photo hunters"],
    showSlugs: ["goblin", "winter-sonata"],
    dayPlans: [
      {
        day: 1,
        theme: "Gangneung — sea & summons",
        stops: [
          {
            time: "10:30",
            spotSlug: "jumunjin-breakwater",
            note: "The buckwheat-bouquet scene — props often rentable on site.",
          },
          {
            time: "12:30",
            title: "Lunch — Jumunjin fish market",
            note: "Pick-your-own sashimi upstairs; ten minutes on foot.",
          },
          {
            time: "15:00",
            title: "Anmok Beach coffee street",
            note: "Gangneung's famous espresso row facing the sea.",
          },
        ],
      },
      {
        day: 2,
        theme: "Pyeongchang — firs & slopes",
        stops: [
          {
            time: "10:00",
            spotSlug: "woljeongsa-fir-forest",
            note: "The kilometer of giant firs from Goblin's dreamiest frames.",
          },
          {
            time: "13:00",
            title: "Lunch — Jinbu hanwoo or buckwheat",
            note: "Pyeongchang's mountain classics near the station.",
          },
          {
            time: "14:30",
            spotSlug: "yongpyong-resort",
            note: "Winter Sonata's slopes — gondola views in any season.",
          },
        ],
      },
    ],
    tips: [
      "KTX Gangneung line makes this the easiest 'far' trip in Korea (~2 hrs).",
      "Snow season (Dec–Feb) is the whole point — pack real boots.",
    ],
    themeColor: "night",
  },
  {
    slug: "first-timer-everything",
    title: "First-Timer's Everything Route",
    tagline:
      "Five days, one site's whole thesis: dramas, food, beauty and community — the complete K-content Korea debut.",
    city: "Seoul + day trip",
    days: 5,
    budgetUSD: [350, 650],
    bestFor: ["First visit", "Doing it all", "Groups"],
    showSlugs: [
      "kpop-demon-hunters",
      "goblin",
      "squid-game",
      "culinary-class-wars",
      "lovely-runner",
    ],
    dayPlans: [
      {
        day: 1,
        theme: "Arrival — Myeongdong basecamp",
        stops: [
          {
            time: "15:00",
            spotSlug: "myeongdong-shopping-street",
            note: "T-money card, SIM, street food — logistics as fun.",
          },
          {
            time: "18:00",
            spotSlug: "namsan-seoul-tower",
            note: "Sunset cable car for the KPop Demon Hunters skyline.",
          },
        ],
      },
      {
        day: 2,
        theme: "Historic north",
        stops: [
          {
            time: "09:00",
            spotSlug: "bukchon-hanok-village",
            note: "Rooftop alleys before the crowds.",
          },
          {
            time: "12:00",
            title: "Lunch — Tosokchon Samgyetang",
            note: "The presidential ginseng chicken, post-palace.",
          },
          {
            time: "14:00",
            spotSlug: "deoksugung-stonewall-path",
            note: "Goblin's wall walk into Jeong-dong's museums.",
          },
          {
            time: "17:00",
            spotSlug: "gwangjang-market",
            note: "First bindaetteok. Not the last.",
          },
        ],
      },
      {
        day: 3,
        theme: "Trending Seoul",
        stops: [
          {
            time: "10:00",
            spotSlug: "ssangmun-dong-neighborhood",
            note: "Squid Game's real streets, minus the games.",
          },
          {
            time: "13:00",
            title: "Lunch — Tian Mi Mi",
            note: "CCW's most bookable chef — dim sum queue, worth it.",
          },
          {
            time: "15:30",
            spotSlug: "naksan-park",
            note: "Fortress wall walk; Ihwa murals on the way up.",
          },
          {
            time: "18:30",
            spotSlug: "the-hyundai-seoul",
            note: "Queens Department Store dinner in the food halls.",
          },
        ],
      },
      {
        day: 4,
        theme: "Suwon day trip",
        stops: [
          {
            time: "09:30",
            spotSlug: "haenggung-dong-streets",
            note: "Lovely Runner's fortress village (Line 1, ~1 hr).",
          },
          {
            time: "12:30",
            title: "Lunch — wang-galbi",
            note: "Suwon's king ribs.",
          },
          {
            time: "15:00",
            spotSlug: "hwaseomun-pedestrian-bridge",
            note: "Confession bridge; umbrella cameo mandatory.",
          },
        ],
      },
      {
        day: 5,
        theme: "Shop, pack, promise to return",
        stops: [
          {
            time: "10:00",
            title: "Olive Young Myeongdong flagship",
            note: "The K-beauty haul with our shopping list; tax refund at the counter.",
          },
          {
            time: "13:00",
            title: "Lunch — Myeongdong Kyoja",
            note: "Farewell kalguksu.",
          },
          {
            time: "15:00",
            spotSlug: "coex-kpop-square",
            note: "One last idol-screen moment + Starfield Library.",
          },
        ],
      },
    ],
    tips: [
      "Post this plan in our Discord before you fly — members fine-tune it daily.",
      "Climate Card short-term passes cover all the Seoul transit here.",
      "Keep day 5 luggage-light: buy the beauty haul last.",
    ],
    themeColor: "coral",
  },
];
