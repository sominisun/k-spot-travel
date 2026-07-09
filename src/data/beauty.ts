import type { BeautyGuide } from "../lib/types";

// K-beauty shopping guides — current (2025–2026) bestsellers foreigners
// actually buy at Olive Young. Prices are street-price hints, not quotes.
export const beautyGuides: BeautyGuide[] = [
  {
    slug: "starter-skincare-routine",
    title: "The 5-step starter routine",
    category: "skincare",
    description:
      "If Olive Young overwhelms you, buy exactly this: a gentle cleanser, a hydrating toner, one hero essence, one serum for your main concern, and a moisturizer. Five products, one basket, glass skin logic without the 12-step myth.",
    picks: [
      {
        name: "Pure Cleansing Oil",
        brand: "Ma:nyo",
        why: "Korea's default first cleanser — melts sunscreen and makeup without stripping.",
        priceHintUSD: "$18",
      },
      {
        name: "Heartleaf 77% Soothing Toner",
        brand: "Anua",
        why: "The calming toner that took over global TikTok; ideal for stressed, jet-lagged skin.",
        priceHintUSD: "$16",
      },
      {
        name: "Advanced Snail 96 Mucin Power Essence",
        brand: "COSRX",
        why: "The single most famous K-beauty product in the world — hydration and barrier repair.",
        priceHintUSD: "$17",
      },
      {
        name: "DIVE-IN Low Molecular Hyaluronic Acid Serum",
        brand: "Torriden",
        why: "Weightless multi-depth hydration; Olive Young awards regular.",
        priceHintUSD: "$15",
      },
      {
        name: "Bean Essence",
        brand: "mixsoon",
        why: "Cult fermented essence for glow — the 'quiet luxury' pick of the list.",
        priceHintUSD: "$20",
      },
    ],
    whereToBuy:
      "Any large Olive Young (Myeongdong Town flagship has the widest stock and English-speaking staff). Order ahead on Olive Young Global if you want it waiting at home instead of in your suitcase.",
    oliveYoungTip:
      "Spend over ₩15,000 and show your passport at checkout — most stores apply the tax refund instantly at the register, no airport paperwork.",
    tips: [
      "Patch-test new actives in the evening, not the morning you climb Namsan.",
      "Travel sizes near the registers make perfect 'try before you commit' buys.",
    ],
    themeColor: "mint",
  },
  {
    slug: "korean-sunscreens",
    title: "Sunscreens worth flying for",
    category: "suncare",
    description:
      "Korean sunscreens are the category the rest of the world genuinely cannot match — elegant textures, no white cast, filters that feel like skincare. Stock up; this is the #1 repurchase item among foreign visitors.",
    picks: [
      {
        name: "Relief Sun: Rice + Probiotics SPF50+",
        brand: "Beauty of Joseon",
        why: "The global bestseller — a serum-like sunscreen you will actually reapply.",
        priceHintUSD: "$12",
      },
      {
        name: "Birch Juice Moisturizing Sun Cream SPF50+",
        brand: "Round Lab",
        why: "Dewy, gentle, and beloved by sensitive-skin travelers.",
        priceHintUSD: "$14",
      },
      {
        name: "Hyalu-Cica Water-Fit Sun Serum SPF50+",
        brand: "SKIN1004",
        why: "Feather-light 'sun serum' texture — zero cast on deeper skin tones.",
        priceHintUSD: "$13",
      },
      {
        name: "Airyfit / Daily Sun stick options",
        brand: "AHC & others",
        why: "Sun sticks are the Korean travel hack: reapply over makeup, one-handed, mid-tour.",
        priceHintUSD: "$10–15",
      },
    ],
    whereToBuy:
      "Olive Young suncare aisle (usually its own wall). Multipacks and 2+1 bundles appear constantly — check the shelf tags.",
    oliveYoungTip:
      "Suncare is the most heavily promoted category — the 2+1 (buy two get one) tags change weekly, so compare brands before grabbing the first one.",
    tips: [
      "Buy at least two: one for the trip (reapply at every filming spot), one for home.",
      "Sticks pass airport security in hand luggage; tubes over 100ml don't.",
    ],
    themeColor: "sunset",
  },
  {
    slug: "cushion-and-lip",
    title: "Cushions & lip tints — the K-drama face",
    category: "makeup",
    description:
      "That luminous, 'my-skin-but-better' K-drama glow is two products: a cushion foundation and a blurring lip tint. Both were invented here, and both cost half of what Western brands charge for worse versions.",
    picks: [
      {
        name: "Mask Fit Red Cushion",
        brand: "TIRTIR",
        why: "The viral cushion with one of the widest shade ranges in K-beauty history.",
        priceHintUSD: "$25",
      },
      {
        name: "Kill Cover The New Founwear Cushion",
        brand: "CLIO",
        why: "The long-wear standard — survives a full filming-location day.",
        priceHintUSD: "$28",
      },
      {
        name: "Juicy Lasting Tint",
        brand: "rom&nd",
        why: "The lip tint — glassy color that outlasts three street-food stops.",
        priceHintUSD: "$9",
      },
      {
        name: "Ink Velvet",
        brand: "Peripera",
        why: "The matte counterpart; the 'MLBB' shades are permanent bestsellers.",
        priceHintUSD: "$8",
      },
      {
        name: "Blending Eye Palette",
        brand: "dasique",
        why: "Soft Korean gradient eyes in one palette — idol makeup, beginner difficulty.",
        priceHintUSD: "$24",
      },
    ],
    whereToBuy:
      "Olive Young makeup floor; CLIO and rom&nd also run own-brand stores in Myeongdong and Hongdae with exclusive shades.",
    oliveYoungTip:
      "Testers are expected and plentiful — staff hand out cotton pads and remover, so audition every tint shade guilt-free before buying.",
    tips: [
      "Cushions include a refill in many bundles — check the box bottom before paying.",
      "Tint shades look different in Seoul's warm store lighting; swatch on your hand and check by the door in daylight.",
    ],
    themeColor: "coral",
  },
  {
    slug: "hair-and-body",
    title: "Hair & body — the underrated aisle",
    category: "hair-body",
    description:
      "Everyone flies home with skincare; the veterans also raid the hair and body aisle. Korean scalp care and perfumed body lines are exceptional and rarely exported at fair prices.",
    picks: [
      {
        name: "Honey & Macadamia Protein Hair Treatment",
        brand: "Kundal",
        why: "Salon-soft hair for the price of a coffee; the pump bottles survive suitcases.",
        priceHintUSD: "$10",
      },
      {
        name: "Scalp care line (Jayosaeng/자양윤모)",
        brand: "Ryo",
        why: "The herbal scalp shampoo Koreans swear by for hair-loss anxiety.",
        priceHintUSD: "$13",
      },
      {
        name: "Perfumed body wash & lotion",
        brand: "ILLIYOON / Derma:B",
        why: "Ceramide body care for winter-dry skin — dermatologist-adjacent, drugstore price.",
        priceHintUSD: "$8–12",
      },
      {
        name: "Perfume hand cream sets",
        brand: "Various (Kundal, TONYMOLY)",
        why: "The classic 'one for every coworker' souvenir — light, cheap, giftable.",
        priceHintUSD: "$5–8",
      },
    ],
    whereToBuy:
      "Olive Young's back aisles (hair/body is usually behind skincare). Large marts (Lotte Mart, emart) sell family sizes even cheaper.",
    oliveYoungTip:
      "Hair and body products are heavy — buy them on your LAST shopping run, not your first, or your tote will punish you all day.",
    tips: [
      "Check ml sizes against your airline liquid rules if you fly carry-on only.",
    ],
    themeColor: "forest",
  },
  {
    slug: "k-beauty-for-men",
    title: "K-beauty for men (no gatekeeping)",
    category: "men",
    description:
      "Korean men's grooming is decades ahead and nobody blinks at men in the skincare aisle. If the men in your life 'don't do skincare', these are the conversion kits.",
    picks: [
      {
        name: "Red Blemish Clear Soothing Cream",
        brand: "Dr.G",
        why: "The gender-neutral favorite for razor-burned, stressed skin.",
        priceHintUSD: "$22",
      },
      {
        name: "All-in-one lotions",
        brand: "BRO&TIPS / IOPE MEN",
        why: "One-bottle routines designed for people who will not do five steps.",
        priceHintUSD: "$15–20",
      },
      {
        name: "Bee Venom / AC Collection cleansers",
        brand: "SOME BY MI / COSRX",
        why: "Low-fuss foaming cleansers for oily and combination skin.",
        priceHintUSD: "$10",
      },
      {
        name: "Sun stick (any from our suncare guide)",
        brand: "—",
        why: "The gateway product — men actually use sunscreen when it's a stick.",
        priceHintUSD: "$12",
      },
    ],
    whereToBuy:
      "Olive Young mixes men's lines into the main aisles; the 'MEN' shelf near dental/grooming has the all-in-ones.",
    oliveYoungTip:
      "Korean 'for men' labels mostly mean lighter fragrance — everything in the other guides works regardless of gender.",
    tips: [
      "K-drama leads' glow is 90% sunscreen and moisturizer — start there.",
    ],
    themeColor: "night",
  },
  {
    slug: "gifts-under-20",
    title: "Souvenir sets under $20",
    category: "gifts",
    description:
      "The best-value K-beauty souvenirs: giftable, cabin-luggage-friendly, and impressive far beyond their price. Buy a stack; you will regret every one you didn't.",
    picks: [
      {
        name: "Bio Collagen Real Deep Mask (4-pack)",
        brand: "Biodance",
        why: "The viral overnight 'glass skin' mask — the single most requested K-beauty gift.",
        priceHintUSD: "$19",
      },
      {
        name: "Sheet mask bundles (10-pack)",
        brand: "Mediheal / Abib",
        why: "The classic — mix-and-match packs let you build a variety box.",
        priceHintUSD: "$10–15",
      },
      {
        name: "Lip Sleeping Mask (mini)",
        brand: "LANEIGE",
        why: "World-famous, and cheaper in Korea than anywhere else.",
        priceHintUSD: "$16",
      },
      {
        name: "Hand cream + tint mini sets",
        brand: "rom&nd / TONYMOLY",
        why: "Pre-boxed gift sets that need zero wrapping.",
        priceHintUSD: "$8–14",
      },
      {
        name: "Yuja / rice toner minis",
        brand: "Beauty of Joseon / I'm from",
        why: "'Made of Korean ingredients' stories gift beautifully.",
        priceHintUSD: "$10",
      },
    ],
    whereToBuy:
      "Olive Young checkout zones and the Myeongdong flagship's souvenir wall; Daiso (₩1,000–5,000 shops) for surprisingly good budget masks.",
    oliveYoungTip:
      "December, and the big seasonal sales (roughly quarterly), bury the store in gift sets — if your trip aligns, budgets stretch 30% further.",
    tips: [
      "Sheet masks are flat — line your suitcase bottom with them.",
      "Keep receipts: instant tax refund applies to gift hauls too.",
    ],
    themeColor: "plum",
  },
];
