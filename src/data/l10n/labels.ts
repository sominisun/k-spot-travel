import type { Locale } from "@/i18n/config";

/** Region + spot-type display names per locale (EN lives in lib/data.ts). */
export const REGION_L10N: Record<Locale, Record<string, string>> = {
  en: {},
  ko: {
    seoul: "서울", busan: "부산", jeju: "제주", incheon: "인천", gyeonggi: "경기",
    gangwon: "강원", jeolla: "전라", gyeongsang: "경상", chungcheong: "충청", overseas: "해외",
  },
  ja: {
    seoul: "ソウル", busan: "釜山", jeju: "済州", incheon: "仁川", gyeonggi: "京畿",
    gangwon: "江原", jeolla: "全羅", gyeongsang: "慶尚", chungcheong: "忠清", overseas: "海外",
  },
  zh: {
    seoul: "首尔", busan: "釜山", jeju: "济州", incheon: "仁川", gyeonggi: "京畿",
    gangwon: "江原", jeolla: "全罗", gyeongsang: "庆尚", chungcheong: "忠清", overseas: "海外",
  },
  es: {
    seoul: "Seúl", busan: "Busan", jeju: "Jeju", incheon: "Incheon", gyeonggi: "Gyeonggi",
    gangwon: "Gangwon", jeolla: "Jeolla", gyeongsang: "Gyeongsang", chungcheong: "Chungcheong", overseas: "Extranjero",
  },
};

export const ARTICLE_CATEGORY_L10N: Record<Locale, Record<string, string>> = {
  en: { practical: "practical", culture: "culture", food: "food", beauty: "beauty", itinerary: "itinerary" },
  ko: { practical: "실용 정보", culture: "문화", food: "미식", beauty: "뷰티", itinerary: "일정 설계" },
  ja: { practical: "実用情報", culture: "カルチャー", food: "グルメ", beauty: "ビューティー", itinerary: "旅程づくり" },
  zh: { practical: "实用信息", culture: "文化", food: "美食", beauty: "美妆", itinerary: "行程规划" },
  es: { practical: "práctico", culture: "cultura", food: "gastronomía", beauty: "belleza", itinerary: "itinerario" },
};

export const SPOT_TYPE_L10N: Record<Locale, Record<string, string>> = {
  en: {
    landmark: "landmark", nature: "nature", palace: "palace", village: "village",
    street: "street", market: "market", cafe: "cafe", restaurant: "restaurant",
    shopping: "shopping", themepark: "theme park", studio: "studio",
    beach: "beach", island: "island", other: "spot",
  },
  ko: {
    landmark: "랜드마크", nature: "자연", palace: "궁궐", village: "마을",
    street: "거리", market: "시장", cafe: "카페", restaurant: "식당",
    shopping: "쇼핑", themepark: "테마파크", studio: "스튜디오",
    beach: "해변", island: "섬", other: "명소",
  },
  ja: {
    landmark: "ランドマーク", nature: "自然", palace: "宮殿", village: "村",
    street: "通り", market: "市場", cafe: "カフェ", restaurant: "レストラン",
    shopping: "ショッピング", themepark: "テーマパーク", studio: "スタジオ",
    beach: "ビーチ", island: "島", other: "スポット",
  },
  zh: {
    landmark: "地标", nature: "自然", palace: "宫殿", village: "村落",
    street: "街道", market: "市场", cafe: "咖啡店", restaurant: "餐厅",
    shopping: "购物", themepark: "主题乐园", studio: "摄影棚",
    beach: "海滩", island: "岛屿", other: "景点",
  },
  es: {
    landmark: "monumento", nature: "naturaleza", palace: "palacio", village: "pueblo",
    street: "calle", market: "mercado", cafe: "café", restaurant: "restaurante",
    shopping: "compras", themepark: "parque temático", studio: "estudio",
    beach: "playa", island: "isla", other: "lugar",
  },
};
