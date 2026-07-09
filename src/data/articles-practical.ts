import type { Article } from "../lib/types";

// Practical Korea travel guides. Long-form, original editorial content —
// the AdSense-facing backbone of the site. Prices are mid-2026 ballparks;
// each article tells readers how to confirm current figures.
export const articles: Article[] = [
  {
    slug: "airport-to-seoul",
    title: "Incheon Airport to Seoul: Every Option Compared (2026)",
    category: "practical",
    excerpt:
      "AREX express vs all-stop train, limousine bus, or taxi — what each really costs, how long it takes, and which one fits a jet-lagged K-drama fan with a suitcase.",
    readMinutes: 7,
    updated: "2026-07-08",
    themeColor: "ocean",
    sections: [
      {
        heading: "The three real choices",
        paragraphs: [
          "Every first-timer lands at Incheon International Airport (ICN) with the same question: how do I actually get to my hotel? The honest answer is that there are only three options worth comparing — the AREX train, the airport limousine bus, and a taxi. Everything else (private transfers, ride-share apps at surge pricing) is a variation on the taxi at a higher price.",
          "Your decision comes down to three factors: where you are staying, how much luggage you have, and how dead you are after the flight. A solo traveler with a carry-on staying near Seoul Station has a completely different best answer than a family of four heading to a Gangnam hotel at midnight.",
        ],
      },
      {
        heading: "AREX: the train most fans should take",
        paragraphs: [
          "AREX runs two services on the same line. The Express Train goes non-stop from the airport to Seoul Station in about 43 minutes for roughly ₩11,000, with guaranteed seats and luggage racks. The All-Stop Train makes commuter stops, takes about 59 minutes, and costs around ₩4,000–5,000 with a T-money card — it is the best value in Korean airport transit.",
          "The all-stop train connects directly to the subway network, so if your hotel is near Hongdae (Hongik University station) — the classic base for younger travelers and fans — you can ride one train from the terminal almost to your door. The express makes more sense when you are staying near Seoul Station itself or transferring to KTX for Busan.",
        ],
        tip: "Buy a T-money transit card at the airport convenience store BEFORE boarding the all-stop train — you will need it all trip anyway, and it makes the airport leg cheaper than a separate ticket.",
      },
      {
        heading: "Limousine bus: the luggage-friendly choice",
        paragraphs: [
          "Airport limousine buses leave from clearly numbered stops right outside arrivals and run to every major hotel district — Myeongdong, Gangnam, Jamsil, Hongdae. Expect around ₩17,000–18,000 and 70–90 minutes depending on traffic. The seats recline, announcements are in English, and staff load your suitcases for you.",
          "The bus wins whenever your hotel is not near a subway station, when you have two or more large bags, or when you land exhausted and want to sit once and get off at your neighborhood. Check the route map at the information desk in arrivals, or type your hotel into Naver Map and look for the airport bus icon.",
        ],
      },
      {
        heading: "Taxi: when it is actually worth it",
        paragraphs: [
          "A regular taxi to central Seoul runs roughly ₩70,000–100,000 including tolls and takes about an hour outside rush hour. Between three or four people splitting the fare, arriving after midnight when trains stop, or traveling with someone with limited mobility, the math starts to work.",
          "Use the official taxi stands only, and ignore anyone who approaches you inside the terminal offering a ride — that is the one airport scam Korea still has. The Kakao T app (see our connectivity guide) also works from the airport and shows the fare estimate up front.",
        ],
        list: [
          "Solo, light luggage, hotel near a subway line → AREX all-stop",
          "Staying near Seoul Station / catching KTX → AREX Express",
          "Heavy bags or hotel far from subway → limousine bus",
          "Group of 3–4, late-night arrival → taxi via Kakao T",
        ],
      },
      {
        heading: "Late arrivals and the first-night trap",
        paragraphs: [
          "Trains and most buses wind down between 22:30 and midnight. If your flight lands at 23:00, do not gamble on catching the last AREX — either pre-book a hotel shuttle, accept the taxi cost, or book your first night at an airport-area hotel. Paradise City, the resort fans know from Single's Inferno, is ten minutes from the terminal and doubles as your first filming-location visit.",
          "Whatever you choose, screenshot your hotel name and address in Korean before you fly. Every driver and every information desk can work with a Korean address; not all can work with your pronunciation of it.",
        ],
      },
    ],
    faq: [
      {
        q: "Is the AREX Express worth the extra cost over the all-stop train?",
        a: "Only if you are going to Seoul Station specifically or value a guaranteed seat. The all-stop train costs less than half as much and takes just 15 minutes longer.",
      },
      {
        q: "Do airport buses take credit cards?",
        a: "Yes — international cards work at the ticket kiosks and with T-money. Keep ₩20,000 in cash as backup for edge cases.",
      },
      {
        q: "How early should I get to ICN for my flight home?",
        a: "Three hours. Departure security and tax-refund counters both queue badly at peak times, and you will want time for last-minute Olive Young shopping airside.",
      },
      {
        q: "Can I use Uber from Incheon Airport?",
        a: "Uber in Korea mostly dispatches regular taxis through the app. Kakao T is the local standard and generally faster to match.",
      },
    ],
    related: [
      { label: "T-money & the subway, explained", href: "/guide/tmoney-and-subway" },
      { label: "SIM, eSIM and the apps you need", href: "/guide/sim-esim-apps" },
      { label: "Plan your route with the AI planner", href: "/planner" },
    ],
  },
  {
    slug: "tmoney-and-subway",
    title: "T-money, Climate Card & the Seoul Subway: A Fan's Transit Masterclass",
    category: "practical",
    excerpt:
      "One plastic card unlocks every filming location in this guide. How T-money works, when a tourist pass beats it, and the subway etiquette that marks you as a pro.",
    readMinutes: 7,
    updated: "2026-07-08",
    themeColor: "mint",
    sections: [
      {
        heading: "Why transit is your superpower in Korea",
        paragraphs: [
          "Almost every filming location on this site — from the Goblin stone wall at Deoksugung to Gi-hun's Ssangmun-dong alleys — sits within a ten-minute walk of a subway station. Seoul's metro is clean, punctual, air-conditioned, fully signed in English, and absurdly cheap by Western standards. Fans who master it on day one see roughly twice as much as fans who don't.",
          "The system's one real quirk is payment: you do not buy paper tickets. Everything runs on a rechargeable transit card, and the sooner you get one, the smoother everything else becomes.",
        ],
      },
      {
        heading: "T-money: buy it in the first hour",
        paragraphs: [
          "T-money is a rechargeable card sold at every convenience store (CU, GS25, 7-Eleven) and airport kiosk for a few thousand won, plus whatever balance you load. Tap in, tap out — it covers subways, buses, and even taxis in most cities, and it gives you a transfer discount that paper-ticket users never see.",
          "A base subway fare is around ₩1,500 as of mid-2026; a cross-town journey with a bus transfer rarely tops ₩2,500. Top up with cash at any convenience store or the machines in every station (English menu available). The same card works in Busan and on Jeju's buses, so it travels with you.",
        ],
        tip: "Character-edition T-money cards (there is always a drama or K-pop collab running) cost a little more and double as the cheapest authentic souvenir in Korea.",
      },
      {
        heading: "When a pass beats pay-per-ride",
        paragraphs: [
          "Seoul sells short-term unlimited passes aimed at tourists — day passes and the multi-day Climate Card variants. The break-even is around eight to ten rides a day, which sounds like a lot but is exactly what a packed filming-location day looks like: hotel → Bukchon → lunch → Deoksugung → Namsan → Gwangjang → hotel is already six taps.",
          "Do the math against your actual route plan. If you are following our Seoul K-Drama Classics route, a day pass usually wins on days one and two. If your style is two neighborhoods a day with long cafe stops, plain T-money is cheaper. Check current pass prices at any station customer-service office — they change more often than fares do.",
        ],
      },
      {
        heading: "Reading the system like a local",
        paragraphs: [
          "Use Naver Map or Kakao Metro for routing — Google Maps handles Korean transit poorly (details in our apps guide). Lines are color-coded and numbered; transfers are signposted with walking-time estimates that are honest. Exits are numbered, and every location page on this site tells you which exit to take — that single detail saves more time than anything else we publish.",
          "Trains run roughly 05:30 to midnight. Rush hours (08:00–09:30, 18:00–19:30) are survivable but not fun with luggage; plan filming-location runs mid-morning and you will often have famous spots nearly to yourself.",
        ],
        list: [
          "Stand right, walk left on escalators",
          "Priority seats stay empty even in crowds — leave them",
          "Phone calls are quiet or skipped; texting is universal",
          "Eating on the subway is a no (water and coffee with lids are fine)",
          "Let passengers off before boarding — Koreans queue at door markings",
        ],
      },
      {
        heading: "Buses: the unlock for drama scenery",
        paragraphs: [
          "Fans skip buses out of fear and miss the most cinematic transit in Korea — half the emotional bus scenes in K-dramas were filmed on ordinary city routes. Naver Map tells you exactly which bus, which stop, and how many stops to ride; screens and announcements on board repeat it in English on major routes.",
          "Tap your T-money when you board AND when you get off — the exit tap is what triggers your free transfer window. Miss it and the next leg charges full price. That is the entire skill; you now know how to ride Korean buses.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I just use my contactless credit card like in London?",
        a: "Foreign contactless open-loop payment has been rolling out on Seoul gates, but coverage and reliability vary by card and line. T-money still works everywhere, every time — get one.",
      },
      {
        q: "What happens if my T-money balance goes negative mid-journey?",
        a: "Gates will stop you at exit; use the fare-adjustment machine next to the gate line to top up and tap out. No fine, no drama.",
      },
      {
        q: "Is the subway safe late at night?",
        a: "Seoul's metro is among the safest in the world at all hours. Your bigger risk is missing the last train around midnight and paying for a taxi.",
      },
      {
        q: "Can I get a refund on my T-money balance before flying home?",
        a: "Convenience stores refund small balances (a service fee applies). Or keep the card — it stays valid for years and makes a great excuse to come back.",
      },
    ],
    related: [
      { label: "Airport to Seoul: every option", href: "/guide/airport-to-seoul" },
      { label: "Seoul classics route (subway-only)", href: "/routes/seoul-kdrama-classics" },
      { label: "The apps that replace Google Maps", href: "/guide/sim-esim-apps" },
    ],
  },
  {
    slug: "sim-esim-apps",
    title: "Staying Connected in Korea: eSIM, SIM & the 6 Apps That Replace Google",
    category: "practical",
    excerpt:
      "Google Maps barely works for navigation in Korea. Here is the connectivity setup and the exact app stack — Naver Map, Papago, Kakao T and friends — that locals and smart fans run.",
    readMinutes: 6,
    updated: "2026-07-08",
    themeColor: "plum",
    sections: [
      {
        heading: "The one thing to know before you land",
        paragraphs: [
          "Korea has some of the fastest mobile internet on earth, and you will need it constantly — for maps, translation, reservations, and looking up which drama scene was filmed on the street you are standing in. The mistake is assuming your usual app stack works here. Because of national mapping regulations, Google Maps cannot give walking or driving directions in Korea; it shows places but navigates poorly.",
          "The fix is simple: get data sorted before or at the airport, and install the Korean app stack below. Thirty minutes of setup buys you a friction-free trip.",
        ],
      },
      {
        heading: "eSIM vs SIM vs pocket Wi-Fi",
        paragraphs: [
          "If your phone supports eSIM, buy a Korea travel eSIM online before you fly — activation is a QR scan, prices are competitive, and you keep your home SIM active for verification texts. Data-unlimited plans for a week typically cost less than a nice dinner in Myeongdong.",
          "Physical SIMs are sold at airport counters and convenience stores; they work fine but mean swapping cards and carrying a pin. Pocket Wi-Fi only wins for groups of three or more sharing one device, at the cost of one more battery to charge every night. For most solo fans and couples, eSIM is the clean answer.",
        ],
        tip: "Buy your eSIM a few days early and test-install the QR at home on Wi-Fi. Landing with connectivity already working turns immigration-to-AREX into a fifteen-minute victory lap.",
      },
      {
        heading: "The essential six apps",
        paragraphs: [
          "Install these before you fly; several need your home phone number for signup, which is easier while you still have it active.",
        ],
        list: [
          "Naver Map — THE map of Korea: walking, transit, bus arrival times, English interface. Every mapQuery on this site pastes straight into it.",
          "Papago — Naver's translator, better than Google Translate for Korean. Camera mode reads menus; conversation mode handles taxi chats.",
          "Kakao T — taxis summoned like magic, fare shown up front, no Korean needed. Works with foreign cards.",
          "KakaoTalk — Korea's messenger. Some small guesthouses and tour operators only communicate here.",
          "CatchTable Global — the restaurant reservation app for foreigners (our booking guide covers it step by step).",
          "Klook or similar — for booking day tours to hard-to-reach filming locations like Gangwon coasts.",
        ],
      },
      {
        heading: "Living without Google Maps navigation",
        paragraphs: [
          "Treat Google Maps as your discovery layer (reviews, opening hours in English) and Naver Map as your execution layer (getting there). Search Naver in English — it understands 'Gyeongbokgung' and 'Tosokchon Samgyetang' — then tap Directions and trust it over your instincts; its walking routes use alleys and underpasses no foreign map knows.",
          "Save every spot from your K-SPOT route plan into a Naver Map favorites folder the night before. Offline, screenshot the route summary: Korean data coverage is excellent, but subway tunnels between stations can drop signal exactly when you need the exit number.",
        ],
      },
      {
        heading: "Power, plugs and the daily reality",
        paragraphs: [
          "Korea uses the European-style two-round-pin plug (Type C/F) at 220V. One universal adapter plus a 10,000mAh power bank covers you — navigation and camera use will eat your battery by mid-afternoon, and the cafe you recharge in will probably have appeared in something you have watched.",
          "Free public Wi-Fi blankets subway stations, cafes and tourist zones, but do not architect your trip around it; a data plan costs too little to justify hunting hotspots while your tour group moves on.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a Korean phone number?",
        a: "For a normal tourist trip, no — data-only eSIM plus KakaoTalk covers communication. A local number only matters for some domestic services and loyalty signups.",
      },
      {
        q: "Does Kakao T accept foreign credit cards?",
        a: "Yes, register your card in the app. If a payment fails, choose 'pay driver directly' mode and use your physical card in the taxi.",
      },
      {
        q: "Is Papago really better than Google Translate?",
        a: "For Korean, consistently — especially menus, signs and polite phrasing. Keep both installed; they occasionally disagree in useful ways.",
      },
    ],
    related: [
      { label: "How to book hot restaurants", href: "/guide/booking-restaurants-catchtable" },
      { label: "Transit masterclass", href: "/guide/tmoney-and-subway" },
      { label: "Ask our AI concierge anything", href: "/planner" },
    ],
  },
  {
    slug: "money-cards-tax-refund",
    title: "Money in Korea 2026: Cards, Cash, WOWPASS & Getting Your Tax Back",
    category: "practical",
    excerpt:
      "Korea is nearly cashless — until suddenly it isn't. What actually works for foreign cards, how much cash to carry, and the instant tax refund most tourists leave on the table.",
    readMinutes: 6,
    updated: "2026-07-08",
    themeColor: "gold",
    sections: [
      {
        heading: "The 90% cashless reality",
        paragraphs: [
          "Your Visa or Mastercard works almost everywhere in Korea: department stores, Olive Young, convenience stores, cafes, taxis, even most market stalls now wave a card terminal at you. Contactless and mobile wallets are widely accepted in cities. If your trip is Seoul plus Busan plus Jeju's main sights, you could survive on plastic alone.",
          "The exceptions cluster exactly where fans go: tiny street-food stalls at Gwangjang Market, old-school snack shops in filming-location alleys, temple donation boxes, and some rural bus fares. That is why the working formula is card-first with a cash cushion.",
        ],
      },
      {
        heading: "How much cash, and where to get it",
        paragraphs: [
          "Carry ₩50,000–100,000 (roughly $40–75) and replenish when it dips. Skip airport exchange counters beyond survival money; rates in town are better. The best mainstream options are bank-branded ATMs marked 'Global' (found in every convenience store and station) and currency exchange machines in Myeongdong and Hongdae.",
          "Tell your bank you are traveling, and always choose to be charged in Korean won when a terminal offers your home currency — dynamic currency conversion is the quietest overcharge in travel.",
        ],
      },
      {
        heading: "WOWPASS: the tourist card that solves three problems",
        paragraphs: [
          "WOWPASS is a prepaid card built for foreign visitors: load foreign cash or top up by app, swipe it like a debit card anywhere, and it doubles as a T-money transit card. Kiosks at the airport and major stations issue it on the spot with your passport.",
          "It shines for travelers whose home cards charge foreign transaction fees, for teens traveling with parents, and for anyone who wants spending sealed off from their main account. It is optional — a fee-free travel card from home does the same job — but as a one-card-does-everything solution for a two-week fan trip, it is hard to beat.",
        ],
        tip: "Whichever card you spend on, keep it consistent — one card for everything makes the tax-refund and expense math trivially easy at trip's end.",
      },
      {
        heading: "Tax refunds: the money fans forget",
        paragraphs: [
          "Korea refunds VAT (around 10%) to tourists on purchases from participating stores — and unlike most countries, it does much of it instantly at the register. Spend over roughly ₩15,000 in one transaction at a Tax Free store (Olive Young, department stores, big fashion chains), show your passport, and the refund is deducted on the spot up to per-purchase and per-trip limits.",
          "For larger purchases or stores without instant refund, keep the refund slips and process them at the airport: customs scan first (have the goods accessible), then the refund counter or kiosk pays you in cash or to card. Give yourself the extra thirty minutes; the queue is worst exactly when the Olive Young hauls board evening flights.",
        ],
        list: [
          "Minimum ~₩15,000 per receipt at Tax Free stores",
          "Passport required at purchase — a photo of it usually works, physical is safer",
          "Instant refund caps apply per purchase; big-ticket items go the airport route",
          "Unused goods may be inspected at customs — keep tags on",
        ],
      },
      {
        heading: "Tipping and the prices you can trust",
        paragraphs: [
          "There is no tipping in Korea — not taxis, not restaurants, not cafes. Prices on the menu are what you pay; tax is included. Attempting to tip mostly generates a polite chase down the street to return your money.",
          "Budget-wise, this makes Korea unusually predictable: a street-food graze at Gwangjang runs under ₩15,000, a great casual meal ₩10,000–15,000, and the splurge tasting menus from our Culinary Class Wars list are published-price affairs. The only budget wildcards are shopping and cafe-hopping — which, fairly warned, is where every fan's budget actually dies.",
        ],
      },
    ],
    faq: [
      {
        q: "Are American Express cards accepted?",
        a: "In department stores, hotels and bigger restaurants, usually yes; smaller shops often only take Visa/Mastercard networks. Carry a backup.",
      },
      {
        q: "Can I exchange money at Korean banks?",
        a: "Yes with your passport, but rates and queues make Myeongdong's licensed exchange booths and Global ATMs more practical for tourists.",
      },
      {
        q: "Does the tax refund apply to restaurant meals?",
        a: "No — refunds cover goods you take out of the country, not food, lodging or services consumed in Korea.",
      },
    ],
    related: [
      { label: "K-Beauty haul strategy (with tax tips)", href: "/beauty" },
      { label: "What a fan trip actually costs", href: "/routes" },
      { label: "Connectivity & payment apps", href: "/guide/sim-esim-apps" },
    ],
  },
  {
    slug: "booking-restaurants-catchtable",
    title: "How Foreigners Book Korea's Hottest Restaurants (CatchTable, Naver & No-Show Culture)",
    category: "practical",
    excerpt:
      "Culinary Class Wars made Seoul's best tables the hardest bookings in Asia. The exact process — apps, timing windows, waitlist tactics — that gets foreign fans a seat.",
    readMinutes: 8,
    updated: "2026-07-08",
    themeColor: "coral",
    sections: [
      {
        heading: "Why booking in Korea feels different",
        paragraphs: [
          "After Culinary Class Wars, reservations at featured restaurants surged — bookings jumped by triple digits within weeks of each season, and the aftershocks never fully faded. Seoul dining now runs on reservation apps with release windows, like concert tickets. Walking in and hoping works fine for 90% of Korean restaurants and 0% of the famous ones.",
          "The good news: the system is app-based, transparent, and increasingly foreigner-friendly. Once you understand release windows and waitlists, you have the same shot as a local with fast thumbs.",
        ],
      },
      {
        heading: "CatchTable Global: your main weapon",
        paragraphs: [
          "CatchTable is Korea's dominant fine-dining reservation platform, and its Global version is built for foreign users: English interface, international phone signup, foreign card support. Most Culinary Class Wars alumni restaurants on our Food pages list it as their booking channel.",
          "The mechanics: each restaurant opens reservations on a schedule — commonly 30 days ahead, sometimes a monthly drop for the whole next month. Popular slots go in minutes. Find your target on our restaurant pages, note the booking method, then check the restaurant's page in-app for its exact release rhythm.",
        ],
        list: [
          "Download CatchTable Global and complete signup BEFORE your trip",
          "Follow target restaurants in-app and on Instagram — drop schedules post there",
          "Set alarms for release windows in Korean time (KST)",
          "Book the moment the window opens; refine details later",
          "Join waitlists aggressively — cancellations are constant",
        ],
      },
      {
        heading: "Naver, phone calls and the human fallback",
        paragraphs: [
          "Restaurants outside the fine-dining tier often use Naver Reservations, which historically wanted Korean accounts — support for foreign users has improved, but when it blocks you, do not give up. Your hotel concierge books by phone in thirty seconds; guesthouse hosts usually will too if you ask nicely. This is a normal favor in Korea, not an imposition.",
          "For the no-reservation legends — Myeongdong Kyoja's noodles, Gwangjang Market stalls, Tosokchon's samgyetang queue — the tactic is timing, not apps: arrive before 11:30 or after 14:00 and the lines shrink to minutes.",
        ],
        tip: "Solo travelers have a genuine edge: counters at chef-driven spots hold single seats that groups cannot take, and waitlists clear singles first. Some of Seoul's hardest tables are easiest alone.",
      },
      {
        heading: "No-show culture: the rule you must not break",
        paragraphs: [
          "Korean dining culture takes reservations seriously — the no-show problem got bad enough that deposits and card guarantees are now standard at top restaurants. Expect prepayment or a hold of ₩10,000–50,000 per head at tasting-menu places, forfeited if you vanish.",
          "Arrive on time; the polite grace window is about ten minutes, after which your table may legally and socially move on. Need to cancel? Do it in-app as early as you can — freed slots go to waitlisted fans just like you, and the karma economy is real.",
        ],
      },
      {
        heading: "A realistic booking plan for a food-focused trip",
        paragraphs: [
          "Four weeks out: pick one or two 'grail' bookings from our Culinary Class Wars list and set alarms for their release windows. Two weeks out: fill your plan with the accessible tier — dim sum at Tian Mi Mi, walk-in institutions, market crawls need no apps. On the ground: keep lunch flexible; use waitlist notifications to upgrade any day a slot frees.",
          "And book lunch over dinner where menus allow — the same kitchens, tasting menus at 60–70% of the price, and far better availability. Your evening is then free for night markets, which no reservation system has yet conquered.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a Korean phone number for CatchTable?",
        a: "No — CatchTable Global accepts international numbers. Some individual restaurants still ask for a local contact; give your hotel's front desk number.",
      },
      {
        q: "How far ahead should I plan for a Culinary Class Wars restaurant?",
        a: "Assume a 30-day release window and book the second it opens. For the hardest two or three names, treat any successful booking as the fixed point your itinerary bends around.",
      },
      {
        q: "What if I have dietary restrictions?",
        a: "Note them at booking — tasting menus are fixed and kitchens need lead time. 'No cilantro' is easy; strict vegan at a seafood-driven counter may simply be a no.",
      },
      {
        q: "Are deposits refundable?",
        a: "Usually credited toward your bill or refunded on timely cancellation per the restaurant's stated policy — read the booking screen; terms vary.",
      },
    ],
    related: [
      { label: "All Culinary Class Wars restaurants", href: "/food" },
      { label: "Foodie Seoul: the 3-day route", href: "/routes/foodie-seoul-culinary-class-wars" },
      { label: "K-drama dishes bucket list", href: "/guide/kdrama-food-bucket-list" },
    ],
  },
  {
    slug: "korea-travel-etiquette",
    title: "Korean Etiquette for Fans + 15 Phrases That Open Doors",
    category: "practical",
    excerpt:
      "You learned some Korean from 400 hours of dramas — here is what actually matters in person: the etiquette locals notice, filming-location manners, and 15 phrases with real-world power.",
    readMinutes: 7,
    updated: "2026-07-08",
    themeColor: "night",
    sections: [
      {
        heading: "Relax: the bar is lower than you fear",
        paragraphs: [
          "Koreans do not expect foreigners to perform Korean etiquette perfectly — visible effort earns instant goodwill. The handful of rules below covers 95% of situations; everything else is forgiven with a smile and a small bow, which is conveniently also how you say thank you, sorry, and hello without words.",
          "The two-handed rule is the highest-value habit: give and receive things (cards, change, drinks) with both hands, or with your right hand supported by your left. It reads as instant respect in shops, restaurants and every soju scene you have ever watched.",
        ],
      },
      {
        heading: "Dining and drinking, drama-style",
        paragraphs: [
          "Wait for the eldest to lift chopsticks first at a shared meal; never plant your chopsticks upright in rice (funeral imagery); pour drinks for others rather than yourself and turn slightly away from elders when drinking — yes, exactly like the office dinner scenes. In casual settings among travelers none of this is enforced, but performing it in a traditional restaurant delights everyone.",
          "Call staff with a clear '저기요' (jeogiyo — excuse me) or press the table bell; hovering politely gets you ignored, which is efficiency, not rudeness. And the banchan side dishes refill free — asking for more kimchi is a compliment, not an imposition.",
        ],
      },
      {
        heading: "Filming-location manners (please read this one)",
        paragraphs: [
          "Many beloved locations are ordinary places: Bukchon is a residential neighborhood, Ssangmun-dong is where real people live, that cafe from the drama is someone's small business. Bukchon now enforces visitor quiet hours precisely because fan tourism got loud — stay on public paths, keep voices low, never photograph into windows or open doors.",
          "At businesses made famous by shows, the courtesy is simple: buy something. A coffee at the drama cafe, a snack at the market stall — filming fame does not pay their rent; customers do. This is also, not coincidentally, how you get the best photos and occasionally a story about the filming day.",
        ],
        tip: "Golden-hour crowds at famous spots are brutal. Sunrise visits get you empty frames AND count as respectful tourism — residential areas are quietest and most beautiful before 9am.",
      },
      {
        heading: "The 15 phrases with real power",
        paragraphs: [
          "Pronunciation guide: read the romanization plainly; Koreans meet you more than halfway.",
        ],
        list: [
          "안녕하세요 (annyeong-haseyo) — hello, the universal opener",
          "감사합니다 (gamsahamnida) — thank you, formal and always right",
          "죄송합니다 (joesong-hamnida) — I'm sorry / excuse me (serious)",
          "저기요 (jeogiyo) — excuse me! (getting attention)",
          "이거 주세요 (igeo juseyo) — this one, please (point and win)",
          "얼마예요? (eolmayeyo) — how much is it?",
          "맛있어요! (masisseoyo) — it's delicious! (instant friendship)",
          "화장실 어디예요? (hwajangsil eodiyeyo) — where is the bathroom?",
          "영어 하세요? (yeongeo haseyo) — do you speak English?",
          "천천히 말해 주세요 (cheoncheonhi malhae juseyo) — please speak slowly",
          "포장해 주세요 (pojang-hae juseyo) — takeout, please",
          "덜 맵게 해주세요 (deol maepge haejuseyo) — less spicy, please",
          "사진 찍어도 돼요? (sajin jjigeodo dwaeyo) — may I take a photo?",
          "카드 돼요? (kadeu dwaeyo) — do you take cards?",
          "잘 먹었습니다 (jal meogeotseumnida) — 'I ate well' — say it leaving any restaurant and watch faces light up",
        ],
      },
      {
        heading: "Small frictions, decoded",
        paragraphs: [
          "Shoes off wherever you see a raised floor or shoe cubbies — traditional restaurants, hanok stays, some cafes. Blowing your nose at the table is worse than slurping noodles (slurping is fine). Personal space in queues and subways is thinner than Western default; nobody is being rude.",
          "Age and hierarchy structure the language itself, which you cannot navigate — so don't try. Default to the polite forms above, add the small bow, and you will be treated with more warmth than most fluent speakers manage. The fandom is a genuine icebreaker: mentioning the drama that brought you here turns clerks into tour guides.",
        ],
      },
    ],
    faq: [
      {
        q: "Is bowing required?",
        a: "A small head-nod bow with greetings and thanks is plenty for foreigners. Save deep bows for the dramas.",
      },
      {
        q: "Can I wear what I want?",
        a: "Seoul is fashion-forward and tolerant. The only real norms: modest shoulders at temples and palaces, and dress up slightly for fine dining.",
      },
      {
        q: "Is it okay to speak to strangers about K-dramas?",
        a: "Context matters — shop staff and cafe owners at filming locations love it; commuters mid-doom-scroll do not. Read the room like you would at home.",
      },
    ],
    related: [
      { label: "Photo etiquette at filming spots", href: "/guide/filming-location-photo-etiquette" },
      { label: "Neighborhoods where the rules matter", href: "/guide/seoul-neighborhoods-for-fans" },
      { label: "Join our Discord for phrase practice", href: "/community" },
    ],
  },
];
