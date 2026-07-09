import type { Locale } from "@/i18n/config";

// "Now in Seoul" — stable editor's picks (no fabricated dates), 5 languages.
// A Visit Seoul API key later upgrades this to a live festival feed.
export interface SeasonalPick {
  title: string;
  area: string;
  note: string;
  href: string;
  external?: boolean;
}

const PICKS: Record<Locale, SeasonalPick[]> = {
  en: [
    {
      title: "HiKR Ground — K-content experience hall",
      area: "Jongno-gu (KTO headquarters)",
      note: "The Korea Tourism Organization's free K-culture playground: drama-themed media art and rotating exhibitions built with major studios.",
      href: "https://english.visitkorea.or.kr/",
      external: true,
    },
    {
      title: "Banpo Moonlight Rainbow Fountain",
      area: "Banpo Hangang Park",
      note: "The bridge-length fountain show that cameos in countless dramas — evening shows run through the warm season (check times before going).",
      href: "/map",
    },
    {
      title: "Seongsu flagship & pop-up district",
      area: "Seongsu-dong",
      note: "K-beauty and fashion brands test their newest concept stores here first — the neighborhood dramas cast as 'creative Seoul'.",
      href: "/guide/seoul-neighborhoods-for-fans",
    },
  ],
  ko: [
    {
      title: "하이커 그라운드 — K-콘텐츠 체험관",
      area: "종로구 (한국관광공사)",
      note: "관광공사가 운영하는 무료 K-컬처 놀이터 — 드라마 테마 미디어아트와 대형 스튜디오 협업 전시가 순환 개최됩니다.",
      href: "https://korean.visitkorea.or.kr/",
      external: true,
    },
    {
      title: "반포 달빛무지개분수",
      area: "반포한강공원",
      note: "수많은 드라마에 카메오로 등장한 교량 분수쇼 — 따뜻한 계절 저녁마다 운영(방문 전 시간 확인).",
      href: "/map",
    },
    {
      title: "성수 플래그십·팝업 거리",
      area: "성수동",
      note: "K-뷰티·패션 브랜드가 최신 컨셉스토어를 가장 먼저 실험하는 동네 — 드라마가 '크리에이티브 서울'로 캐스팅하는 곳.",
      href: "/guide/seoul-neighborhoods-for-fans",
    },
  ],
  ja: [
    {
      title: "HiKR Ground — Kコンテンツ体験館",
      area: "鍾路区（韓国観光公社）",
      note: "観光公社が運営する無料のK-カルチャー体験空間。ドラマをテーマにしたメディアアートと大手スタジオとのコラボ展示が入れ替わりで開催。",
      href: "https://japanese.visitkorea.or.kr/",
      external: true,
    },
    {
      title: "盤浦月光レインボー噴水",
      area: "盤浦漢江公園",
      note: "数々のドラマに登場する橋の噴水ショー。暖かい季節の夜に開催（時間は事前確認を）。",
      href: "/map",
    },
    {
      title: "聖水フラッグシップ&ポップアップ街",
      area: "聖水洞",
      note: "K-ビューティーとファッションの最新コンセプトストアが最初に登場するエリア — ドラマが「クリエイティブなソウル」として描く街。",
      href: "/guide/seoul-neighborhoods-for-fans",
    },
  ],
  zh: [
    {
      title: "HiKR Ground — K-内容体验馆",
      area: "钟路区（韩国观光公社）",
      note: "观光公社运营的免费 K-文化体验空间：以韩剧为主题的媒体艺术与大型制作公司的轮换联名展。",
      href: "https://chinese.visitkorea.or.kr/",
      external: true,
    },
    {
      title: "盘浦月光彩虹喷泉",
      area: "盘浦汉江公园",
      note: "无数韩剧中客串出镜的大桥喷泉秀 — 温暖季节的夜晚上演（出发前查好时间）。",
      href: "/map",
    },
    {
      title: "圣水旗舰店与快闪街区",
      area: "圣水洞",
      note: "K-美妆与时尚品牌最先在这里试水最新概念店 — 韩剧把这里选角为「创意首尔」。",
      href: "/guide/seoul-neighborhoods-for-fans",
    },
  ],
  es: [
    {
      title: "HiKR Ground — sala de experiencias K-content",
      area: "Jongno-gu (sede de la KTO)",
      note: "El espacio gratuito de K-cultura de la Organización de Turismo de Corea: media art temático de dramas y exposiciones rotativas con grandes estudios.",
      href: "https://spanish.visitkorea.or.kr/",
      external: true,
    },
    {
      title: "Fuente Arcoíris de Luz de Luna de Banpo",
      area: "Parque Banpo del río Han",
      note: "El espectáculo de fuentes sobre el puente que aparece en infinidad de dramas — funciones nocturnas en temporada cálida (confirma horarios).",
      href: "/map",
    },
    {
      title: "Distrito de flagships y pop-ups de Seongsu",
      area: "Seongsu-dong",
      note: "Las marcas de K-beauty y moda estrenan aquí sus tiendas concepto — el barrio que los dramas eligen como el 'Seúl creativo'.",
      href: "/guide/seoul-neighborhoods-for-fans",
    },
  ],
};

export function getSeoulPicks(locale: Locale): SeasonalPick[] {
  return PICKS[locale] ?? PICKS.en;
}
