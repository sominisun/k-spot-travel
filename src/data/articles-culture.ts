import type { Article } from "../lib/types";

// Culture, food & fan-travel features — the pillar content that links the
// whole site together (shows ↔ routes ↔ food ↔ beauty).
export const articles: Article[] = [
  {
    slug: "how-to-plan-kdrama-trip",
    title: "How to Turn Your Watchlist Into a Korea Itinerary (The Complete Method)",
    category: "itinerary",
    excerpt:
      "The pillar guide: a five-step method that converts the shows you love into a day-by-day route — with realistic geography, booking timelines and the mistakes every first-timer makes.",
    readMinutes: 9,
    updated: "2026-07-08",
    themeColor: "coral",
    sections: [
      {
        heading: "Start from feelings, not from lists",
        paragraphs: [
          "Every fan trip that disappoints makes the same mistake: it starts from a list of famous places instead of from what you actually felt watching. Standing on the Goblin stone wall means nothing if you never watched Goblin; standing where your show filmed — even an unglamorous alley — can be the emotional peak of a trip.",
          "So step one is honest curation. Write down the three to five titles that genuinely moved you, not the ones the algorithm says are popular. Our Shows directory then tells you what is actually visitable for each — some beloved dramas filmed mostly on closed sets, while others left a trail of real places you can walk in an afternoon.",
        ],
      },
      {
        heading: "Step two: let geography veto your dreams",
        paragraphs: [
          "Korea is compact but not teleport-compact. The classic first-timer error is planning Seoul, Jeju, Busan and a Gangwon coast sunrise into five days — a schedule that spends more hours in transit than in scenes. The working rule: each region you add costs half a day of pure logistics.",
          "Group your shows' locations by region using our Spots map and be ruthless. A Seoul-heavy watchlist (Itaewon Class, Squid Game, Goblin) is a pure Seoul trip with day trips. When Life Gives You Tangerines demands Jeju — three nights minimum to feel it rather than tick it. Five to seven days comfortably covers Seoul plus ONE other region; save the rest for the sequel trip.",
        ],
        tip: "Our AI planner does this grouping automatically — select your shows and days, and it clusters spots into geographically sane days you can then edit.",
      },
      {
        heading: "Step three: anchor bookings before dreaming further",
        paragraphs: [
          "A handful of experiences are scarce and date-locked; everything else flexes around them. Book flights and hotels first, obviously — then, four weeks out, the scarce anchors: Culinary Class Wars restaurant slots (release windows fill in minutes; see our booking guide), popular Jeju rental cars in peak season, and any special-access tours.",
          "Everything on our Spots pages that is a public street, palace, market or coastline needs zero booking — that is most of a fan itinerary. The scarcity is concentrated in food and a few experiences, which is exactly where planning effort pays.",
        ],
      },
      {
        heading: "Step four: build days with a rhythm that survives reality",
        paragraphs: [
          "The sustainable day shape: one anchor neighborhood in the morning (two or three spots on foot), a food destination for lunch, one different-but-adjacent area in the afternoon, and an evening that needs no energy — a market, a river park, a shopping street. Four to six stops. More than that and you are commuting between checkboxes.",
          "Alternate intensity. A dawn hike up Seongsan Ilchulbong earns a cafe-coast afternoon; a full palace-and-hanok day earns a lazy Han River evening with convenience-store ramyeon, which is itself a drama scene you get to live. Weather insurance matters too: for every outdoor day, know your indoor swap (museums, department stores, jjimjilbang).",
        ],
        list: [
          "Morning: 2–3 spots in ONE neighborhood, arrive before crowds",
          "Lunch: the day's food anchor (booked or strategically queued)",
          "Afternoon: adjacent area, 1–2 spots max",
          "Evening: low-effort atmosphere — markets, riversides, night views",
          "Every outdoor day carries a rain plan",
        ],
      },
      {
        heading: "Step five: leave holes in the plan",
        paragraphs: [
          "The best moments of a fan trip are unplannable: the side alley that looks exactly like that scene, the grandmother at the market who feeds you extra because you tried Korean, the cafe you enter to escape rain that turns out to be someone's favorite filming spot. A schedule with no slack cannot receive luck.",
          "Practically: one completely unplanned half-day per four trip days, and never more than two 'must' items per day. Fans who follow this rule come home saying the trip felt like living in a drama. Fans who don't come home with photos of 40 places they don't remember visiting.",
        ],
      },
    ],
    faq: [
      {
        q: "How many days do I need for a first K-drama trip?",
        a: "Five full days makes Seoul sing; seven lets you add Jeju or a coast. Under four days, do Seoul only and do it slowly.",
      },
      {
        q: "Should I book a guided K-drama tour or go independent?",
        a: "Both work. Guided day tours shine for far-flung clusters (Gangwon coasts, DMZ-adjacent CLOY sites) where transit eats a solo day. Cities are better independent — our routes are built for exactly that.",
      },
      {
        q: "What if my favorite show isn't on this site yet?",
        a: "Tell us in the Discord — verified location requests from members are how the database grows.",
      },
    ],
    related: [
      { label: "Generate your plan now", href: "/planner" },
      { label: "Browse ready-made routes", href: "/routes" },
      { label: "When to visit (seasons guide)", href: "/guide/best-time-to-visit-korea" },
    ],
  },
  {
    slug: "seoul-neighborhoods-for-fans",
    title: "Seoul Neighborhoods Through a Fan's Eyes: Where to Stay, Wander & Feel It",
    category: "culture",
    excerpt:
      "Bukchon's hanok lanes, Gi-hun's Ssangmun-dong, Itaewon's slopes, Seongsu's warehouse cafes — a fan-lens tour of Seoul's character neighborhoods and which one should be YOUR base.",
    readMinutes: 8,
    updated: "2026-07-08",
    themeColor: "plum",
    sections: [
      {
        heading: "Seoul is a collection of small towns",
        paragraphs: [
          "Dramas understand something guidebooks miss: Seoul is not one city but dozens of villages wearing a skyline. Writers choose neighborhoods the way they cast actors — Bukchon plays old money and heritage, Ssangmun-dong plays working-class warmth, Itaewon plays ambition and reinvention. Learn the typecasting and the whole city becomes legible.",
          "This guide walks the districts fans actually seek out, what each one played, and — the question we get most in Discord — which one to sleep in.",
        ],
      },
      {
        heading: "The heritage north: Bukchon, Ikseon-dong, the palace belt",
        paragraphs: [
          "Between Gyeongbokgung and Changdeokgung palaces spreads the Seoul of sageuk dramas and every rooftop hanok shot you have ever screenshotted. Bukchon Hanok Village is the icon — 600-year-old lanes, morning light on tiled roofs, and strict quiet hours because people genuinely live there. Ikseon-dong nearby converted its hanoks into Seoul's most atmospheric cafe warren; it is the place to feel historic Seoul with a flat white in hand.",
          "K-Pop Demon Hunters painted this skyline-meets-hanok texture into animation, and the contrast is the point: stand in a Bukchon alley and the Lotte Tower floats behind eaves built under kings. Stay here if atmosphere outranks nightlife on your list — evenings are hushed, mornings are magic.",
        ],
      },
      {
        heading: "The northern real-life belt: Ssangmun-dong and university Seoul",
        paragraphs: [
          "Squid Game made Ssangmun-dong shorthand for the Seoul most tourists never see: low-rise lanes, corner supermarkets, mandu steam in winter air. Visiting is a masterclass in respectful fan travel — it is a working neighborhood, not a set — and it pairs naturally with Naksan Park's fortress wall walk, whose sunset views the animation era made newly famous.",
          "Nearby university districts (Daehak-ro, and Hongdae westward) supply the youth-drama energy: street performance, cheap great food, noraebang until dawn. Hongdae remains the default base for younger fans — central enough, alive at every hour, and the AREX from the airport stops there directly.",
        ],
        tip: "Base-choosing shortcut: Hongdae for energy and transit, Myeongdong for shopping and first-timers, the palace belt for atmosphere, Gangnam only if your itinerary is heavily southern.",
      },
      {
        heading: "Itaewon and Yongsan: the slopes of ambition",
        paragraphs: [
          "Itaewon Class turned Itaewon's steep lanes into a pilgrimage of underdog energy, and the neighborhood wears it well — Seoul's most international district, layered with Namsan Tower views that anchor half the emotional rooftop scenes in television. Walk the World Food Street at golden hour and you are inside the show's palette.",
          "Yongsan below has quietly become a food destination (several Culinary Class Wars chefs cook here) and hosts the green sweep of Yongsan Family Park. The Itaewon–Hannam axis is also where celebrity-spotting is least mythical, for whatever that is worth to your group chat.",
        ],
      },
      {
        heading: "South of the river: Gangnam gloss and Seongsu cool",
        paragraphs: [
          "Gangnam plays exactly what it plays on screen: chaebol offices, luxury basements, the COEX mega-screens of idol montages, The Hyundai Seoul's garden atrium doubling as Queen of Tears' department-store kingdom. Come for a concentrated afternoon of that gloss — most fans find a half day is the right dose.",
          "Seongsu, the 'Brooklyn of Seoul', is the neighborhood dramas now use to code creative-class characters: warehouse cafes, pop-up culture, K-beauty flagship experiments. It is the best cafe-hopping in the city and the strongest argument that fan Seoul keeps renewing itself — your next favorite show is scouting here right now.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Itaewon appropriate to visit after the 2022 tragedy?",
        a: "Yes — the neighborhood has long since asked visitors to return and support its businesses. Visit the memorial alley respectfully if you pass it.",
      },
      {
        q: "Which neighborhood is best for K-beauty shopping?",
        a: "Myeongdong for density and tax-refund efficiency, Seongsu for brand flagships and trends. Our Beauty section maps both.",
      },
      {
        q: "Can I see all these neighborhoods in one trip?",
        a: "In five Seoul days, comfortably — they cluster along two subway spines. Our Seoul routes sequence them without backtracking.",
      },
    ],
    related: [
      { label: "Seoul K-Drama Classics route", href: "/routes/seoul-kdrama-classics" },
      { label: "Trending Seoul in 2 days", href: "/routes/seoul-trending-now" },
      { label: "Etiquette in residential areas", href: "/guide/filming-location-photo-etiquette" },
    ],
  },
  {
    slug: "kdrama-food-bucket-list",
    title: "The K-Drama Food Bucket List: 10 Dishes You Know From Screen (and Where to Eat Each)",
    category: "food",
    excerpt:
      "Tteokbokki from a street cart, chimaek by the Han River, dalgona without the deadline — the dishes 400 episodes taught you to crave, matched to the places that do them justice.",
    readMinutes: 8,
    updated: "2026-07-08",
    themeColor: "sunset",
    sections: [
      {
        heading: "You already know this menu",
        paragraphs: [
          "No cuisine on earth gets more screen time than Korean food. Dramas weaponize it — the ramyeon invitation, the soju confession, the mother's doenjang jjigae that fixes a broken protagonist. By the time a fan lands at Incheon they carry a complete sensory syllabus with zero field experience.",
          "This list closes that gap: the ten most screen-famous foods, what the shows never tell you, and specifically where to eat each one well — street level to the Culinary Class Wars tier.",
        ],
      },
      {
        heading: "The street canon: tteokbokki, hotteok, gimbap, dalgona",
        paragraphs: [
          "Tteokbokki — chewy rice cakes in gochujang lava — is the after-school food of every flashback. Eat it standing at a market stall (Gwangjang's are theatrical) or in a Ssangmun-dong bunsik shop for full Squid Game verisimilitude; ask 'deol maepge' for mercy on the spice. Hotteok, the molten brown-sugar pancake, is the winter street food of every first-snow date scene; the queue tells you which cart.",
          "Mayak gimbap ('narcotic' mini seaweed rolls) is Gwangjang Market's signature — the name is a joke about addictiveness that survives peer review. And dalgona, the honeycomb candy that traumatized a global audience, is sold by the same grandfather-run carts it always was, now with fans queueing to attempt the umbrella. Losing carries no penalty here.",
        ],
      },
      {
        heading: "The table canon: KBBQ, jjajangmyeon, samgyetang, naengmyeon",
        paragraphs: [
          "Korean barbecue needs no introduction, but dramas encode its real function: it is where hierarchies dissolve. Order samgyeopsal, let the ajumma cut it with scissors, wrap it in perilla leaf, and understand every team-dinner scene retroactively. Neighborhood joints with charcoal and low stools beat famous chains; follow the smoke and office workers around 19:00.",
          "Jjajangmyeon — the black-bean noodles of moving day, heartbreak and Chinese-restaurant scenes — is best in old-school 중국집 where the wok breath is real. Samgyetang, the whole-chicken ginseng soup, has its institution: Tosokchon near Gyeongbokgung, a hanok courtyard where presidents and drama crews have queued alike. Naengmyeon, the icy buckwheat noodle of summer scenes and Pyongyang-style purists, divides Koreans into factions; Eulji Myeonok's austere broth is the classicist's answer.",
        ],
        tip: "Solo diners: Korean BBQ's two-portion minimums are the one real barrier in Korean food. Lunchtime set menus (and a growing wave of solo-BBQ counters) solve it — or make BBQ your Discord-meetup meal.",
      },
      {
        heading: "The ritual canon: chimaek and convenience-store ramyeon",
        paragraphs: [
          "Chimaek — fried chicken + maekju (beer) — was canonized by My Love from the Star and never relinquished the crown. The full ceremony demands the Han River: order delivery to a Banpo park mat (apps and even vending kiosks manage this), or carry a box from any chain to the grass at sunset. It is the cheapest world-class evening in any capital city.",
          "The convenience-store ramyeon ritual — hot water dispenser, window counter, city lights — is the great democratic scene of K-drama, and GS25/CU execute it identically for you at 2am. Upgrade like the leads do: add a cheese slice and a triangle gimbap. Total damage: about ₩4,000.",
        ],
      },
      {
        heading: "Ascending to the Culinary Class Wars tier",
        paragraphs: [
          "The show that made Korean fine dining a spectator sport also made it bookable-with-effort for fans: chef restaurants from approachable dim sum to three-Michelin-star tasting counters, all catalogued with booking mechanics on our Food pages. The move is a pyramid trip — street canon by day, one mid-tier chef table mid-trip, one grail booking if the CatchTable gods smile.",
          "What the pyramid teaches is the show's own thesis: the gap between a ₩3,000 market bindaetteok and a ₩300,000 tasting menu is technique and story, not sincerity. Korean food takes every price point personally. Come hungry at all of them.",
        ],
      },
    ],
    faq: [
      {
        q: "I can't handle spice. Will I starve?",
        a: "Not remotely — samgyetang, kalguksu, gimbap, BBQ, jjajangmyeon and most of the fine-dining tier are mild. Learn 'deol maepge haejuseyo' (less spicy please) and 'an maepge' (not spicy) for the rest.",
      },
      {
        q: "Is street food safe to eat?",
        a: "Korean street food operates under tight standards with high turnover — it is among the safest street eating in the world. Busy stall = fresh stock; that is the only rule you need.",
      },
      {
        q: "What about vegetarians?",
        a: "Trickier — broths and banchan hide anchovy and shrimp. Temple-food restaurants, jjajangmyeon (ask to omit pork), bibimbap without beef, and the 'Vegan' filter on CatchTable are the workhorses.",
      },
    ],
    related: [
      { label: "Every screen-famous restaurant we track", href: "/food" },
      { label: "The 3-day Foodie Seoul route", href: "/routes/foodie-seoul-culinary-class-wars" },
      { label: "How to actually book the hot tables", href: "/guide/booking-restaurants-catchtable" },
    ],
  },
  {
    slug: "kbeauty-shopping-seoul",
    title: "K-Beauty Shopping in Seoul: The Olive Young Playbook (and Beyond)",
    category: "beauty",
    excerpt:
      "Floor-by-floor Olive Young strategy, Myeongdong vs Seongsu, instant tax refunds, and how to build a haul that fits your suitcase — the pillar guide behind our Beauty section.",
    readMinutes: 8,
    updated: "2026-07-08",
    themeColor: "mint",
    sections: [
      {
        heading: "Why K-beauty shopping is half the trip",
        paragraphs: [
          "The glass-skin glow you noticed across 400 episodes is a real consumer economy, and its cathedral is Olive Young — Korea's health-and-beauty chain with a store seemingly every 300 meters and a global site fans already order from at markup. Shopping it at the source means street prices roughly 30–50% below what most importers charge, testers for everything, and instant tax refunds at the register.",
          "This guide is strategy; the specific product picks (starter routines, sunscreens, cushion foundations, gifts under $20) live in our Beauty section, curated to what foreign shoppers actually rebuy.",
        ],
      },
      {
        heading: "The Olive Young playbook",
        paragraphs: [
          "Flagships (Myeongdong Town is the giant) stock everything and staff English speakers, but ANY large branch carries 90% of what you want with half the crowd. The store logic: skincare walls organized by brand and concern, a suncare aisle that deserves its own visa, makeup up front, hair-body toward the back, and register-side travel minis perfect for try-before-you-commit.",
          "Timing matters: mornings on weekdays are civilized; Myeongdong on a Saturday afternoon is a contact sport. Watch the shelf tags — Olive Young runs perpetual 2+1 (buy-two-get-one) and seasonal mega-sales, and the same serum's effective price can swing 40% between weeks.",
        ],
        list: [
          "Bring your passport — refunds over ₩15,000 apply instantly at checkout",
          "Prices are per-item; 2+1 tags multiply value on repurchase staples",
          "Testers are expected — staff supply cotton pads and remover freely",
          "The app's foreigner membership stacks additional coupons",
          "Ship-to-hotel exists at flagships for hands-free days",
        ],
      },
      {
        heading: "Beyond Olive Young: the specialist circuit",
        paragraphs: [
          "Myeongdong's brand streets (single-brand stores from Innisfree to Sulwhasoo's flagship) reward loyalty to a specific house with exclusives and samples-with-abandon. Seongsu is the trend laboratory — brand pop-ups, dermatology-brand flagships like the Medicube experience space, and the earliest look at what your feed will discover next quarter.",
          "Department-store basements (The Hyundai Seoul, conveniently a Queen of Tears location) carry the luxury tier — Sulwhasoo, Hera, The History of Whoo — with duty-free counters for bigger tickets. And for gifts in bulk, Daiso's beauty section is the open secret: legitimate ₩3,000–5,000 products that let you gift the entire group chat without checking a second bag.",
        ],
        tip: "Dermatology culture is the current wave: clinic-adjacent brands and 'skin booster' aesthetics dominate 2025–2026 shelves. If ingredients excite you, Seongsu flagships explain the science better than any airport duty-free.",
      },
      {
        heading: "Suitcase math and customs sanity",
        paragraphs: [
          "The classic haul failure is physics: skincare is water, water is heavy, and 23kg arrives faster than you think. Strategy — buy travel sizes early-trip to audition, place one big order at a flagship late-trip (or on Olive Young Global for home delivery), and dedicate hand luggage to glass jars and cushion compacts that crush.",
          "Liquids over 100ml go in checked bags; sun sticks and balms fly cabin-side. Check your home country's personal-import allowances if your haul crosses from 'gifts' into 'wholesale' — beauty enthusiasm has a customs threshold, and the K-beauty subreddit's cautionary tales are all avoidable with one glance at the rules.",
        ],
      },
      {
        heading: "A one-day beauty itinerary that fans actually run",
        paragraphs: [
          "Morning: Myeongdong flagship sweep with passport, tax refund at register, ship the box or drop it at the hotel. Lunch: kalguksu at Myeongdong Kyoja (queue moves fast). Afternoon: Seongsu — two flagship experiences, one warehouse-cafe recovery stop. Evening: The Hyundai's basement food hall and luxury-counter browsing, then Han River air to reset your nose from 200 fragrance tests.",
          "Slot it as the shopping day in any of our Seoul routes; it pairs naturally with the K-beauty picks pages so your list is decided before you enter the arena. Enter with a list, leave with the list plus exactly three impulse items — this is the way.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Olive Young cheaper than buying K-beauty at home?",
        a: "Almost always, and dramatically so versus Western import pricing — plus tax refund on top. The exceptions are global-brand items on deep sale at home retailers.",
      },
      {
        q: "Do stores ship internationally?",
        a: "Olive Young Global ships from the same catalog to most countries — the play is: test in-store during your trip, reorder from home later.",
      },
      {
        q: "Are the products different from the export versions?",
        a: "Formulations are generally identical; domestic packaging cycles run ahead and sale bundles differ. Sunscreens are the category where the domestic market gets the newest filters first.",
      },
    ],
    related: [
      { label: "Our curated K-Beauty picks", href: "/beauty" },
      { label: "Tax refunds explained", href: "/guide/money-cards-tax-refund" },
      { label: "First-timer route (shopping day included)", href: "/routes/first-timer-everything" },
    ],
  },
  {
    slug: "filming-location-photo-etiquette",
    title: "Shooting the Scene: Photo Craft & Etiquette at K-Drama Filming Locations",
    category: "culture",
    excerpt:
      "How to get the shot without becoming the problem — residential-area rules, golden-hour strategy, recreating frames respectfully, and why the best fan photos are taken before 9am.",
    readMinutes: 6,
    updated: "2026-07-08",
    themeColor: "night",
    sections: [
      {
        heading: "The fan photographer's dilemma",
        paragraphs: [
          "Filming locations exist in an odd space: they are simultaneously pilgrimage sites for millions and, frequently, someone's street, shop or morning commute. The dilemma is real — the shot that honors the scene can dishonor the place. Bukchon's enforced quiet hours and visitor limits are what happens when enough people choose the shot.",
          "The good news: respectful and spectacular are not opposites. Nearly every technique that makes locals comfortable — early hours, small groups, quick setups — also makes photographs objectively better.",
        ],
      },
      {
        heading: "The golden rules, in order of importance",
        paragraphs: [
          "Residential areas ask for one thing above all: silence and brevity. Speak at library volume, never point a lens at windows, doors, or residents, and keep any one composition under a few minutes. If a spot posts visiting hours (Bukchon's are roughly daytime only), they are rules, not suggestions — wardens do enforce them.",
          "At businesses from the shows, the transaction is the etiquette: order first, shoot second, and ask before photographing interiors — '사진 찍어도 돼요?' (sajin jjigeodo dwaeyo?) does the job with a smile. Tripods deserve special mention: on narrow hanok lanes and market aisles they are obstructions; handheld or a pocket gorilla-pod passes everywhere.",
        ],
        list: [
          "Dawn beats golden hour at residential spots — empty frames AND happy locals",
          "No lens toward homes' windows or open doors, ever",
          "Businesses: buy something, then ask, then shoot",
          "Keep recreations quick; the scene took the crew 40 takes, you get 3",
          "Drones: effectively forbidden in Seoul without permits — don't",
        ],
      },
      {
        heading: "Craft: getting the frame the show got",
        paragraphs: [
          "Screenshot the scene before you go — matching a frame is 80% standing in the right spot, and the reference settles arguments instantly. Shows shoot long lenses more than phones default to; stepping BACK and zooming in flattens perspective toward that cinematic look better than standing where the actors stood.",
          "Light is the show's real special effect. Production shot your favorite alley at dawn or dusk with a lighting truck; you get one of those for free by timing. Overcast days are secretly excellent for hanok textures and market interiors, and rain turns Ikseon-dong and Itaewon slopes into the moody episode everyone remembers.",
        ],
        tip: "The two-shot ritual fans swear by: first the faithful recreation, then your own composition of the same place. The first is for the fandom; the second is usually the better photograph.",
      },
      {
        heading: "People, permissions and posting",
        paragraphs: [
          "Korean law and custom both frown on identifiable strangers as your subject; wide crowd scenes are fine, portraits of unwitting locals are not. Kids are an absolute no without a parent's yes. Street vendors photographed mid-craft usually enjoy it — after a purchase and a nod.",
          "When posting, geotag famous spots freely but consider withholding exact pins for small residential finds — several beloved locations have begged platforms for de-listing after fan floods. Adding the visiting-etiquette note to your caption costs nothing and trains the algorithmic tide you are part of. Share your best frames in our Discord's #spot-photos — the community's collective location wisdom started exactly there.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I wear a hanbok for photos at the palaces?",
        a: "Encouraged — hanbok wearers even enter major palaces free. Rental shops cluster around Gyeongbokgung and Bukchon with hair styling included.",
      },
      {
        q: "Are there spots where photography is banned outright?",
        a: "Inside some businesses, certain museum halls, and anywhere posted — plus active filming sets you might stumble on, where staff will wave you off. Comply instantly; sets move on within hours.",
      },
      {
        q: "Best time of year for filming-location photography?",
        a: "Late October–early November: foliage, clean light, and the fewest typhoon or monsoon surprises. Our seasons guide breaks down the full calendar.",
      },
    ],
    related: [
      { label: "Etiquette beyond the camera", href: "/guide/korea-travel-etiquette" },
      { label: "All filming locations", href: "/spots" },
      { label: "Share shots in the community", href: "/community" },
    ],
  },
  {
    slug: "best-time-to-visit-korea",
    title: "When to Visit Korea: A Season-by-Season Guide for Fans",
    category: "practical",
    excerpt:
      "Cherry blossoms with Lovely Runner energy, Goblin-coded first snow, monsoon realities and festival windows — matching your trip's timing to the Korea you watched.",
    readMinutes: 7,
    updated: "2026-07-08",
    themeColor: "forest",
    sections: [
      {
        heading: "The honest overview",
        paragraphs: [
          "Korea has four emphatic seasons and dramas have romanticized every one of them, so the question is not 'when is it nice' but 'which Korea did you fall for'. The pragmatic sweet spots are mid-April to early June and late September to early November — mild temperatures, photogenic light, manageable rain.",
          "The two windows needing eyes-open commitment: late June through July (jangma monsoon — real, warm, wet) and late December through February (properly cold, frequently magical). August is hot-humid festival season; March is unpredictable but cheap. None are wrong; all are different shows.",
        ],
      },
      {
        heading: "Spring: the cherry-blossom gamble",
        paragraphs: [
          "Blossom season sweeps south-to-north from late March (Jeju, Busan) to early-mid April (Seoul), each city peaking for barely a week. It is glorious and it is a gamble — peak dates shift yearly, so book flexible or aim mid-window and enjoy whichever stage you land in. Yeouido, Seokchon Lake and the palace gardens are Seoul's cathedral aisles of it.",
          "For fans the season carries specific energy: campus-romance dramas own this light. Jeju in spring adds the canola-yellow fields that When Life Gives You Tangerines turned into collective memory — Seopjikoji's cape walk in April is that opening-credits feeling, free of charge.",
        ],
        tip: "Blossom-season accommodation books out weeks ahead and prices surge. If your dates are fixed and miss the bloom, plum (mid-March) and double-cherry (late April) blossoms bracket the window beautifully.",
      },
      {
        heading: "Summer: monsoon, festivals and the green Jeju",
        paragraphs: [
          "Jangma brings weeks of on-off downpours from late June into July; August swaps rain for sauna humidity. Dramas hide this season inside cafes and rain-kissed confession scenes — you can too: summer is when Seoul's museum-mall-jjimjilbang indoor circuit and moody rain photography earn their keep.",
          "The payoffs are real: lush green Jeju at half the spring crowds, Boryeong Mud Festival and beach season on both coasts, bingsu (shaved ice) culture at its peak, and evening Han River life at full romantic capacity. Pack for rain, plan indoor pivots, and summer rewards the flexible.",
        ],
      },
      {
        heading: "Autumn: the professional's choice",
        paragraphs: [
          "October is Korea showing off — crisp air, blue skies, foliage rolling south from Seoraksan (early October) through Seoul's palaces and Naksan fortress walls (late October–early November). It is the best all-around window for filming-location photography and long walking days, which is why our routes assume roughly this weather.",
          "Fan-specific perks: harvest-moon Chuseok brings hanbok crowds and palace events (but also transit crush and some closures — check dates), and the gingko-gold Deoksugung stone wall in November is the Goblin walk at maximum cinema. Book early; the professionals all know.",
        ],
      },
      {
        heading: "Winter: the Goblin season",
        paragraphs: [
          "December through February is cold in a way Canadians respect — but Korean winter is also first-snow romance canon, street-food steam, ondol-heated hanok stays and ski resorts an hour from Seoul (Yongpyong being Winter Sonata's own). Nami Island under snow, Woljeongsa's fir path iced white, hotteok in gloved hands: the season delivers scenes no other month can.",
          "Practicalities: layers plus one serious coat, heat-tech from any Uniqlo or Daiso hand-warmers, and embrace the indoor 40% of each day. Lunar New Year (Seollal) closes much of Seoul for a few days — a peaceful or frustrating experience depending entirely on planning.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the single best month overall?",
        a: "October, and it is not particularly close — weather, light, foliage and festival calendars all align. May is the spring equivalent.",
      },
      {
        q: "When are flights and hotels cheapest?",
        a: "Late January–February (excluding Seollal) and the June monsoon shoulder. Winter deals plus indoor-friendly itineraries make a genuinely underrated combination.",
      },
      {
        q: "Do filming locations close in winter?",
        a: "Outdoor spots stay open (and photograph beautifully in snow); island boats and mountain trails cancel in weather. Coastal Jeju and Gangwon plans need a same-day flexibility mindset in January.",
      },
    ],
    related: [
      { label: "Plan around your dates", href: "/planner" },
      { label: "Jeju's Tangerines trail (spring gold)", href: "/routes/jeju-tangerines-trail" },
      { label: "Gangwon's Goblin coast (winter drama)", href: "/routes/gangwon-goblin-coast" },
    ],
  },
];
