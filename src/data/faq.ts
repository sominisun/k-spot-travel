// Chatbot fast-path answers — the "100 expected questions" instant-reply bank.
// The weekly ops loop appends entries here from the Discord #chat-inbox log —
// user questions literally become the roadmap.
//
// Matching (see /api/chat matchFaq): a question scoring 2+ keyword points hits
// an entry. Keywords are lowercase substrings; a CJK keyword of 4+ chars
// (e.g. a show title like 오징어게임) counts DOUBLE, so a distinctive
// Korean/Japanese/Chinese title can trigger a match on its own.
// Answers are English; full-language replies come from Claude when
// ANTHROPIC_API_KEY is configured.
export interface FaqEntry {
  /** lowercase keywords across en/ko/ja/zh/es; see scoring note above */
  keywords: string[];
  answer: string;
  links: { label: string; href: string }[];
}

export const FAQ: FaqEntry[] = [
  // ───────────────────────── A. Airport & transport ─────────────────────────
  {
    keywords: ["airport", "incheon", "arex", "train", "bus", "공항", "인천공항", "서울까지", "空港", "空港から", "ソウルまで", "机场", "怎么去首尔", "aeropuerto", "cómo llegar"],
    answer:
      "From Incheon Airport: the all-stop AREX train is the best value (~₩4–5k with T-money, 59 min), the Express is fastest to Seoul Station (~₩11k, 43 min), and limousine buses win with heavy luggage (~₩17–18k door-to-district).",
    links: [{ label: "Airport to Seoul, compared", href: "/guide/airport-to-seoul" }],
  },
  {
    keywords: ["tmoney", "t-money", "transit", "card", "topup", "top up", "티머니", "교통카드", "交通カード", "交通卡", "tarjeta de transporte"],
    answer:
      "Buy a T-money card at any convenience store or airport kiosk (~₩2,500–4,000), top it up with cash, and tap for subway, bus and most taxis. It also pays at convenience stores. Top-ups are cash-only at machines — keep ₩10k notes handy.",
    links: [{ label: "T-money & subway guide", href: "/guide/tmoney-and-subway" }],
  },
  {
    keywords: ["subway", "metro", "line", "transfer", "지하철", "환승", "地下鉄", "乗り換え", "地铁", "换乘"],
    answer:
      "Seoul's subway is the easiest way between filming spots: signs are in English, trains run ~05:30–24:00, and transfers are free within the tap. Use Naver Map for exact exit numbers — the right exit saves you ten minutes of walking.",
    links: [
      { label: "T-money & subway guide", href: "/guide/tmoney-and-subway" },
      { label: "Set-jetting map", href: "/map" },
    ],
  },
  {
    keywords: ["naver", "kakao", "google maps", "navigation", "지도앱", "네이버지도", "ナビ", "地図アプリ", "导航", "地图应用", "mapa"],
    answer:
      "Google Maps barely works for walking/driving in Korea — download Naver Map (best English support) or KakaoMap before you land. Every spot page here has one-tap deep links into both, so you can navigate without typing Korean.",
    links: [{ label: "Essential apps for Korea", href: "/guide/sim-esim-apps" }],
  },
  {
    keywords: ["ktx", "busan", "gangneung", "intercity", "train ticket", "기차", "부산 가는", "강릉", "高速鉄道", "釜山", "高铁", "tren"],
    answer:
      "KTX high-speed trains link Seoul to Busan (~2h40m, for Pachinko's Yeongdo) and Gangneung (~2h, for Goblin's beaches). Book on the Korail app or at station machines — weekends sell out, so reserve a few days ahead.",
    links: [
      { label: "Gangwon Goblin coast route", href: "/routes/gangwon-goblin-coast" },
      { label: "Pachinko's Busan spots", href: "/shows/pachinko" },
    ],
  },
  {
    keywords: ["taxi", "kakao t", "uber", "택시", "카카오택시", "タクシー", "出租车", "打车"],
    answer:
      "Taxis are affordable (base ~₩4,800) and honest via the Kakao T app, which shows the route and price and takes foreign cards. Uber works in Seoul too. Late night demand surges — grab one before the subway's last train if you're far out.",
    links: [{ label: "Essential apps for Korea", href: "/guide/sim-esim-apps" }],
  },
  {
    keywords: ["jeju flight", "fly jeju", "get to jeju", "제주 가는", "제주도 가는법", "済州", "行き方", "济州", "怎么去", "cómo llegar a jeju"],
    answer:
      "Jeju is a ~1h domestic flight from Seoul Gimpo — Korea's busiest route, with fares from ~₩30–80k if booked early (Jeju Air, T'way, Jin Air). Gimpo is far easier than Incheon for domestic hops. No ferry needed.",
    links: [{ label: "Jeju Tangerines Trail (4 days)", href: "/routes/jeju-tangerines-trail" }],
  },
  {
    keywords: ["around jeju", "jeju bus", "jeju rental", "jeju car", "제주 렌트", "제주 버스", "レンタカー", "済州のバス", "租车", "coche en jeju"],
    answer:
      "Jeju's drama spots are scattered — a rental car is the honest answer (international permit required; book ahead). Without one, use the 101/102 trunk buses plus taxis for the last mile, and cluster spots by coast: our Jeju routes are grouped exactly that way.",
    links: [
      { label: "Jeju Tangerines Trail", href: "/routes/jeju-tangerines-trail" },
      { label: "Jeju healing dramas route", href: "/routes/jeju-healing-dramas" },
    ],
  },
  {
    keywords: ["nami", "gapyeong", "day trip", "petite france", "남이섬", "가평", "가는 법", "行き方", "南怡島", "ナミソム", "南怡岛", "isla nami"],
    answer:
      "Nami Island (Winter Sonata) is an easy Seoul day trip: ITX-Cheongchun train from Yongsan/Cheongnyangni to Gapyeong (~1h), then the shuttle or taxi to the ferry. Pair it with Gapyeong's other sets in one loop — our day-trip route does exactly that.",
    links: [
      { label: "Suwon & Gapyeong day trips", href: "/routes/suwon-and-gapyeong-day-trips" },
      { label: "Nami Island spot guide", href: "/spots/nami-island" },
    ],
  },
  {
    keywords: ["suwon", "hwaseong", "fortress", "수원", "화성행궁", "水原", "华城", "suwon fortaleza"],
    answer:
      "Suwon's Hwaseong Fortress area doubles as a period-drama backlot — Hwahongmun Gate, the pedestrian bridge and Haenggung-dong's cafe streets are all walkable from one another. Subway Line 1 or the Sinbundang line gets you there in about an hour from Seoul.",
    links: [{ label: "Suwon & Gapyeong day trips", href: "/routes/suwon-and-gapyeong-day-trips" }],
  },
  {
    keywords: ["last train", "night bus", "late night", "심야", "막차", "終電", "深夜バス", "末班车", "深夜"],
    answer:
      "Subways stop around midnight (23:00 on some lines Sunday). After that: Kakao T taxis (expect surge waits in Hongdae/Itaewon at 2am) or the N-prefix night buses on major corridors. Plan drama-spot nights so the last transfer is before 23:30.",
    links: [{ label: "T-money & subway guide", href: "/guide/tmoney-and-subway" }],
  },
  {
    keywords: ["luggage", "locker", "storage", "suitcase", "짐 보관", "물품보관함", "コインロッカー", "荷物", "行李寄存", "equipaje"],
    answer:
      "Most subway stations have coin lockers (T-money or card payment, ~₩2–6k/day by size), and Seoul Station has a staffed luggage center. Services like Safex deliver bags between airport and hotel. Don't drag a suitcase through Bukchon's hills — locker it first.",
    links: [{ label: "First-timer everything route", href: "/routes/first-timer-everything" }],
  },

  // ───────────────────────────── B. Money ─────────────────────────────
  {
    keywords: ["exchange", "currency", "won", "money change", "환전", "両替", "换钱", "汇率", "cambio de divisas"],
    answer:
      "Skip airport counters — Myeongdong's licensed exchanges give the best cash rates, and WOWPASS kiosks auto-exchange 16 currencies onto a prepaid card. Honestly, cards cover 95% of Korea; carry only ~₩100–200k cash for markets and street food.",
    links: [{ label: "Money, cards & tax refund", href: "/guide/money-cards-tax-refund" }],
  },
  {
    keywords: ["credit card", "visa", "mastercard", "amex", "card work", "카드 결제", "クレジットカード", "刷卡", "信用卡", "tarjeta de crédito"],
    answer:
      "Visa and Mastercard work almost everywhere, including taxis and street-adjacent shops; Amex is patchier. Contactless (tap) is common but some terminals want the chip. The holdouts are old market stalls — that's what your emergency cash is for.",
    links: [{ label: "Money, cards & tax refund", href: "/guide/money-cards-tax-refund" }],
  },
  {
    keywords: ["tax refund", "tax free", "vat", "refund", "택스리펀", "세금 환급", "免税", "税金還付", "退税", "devolución de impuestos"],
    answer:
      "Spend ₩15,000+ in one tax-free store and you can claim ~7–8% back. Olive Young and department stores do instant refunds at the register with your passport; otherwise scan receipts at airport kiosks before check-in. Keep purchases unused in your carry-on for spot checks.",
    links: [{ label: "Money, cards & tax refund", href: "/guide/money-cards-tax-refund" }],
  },
  {
    keywords: ["tipping", "tip", "service charge", "팁 문화", "チップ", "小费", "propina"],
    answer:
      "No tipping in Korea — not in restaurants, taxis or hotels. Menu price is final price; service charge is included at high-end venues. Trying to tip usually just causes a polite chase to return your money.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["budget", "daily cost", "how much", "expensive", "cheap", "하루 경비", "예산", "予算", "いくら", "预算", "presupuesto"],
    answer:
      "A comfortable set-jetting day in Seoul runs roughly ₩70–120k (~$50–90) beyond lodging: ₩10k transit, ₩30–50k food, entries mostly free (filming spots are largely public places). The big variables are one fine-dining booking and shopping willpower at Olive Young.",
    links: [{ label: "Money, cards & tax refund", href: "/guide/money-cards-tax-refund" }],
  },
  {
    keywords: ["atm", "withdraw", "cash machine", "global atm", "출금", "ATM 수수료", "引き出し", "取款", "cajero"],
    answer:
      "Use 'Global ATM' machines (in convenience stores and banks) with English menus — they accept foreign cards with a ~₩3,500–5,000 fee plus your bank's cut. Withdraw larger amounts less often, and decline the machine's own conversion rate (choose KRW).",
    links: [{ label: "Money, cards & tax refund", href: "/guide/money-cards-tax-refund" }],
  },

  // ──────────────────────── C. Connectivity & apps ────────────────────────
  {
    keywords: ["esim", "sim card", "pocket wifi", "data plan", "유심", "이심", "포켓와이파이", "イーシム", "电话卡", "esim corea", "tarjeta sim"],
    answer:
      "For most travelers an eSIM bought online before departure wins: activated on landing, no counter queue, from ~$3–4/day for unlimited data. Physical SIMs suit older phones; pocket wifi only makes sense for groups sharing one battery-hungry hotspot.",
    links: [{ label: "SIM, eSIM & apps compared", href: "/guide/sim-esim-apps" }],
  },
  {
    keywords: ["apps", "download", "essential app", "which app", "필수 앱", "어플 추천", "アプリ", "必装", "aplicaciones"],
    answer:
      "The Korea starter pack: Naver Map (navigation), Kakao T (taxis), Papago (translation), CatchTable Global (restaurant bookings) and Korail (trains). Download them before you land — some app stores region-lock Korean apps after arrival.",
    links: [{ label: "SIM, eSIM & apps compared", href: "/guide/sim-esim-apps" }],
  },
  {
    keywords: ["translate", "papago", "language barrier", "korean speak", "번역", "파파고", "翻訳", "通じる", "翻译", "traductor", "idioma"],
    answer:
      "Papago beats Google Translate for Korean — use camera mode on menus and conversation mode with older shopkeepers. Young Koreans in Seoul often manage basic English, but a smile plus Papago covers everything from markets to countryside bus drivers.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["wifi", "free internet", "hotspot", "와이파이", "무료 인터넷", "無料Wi-Fi", "免费wifi", "wifi gratis"],
    answer:
      "Seoul is blanketed in free wifi — subways, cafes, and the public 'Seoul WiFi' network — but it's login-fiddly and drops outdoors. Data is cheap enough that an eSIM saves real frustration when you're navigating between filming spots on foot.",
    links: [{ label: "SIM, eSIM & apps compared", href: "/guide/sim-esim-apps" }],
  },

  // ──────────────────────── D. Food & bookings ────────────────────────
  {
    keywords: ["culinary", "class wars", "black white chef", "book", "reservation", "reserve", "흑백요리사", "예약", "黒白の料理人", "黑白厨师", "予約", "预订", "reservar"],
    answer:
      "Culinary Class Wars restaurants book through the CatchTable Global app, and the famous ones open slots about 30 days ahead — set an alarm for the drop and join waitlists aggressively. Tian Mi Mi is the easiest walk-in of the alumni; Mosu is the lottery ticket.",
    links: [
      { label: "Every CCW restaurant we track", href: "/food" },
      { label: "CatchTable step-by-step guide", href: "/guide/booking-restaurants-catchtable" },
      { label: "Foodie Seoul 3-day route", href: "/routes/foodie-seoul-culinary-class-wars" },
    ],
  },
  {
    keywords: ["catchtable", "catch table", "booking app", "how to book restaurant", "캐치테이블", "식당 예약", "レストラン予約", "餐厅", "预订", "reservar restaurante"],
    answer:
      "Download CatchTable Global (the English app — not the Korean one), verify with any foreign number, and you can book most of Seoul's drama-famous tables. Slots drop at midnight KST ~30 days out for hot places; waitlist cancellations are surprisingly winnable on weekdays.",
    links: [
      { label: "CatchTable step-by-step guide", href: "/guide/booking-restaurants-catchtable" },
      { label: "Restaurants we track", href: "/food" },
    ],
  },
  {
    keywords: ["mosu", "three star", "michelin", "모수", "ミシュラン", "米其林", "estrella michelin"],
    answer:
      "Mosu is the hardest booking on our list — a tasting-menu institution where seats vanish within minutes of release. Set a CatchTable alarm, try weekday lunch first, and have Choi Dot or TRID as strong Plan B bookings from the same show.",
    links: [
      { label: "Mosu booking intel", href: "/food/mosu-seoul" },
      { label: "Foodie Seoul route", href: "/routes/foodie-seoul-culinary-class-wars" },
    ],
  },
  {
    keywords: ["tian mi mi", "walk in", "walkin", "no reservation", "티엔미미", "웨이팅", "ウォークイン", "排队", "sin reserva"],
    answer:
      "Tian Mi Mi is the friendliest door among the Culinary Class Wars names — arrive before open or after 20:00 on a weekday and the walk-in wait is usually manageable. Put your name in the tablet queue and browse nearby while you wait.",
    links: [{ label: "Tian Mi Mi guide", href: "/food/tian-mi-mi" }],
  },
  {
    keywords: ["vegetarian", "vegan", "halal", "dietary", "no meat", "채식", "비건", "할랄", "ベジタリアン", "ヴィーガン", "素食", "清真", "vegetariano", "halal comida"],
    answer:
      "Doable with planning: temple-food restaurants and Itaewon's halal-certified strip are the reliable anchors, and bibimbap/kimbap shops can usually drop the meat. Learn the phrase 'gogi ppaejuseyo' (no meat please) — and know fish stock hides in many soups.",
    links: [
      { label: "Food guide", href: "/food" },
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
    ],
  },
  {
    keywords: ["solo dining", "eat alone", "honbap", "alone table", "혼밥", "一人ご飯", "一个人", "comer solo"],
    answer:
      "Solo dining (honbap) is completely normal now — food courts, ramyeon counters, and most casual spots welcome singles. Korean BBQ is the one hurdle (2-portion minimums); solve it with honbap-friendly BBQ chains or lunch sets at the drama restaurants we list.",
    links: [{ label: "Restaurants we track", href: "/food" }],
  },
  {
    keywords: ["myeongdong kyoja", "kalguksu", "cheap eat", "명동교자", "칼국수", "ミョンドン餃子", "明洞饺子", "barato comer"],
    answer:
      "Myeongdong Kyoja is the classic budget legend: one perfect kalguksu (~₩10k), garlicky kimchi, cash-fast turnover, no reservations needed. Go off-peak (14:00–17:00) to skip the queue entirely.",
    links: [{ label: "Myeongdong Kyoja guide", href: "/food/myeongdong-kyoja" }],
  },
  {
    keywords: ["tosokchon", "samgyetang", "chicken soup", "토속촌", "삼계탕", "参鶏湯", "参鸡汤", "sopa de pollo"],
    answer:
      "Tosokchon Samgyetang near Gyeongbokgung serves the ginseng chicken soup presidents queued for — the line moves fast thanks to hangar-scale seating. Pair it with a palace-area filming walk; it's steps from the classic-drama circuit.",
    links: [
      { label: "Tosokchon guide", href: "/food/tosokchon-samgyetang" },
      { label: "Seoul K-drama classics route", href: "/routes/seoul-kdrama-classics" },
    ],
  },
  {
    keywords: ["gwangjang", "bindaetteok", "market food", "yukhoe", "광장시장", "빈대떡", "육회", "広蔵市場", "广藏市场", "mercado gwangjang"],
    answer:
      "Gwangjang Market is the K-drama food set that's real: mung-bean bindaetteok sizzling in oil, mayak gimbap, yukhoe alley. Go hungry, carry some cash, sit where the ajummas wave you in — Netflix made a few stalls famous but the whole alley delivers.",
    links: [
      { label: "Bindaetteok alley guide", href: "/food/gwangjang-bindaetteok-alley" },
      { label: "Gwangjang Market spot", href: "/spots/gwangjang-market" },
    ],
  },
  {
    keywords: ["street food", "safe to eat", "food poisoning", "stall", "길거리 음식", "屋台", "露店", "街边小吃", "comida callejera"],
    answer:
      "Street food in Korea is very safe by global standards — high turnover, strict hygiene culture. Standard sense applies: pick busy stalls, eat what's cooked hot in front of you. Budget ₩2–5k per skewer/cup and graze your way down the row.",
    links: [{ label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" }],
  },
  {
    keywords: ["tteokbokki", "chimaek", "fried chicken", "drama food", "ramyeon", "떡볶이", "치맥", "라면", "トッポッキ", "チメク", "炒年糕", "炸鸡啤酒", "pollo frito"],
    answer:
      "The screen-to-table bucket list: tteokbokki from a street cart, chimaek (fried chicken + beer) by the Han River at dusk, convenience-store ramyeon at the counter, and a market bindaetteok. Our food bucket list pairs each craving with the exact scene that started it.",
    links: [
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
      { label: "Food guide", href: "/food" },
    ],
  },
  {
    keywords: ["convenience store", "cvs", "gs25", "cu store", "seven eleven", "편의점", "コンビニ", "便利店", "tienda de conveniencia"],
    answer:
      "Korean convenience stores are a legitimate food scene — eat-in counters, hot water for ramyeon, seasonal collabs, decent coffee. GS25, CU and 7-Eleven blanket every block. Late-night CVS ramyeon after a filming-spot crawl is a rite of passage.",
    links: [{ label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" }],
  },

  // ───────────────────────────── E. K-beauty ─────────────────────────────
  {
    keywords: ["olive young", "beauty buy", "skincare", "cosmetics", "올리브영", "화장품", "オリーブヤング", "コスメ", "化妆品", "cosméticos"],
    answer:
      "Start with the suncare wall (Beauty of Joseon, Round Lab), the COSRX snail essence, and a Torriden serum — the staples foreigners actually rebuy. Spend ₩15,000+ with your passport for an instant tax refund at the register.",
    links: [
      { label: "Our K-beauty picks", href: "/beauty" },
      { label: "Olive Young playbook", href: "/guide/kbeauty-shopping-seoul" },
    ],
  },
  {
    keywords: ["sunscreen", "sun cream", "spf", "선크림", "자외선차단제", "日焼け止め", "防晒", "protector solar"],
    answer:
      "Korean sunscreens are the world's most pleasant to wear — Beauty of Joseon Rice Probiotics and Round Lab Birch Juice are the two everyone flies home with. Buy multiples; they're half the price you'll pay back home, and they never feel greasy.",
    links: [{ label: "Sunscreen picks compared", href: "/beauty" }],
  },
  {
    keywords: ["men skincare", "for men", "male grooming", "남자 화장품", "남성 스킨케어", "メンズスキンケア", "男士", "cuidado masculino"],
    answer:
      "K-beauty for men is friction-free: a low-pH cleanser, an all-in-one moisturizer, and one good sunscreen covers the routine K-drama leads actually follow. Olive Young has a dedicated men's wall — our picks cut it to three products.",
    links: [{ label: "K-beauty for men picks", href: "/beauty" }],
  },
  {
    keywords: ["gift", "souvenir", "under 20", "present", "선물", "기념품", "お土産", "ギフト", "伴手礼", "礼物", "regalo", "recuerdo"],
    answer:
      "Best beauty gifts under $20: sheet-mask multipacks, lip tints (Rom&nd, Peripera), hand creams, and cushion compacts — light, flat, and unmistakably Korean. Olive Young's checkout aisle is engineered for exactly this mission.",
    links: [{ label: "Gifts under $20 picks", href: "/beauty" }],
  },
  {
    keywords: ["buy from home", "online kbeauty", "yesstyle", "stylekorean", "ship", "해외 직구", "온라인 구매", "通販", "海外配送", "海淘", "网购", "comprar online"],
    answer:
      "Suitcase full? Olive Young Global ships worldwide from the same catalog, StyleKorean runs deep bundle deals, and YesStyle covers beauty plus fashion in 50+ countries. Prices run slightly above Seoul shelves but far below Western retail.",
    links: [{ label: "Order-from-home options", href: "/beauty" }],
  },
  {
    keywords: ["routine", "skincare order", "steps", "glass skin", "루틴", "스킨케어 순서", "スキンケア", "順番", "护肤", "步骤", "rutina"],
    answer:
      "The starter routine that survives real life: gentle cleanser → hydrating toner → one serum → moisturizer → sunscreen (morning). That's five products, all on our starter list — glass skin is mostly sunscreen discipline plus patience.",
    links: [{ label: "Starter skincare routine", href: "/beauty" }],
  },
  {
    keywords: ["fake", "authentic", "counterfeit", "real product", "가품", "정품", "偽物", "正規品", "假货", "正品", "falsificación"],
    answer:
      "Buy from Olive Young, department stores, or brands' own shops and authenticity is a non-issue — Korea polices this hard. The risk zone is third-party marketplace resellers abroad. If a 'Korean' price online looks too good, it is.",
    links: [{ label: "K-beauty shopping guide", href: "/guide/kbeauty-shopping-seoul" }],
  },

  // ──────────────────── F. Shows & filming locations ────────────────────
  {
    keywords: ["squid game", "dalgona", "오징어게임", "오징어 게임", "イカゲーム", "鱿鱼游戏", "juego del calamar", "filming", "촬영지", "ロケ地", "取景地"],
    answer:
      "Squid Game filmed mostly on closed sets, but the pilgrimage works: Ssangmun-dong's alleys (Gi-hun's neighborhood), Yangjae Citizens' Forest station's business-card scene, and the dalgona candy stalls that resurged citywide. Our show page separates visitable spots from studio-only rumors.",
    links: [
      { label: "Squid Game visitable spots", href: "/shows/squid-game" },
      { label: "Seoul trending-now route", href: "/routes/seoul-trending-now" },
    ],
  },
  {
    keywords: ["tangerines", "when life gives", "iu jeju", "폭싹 속았수다", "폭싹", "おつかれさま", "苦尽柑来", "mandarinas"],
    answer:
      "When Life Gives You Tangerines lives on Jeju: Aewol's stone-walled lanes, the Handam coastal walk, Seongsan Ilchulbong at sunrise and Seopjikoji's canola cape. Our 4-day Tangerines Trail strings them together at the drama's own pace.",
    links: [
      { label: "The show's filming spots", href: "/shows/when-life-gives-you-tangerines" },
      { label: "Jeju Tangerines Trail (4 days)", href: "/routes/jeju-tangerines-trail" },
    ],
  },
  {
    keywords: ["queen of tears", "hae in", "눈물의 여왕", "涙の女王", "泪之女王", "reina de las lágrimas"],
    answer:
      "Queen of Tears' Seoul is glossy and walkable: The Hyundai Seoul department store, the Korean Stone Art Museum's garden confession scene, and Aston House's fairy-lit lawn at Walkerhill. Three spots, one afternoon, if you sequence them east-to-west.",
    links: [
      { label: "Queen of Tears spots", href: "/shows/queen-of-tears" },
      { label: "Seoul trending-now route", href: "/routes/seoul-trending-now" },
    ],
  },
  {
    keywords: ["lovely runner", "sunjae", "byeon wooseok", "선재 업고 튀어", "선재", "ソンジェ背負って", "背着善宰跑", "lovely runner localizaciones"],
    answer:
      "Lovely Runner's pilgrimage centers on Suwon: Hwaseomun's pedestrian bridge (the umbrella scene), Hwahongmun Gate, and Haenggung-dong's cafe alleys where fans re-create the bicycle shots. Everything clusters within one walkable fortress loop.",
    links: [
      { label: "Lovely Runner spots", href: "/shows/lovely-runner" },
      { label: "Suwon day-trip route", href: "/routes/suwon-and-gapyeong-day-trips" },
    ],
  },
  {
    keywords: ["samdal", "samdalri", "welcome to samdal", "삼달리", "サムダルリ", "三达里", "samdalri jeju"],
    answer:
      "Welcome to Samdal-ri painted Jeju's quieter east: Gwangnyeong-ri's village lanes, Aqua Planet Ilsan's haenyeo scenes, and the island's low-slung port towns. It shares a coast with Tangerines — our Jeju healing route covers both fandoms in one trip.",
    links: [
      { label: "Samdal-ri spots", href: "/shows/welcome-to-samdal-ri" },
      { label: "Jeju healing dramas route", href: "/routes/jeju-healing-dramas" },
    ],
  },
  {
    keywords: ["goblin", "dokkaebi", "buckwheat", "jumunjin", "도깨비", "トッケビ", "鬼怪", "孤单又灿烂"],
    answer:
      "Goblin's icons split between Seoul and the Gangwon coast: Deoksugung's stonewall path, Woljeongsa's fir-forest avenue, and Jumunjin's breakwater where the buckwheat bouquet changed hands (a scene-replica photo frame now stands there). The coast leg is a KTX day trip.",
    links: [
      { label: "Goblin filming spots", href: "/shows/goblin" },
      { label: "Gangwon Goblin coast route", href: "/routes/gangwon-goblin-coast" },
    ],
  },
  {
    keywords: ["crash landing", "cloy", "switzerland", "iseltwald", "사랑의 불시착", "愛の不時着", "爱的迫降", "aterrizaje de emergencia"],
    answer:
      "Crash Landing on You is a two-country pilgrimage: Switzerland holds the piano pier at Iseltwald and Grindelwald's First cliff walk, while Korea has the Seoul scenes fans pair with a city route. We map both — check the show page for which spots fit your trip.",
    links: [{ label: "CLOY filming spots", href: "/shows/crash-landing-on-you" }],
  },
  {
    keywords: ["itaewon class", "danbam", "park saeroyi", "이태원 클라쓰", "梨泰院クラス", "梨泰院class"],
    answer:
      "Itaewon Class runs on one hill: the Itaewon main street, the Danbam exterior corner fans still photograph, and the neighborhood's global food alleys. Go at dusk when the signage glow matches the show's palette, then eat your way downhill.",
    links: [
      { label: "Itaewon Class spots", href: "/shows/itaewon-class" },
      { label: "Seoul K-drama classics route", href: "/routes/seoul-kdrama-classics" },
    ],
  },
  {
    keywords: ["hometown cha", "cha-cha-cha", "gongjin", "pohang", "갯마을 차차차", "海街チャチャチャ", "海岸村恰恰恰", "공진"],
    answer:
      "'Gongjin' is really Pohang: Cheongha Market's lanes, the Igari Anchor Observatory jutting over the sea, and the breakwaters in between. It's a relaxed one-day loop by car or taxi from Pohang station — KTX gets you there from Seoul in ~2.5h.",
    links: [{ label: "Hometown Cha-Cha-Cha spots", href: "/shows/hometown-cha-cha-cha" }],
  },
  {
    keywords: ["attorney woo", "young-woo", "whale", "hackberry", "우영우", "이상한 변호사", "ウ・ヨンウ", "非常律师", "禹英禑", "woo abogada"],
    answer:
      "Extraordinary Attorney Woo's most-loved pilgrimage is the great hackberry tree of Dong-bu village (a protected natural monument — admire from the path), plus Seoul office-district exteriors. The tree sits near Changwon; treat it as a half-day southern detour.",
    links: [{ label: "Attorney Woo spots", href: "/shows/extraordinary-attorney-woo" }],
  },
  {
    keywords: ["winter sonata", "bae yong-joon", "first kiss", "겨울연가", "冬のソナタ", "冬季恋歌", "sonata de invierno"],
    answer:
      "Winter Sonata's Nami Island metasequoia lane is where K-drama tourism began — twenty years on, the couple statues and snow-dusted avenues still draw pilgrims. Pair with Yongpyong Resort's slopes for the full 2002 nostalgia arc.",
    links: [
      { label: "Winter Sonata spots", href: "/shows/winter-sonata" },
      { label: "Nami Island guide", href: "/spots/nami-island" },
    ],
  },
  {
    keywords: ["demon hunters", "kpop demon", "huntrix", "rumi", "케이팝 데몬", "데몬 헌터스", "ケイポップ・デーモン", "kpop魔鬼猎人", "k-pop demon"],
    answer:
      "KPop Demon Hunters is animated, but its Seoul is real: Bukchon's hanok rooflines, Naksan Park's fortress walls, COEX's K-pop Square and the Namsan tower skyline all appear on screen. Our show page matches each frame to the walkable original.",
    links: [
      { label: "KPop Demon Hunters spots", href: "/shows/kpop-demon-hunters" },
      { label: "Seoul trending-now route", href: "/routes/seoul-trending-now" },
    ],
  },
  {
    keywords: ["moving", "disney", "jungwon high", "무빙", "ムービング", "超异能族", "moving disney"],
    answer:
      "Moving (Disney+) grounds its superpowers in ordinary Seoul: the school-gate streets, Bulgwangcheon stream's paths and everyday neighborhood corners. It's the least touristy pilgrimage on our list — which is exactly its charm. Spots are subway-easy.",
    links: [{ label: "Moving filming spots", href: "/shows/moving" }],
  },
  {
    keywords: ["pachinko", "busan", "yeongdo", "sunja", "파친코", "パチンコ", "弹子球游戏", "부산 촬영"],
    answer:
      "Pachinko's Korean chapters live in Busan: Yeongdo's hillside lanes, the Jagalchi fish-market waterfront, and Taejongdae's cliffs standing in for 1930s crossings. Busan is 2h40m by KTX — give it an overnight to do the island properly.",
    links: [{ label: "Pachinko's Busan spots", href: "/shows/pachinko" }],
  },
  {
    keywords: ["vincenzo", "cassano", "geumga", "sewoon", "빈센조", "ヴィンチェンツォ", "文森佐", "금가프라자"],
    answer:
      "Vincenzo's Geumga Plaza is Sewoon Sangga in real life — the brutalist mega-arcade whose walkways and rooftop skyline shots fans recognize instantly. Add Common Ground's blue containers for the drama's pop-up scenes. Both are central Seoul, subway-adjacent.",
    links: [
      { label: "Vincenzo filming spots", href: "/shows/vincenzo" },
      { label: "Sewoon Sangga guide", href: "/spots/sewoon-sangga" },
    ],
  },
  {
    keywords: ["twenty five", "twenty-one", "2521", "na hee-do", "fencing", "스물다섯", "스물하나", "二十五、二十一", "二十五二十一", "veinticinco veintiuno"],
    answer:
      "Twenty-Five Twenty-One's 1998 nostalgia filmed largely around Jeonju and Seoul: the tunnel bike rides, hanok-adjacent alleys and school streets. Jeonju doubles as Korea's best food city — the pilgrimage justifies itself at lunch.",
    links: [{ label: "2521 filming spots", href: "/shows/twenty-five-twenty-one" }],
  },
  {
    keywords: ["our blues", "pureung", "haenyeo", "우리들의 블루스", "私たちのブルース", "我们的蓝调", "blues jeju"],
    answer:
      "Our Blues braids Jeju's working coast: the fish markets, haenyeo diving grounds and low ports around the island's villages. It clusters naturally with Tangerines and Samdal-ri locations — one Jeju trip can honor all three fandoms.",
    links: [
      { label: "Our Blues spots", href: "/shows/our-blues" },
      { label: "Jeju healing dramas route", href: "/routes/jeju-healing-dramas" },
    ],
  },
  {
    keywords: ["king the land", "gu won", "hotel drama", "킹더랜드", "キング・ザ・ランド", "欢迎光临王之国", "king land"],
    answer:
      "King the Land's luxury backdrop is real hospitality Seoul: hotel interiors, department-store floors and Dongdaemun's night market energy. The spots are indoor-friendly — it's our go-to rainy-day pilgrimage list.",
    links: [{ label: "King the Land spots", href: "/shows/king-the-land" }],
  },
  {
    keywords: ["singles inferno", "paradise city", "island date", "솔로지옥", "ソロ地獄", "单身即地狱", "inferno soltero"],
    answer:
      "Single's Inferno splits between 'Inferno' (Saseungbongdo's tidal sandbar) and 'Paradise' — the actual Paradise City resort in Incheon, which any traveler can book or day-visit. The resort leg pairs neatly with an airport-day itinerary.",
    links: [{ label: "Single's Inferno spots", href: "/shows/singles-inferno" }],
  },
  {
    keywords: ["kpop", "bts", "blackpink", "idol spot", "kpop square", "코엑스", "케이팝 성지", "K-POPスポット", "kpop打卡", "lugares kpop"],
    answer:
      "For K-pop pilgrims: COEX K-pop Square's giant LED (album-launch billboards), Myeongdong and Dongdaemun's merch floors, and the Han River parks where countless MVs filmed. Our map layers these alongside drama spots so one route serves both fandoms.",
    links: [
      { label: "Set-jetting map", href: "/map" },
      { label: "COEX K-pop Square", href: "/spots/coex-kpop-square" },
    ],
  },
  {
    keywords: ["which shows", "what dramas", "covered", "list of shows", "어떤 작품", "무슨 드라마", "作品一覧", "どのドラマ", "哪些剧", "qué series"],
    answer:
      "We track 20 titles across Netflix, Disney+ and Apple TV+ — from Squid Game and Tangerines to Pachinko, Moving and Vincenzo — each with verified, physically visitable filming spots (no studio-only rumors). Browse them all on the Shows page, filterable by platform.",
    links: [{ label: "All shows & locations", href: "/shows" }],
  },
  {
    keywords: ["verified", "how do you know", "confirm location", "rumor", "검증", "확인된", "本当に", "確認済み", "核实", "verificado"],
    answer:
      "Every spot is cross-checked against official tourism sources and press coverage before it's published — if we can't verify a location twice, it doesn't go up. Each page shows a 'last verified' date, and a report button feeds corrections straight to the editors.",
    links: [{ label: "Our verification policy", href: "/about" }],
  },
  {
    keywords: ["first show", "where to start", "best pilgrimage", "beginner drama", "뭐부터 볼까", "입문", "初心者", "从哪开始", "por dónde empezar"],
    answer:
      "For a first set-jetting trip, pick a show whose spots cluster: Tangerines (all Jeju), Lovely Runner (all Suwon) or Goblin (Seoul + one coast day). Or skip choosing — take the 60-second quiz and we'll match your taste to a show and a ready route.",
    links: [
      { label: "Take the quiz", href: "/quiz" },
      { label: "First-timer route", href: "/routes/first-timer-everything" },
    ],
  },

  // ─────────────── G. Planner, Route Pass & site features ───────────────
  {
    keywords: ["route pass", "pdf", "paid", "price", "cost", "subscription", "insider", "루트 패스", "유료", "가격", "料金", "有料", "价格", "订阅", "precio", "suscripción"],
    answer:
      "The free planner gives you a full day-by-day summary. The Route Pass ($4.90 one-time) upgrades one plan with minute timings, a booking-deadline checklist and a PDF sent to your email; Insider ($3.90/mo) makes detailed plans unlimited and unlocks early drops.",
    links: [
      { label: "Build a plan", href: "/planner" },
      { label: "Pass & Insider details", href: "/planner#pass" },
    ],
  },
  {
    keywords: ["planner free", "is it free", "summary plan", "무료 플래너", "공짜", "プランナー", "免费", "规划", "gratis planificador"],
    answer:
      "Yes — the planner is free with no account: pick the shows you've watched, set days and pace, and get a complete day-by-day route with maps. The paid Route Pass only adds the convenience layer (minute-level timings, booking calendar, emailed PDF).",
    links: [{ label: "Try the planner", href: "/planner" }],
  },
  {
    keywords: ["ics", "calendar file", "add to calendar", "캘린더 추가", "일정 파일", "カレンダー", "日历", "calendario"],
    answer:
      "Every generated plan exports a free .ics file — one tap adds your entire route as calendar events to Google Calendar, Apple Calendar or Outlook, with each stop's notes attached. Look for 'Add to calendar' under your plan.",
    links: [{ label: "Build a plan", href: "/planner" }],
  },
  {
    keywords: ["license key", "activate", "didn't get pass", "bought but", "라이선스 키", "활성화", "구매했는데", "ライセンスキー", "購入したのに", "激活", "授权码", "clave de licencia"],
    answer:
      "After purchase you receive a license key by email. On the planner's Route Pass box, choose 'Already bought it?', paste the key and hit Activate — the pass unlocks on that browser. Key not arriving? Check spam, then contact us and we'll sort it fast.",
    links: [
      { label: "Activate on the planner", href: "/planner" },
      { label: "Contact the editors", href: "/contact" },
    ],
  },
  {
    keywords: ["refund", "money back", "cancel purchase", "환불", "返金", "退款", "reembolso"],
    answer:
      "Digital goods: a Route Pass that hasn't been used to generate a PDF is refundable within 14 days — just email us your order info. Insider subscriptions cancel anytime and simply run out the paid period. Full terms are on the site.",
    links: [
      { label: "Terms of use", href: "/terms" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    keywords: ["regenerate", "different plan", "shuffle", "variety", "다시 생성", "다른 조합", "組み合わせ", "重新生成", "otro plan"],
    answer:
      "Hit 'Shuffle the mix' and the planner rebuilds your route with a different but equally geographic-sensible combination — same shows, fresh sequence and restaurant picks. Pass holders can regenerate their detailed plan up to 3 times within 30 days.",
    links: [{ label: "Open the planner", href: "/planner" }],
  },
  {
    keywords: ["stamp", "check in", "visited", "pilgrimage badge", "스탬프", "다녀왔", "スタンプ", "巡礼", "盖章", "sello"],
    answer:
      "Every spot page has an 'I've been here' button. Check in as you travel and your pilgrimage stamps fill up per show — complete one to earn its stamp card, then copy it to share.",
    links: [{ label: "My stamps", href: "/stamps" }],
  },
  {
    keywords: ["wishlist", "save spot", "heart", "favorites", "위시리스트", "찜", "저장", "お気に入り", "保存", "收藏", "favoritos", "guardar"],
    answer:
      "Tap the heart on any spot, route or restaurant and it lands in your Saved list — stored in your browser, no account needed. Saved spots make a natural walking order when you open them beside the map.",
    links: [
      { label: "My saved places", href: "/saved" },
      { label: "Set-jetting map", href: "/map" },
    ],
  },
  {
    keywords: ["quiz", "test", "which world", "personality", "퀴즈", "테스트", "성향", "診断", "テスト", "测试", "cuál es mi"],
    answer:
      "The 60-second quiz reads your travel taste — pace, scenery, food scenes — and matches you to a show, its spots and a ready-made route, with a shareable result card. It's the fastest way from 'no idea' to 'booked flights'.",
    links: [{ label: "Take the quiz", href: "/quiz" }],
  },
  {
    keywords: ["map page", "interactive map", "all spots map", "지도 보기", "전체 지도", "マップ", "地図で見る", "地图", "mapa interactivo"],
    answer:
      "The set-jetting map plots every verified location on one interactive map — filter by show, tap a marker for the scene story, then jump to Naver/Google navigation. It's the planning view power users start from.",
    links: [{ label: "Open the map", href: "/map" }],
  },
  {
    keywords: ["discord", "community", "ask human", "real person", "디스코드", "커뮤니티", "コミュニティ", "社区", "comunidad"],
    answer:
      "Our Discord is where recent travelers answer trip questions fast, share fresh spot photos and give feedback on planner results — free to join.",
    links: [{ label: "Join the community", href: "/community" }],
  },
  {
    keywords: ["fan frame", "photo submit", "my photo", "featured", "팬 프레임", "사진 제보", "사진 올리", "投稿", "照片", "enviar foto"],
    answer:
      "Post your spot photos in Discord's #spot-photos and each month we feature one as the homepage 'Fan Frame' — with your credit, permission asked first. Community shots also fill spots we haven't photographed yet, always credited.",
    links: [{ label: "Community & Fan Frame", href: "/community" }],
  },

  // ─────────────────── H. Seasons & trip planning ───────────────────
  {
    keywords: ["best time", "when visit", "what season", "언제 가", "여행 시기", "ベストシーズン", "いつ行く", "什么时候去", "mejor época"],
    answer:
      "Sweet spots: April (cherry blossoms, mild) and October–early November (foliage, crisp light — the K-drama look). June–August is hot and rainy; January–February is cold but magical for winter-drama scenes. Shoulder months mean fewer crowds at famous spots.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["cherry blossom", "spring", "sakura", "벚꽃", "언제", "봄 여행", "桜", "花見", "樱花", "cerezo en flor"],
    answer:
      "Cherry blossoms sweep south-to-north from late March (Jeju) to mid-April (Seoul) — Yeouido, palace walls and Naksan's fortress paths are prime drama-scene territory. The window is ~10 days per city; build flexibility into bloom-chasing plans.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["autumn", "fall foliage", "october", "ginkgo", "단풍", "가을 여행", "紅葉", "秋の韓国", "红叶", "otoño"],
    answer:
      "Late October to mid-November is Korea's cinematic peak: ginkgo-gold streets, fiery palace gardens, and that low amber light every drama DP chases. Woljeongsa's fir forest and Nami's metasequoia lane are at their most screen-accurate.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["winter", "snow", "cold", "december", "january", "겨울 여행", "눈 오는", "韓国の冬", "雪景", "冬天", "invierno"],
    answer:
      "Winter Korea is harsh (-10°C snaps) but delivers the scenes: snow on hanok roofs, steaming street food, Yongpyong's slopes from Winter Sonata. Pack real layers, use subway transfers to warm up, and chase indoor-heavy routes on the coldest days.",
    links: [
      { label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" },
      { label: "King the Land (indoor spots)", href: "/shows/king-the-land" },
    ],
  },
  {
    keywords: ["summer", "rainy", "monsoon", "humid", "july", "august", "여름 여행", "장마", "夏の韓国", "梅雨", "夏天", "verano"],
    answer:
      "June–August is hot, humid, and punctuated by jangma (monsoon) downpours in early summer. It's workable: start spots early, siesta in cafes 13:00–16:00, keep King the Land-style indoor lists as rain plans. Jeju's coasts are gorgeous between storms.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["how many days", "days enough", "trip length", "week enough", "며칠", "일정 기간", "何日間", "何泊", "几天", "cuántos días"],
    answer:
      "Rules of thumb: Seoul's drama spots want 3–4 full days; add 2 for a Suwon/Gapyeong day trip plus a coast run; Jeju deserves 3–4 on its own. A 7-day Seoul+Jeju split is the classic first set-jetting trip — the planner sizes routes to whatever you have.",
    links: [
      { label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" },
      { label: "Size a plan to your days", href: "/planner" },
    ],
  },
  {
    keywords: ["first time", "first trip", "never been", "beginner korea", "처음 가는", "첫 한국", "初めての韓国", "第一次去", "primera vez"],
    answer:
      "First time? Take the first-timer route — it braids the greatest-hits filming spots with the practical Seoul everyone should see, subway-only, no Korean needed. Read the etiquette and T-money guides on the flight over and you'll land competent.",
    links: [
      { label: "First-timer everything route", href: "/routes/first-timer-everything" },
      { label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" },
    ],
  },
  {
    keywords: ["where stay", "hotel area", "neighborhood", "hongdae or myeongdong", "어디 숙소", "숙소 추천", "どこに泊まる", "ホテル", "住哪里", "dónde alojarse"],
    answer:
      "Pick by fandom: Myeongdong for shopping + airport access, Hongdae for nightlife energy, Jongno/Bukchon for palace-and-hanok atmosphere, Gangnam for K-pop polish. Our neighborhoods guide maps each area to the shows filmed around it.",
    links: [{ label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" }],
  },
  {
    keywords: ["itinerary help", "plan for me", "make itinerary", "일정 짜줘", "여행 계획 짜", "旅程", "行程", "hazme un itinerario"],
    answer:
      "That's literally what the planner does: tell it which shows you've watched, your days and pace, and it clusters filming spots geographically, slots in the right restaurants and hands you a day-by-day route — free. Refine it with the community's feedback after.",
    links: [
      { label: "Build my plan", href: "/planner" },
      { label: "Get plan feedback on Discord", href: "/community" },
    ],
  },
  {
    keywords: ["with kids", "family", "children", "stroller", "아이랑", "가족 여행", "子連れ", "家族旅行", "带孩子", "con niños"],
    answer:
      "Korea is very family-friendly: spotless subways (elevators at most stations), aquariums and parks near several filming spots, and kid-tolerant food everywhere. Best family-fit pilgrimages: Nami Island, Aqua Planet Ilsan (Samdal-ri) and palace courtyards.",
    links: [{ label: "First-timer route", href: "/routes/first-timer-everything" }],
  },

  // ─────────────────── I. Etiquette & practical Korea ───────────────────
  {
    keywords: ["photo etiquette", "can i photograph", "private property", "drone", "촬영 매너", "사진 찍어도", "撮影マナー", "撮影", "拍照", "etiqueta fotos"],
    answer:
      "Golden rules at filming spots: many are homes, schools and working shops — shoot exteriors from public paths, keep voices low in residential alleys (Bukchon has quiet hours), never block doorways, and ask before photographing people. Drones need permits almost everywhere.",
    links: [{ label: "Filming-location photo etiquette", href: "/guide/filming-location-photo-etiquette" }],
  },
  {
    keywords: ["etiquette", "manners", "rude", "customs", "do and don't", "예절", "매너", "マナー", "礼儀", "礼仪", "禁忌", "etiqueta", "costumbres"],
    answer:
      "The big ones: two hands when giving/receiving, shoes off where floors are raised, quiet subway cars, no trash cans on streets (pocket your wrappers), and pour drinks for others before yourself. Koreans forgive tourist slips generously — visible effort counts double.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["safe", "safety", "dangerous", "night alone", "solo female", "안전한", "치안", "治安", "安全", "seguro viajar"],
    answer:
      "Korea ranks among the world's safest destinations — solo night walks in Seoul are routine, lost phones get returned, CCTV is everywhere. Standard travel sense still applies in nightlife districts at 3am. Emergency number: 112 (police) / 119 (medical), with interpreter support.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["visa", "keta", "k-eta", "entry", "immigration", "비자", "전자여행허가", "ビザ", "入国", "签证", "入境", "visado"],
    answer:
      "Entry rules vary by passport and change often — check the official K-ETA site (k-eta.go.kr) and your local Korean embassy before booking. Many nationalities enter visa-free with or without a K-ETA; the check takes two minutes and beats a boarding-desk surprise.",
    links: [{ label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" }],
  },
  {
    keywords: ["plug", "voltage", "adapter", "outlet", "socket", "콘센트", "전압", "変換プラグ", "コンセント", "插座", "电压", "enchufe", "adaptador"],
    answer:
      "Korea runs 220V/60Hz with round two-pin sockets (Type C/F, same as most of Europe). US/UK/AU travelers need a plug adapter — most phone chargers handle 220V fine, but check hair tools. Hotels usually lend adapters; convenience stores sell them cheap.",
    links: [{ label: "First-timer route", href: "/routes/first-timer-everything" }],
  },
  {
    keywords: ["weather app", "fine dust", "air quality", "forecast", "미세먼지", "날씨 앱", "PM2.5", "空気質", "空气质量", "calidad del aire"],
    answer:
      "Check fine dust (PM2.5) alongside weather — spring can bring hazy days when masks help and mountain views vanish. Korean weather apps and AirVisual both track it. Bad-air days are your cue for the indoor pilgrimages: department stores, museums, King the Land spots.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["drinking water", "tap water", "bottled", "수돗물", "생수", "水道水", "自来水", "agua del grifo"],
    answer:
      "Seoul's tap water (Arisu) is officially drinkable, though most locals filter or boil it by habit. Bottled water is ₩600–1,000 at any convenience store, and free filtered water machines appear in many cafes and food courts. No stomach worries either way.",
    links: [{ label: "First-timer route", href: "/routes/first-timer-everything" }],
  },
  {
    keywords: ["pharmacy", "sick", "medicine", "hospital", "doctor", "약국", "아플 때", "薬局", "病院", "药店", "医院", "farmacia", "médico"],
    answer:
      "Pharmacies (약국, green cross) are everywhere and pharmacists often manage English for common needs. For real care, international clinics at major hospitals (Severance, Samsung, Asan) take walk-ins with English service. Dial 119 for emergencies — interpreters available.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },

  {
    keywords: ["entrance fee", "admission", "opening hours", "cost to visit", "is it free", "입장료", "운영시간", "무료인가", "入場料", "営業時間", "门票", "开放时间", "entrada gratis", "horario"],
    answer:
      "Most filming spots are free public places — streets, coasts, markets, parks. The exceptions (Nami Island, palaces, some observatories) charge modest entry (~₩3–16k), and each spot page lists hours and fees where they apply, with a 'last verified' date so you can trust them.",
    links: [{ label: "Browse all spots", href: "/spots" }],
  },
  {
    keywords: ["no photo", "missing image", "picture yet", "why typographic", "사진이 없", "사진 왜 없", "写真がない", "写真なし", "没有照片", "sin foto"],
    answer:
      "A spot without a photo means we haven't found a legally licensed, subject-accurate image yet — we'd rather show a clean typographic card than the wrong place or a stolen still. Been there? Share your shot in Discord's #spot-photos and we'll publish it with your credit.",
    links: [
      { label: "Share a photo on Discord", href: "/community" },
      { label: "Our image policy", href: "/about" },
    ],
  },

  // ─────────────────── K. Experiences & culture ───────────────────
  {
    keywords: ["hanbok", "rental", "palace", "free palace", "한복", "한복 대여", "ハンボク", "韓服レンタル", "韩服", "汉服体验", "hanbok alquiler"],
    answer:
      "Rent a hanbok near Gyeongbokgung or Bukchon (₩15–30k for 4 hours, hair styling extra) and palace entry becomes free — plus your photos instantly look like a sageuk. Book online for discounts or walk into any rental street shop; winter rentals include padded jackets.",
    links: [
      { label: "Bukchon Hanok Village", href: "/spots/bukchon-hanok-village" },
      { label: "Seoul K-drama classics route", href: "/routes/seoul-kdrama-classics" },
    ],
  },
  {
    keywords: ["gyeongbokgung", "palace", "guard ceremony", "changing of the guard", "경복궁", "궁궐", "수문장 교대식", "景福宮", "王宮", "景福宫", "古宫", "palacio"],
    answer:
      "Gyeongbokgung runs 09:00–18:00 (closed Tuesdays), entry ₩3,000 — free in hanbok. Catch the royal guard changing ceremony at 10:00 and 14:00 at Gwanghwamun Gate. Deoksugung's stonewall path (of Goblin fame) is a 15-minute walk south.",
    links: [
      { label: "Deoksugung stonewall path", href: "/spots/deoksugung-stonewall-path" },
      { label: "Seoul K-drama classics route", href: "/routes/seoul-kdrama-classics" },
    ],
  },
  {
    keywords: ["dmz", "jsa", "panmunjom", "border tour", "비무장지대", "판문점", "非武装地帯", "板門店", "非军事区", "板门店", "zona desmilitarizada"],
    answer:
      "The DMZ is tour-only — no independent visits. Half-day bus tours from Seoul (~$40–90) cover the third tunnel, Dora Observatory and Imjingak; JSA access is limited and books out weeks ahead. Bring your passport; dress code applies on JSA tours.",
    links: [{ label: "How to plan a K-drama trip", href: "/guide/how-to-plan-kdrama-trip" }],
  },
  {
    keywords: ["namsan", "seoul tower", "cable car", "n tower", "남산타워", "케이블카", "남산 전망대", "ソウルタワー", "ケーブルカー", "南山塔", "首尔塔", "缆车", "torre de seúl"],
    answer:
      "N Seoul Tower: take the cable car from Myeongdong side (~₩15k round trip) or walk the Namsan trails for free city views. The observatory runs ~10:00–23:00 — sunset slots are the money hour. The love-lock terrace below the tower is free and very much a drama set piece.",
    links: [{ label: "Namsan Seoul Tower guide", href: "/spots/namsan-seoul-tower" }],
  },
  {
    keywords: ["han river", "hangang", "picnic", "한강", "한강공원", "한강 라면", "치맥", "漢江", "ピクニック", "汉江", "野餐", "río han"],
    answer:
      "The Han River park ritual: rent a mat, order fried chicken to your spot by app (delivery riders find you by zone number), cook instant ramyeon at the convenience-store machines, and stay for the Banpo Bridge rainbow fountain (Apr–Oct evenings). Yeouido and Ttukseom are the classic sections.",
    links: [{ label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" }],
  },
  {
    keywords: ["photo booth", "photobooth", "four cut", "인생네컷", "포토부스", "네컷사진", "プリクラ", "フォトブース", "大头贴", "四格照片", "fotomatón"],
    answer:
      "Life Four Cuts (인생네컷) booths are everywhere in Hongdae, Myeongdong and Seongsu — ₩4–5k per session, props included, frames often collab with dramas and idols. It's the cheapest souvenir in Korea and a K-content rite of passage. Grab the QR for digital copies.",
    links: [{ label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" }],
  },
  {
    keywords: ["concert", "ticket", "fan meeting", "fanmeeting", "콘서트", "티켓", "티켓팅", "팬미팅", "コンサート", "チケット", "ファンミ", "演唱会", "门票", "concierto", "entradas"],
    answer:
      "K-pop tickets sell via Interpark Global, Yes24 Global and Melon Ticket — foreigner-friendly English flows exist, but big acts sell out in minutes; join fan-club presales when possible. For spontaneous trips, check smaller venues and university festivals (spring/fall) — often free.",
    links: [
      { label: "COEX K-pop Square", href: "/spots/coex-kpop-square" },
      { label: "Ask fans on Discord", href: "/community" },
    ],
  },
  {
    keywords: ["jjimjilbang", "sauna", "spa", "bathhouse", "찜질방", "사우나", "チムジルバン", "汗蒸幕", "汗蒸房", "sauna coreana"],
    answer:
      "Jjimjilbang 101: pay at entry (~₩10–20k, 24h houses exist), swap shoes for a locker key, bathe fully (yes, fully) in the gender-split baths, then don the uniform for the mixed sauna floors. Do the lamb-horn towel hat, eat baked eggs and sikhye — it's a drama scene you get to live.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["noraebang", "karaoke", "sing", "노래방", "코인노래방", "カラオケ", "コインカラオケ", "练歌房", "卡拉ok", "karaoke coreano"],
    answer:
      "Noraebang comes in two flavors: coin booths (₩500–1,000 per song, solo-friendly, all over Hongdae) and room rentals (~₩15–25k/hour for groups). English songbooks are standard. It's how Koreans actually end a night out — no singing skill required, enthusiasm mandatory.",
    links: [{ label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" }],
  },
  {
    keywords: ["gimpo", "which airport", "airport difference", "김포공항", "김포", "차이", "김포 인천", "金浦空港", "金浦机场", "aeropuerto gimpo"],
    answer:
      "Two airports, different jobs: Incheon (ICN) handles most international long-haul; Gimpo (GMP) is for domestic hops (Jeju!) and short routes to Tokyo/Shanghai/Taipei. Gimpo is 30–40 min closer to central Seoul. Double-check your terminal — the mistake costs an hour.",
    links: [{ label: "Airport to Seoul guide", href: "/guide/airport-to-seoul" }],
  },
  {
    keywords: ["late arrival", "overnight airport", "midnight flight", "새벽 도착", "심야 도착", "深夜着", "空港泊", "深夜到达", "红眼航班", "llegada nocturna"],
    answer:
      "Landing after midnight? AREX stops ~23:30, so your options are: airport limousine night buses (limited lines), the N6001 night bus, a taxi (~₩55–75k to central Seoul on late-night meter), or Incheon's 24h spa/capsule hotels until first train at ~05:20. Book the first night's hotel near a bus line.",
    links: [{ label: "Airport to Seoul guide", href: "/guide/airport-to-seoul" }],
  },
  {
    keywords: ["temple stay", "templestay", "buddhist", "템플스테이", "テンプルステイ", "寺院滞在", "寺庙体验", "templo estancia"],
    answer:
      "Templestay programs (templestay.com, English site) run at 25+ temples: one night of monastic rhythm — 108 bows, dawn chanting, tea with a monk, temple food — from ~₩50–100k. Jogyesa and Bongeunsa offer easy Seoul tastes; mountain temples deliver the full drama-worthy silence.",
    links: [{ label: "Gwaneumsa Temple (Jeju)", href: "/spots/gwaneumsa-temple" }],
  },
  {
    keywords: ["jeonju", "hanok village", "bibimbap", "전주", "한옥마을", "비빔밥", "全州", "韓屋村", "全州韩屋村", "拌饭", "jeonju aldea"],
    answer:
      "Jeonju Hanok Village packs 700+ traditional houses, the country's definitive bibimbap, choco pie originals and hanbok-clad crowds into one walkable grid — plus Twenty-Five Twenty-One's nostalgic lanes. KTX from Seoul ~1h40m; stay overnight for the lantern-lit evenings.",
    links: [{ label: "2521 filming spots", href: "/shows/twenty-five-twenty-one" }],
  },
  {
    keywords: ["bukchon rules", "quiet hours", "residential area", "북촌 주의", "주민 거주", "北村のマナー", "静かに", "北村", "居民区", "normas bukchon"],
    answer:
      "Bukchon is a lived-in neighborhood, not a set: observe the posted quiet hours (10:00–17:00 visiting window on the main hanok lanes), keep voices low, don't open gates or fly drones, and skip tripods in narrow alleys. Guards politely enforce it — fines exist for noise violations.",
    links: [
      { label: "Bukchon Hanok Village", href: "/spots/bukchon-hanok-village" },
      { label: "Filming-location photo etiquette", href: "/guide/filming-location-photo-etiquette" },
    ],
  },
  {
    keywords: ["myeongdong night", "night market", "street stalls evening", "명동 야시장", "명동 밤", "ミョンドン屋台", "明洞夜市", "puestos nocturnos"],
    answer:
      "Myeongdong's street-food stalls roll out from ~16:00 — grilled lobster tails, tornado potatoes, hotteok, strawberry mochi — peaking 18:00–21:00. Cash is fastest, most stalls take cards now. Come hungry, graze standing, and finish at a photo booth like everyone else.",
    links: [
      { label: "Myeongdong shopping street", href: "/spots/myeongdong-shopping-street" },
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
    ],
  },
  {
    keywords: ["dongdaemun", "night shopping", "ddp", "동대문", "밤 쇼핑", "東大門", "夜市", "东大门", "夜购", "compras nocturnas"],
    answer:
      "Dongdaemun is Seoul's insomnia district: wholesale fashion towers open until 04:00–05:00, DDP's neon curves (a drama backdrop itself) light up after dark, and the food alleys never really close. Go after 22:00 for the real energy — King the Land fans will recognize the glow.",
    links: [
      { label: "Dongdaemun Market", href: "/spots/dongdaemun-market" },
      { label: "King the Land spots", href: "/shows/king-the-land" },
    ],
  },
  {
    keywords: ["hongdae", "busking", "nightlife", "clubs", "홍대", "버스킹", "홍대 밤", "ホンデ", "路上ライブ", "弘大", "街头表演", "vida nocturna"],
    answer:
      "Hongdae runs on student energy: free busking stages nightly around the main walking street (~19:00–22:00), indie venues, late cafes and clubs that peak absurdly late. It's the neighborhood where half the youth dramas set their 'first band gig' scene — now you're an extra.",
    links: [{ label: "Seoul neighborhoods for fans", href: "/guide/seoul-neighborhoods-for-fans" }],
  },
  {
    keywords: ["cherry blossom spot", "where cherry", "blossom viewing", "벚꽃 명소", "벚꽃 어디", "花見スポット", "桜の名所", "樱花景点", "赏樱", "ver cerezos"],
    answer:
      "Seoul's best petals: Yeouido's Yunjung-ro (festival crowds), Seokchon Lake, Naksan's fortress walls at golden hour, and Deoksugung's stonewall path for the full drama frame. Arrive before 09:00 for photos without a thousand co-stars. Jeju blooms two weeks earlier.",
    links: [
      { label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" },
      { label: "Naksan Park", href: "/spots/naksan-park" },
    ],
  },
  {
    keywords: ["fireworks", "festival autumn", "hanwha", "불꽃축제", "불꽃놀이", "花火大会", "烟花节", "烟火", "fuegos artificiales"],
    answer:
      "The Seoul International Fireworks Festival (one Saturday in early October, Yeouido) is the year's biggest free spectacle — a million people, so claim Han River grass by mid-afternoon or watch from Ichon's quieter bank. Check the date each year; it moves with holidays.",
    links: [{ label: "Best time to visit Korea", href: "/guide/best-time-to-visit-korea" }],
  },
  {
    keywords: ["smoking", "smoke", "smoking area", "cigarette", "흡연", "담배", "흡연구역", "喫煙", "タバコ", "吸烟", "抽烟", "fumar"],
    answer:
      "Korea bans smoking on most streets, near stations, in parks and all indoor public spaces — fines ₩50–100k, actively enforced in Seoul. Look for marked smoking booths near stations and building corners. Vaping follows the same rules. Convenience stores sell cigarettes; ID may be asked.",
    links: [{ label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" }],
  },
  {
    keywords: ["drinking age", "alcohol", "soju rules", "drink korea", "음주", "소주", "주류 나이", "飲酒年齢", "お酒", "喝酒年龄", "饮酒", "edad para beber"],
    answer:
      "Drinking age is 19 (international age); convenience stores card foreigners routinely — carry your passport. Soju etiquette from the dramas is real: pour for others first, receive with two hands, turn slightly away from elders on the first shot. Public drinking (Han River chimaek!) is legal.",
    links: [
      { label: "Korea travel etiquette", href: "/guide/korea-travel-etiquette" },
      { label: "K-drama food bucket list", href: "/guide/kdrama-food-bucket-list" },
    ],
  },
  {
    keywords: ["merch", "goods", "photocard", "album", "buy kpop", "굿즈", "포토카드", "음반 사기", "グッズ", "フォトカード", "周边", "专辑", "photocards", "mercancía kpop"],
    answer:
      "For albums and official merch: Myeongdong's music floors, the COEX mall's entertainment stores, and Hongdae's K-pop shops cover the majors; Withmuu and Music Korea handle preorders with airport pickup. Photocard trading happens openly at Hongdae markets — bring sleeves.",
    links: [
      { label: "Myeongdong shopping street", href: "/spots/myeongdong-shopping-street" },
      { label: "COEX K-pop Square", href: "/spots/coex-kpop-square" },
    ],
  },
  {
    keywords: ["date spot", "couple", "romantic", "love lock", "proposal", "데이트 코스", "커플", "자물쇠", "デートスポット", "カップル", "约会地点", "情侣", "romántico", "cita"],
    answer:
      "Seoul's proven romance circuit, straight from the dramas: Namsan's love-lock terrace at dusk, Deoksugung's stonewall walk, a Han River picnic into the fountain show, and Naksan's fortress night view. Book one Culinary Class Wars table and you've out-planned most K-drama leads.",
    links: [
      { label: "Namsan Seoul Tower", href: "/spots/namsan-seoul-tower" },
      { label: "Deoksugung stonewall path", href: "/spots/deoksugung-stonewall-path" },
    ],
  },
  {
    keywords: ["rainy", "rainy day", "rain plan", "what if rain", "비 오는 날", "비올 때", "장마 때", "雨の日", "雨なら", "下雨", "雨天", "día de lluvia"],
    answer:
      "Rain plan, drama edition: The Hyundai Seoul's indoor garden (Queen of Tears), COEX's mall-aquarium-library trio, King the Land's hotel-lobby glamour, a jjimjilbang afternoon, or a long Culinary Class Wars lunch. Umbrellas are ₩5k at any convenience store — or embrace the K-drama rain walk.",
    links: [
      { label: "The Hyundai Seoul", href: "/spots/the-hyundai-seoul" },
      { label: "King the Land spots", href: "/shows/king-the-land" },
    ],
  },
  {
    keywords: ["skiing", "ski resort", "snowboard", "winter sports", "스키장", "스키 타", "용평", "スキー場", "スノボ", "滑雪场", "单板", "esquí"],
    answer:
      "Yes — Yongpyong (Winter Sonata's slopes) is ~2.5h from Seoul with day-trip shuttle packages including rentals (~₩60–100k all-in); Vivaldi Park is closer and more beginner-social. Season runs late November to early March. Gear and clothing rent on-site; book shuttles a day ahead.",
    links: [{ label: "Yongpyong Resort", href: "/spots/yongpyong-resort" }],
  },

  // ─────────────────── J. About the site & contact ───────────────────
  {
    keywords: ["photo source", "why no stills", "copyright", "image credit", "스틸컷", "이미지 출처", "出典", "著作権", "图片", "版权", "derechos de autor"],
    answer:
      "We never use copyrighted stills or posters. Every photo is openly licensed (Wikimedia Commons CC/public domain) with the photographer credited on the image, our own shots, or community submissions used with permission — that's why some newer spots show a typographic card until a real, legal photo exists.",
    links: [{ label: "Our image & verification policy", href: "/about" }],
  },
  {
    keywords: ["wrong info", "outdated", "closed down", "report", "정보가 틀", "바뀌었", "폐업", "情報が古い", "閉店", "过时", "已关闭", "información desactualizada"],
    answer:
      "Spot something changed — a closed shop, moved entrance, new fee? Every detail page has a 'Did something change?' report link that pings the editors directly. We verify and update the page's 'last verified' date, usually within days. Readers keep this site honest.",
    links: [{ label: "Contact the editors", href: "/contact" }],
  },
  {
    keywords: ["contact", "email you", "editor", "press", "partnership", "문의", "연락", "제휴", "お問い合わせ", "連絡", "联系", "合作", "contacto"],
    answer:
      "Fastest lane is Discord for trip questions; for press, partnerships or anything formal, the contact page lists our email and what to include. We're a small editorial team — expect a human reply, not a ticket number.",
    links: [
      { label: "Contact page", href: "/contact" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    keywords: ["who are you", "about site", "who runs", "이 사이트 뭐", "누가 운영", "このサイトは", "運営者", "这个网站", "谁运营", "quién está detrás"],
    answer:
      "K-SPOT Travel is an independent set-jetting magazine and planner: verified filming locations for 20 shows, food and K-beauty intel, and an AI planner that turns your watchlist into an itinerary. Read the full mission — and our verification rules — on the About page.",
    links: [{ label: "About K-SPOT Travel", href: "/about" }],
  },
];
