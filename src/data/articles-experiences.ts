import type { Article } from "../lib/types";

// Experience guides — the "live it, don't just see it" tier of the guide
// section, promoted from the chatbot's most-expected questions. Long-form
// original editorial; prices are mid-2026 ballparks with confirm-current notes.
export const articles: Article[] = [
  {
    slug: "hanbok-rental-palace-day",
    title: "Hanbok Rental and a Palace Day: The Full Playbook (2026)",
    category: "culture",
    excerpt:
      "Rent a hanbok for ₩15–30k, walk into Gyeongbokgung free, and spend a day inside your own sageuk — where to rent, what it costs, and the photo spots that actually work.",
    readMinutes: 8,
    updated: "2026-07-18",
    themeColor: "plum",
    sections: [
      {
        heading: "Why every fan ends up doing this",
        paragraphs: [
          "Somewhere between your third palace drama and your first Bukchon photo, the thought arrives: what if I just wore the hanbok? Korea has engineered the answer into a frictionless industry. Rental streets ring Gyeongbokgung and Bukchon, a basic rental costs less than lunch for two, and the royal palaces waive their admission fee for anyone in traditional dress. It is the single highest-value cultural experience in Seoul, and it photographs like a production still.",
          "This is not a tourists-only performance, either. On any weekend the palace courtyards are full of Korean couples and friend groups in rented hanbok — you will be joining a local ritual, not gatecrashing one.",
        ],
      },
      {
        heading: "Renting: where, what, how much",
        paragraphs: [
          "The rental cluster sits between Gyeongbokgung station exit 4 and the palace's west side, with a second cluster near Anguk station for Bukchon. A standard 4-hour rental runs about ₩15,000–30,000; premium fabrics and embroidered 'theme' hanbok run ₩30,000–50,000. Most shops include a basic petticoat, a small handbag, and hair accessories; braided or pinned hair styling adds ₩5,000–10,000 and is worth every won for photos.",
          "Walk-ins work fine on weekdays, but weekend mornings in April and October — peak blossom and foliage — deserve an online booking the day before. Shops store your clothes and bags free while you wander.",
        ],
        tip: "Winter visit? Ask for the padded overcoat (durumagi). Shops lend them free or nearly free, they look fantastic in photos, and palace courtyards are wind tunnels in January.",
      },
      {
        heading: "The free-admission rule, precisely",
        paragraphs: [
          "All five royal palaces — Gyeongbokgung, Changdeokgung, Changgyeonggung, Deoksugung, Gyeonghuigung — plus the Jongmyo shrine admit visitors in hanbok free. The gate staff decide at a glance; a full rental always qualifies. Regular admission is only ₩3,000, so the real win is not the saved money but the ritual: walking through Gwanghwamun's gate dressed for the part.",
          "Time your entry around the royal guard changing ceremony at Gwanghwamun — 10:00 and 14:00 daily except Tuesdays, when Gyeongbokgung closes. Deoksugung runs its own ceremony and pairs with the famous stonewall path from Goblin.",
        ],
      },
      {
        heading: "A route that actually works in a hanbok",
        paragraphs: [
          "You are wearing a floor-length skirt or stiff jacket; plan accordingly. The proven loop: rent near Gyeongbokgung at 9:30, palace until noon (courtyards, Gyeonghoeru pavilion, the guard ceremony), lunch at a nearby hanjeongsik or Tosokchon's ginseng chicken, then a slow drift east through Bukchon's hanok lanes for golden-hour photos, returning the hanbok by 16:00.",
          "Skip steep Bukchon shortcuts and subway transfers while dressed — the outfit wants flat stone courtyards and short walks, not staircases.",
        ],
        list: [
          "9:30 — rent + hair near Gyeongbokgung station exit 4",
          "10:00 — guard ceremony at Gwanghwamun, then the palace",
          "12:30 — lunch nearby (Tosokchon samgyetang is 10 min west)",
          "14:00 — Bukchon hanok lanes, quiet-hours etiquette on",
          "16:00 — return outfit, collect your bags",
        ],
      },
      {
        heading: "Etiquette while dressed",
        paragraphs: [
          "A hanbok gets you smiles and occasional photo requests; it also raises expectations slightly. Keep Bukchon's residential quiet hours (the lanes are people's homes), don't climb on palace structures for angles, and treat the outfit gently — snags and makeup stains can cost a cleaning fee. Most shops photograph the garment's condition at checkout; do the same on your phone.",
        ],
      },
    ],
    faq: [
      {
        q: "Do men's and children's hanbok rentals exist?",
        a: "Everywhere. Men's rentals cost the same, look sharp in photos, and couples' sets are the rental shops' bread and butter. Kids' sizes start around age 3.",
      },
      {
        q: "Can I wear a hanbok over winter clothes?",
        a: "Yes — thin layers fit underneath, and shops lend padded overcoats in winter. Skip bulky hoodies; they ruin the silhouette.",
      },
      {
        q: "Is hanbok rental cultural appropriation for foreigners?",
        a: "Korea's answer is an emphatic no — the free-palace-admission policy exists precisely to encourage everyone, visitor or local, to wear it. Wear it respectfully and enjoy it.",
      },
    ],
    related: [
      { label: "Bukchon Hanok Village spot guide", href: "/spots/bukchon-hanok-village" },
      { label: "Seoul K-drama classics route", href: "/routes/seoul-kdrama-classics" },
      { label: "Filming-location photo etiquette", href: "/guide/filming-location-photo-etiquette" },
    ],
  },
  {
    slug: "dmz-tour-guide",
    title: "Visiting the DMZ: Tours, Rules, and What It Is Really Like",
    category: "practical",
    excerpt:
      "You cannot go alone, the rules are real, and it is still one of the most affecting day trips on Earth. How DMZ tours work in 2026 — booking, prices, dress code, and what Crash Landing on You got right.",
    readMinutes: 8,
    updated: "2026-07-18",
    themeColor: "forest",
    sections: [
      {
        heading: "First rule: tour only",
        paragraphs: [
          "The Demilitarized Zone — the 4km-wide buffer along the border K-dramas from Crash Landing on You to Moving have mythologized — is not a place you drive to. Civilian access runs exclusively through licensed tour operators on set routes with military checkpoints. That constraint is not a tourist trap; it is the condition that makes visiting possible at all.",
          "Half-day tours from Seoul (roughly $40–70) cover the classic circuit: Imjingak park, the Third Infiltration Tunnel, Dora Observatory's view into the North, and Dorasan station. Full-day versions add lunch and a suspension bridge or village stop. The famous JSA/Panmunjom tour — the blue huts straddling the line — reopens intermittently and books out weeks ahead when it does; check current status before promising it to yourself.",
        ],
      },
      {
        heading: "Booking and the passport routine",
        paragraphs: [
          "Book at least a few days ahead — tours submit passenger lists to the military in advance, which is also why every tour requires your physical passport on the day. No passport, no boarding, no exceptions, and a photocopy does not count. Departures cluster around 7:00–8:00 from central Seoul; the drive north is barely an hour, which is its own quiet lesson in how close this border sits to a city of ten million.",
          "Tuesdays and Korean public holidays see most routes closed; some sites also close when military activity dictates, occasionally same-day. Operators refund or reroute when that happens — build flexibility into your schedule rather than booking your last morning in Korea.",
        ],
        tip: "Book the morning tour. Afternoon haze regularly kills the Dora Observatory view into the North — mornings give you the clear look at Kaesong and the propaganda village.",
      },
      {
        heading: "Rules that are actually enforced",
        paragraphs: [
          "Dress code exists mainly for JSA tours (no ripped clothing, no political slogans, nothing the North could photograph for propaganda), but every DMZ tour enforces photography discipline: shoot only where guides say, never toward military installations, and put the drone fantasy away entirely. Inside the Third Tunnel, cameras and phones go into lockers — the incline down is steep, hard-hatted, and genuinely fun.",
          "Follow your guide's line physically. The paths are cleared and safe; the areas beyond them are, in places, still mined. Signs mean what they say here.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "Expect emotional whiplash. Imjingak is simultaneously a memorial to separated families — ribbons on the fence, an altar facing north — and a park with a small amusement ride. Dorasan station stands fully built for trains to Pyongyang that have never regularly run. Fans arrive because a drama put the border in their imagination; most leave quiet, having understood something no drama quite carries.",
          "Half a day fits cleanly into a Seoul itinerary. Pair it with an afternoon in the city rather than another heavy sight — you will want the decompression.",
        ],
      },
    ],
    faq: [
      {
        q: "Is the DMZ safe to visit?",
        a: "Statistically, yes — hundreds of thousands of visitors tour it annually under military supervision. The rules exist precisely to keep it that way; follow them and it is a controlled, safe experience.",
      },
      {
        q: "Can I visit the JSA blue huts from the South?",
        a: "Only when JSA tours are operating, which varies with the political weather. When open, they book out weeks ahead and enforce the strictest dress and conduct rules. Check current availability before your trip.",
      },
      {
        q: "Do children get allowed on DMZ tours?",
        a: "Standard DMZ circuits usually allow children (the tunnel has a minimum age at some operators); JSA tours historically require visitors to be older. Check each operator's cutoffs.",
      },
    ],
    related: [
      { label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" },
      { label: "Crash Landing on You spots", href: "/shows/crash-landing-on-you" },
      { label: "First-timer everything route", href: "/routes/first-timer-everything" },
    ],
  },
  {
    slug: "kpop-concert-tickets",
    title: "How Foreigners Actually Get K-Pop Concert Tickets (2026)",
    category: "culture",
    excerpt:
      "Interpark Global, Yes24, fan-club presales, and the honest odds — a field manual for turning your Korea trip into a concert trip without getting scammed.",
    readMinutes: 9,
    updated: "2026-07-18",
    themeColor: "night",
    sections: [
      {
        heading: "The three-platform reality",
        paragraphs: [
          "Nearly every K-pop ticket in Korea sells through three platforms: Interpark (via its Global site in English), Yes24 Global, and Melon Ticket. Which one depends on the artist's agency — the concert announcement always names the vendor. All three now run English flows that accept foreign cards and passport-number verification, which quietly ended the era when foreigners simply could not buy.",
          "The catch is not access; it is speed. Major acts sell out arena dates in minutes, with the general sale often mopping up what fan-club presales left. If a stadium act is the whole reason for your trip, treat ticketing day like a job interview: account created and verified days early, payment method tested, logged in before the hour.",
        ],
      },
      {
        heading: "Presales, fan clubs, and whether to join",
        paragraphs: [
          "Official fan-club membership (usually ₩20,000–35,000 a year through Weverse or the agency's app) buys you the presale window a day or two before general sale — often the difference between seats and nothing for top-tier groups. For mid-tier and rookie groups, general sale is usually survivable without it.",
          "Verification quirks trip up foreigners most: some presales require a Korean phone number or the artist's app with an active membership. Read the notice page's foreigner section — agencies now spell out what works for overseas fans, and the fan-translated versions on X/Reddit appear within hours of every announcement.",
        ],
        tip: "Seats are assigned at purchase in Korea — there is no 'general admission scrum'. A later queue number does not mean standing at the back; it may just mean a higher tier. Take what the system offers, then upgrade via official cancellation windows.",
      },
      {
        heading: "The resale minefield",
        paragraphs: [
          "Korea's anti-scalping enforcement got teeth in recent years: tickets are increasingly name-matched to the buyer's ID at entry for major concerts, and third-party resale of verified tickets can void them. The Twitter DM offering face-value transfer to a foreigner is, overwhelmingly, a scam aimed at exactly you.",
          "The legitimate fallback is the official cancellation re-release: platforms return cancelled seats to sale on announced dates (typically about a week before the show). Set alarms for those windows — persistence there beats any reseller.",
        ],
      },
      {
        heading: "No ticket? Seoul still delivers",
        paragraphs: [
          "Music-show tapings (Music Bank, Inkigayo) run weekly fan-attendance lotteries; university spring and fall festivals stage surprisingly big idol lineups free; COEX's K-pop Square screens comebacks on its giant curved LED; and HYBE Insight-style exhibitions plus album-store events fill any afternoon. Hongdae's busking stages are where the next generation rehearses in public.",
          "Build your trip around the culture, not one date, and a sold-out show becomes a detour instead of a disaster.",
        ],
        list: [
          "Announcement names the vendor — make that account immediately",
          "Fan-club presale ≈ mandatory for stadium-tier acts",
          "Official cancellation windows > any reseller, always",
          "Music-show lotteries + festivals = free fallback plan",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a Korean phone number to buy tickets?",
        a: "For Interpark Global and Yes24 Global, no — passport verification and a foreign card work. Some agency-app presales still want a Korean number; the notice page states it explicitly.",
      },
      {
        q: "How much do K-pop concert tickets cost in Korea?",
        a: "Mainstream arena shows run roughly ₩99,000–198,000 by tier — noticeably cheaper than the same group's US/European dates. VIP packages with soundcheck run higher.",
      },
      {
        q: "What is a 'tribune' or 'floor' seat worth choosing?",
        a: "Floor is closest but flat; lower tribune front rows often see better than mid-floor. Korean fan communities publish view-from-seat photos for every venue — search the venue name + 시야 (view).",
      },
    ],
    related: [
      { label: "COEX K-pop Square spot", href: "/spots/coex-kpop-square" },
      { label: "KPop Demon Hunters spots", href: "/shows/kpop-demon-hunters" },
      { label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" },
    ],
  },
  {
    slug: "jjimjilbang-first-timer",
    title: "Jjimjilbang 101: Surviving (and Loving) the Korean Sauna",
    category: "culture",
    excerpt:
      "Yes, the bath part is naked. Yes, the sheep-head towel is mandatory culture. A step-by-step first-timer walkthrough of Korea's greatest night-out-slash-nap institution.",
    readMinutes: 8,
    updated: "2026-07-18",
    themeColor: "sunset",
    sections: [
      {
        heading: "What a jjimjilbang actually is",
        paragraphs: [
          "A jjimjilbang is two facilities stacked together: gender-separated bathhouses (the naked part) and a big mixed-gender lounge floor of themed saunas, snack bars, sleeping rooms and massage chairs, where everyone wears the pajama uniform the front desk hands you. K-dramas use them as the great equalizer — chaebol heirs and broke protagonists sweating in the same clay kiln — and that is exactly the energy in real life.",
          "Entry runs about ₩10,000–20,000 for 12 hours, more for 24-hour flagships. It is simultaneously a spa, a hangout, and — as every backpacker discovers — the cheapest legitimate overnight stay in Korea.",
        ],
      },
      {
        heading: "The sequence, step by step",
        paragraphs: [
          "At the desk you get a locker key and a uniform. Shoes go in the small locker at the entrance — before anything else. In the changing room, everything comes off; walk into the bath hall carrying only your small towel. Scrub first at the seated shower stations (this is the non-negotiable rule — you must be clean before entering any tub), then soak your way through the pools: hot, hotter, cold plunge, repeat.",
          "Dressed in the uniform, head to the mixed floor: kiln saunas at different temperatures, an ice room, heated stone floors where entire families nap in rows. Stay as long as you like; alternate sweat and rest and snacks.",
        ],
        tip: "The towel hat every drama shows — fold your towel into thirds and roll the ends into 'sheep horns' (yangmeori). Tutorials are on every platform; wearing one instantly marks you as someone who did the homework.",
      },
      {
        heading: "Eat like you are in the show",
        paragraphs: [
          "Jjimjilbang food is its own canon: sikhye (sweet rice punch) and maekbanseok-baked eggs — cracked on a friend's forehead if the drama is to be believed — plus patbingsu in summer and cup ramyeon always. Budget ₩5,000–10,000 and treat it as part of the experience, not a concession stand.",
        ],
      },
      {
        heading: "Nerves, tattoos, and etiquette",
        paragraphs: [
          "About the nakedness: within ninety seconds you will realize nobody is looking at you. Every body type is present, phones are banned in bath areas, and self-consciousness evaporates in the first hot pool. Tattoo policies have relaxed substantially — small and medium pieces pass everywhere in practice; heavily tattooed visitors might pick larger, tourist-frequented houses to be safe.",
          "Etiquette summary: scrub before soaking, keep the small towel out of the water (fold it on your head), hydrate, no phones in the baths, and speak library-quiet in the sleeping rooms. Overnighting? Claim your floor mat and wedge-pillow early — the good corners go by midnight.",
        ],
        list: [
          "Shoes → entrance locker, before check-in",
          "Scrub seated and thoroughly BEFORE any tub",
          "Small towel: head, not water",
          "Uniform on = mixed floors; uniform off = bath floors",
          "Baked eggs + sikhye are mandatory culture",
        ],
      },
    ],
    faq: [
      {
        q: "Can I skip the naked baths and just use the sauna floor?",
        a: "Yes. The uniform floors are fully clothed and most of the fun. But try the baths once — they are the point, and the awkwardness dies in minutes.",
      },
      {
        q: "Can couples or friends of different genders go together?",
        a: "The lounge, sauna and sleeping floors are all shared — that is exactly where drama scenes happen. Only the bath halls are separated.",
      },
      {
        q: "Is sleeping overnight in a jjimjilbang actually okay?",
        a: "Completely normal — 24-hour houses are designed for it. It costs less than any hostel, and a late flight or missed train is precisely what they are for.",
      },
    ],
    related: [
      { label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" },
      { label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" },
      { label: "First-timer everything route", href: "/routes/first-timer-everything" },
    ],
  },
  {
    slug: "han-river-picnic",
    title: "The Han River Picnic: Korea's Best Free Evening, Done Right",
    category: "culture",
    excerpt:
      "Delivery chicken to a number on the grass, ramyeon machines, the Banpo rainbow fountain — how to run the exact evening every K-drama promised you, for about ₩20,000.",
    readMinutes: 7,
    updated: "2026-07-18",
    themeColor: "ocean",
    sections: [
      {
        heading: "Why this is the scene that is actually real",
        paragraphs: [
          "Half of what dramas show you is heightened; the Han River evening is not. On any warm night, Yeouido and Ttukseom parks fill with thousands of people on mats doing exactly what the shows depict — fried chicken and beer delivered to the grass, convenience-store ramyeon cooked at a machine, couples under the bridge lights. It costs almost nothing and requires zero booking, which makes it the highest-ROI evening in this entire guide.",
          "Chimaek (chicken + maekju/beer) by the river is legal, celebrated, and arguably the national pastime. Public drinking in parks is permitted in Korea — enjoy it like a local: moderately, tidily.",
        ],
      },
      {
        heading: "The logistics locals use",
        paragraphs: [
          "Pick your park: Yeouido (subway line 5, exit 3) is the classic with skyline views and the biggest delivery ecosystem; Ttukseom (line 7) skews younger with kayak rentals; Banpo sits under the fountain bridge itself. Mats rent near every entrance for a few thousand won, or buy a ₩5,000 one at the convenience store and keep it.",
          "The famous move — delivery to the grass — works two ways. Easy mode: walk to the cluster of delivery-zone signs (or the chicken tents at Yeouido) and order at the counter. Local mode: a delivery app with your zone number — each lawn section posts a numbered sign, and riders navigate to it. Fans consider the handoff itself a bucket-list moment.",
        ],
        tip: "The convenience stores inside the parks have instant-ramyeon cooking machines: buy the cup, pay, set it in the machine, 4 minutes, eat facing the water. It is a ₩2,500 scene re-creation.",
      },
      {
        heading: "Timing the fountain and the light",
        paragraphs: [
          "The Banpo Bridge Moonlight Rainbow Fountain runs April through October, typically in 20-minute evening shows (schedules shift by season — check before you anchor the evening on it). Arrive an hour before sunset regardless of park: you get golden hour on the skyline, dusk turning the bridges on one by one, and the crowd's energy rising with the dark.",
          "Spring and fall evenings cool fast by the water; bring the extra layer even after a warm day. Summer nights are the park at its most alive; winter moves the same picnic indoors — which is what convenience-store window counters are for.",
        ],
      },
      {
        heading: "Leave-no-trace, Korean edition",
        paragraphs: [
          "The parks stay pleasant because cleanup is cultural. Trash and recycling stations stand at every exit — carry your chicken box there, sorted. Tents are day-use only and must keep two sides open by rule. And the couple photographing sunset next to you will happily take yours if you offer the same.",
        ],
        list: [
          "Yeouido = classic skyline; Ttukseom = young + kayaks; Banpo = the fountain",
          "Golden hour arrival, fountain show after dark",
          "Chimaek delivered to your zone number = the scene",
          "Pack out to the sorting stations on exit",
        ],
      },
    ],
    faq: [
      {
        q: "Is drinking alcohol in Han River parks actually legal?",
        a: "Yes — public drinking in parks is legal in Korea, and riverside chimaek is a national institution. Public drunkenness that bothers others is where enforcement starts.",
      },
      {
        q: "What does the whole evening cost?",
        a: "A mat (₩5,000, reusable), a chicken (₩20,000–25,000, feeds two), convenience-store drinks and ramyeon (₩5,000) — call it ₩15,000–20,000 per person for the full drama montage.",
      },
      {
        q: "Which drama scenes happened here?",
        a: "More than can be listed — riverside chimaek, confession benches and bridge-light walks recur across Itaewon Class, Queen of Tears and half the romance canon. The parks are a genre, not a location.",
      },
    ],
    related: [
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
      { label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" },
      { label: "Seoul trending-now route", href: "/routes/seoul-trending-now" },
    ],
  },
  {
    slug: "jeonju-hanok-day-trip",
    title: "Jeonju Hanok Village: The Day Trip for Food and Nostalgia",
    category: "itinerary",
    excerpt:
      "Seven hundred hanok roofs, the definitive bibimbap, choco pie pilgrimages and Twenty-Five Twenty-One's amber-lit lanes — Korea's slow-city masterpiece in one KTX day.",
    readMinutes: 8,
    updated: "2026-07-18",
    themeColor: "gold",
    sections: [
      {
        heading: "Why Jeonju earns the detour",
        paragraphs: [
          "Jeonju holds two national titles at once: guardian of Korea's largest urban hanok village — some 700 traditional houses on a walkable grid — and the country's undisputed food capital, a UNESCO Creative City of Gastronomy. For fans, it carries a third: the nostalgic alleys and slow light that period-leaning dramas like Twenty-Five Twenty-One chase when Seoul looks too new.",
          "The KTX makes it honest day-trip range: about 1 hour 40 minutes from Yongsan station, trains from early morning. But Jeonju's best hour is dusk, when lanterns come on over the tiled roofs — if your itinerary can spare a night in a hanok guesthouse, spend it.",
        ],
      },
      {
        heading: "The eating itinerary (this is the itinerary)",
        paragraphs: [
          "Jeonju bibimbap is the reference version of the national dish — brass bowl, hwangpomuk yellow jelly, proper gochujang — and the old-guard houses around the village serve it as a ceremony. Arrive hungry and early; the famous rooms queue by 11:30.",
          "Then graze: the PNB Choco Pie (a 1951 bakery original that spawned a national cult), kongnamul gukbap (bean-sprout hangover soup) at the Nambu night market, street skewers along Taejo-ro, and makgeolli alleys where the rice wine arrives with a table of free side dishes. Budget the day around appetite, not sights.",
        ],
        tip: "Buy the PNB choco pies LAST, on your way to the station — they are gifts-grade, they crush easily, and the main-street branch keeps boxes stacked for exactly this purchase.",
      },
      {
        heading: "Between meals: the walking loop",
        paragraphs: [
          "The village grid rewards drift more than checklists, but four anchors organize it: Gyeonggijeon shrine (portrait hall of the dynasty's founder, gorgeous bamboo grove), the twin-spired Jeondong Cathedral facing it, Omokdae overlook for the roofscape photo, and the Jaman mural village up the hill. Hanbok rental thrives here too — arguably prettier against Jeonju's roofs than Seoul's, and cheaper.",
          "For the 2521-flavored shot, skip midday: the amber, low-angle light of late afternoon down the minor lanes — not the main drag — is where the drama's cinematography lives.",
        ],
        list: [
          "10:00 — KTX arrival, bus/taxi to the village (15 min)",
          "11:15 — early bibimbap before the queues",
          "12:30 — Gyeonggijeon + cathedral + lanes",
          "15:00 — Omokdae overlook, mural village, makgeolli break",
          "17:30 — golden-hour lanes, choco pies, train home",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "From the KTX station, city buses and a ₩7,000 taxi cover the 15 minutes to the village. Weekends are genuinely crowded — a weekday visit transforms the experience. Most food institutions are cash-friendly but card-fine; a few market stalls remain cash-only, so carry ₩30,000 in notes.",
          "Staying over? Hanok guesthouses run ₩60,000–150,000, heated ondol floors and courtyard included. Morning in the village before day-trippers arrive is Jeonju at its most cinematic.",
        ],
      },
    ],
    faq: [
      {
        q: "Is Jeonju doable as a day trip from Seoul?",
        a: "Comfortably — 1h40m each way by KTX with frequent trains. Aim for the 8:00–9:00 departure and an early-evening return to keep six full hours in the village.",
      },
      {
        q: "Do I need to book the bibimbap houses?",
        a: "The historic houses are mostly walk-in with queues; arriving before 11:30 or after 13:30 beats the rush. A few premium hanjeongsik rooms take phone bookings — your hotel can call.",
      },
      {
        q: "Which shows filmed around Jeonju?",
        a: "Twenty-Five Twenty-One drew its nostalgic street language from alleys like these, and period productions regularly borrow the village and nearby sets. Treat it as atmosphere pilgrimage more than shot-matching.",
      },
    ],
    related: [
      { label: "Twenty-Five Twenty-One spots", href: "/shows/twenty-five-twenty-one" },
      { label: "Hanbok rental playbook", href: "/guide/hanbok-rental-palace-day" },
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
    ],
  },
  {
    slug: "busan-set-jetting",
    title: "Busan for Set-Jetters: Pachinko's City in Two Days",
    category: "itinerary",
    excerpt:
      "Yeongdo's hillside lanes, Jagalchi's fish-market theater, Huinnyeoul's cliff village and tented pojangmacha nights — Korea's second city as a filming-location trip.",
    readMinutes: 9,
    updated: "2026-07-18",
    themeColor: "ocean",
    sections: [
      {
        heading: "Busan's screen identity",
        paragraphs: [
          "Where Seoul plays the glossy present, Busan plays memory and grit: Pachinko staged its Korean chapters in Yeongdo's port lanes, and a long line of Korean cinema — from Ode to My Father's market scenes to every gangster film's container docks — built the city's on-screen vocabulary. It is also simply Korea's best two-day counterweight to Seoul: sea air, seafood, hills of pastel houses, saunas with ocean views.",
          "KTX from Seoul station reaches Busan in about 2 hours 40 minutes (₩59,800 standard). Trains run constantly; book a window on the right side southbound for the river-then-coast reveal.",
        ],
      },
      {
        heading: "Day one: Yeongdo and the old port",
        paragraphs: [
          "Cross the drawbridge onto Yeongdo island and you are inside Pachinko's geography: working shipyards, steep residential lanes with laundry over the harbor, and Huinnyeoul Culture Village — the white-walled cliffside strip whose narrow walkway over the sea has become Busan's most cinematic stroll. Give it the slow afternoon: coffee in a renovated house-cafe, the coastal path, the ferries below.",
          "Morning belongs to Jagalchi, Korea's largest fish market — the auction floor's theater downstairs, then lunch upstairs where the ajummas cook what you point at. Between them, Nampo-dong's BIFF square and Gukje market fill any gaps with street food (Busan's ssiat hotteok, seed-stuffed and molten, is mandatory).",
        ],
        tip: "Taejongdae park at Yeongdo's tip — cliff walks, a lighthouse, and the danubi trolley — stands in for windswept 'edge of Korea' scenes across productions. Two hours, best in late light.",
      },
      {
        heading: "Day two: beaches, temples, and the sky",
        paragraphs: [
          "East Busan runs the postcard circuit: Haeundae beach's broad crescent, the Blueline Park beach train and sky capsules gliding along the cliffs to Cheongsapo's lighthouses, and Haedong Yonggungsa — the rare major temple built directly on ocean rocks, spectacular at first light. Gwangalli beach faces the diamond bridge for the definitive night skyline.",
          "Cap it the local way: a raw-fish dinner at Millak or a tented pojangmacha row after dark — the orange-lit street bars where half of Korean drama's confession scenes are set. Busan's version comes with sea breeze.",
        ],
        list: [
          "Day 1: Jagalchi → BIFF square → Yeongdo (Huinnyeoul, Taejongdae) → pojangmacha night",
          "Day 2: Yonggungsa early → Blueline beach train → Haeundae → Gwangalli bridge lights",
          "Transit: subway + buses cover it; taxis are cheap for the hill villages",
        ],
      },
      {
        heading: "Where to stay, when to come",
        paragraphs: [
          "Base in Haeundae for beach-resort energy or Nampo/Jagalchi for market-and-port atmosphere closer to the Pachinko geography. Busan runs a degree warmer than Seoul; its festival peak is October (the film festival month, when the city is at its most alive and hotels at their priciest), and summer weekends pack the beaches solid.",
          "Two days covers the circuit above; a third adds Gamcheon Culture Village's rainbow terraces and a proper jjimjilbang with sea views — SpaLand in Centum City is the genre's luxury flagship.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I do Busan as a day trip from Seoul?",
        a: "Physically yes, but you would spend 5.5 hours on trains for a highlights sprint. One night minimum turns it into a real trip; two nights covers the full circuit calmly.",
      },
      {
        q: "Where exactly did Pachinko film in Busan?",
        a: "The production built key 1930s sets but anchored its geography in Yeongdo and the Jagalchi waterfront. Our show page maps the visitable anchors and their scene notes.",
      },
      {
        q: "Is Busan walkable like Seoul?",
        a: "Neighborhood by neighborhood, yes, but the city stretches along 30km of coast — plan by area (Yeongdo day, east-beaches day) and let the subway and taxis do the stitching.",
      },
    ],
    related: [
      { label: "Pachinko's Busan spots", href: "/shows/pachinko" },
      { label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" },
      { label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" },
    ],
  },
  {
    slug: "seoul-after-dark",
    title: "Seoul After Dark: Noraebang, Night Markets and the 2am City",
    category: "culture",
    excerpt:
      "The city dramas call the city that never sleeps, field-tested: coin karaoke etiquette, Dongdaemun at 3am, pojangmacha tents, photo booths — and how to get home when the subway stops.",
    readMinutes: 8,
    updated: "2026-07-18",
    themeColor: "night",
    sections: [
      {
        heading: "The night is the itinerary",
        paragraphs: [
          "Daytime Seoul belongs to palaces and filming spots; the Seoul that dramas are actually in love with switches on around 21:00. Restaurants turn over to second-round culture, karaoke signs stack five floors high, market alleys hit their stride at midnight, and nobody considers any of it unusual for a Tuesday night. Plan at least one evening as a destination in itself, not a wind-down.",
          "The classic arc mirrors a drama night out: dinner, then a pojangmacha tent or hof for round two, then noraebang, then — depending on your constitution — a 1am photo booth, a night market snack, or the honest surrender of a convenience-store counter with cup ramyeon.",
        ],
      },
      {
        heading: "Noraebang without fear",
        paragraphs: [
          "Two formats matter. Coin noraebang — glass booths for one or two people, ₩500–1,000 per song — is where locals actually practice, solo singing is completely normal, and no one can hear you. Room noraebang (₩15,000–25,000/hour for a group room) is the drama version: tambourines, disco lights, a service button that summons snacks and, often, mysterious bonus minutes.",
          "Every machine has an English mode and a deep English-language songbook, plus the entire K-pop catalog with romanized lyrics — which is precisely how fans discover they can, in fact, do the whole chorus. Etiquette is simple: rotate the mic, applaud everything, and never skip someone's song.",
        ],
        tip: "In Hongdae and Gangnam, coin noraebang runs 24 hours. A 2am solo booth after a long spot-hunting day is a legitimate itinerary item — treat it as vocal therapy.",
      },
      {
        heading: "Midnight retail and street tents",
        paragraphs: [
          "Dongdaemun is the insomniac anchor: wholesale fashion towers trading until 4–5am, DDP's neon curves for the architecture shot, and food alleys that never fully close. Gwangjang market's night rows, Myeongdong's stalls until about 22:00, and each neighborhood's pojangmacha tents — orange tarp, steaming odeng broth, strangers becoming acquaintances — fill the hours between.",
          "The pojangmacha is drama shorthand for honesty: it is where characters finally say the thing. Order odeng, tteokbokki or grilled skewers, point politely at what looks good, and accept that soju may be offered. Cash still rules in the tents; most everything else takes cards.",
        ],
      },
      {
        heading: "Photo booths and getting home",
        paragraphs: [
          "The night traditionally ends at a Life Four Cuts booth — ₩4,000–5,000, props included, frames that collab with current dramas and idol groups. Hongdae has one roughly every 50 meters; the strip is arguably now part of Korean nightlife infrastructure.",
          "Getting home is the one real planning item: subways stop between 23:30 and midnight (earlier Sundays). After that it is Kakao T taxis (expect surge waits in Hongdae/Itaewon between 1 and 3am), the N-prefix night buses on major corridors, or the time-honored jjimjilbang overnight. Decide your exit before round three, not during it.",
        ],
        list: [
          "Round 1 dinner → round 2 pojangmacha/hof → round 3 noraebang",
          "Coin booth = solo-friendly; room = the drama scene",
          "Dongdaemun till 4am; Gwangjang night rows for the food shot",
          "Last subway ~23:30 — Kakao T, N-bus, or jjimjilbang after",
        ],
      },
    ],
    faq: [
      {
        q: "Is Seoul safe at 2am?",
        a: "Among the safest big-city nights on Earth — solo walks, late subways and 24-hour districts are routine. Normal nightlife-district awareness still applies where the drinking is heaviest.",
      },
      {
        q: "Do I need to book noraebang?",
        a: "Never — walk in. Weekend group rooms in Hongdae can queue briefly around midnight; coin booths absorb any wait.",
      },
      {
        q: "What time do night markets actually peak?",
        a: "Dongdaemun's retail towers peak after midnight; food alleys and pojangmacha hit their stride 22:00–01:00. Myeongdong's street food, by contrast, winds down by 22:00 — it is the early show.",
      },
    ],
    related: [
      { label: "Dongdaemun Market spot", href: "/spots/dongdaemun-market" },
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
      { label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" },
    ],
  },
];
