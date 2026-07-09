// Chatbot fast-path answers. The weekly ops loop appends entries here from
// the Discord #chat-inbox log — user questions literally become the roadmap.
export interface FaqEntry {
  /** lowercase keywords; a question matching 2+ hits this entry */
  keywords: string[];
  answer: string;
  links: { label: string; href: string }[];
}

export const FAQ: FaqEntry[] = [
  {
    keywords: ["culinary", "class", "wars", "book", "reservation", "reserve", "restaurant"],
    answer:
      "Culinary Class Wars restaurants book through the CatchTable Global app, and the famous ones open slots about 30 days ahead — set an alarm for the drop and join waitlists aggressively. Tian Mi Mi is the easiest walk-in of the alumni; Mosu is the lottery ticket.",
    links: [
      { label: "Every CCW restaurant we track", href: "/food" },
      { label: "CatchTable step-by-step guide", href: "/guide/booking-restaurants-catchtable" },
      { label: "Foodie Seoul 3-day route", href: "/routes/foodie-seoul-culinary-class-wars" },
    ],
  },
  {
    keywords: ["route", "pass", "pdf", "email", "paid", "price", "cost", "subscription", "insider"],
    answer:
      "The free planner gives you a full day-by-day summary. The Route Pass ($4.90 one-time) upgrades one plan with minute timings, a booking-deadline checklist and a PDF sent to your email; Insider ($3.90/mo) makes detailed plans unlimited and unlocks early drops.",
    links: [
      { label: "Build a plan", href: "/planner" },
      { label: "Pass & Insider details", href: "/planner#pass" },
    ],
  },
  {
    keywords: ["airport", "incheon", "arex", "seoul", "get", "train", "bus"],
    answer:
      "From Incheon Airport: the all-stop AREX train is the best value (~₩4–5k with T-money, 59 min), the Express is fastest to Seoul Station (~₩11k, 43 min), and limousine buses win with heavy luggage (~₩17–18k door-to-district).",
    links: [{ label: "Airport to Seoul, compared", href: "/guide/airport-to-seoul" }],
  },
  {
    keywords: ["olive", "young", "beauty", "buy", "skincare", "sunscreen", "cosmetics"],
    answer:
      "Start with the suncare wall (Beauty of Joseon, Round Lab), the COSRX snail essence, and a Torriden serum — the staples foreigners actually rebuy. Spend ₩15,000+ with your passport for an instant tax refund at the register.",
    links: [
      { label: "Our K-beauty picks", href: "/beauty" },
      { label: "Olive Young playbook", href: "/guide/kbeauty-shopping-seoul" },
    ],
  },
  {
    keywords: ["tangerines", "jeju", "when", "life", "gives"],
    answer:
      "When Life Gives You Tangerines lives on Jeju: Aewol's stone-walled lanes, the Handam coastal walk, Seongsan Ilchulbong at sunrise and Seopjikoji's canola cape. Our 4-day Tangerines Trail strings them together at the drama's own pace.",
    links: [
      { label: "The show's filming spots", href: "/shows/when-life-gives-you-tangerines" },
      { label: "Jeju Tangerines Trail (4 days)", href: "/routes/jeju-tangerines-trail" },
    ],
  },
  {
    keywords: ["stamp", "check", "visited", "pilgrimage", "badge"],
    answer:
      "Every spot page has an 'I've been here' button. Check in as you travel and your pilgrimage stamps fill up per show — complete one to earn its stamp card, then copy it to share.",
    links: [{ label: "My stamps", href: "/stamps" }],
  },
  {
    keywords: ["discord", "community", "ask", "human", "help", "question"],
    answer:
      "Our Discord is where recent travelers answer trip questions fast, share fresh spot photos and give feedback on planner results — free to join.",
    links: [{ label: "Join the community", href: "/community" }],
  },
];
