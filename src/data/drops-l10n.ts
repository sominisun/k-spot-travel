import type { Locale } from "@/i18n/config";
import type { Drop } from "./drops";

// Weekly Drop translations — merged over the English source by slug.
// Operator routine: when adding a drop to drops.ts, add its four
// translations here (or ship English-first and translate in the week).
export interface DropL10n {
  title?: string;
  excerpt?: string;
  body?: string[];
  linkLabels?: string[];
}

const KO: Record<string, DropL10n> = {
  "scene-recreation-guides": {
    title: "장면 재현 가이드, 촬영지 23곳에 적용",
    excerpt:
      "어디에 서서, 어느 방향으로, 몇 시에 — 주요 성지 전부에 촬영 레시피와 '지금 가면 어떤지' 솔직 노트가 붙었습니다.",
    body: [
      "한 줄짜리 장면 노트가 어른이 됐습니다: 도깨비 방파제, 이젤트발트 선착장, 금가프라자 옥상, 선재의 우산 다리 등 가장 많이 찾는 23곳에 정확히 어디에 발을 딛고, 어느 쪽을 보고, 몇 시에 가야 그 프레임이 나오는지를 적었습니다. 에피소드 표기는 장면 위치가 확실한 경우에만 답니다.",
      "모든 가이드에는 현장의 진실이 함께 갑니다: 포토 프레임 앞 줄, 정숙 시간 규칙, 화면과 같은 계절. 장면을 재현하러 갔다가 현실에 놀라는 일은 없어야 하니까요.",
    ],
    linkLabels: ["먼저 보기: 주문진 방파제", "전체 촬영지"],
  },
  "vincenzo-geumga-plaza-photos": {
    title: "빈센조의 금가프라자, 실사진으로",
    excerpt:
      "세운상가와 커먼그라운드가 사진 아카이브에 합류 — 이 브루탈리즘 아케이드가 서울에서 가장 저평가된 성지인 이유까지.",
    body: [
      "금가프라자가 실제로 있냐는 질문이 계속 왔습니다. 있습니다 — 1968년의 메가 아케이드 세운상가입니다. 옥상 보행로에서는 드라마 마지막 회가 쓴 바로 그 스카이라인이 보입니다. 세운상가와 커먼그라운드의 파란 컨테이너 모두에 출처를 갖춘 공개 라이선스 사진을 추가했습니다.",
      "골든아워에 가세요: 옥상 데크에서 종묘의 지붕과 빌딩숲이 겹치고, 아래층 전자상가 골목은 타임머신입니다. 동쪽으로 10분 거리의 광장시장과 묶으면 빈센조의 서울 전부가 오후 하나에 들어옵니다.",
    ],
    linkLabels: ["빈센조 촬영지", "세운상가 가이드"],
  },
  "six-new-shows-disney-apple": {
    title: "여섯 개의 새 세계: 무빙·파친코·빈센조·2521·우리들의 블루스·킹더랜드",
    excerpt:
      "지도가 디즈니+와 애플TV+로 확장 — 부산 영도부터 수원 성곽길까지 새로 검증한 촬영지 11곳.",
    body: [
      "라인업이 14편에서 20편으로 늘었고, 처음으로 OTT의 경계를 넘습니다: 무빙이 디즈니+의 일상 서울 초능력을, 파친코가 애플TV+의 이야기를 부산 영도와 자갈치에 정박시키고, 넷플릭스 인기작 네 편이 나머지를 채웁니다.",
      "모든 추가는 하우스 룰을 따랐습니다 — 실제로 방문 가능하고 출처로 검증된 촬영지 2곳 이상, 아니면 싣지 않는다. 열한 곳이 통과했고, 각각 장면 노트·교통편·최종 확인일을 답니다.",
    ],
    linkLabels: ["20개 작품 전체", "파친코의 부산"],
  },
  "ccw-booking-playbook": {
    title: "흑백요리사 예약 플레이북, 실전 검증판",
    excerpt:
      "예약창은 약 30일 전에 열리고 순식간에 사라집니다. 추적 중인 식당 12곳 전부의 알람-투-테이블 시퀀스.",
    body: [
      "이제 모든 식당 페이지에 정확한 예약 채널·오픈 타이밍·워크인 확률이 실립니다. 통하는 패턴: 자정 KST 30일 전 오픈에 알람을 걸고, 가장 어려운 테이블(모수, 그다음 최도트)부터 잡고, 티엔미미를 믿을 만한 워크인 앵커로 남겨두는 것.",
      "플래너의 루트 패스는 이 마감일들을 캘린더에 자동으로 넣습니다 — 예약 알람이 여행 일정과 함께 .ics로 들어갑니다.",
    ],
    linkLabels: ["흑백요리사 식당 전체", "캐치테이블 단계별 가이드"],
  },
};

const JA: Record<string, DropL10n> = {
  "scene-recreation-guides": {
    title: "シーン再現ガイド、ロケ地23か所に登場",
    excerpt:
      "どこに立ち、どちらを向き、何時に — 主要な聖地すべてに撮影レシピと「現地のいま」の正直ノートが付きました。",
    body: [
      "一行のシーンノートが大人になりました：トッケビの防波堤、イゼルトヴァルトの桟橋、金家プラザの屋上、ソンジェの傘の橋など、最も訪問の多い23か所に、どこに足を置き、どちらを向き、何時に行けばあのフレームになるかを記しました。エピソード表記は位置が確実な場合のみ付けます。",
      "各ガイドには現地の実情が添えられます：フォトフレームの行列、静粛時間のルール、画面と同じ季節。シーンを再現しに行って現実に驚くことがないように。",
    ],
    linkLabels: ["まずはこれ：注文津防波堤", "すべてのロケ地"],
  },
  "vincenzo-geumga-plaza-photos": {
    title: "ヴィンチェンツォの金家プラザ、実写で",
    excerpt:
      "世運商街とコモングラウンドが写真アーカイブに加わりました — このブルータリズムの巨大アーケードがソウルで最も過小評価された聖地である理由も。",
    body: [
      "金家プラザは実在するのかという質問が続いていました。実在します — 1968年のメガアーケード、世運商街です。屋上の歩道からはドラマ最終回が使ったまさにあのスカイラインが見えます。世運商街とコモングラウンドの青いコンテナの両方に、クレジット付きのオープンライセンス写真を追加しました。",
      "ゴールデンアワーに：屋上デッキでは宗廟の屋根とビル群が重なり、階下の電気街の路地はタイムマシンです。東へ10分の広蔵市場と組み合わせれば、ヴィンチェンツォのソウル全部が午後ひとつに収まります。",
    ],
    linkLabels: ["ヴィンチェンツォのロケ地", "世運商街ガイド"],
  },
  "six-new-shows-disney-apple": {
    title: "6つの新しい世界：ムービング・パチンコ・ヴィンチェンツォ・2521・私たちのブルース・キング・ザ・ランド",
    excerpt:
      "地図がDisney+とApple TV+へ拡張 — 釜山・影島から水原の城郭路地まで、新たに検証した11のロケ地。",
    body: [
      "ラインナップが14作から20作へ。初めてOTTの境界を越えます：ムービングがDisney+の日常ソウルの超能力を、パチンコがApple TV+の物語を釜山の影島とチャガルチに据え、Netflixの人気4作が残りを埋めます。",
      "すべての追加はハウスルールに従いました — 実際に訪問可能で出典検証済みのロケ地2か所以上、なければ載せない。11か所が通過し、それぞれにシーンノート・交通・最終確認日が付きます。",
    ],
    linkLabels: ["全20作品", "パチンコの釜山"],
  },
  "ccw-booking-playbook": {
    title: "『黒白の料理人』予約プレイブック、実地検証版",
    excerpt:
      "予約枠は約30日前に開き、瞬時に消えます。追跡中の全12店のアラームからテーブルまでのシーケンス。",
    body: [
      "全レストランページに正確な予約チャネル・オープンのタイミング・ウォークインの確率が載りました。有効なパターン：KST深夜0時の30日前ドロップにアラームを設定し、最難関のテーブル（モス、次いでチェ・ドット）から押さえ、ティエンミミを頼れるウォークインの錨として残すこと。",
      "プランナーのルートパスはこれらの締切をカレンダーに自動で組み込みます — 予約アラームが旅程と一緒に.icsに入ります。",
    ],
    linkLabels: ["全CCWレストラン", "CatchTableステップガイド"],
  },
};

const ZH: Record<string, DropL10n> = {
  "scene-recreation-guides": {
    title: "场景复刻指南上线 23 个取景地页面",
    excerpt:
      "站在哪里、朝哪个方向、几点钟去 — 每个主要朝圣地现在都配有拍摄配方和一份诚实的“现场近况”。",
    body: [
      "一行的场景笔记长大了：鬼怪的防波堤、伊瑟尔特瓦尔德码头、金家大厦天台、善宰的雨伞桥等 23 个最热门的组合，现在都写明了把脚放在哪、面朝哪边、哪个钟点能拍出那一帧。集数标注只在场景位置确凿无疑时出现。",
      "每份指南都配了实地的另一面：照片框前的队伍、静音时段的规矩、与画面吻合的季节。去复刻场景，就不该被现实吓一跳。",
    ],
    linkLabels: ["先看这个：注文津防波堤", "全部取景地"],
  },
  "vincenzo-geumga-plaza-photos": {
    title: "文森佐的金家大厦，实拍上线",
    excerpt:
      "世运商街与 Common Ground 加入照片档案 — 顺带说说这座粗野主义巨型商场为何是首尔最被低估的朝圣地。",
    body: [
      "粉丝一直在问金家大厦到底存不存在。存在 — 它是 1968 年的巨型商场世运商街，天台步道正对着剧集大结局用过的那道天际线。我们为它和 Common Ground 的蓝色集装箱都添加了带完整署名的开放版权照片。",
      "黄金时刻去：天台平台上宗庙的屋顶与高楼相叠，楼下的电子市场巷子是时光机。再配上向东十分钟的广藏市场，一个下午装下文森佐的整个首尔。",
    ],
    linkLabels: ["文森佐取景地", "世运商街指南"],
  },
  "six-new-shows-disney-apple": {
    title: "六个新世界：超异能族、弹子球游戏、文森佐、2521、我们的蓝调、欢迎光临王之国",
    excerpt:
      "地图扩展到 Disney+ 与 Apple TV+ — 从釜山影岛到水原城郭巷弄，11 个新核实的取景地。",
    body: [
      "阵容从 14 部扩至 20 部，并首次跨越 OTT 边界：超异能族带来 Disney+ 的日常首尔超能力，弹子球游戏把 Apple TV+ 的故事锚定在釜山影岛和札嘎其，四部 Netflix 人气剧补齐其余。",
      "每次新增都遵守内部规则 — 至少两处可实地探访、有出处核实的取景地，否则不上线。十一处过关，每处都带场景笔记、交通指引和最近核实日期。",
    ],
    linkLabels: ["全部 20 部作品", "弹子球游戏的釜山"],
  },
  "ccw-booking-playbook": {
    title: "《黑白厨师》订位实战手册，实测版",
    excerpt:
      "订位窗口约提前 30 天打开，转瞬即空。我们追踪的 12 家餐厅，从闹钟到餐桌的完整序列。",
    body: [
      "现在每个餐厅页面都载明精确的订位渠道、放位时间和 walk-in 概率。有效的套路：给 KST 午夜的 30 天放位定闹钟，先抢最难的桌子（Mosu，其次 Choi Dot），把甜蜜蜜留作可靠的 walk-in 锚点。",
      "规划器的路线通行证会把这些截止日自动写进你的日历 — 订位闹钟随行程一起进入 .ics。",
    ],
    linkLabels: ["全部黑白厨师餐厅", "CatchTable 分步指南"],
  },
};

const ES: Record<string, DropL10n> = {
  "scene-recreation-guides": {
    title: "Las guías de recreación de escenas llegan a 23 páginas de lugares",
    excerpt:
      "Dónde pararse, hacia dónde mirar, a qué hora: cada gran lugar de peregrinación lleva ahora su receta de la toma y una nota honesta de 'cómo está ahora'.",
    body: [
      "La nota de escena de una línea creció: 23 de los pares más visitados — el rompeolas de Goblin, el muelle de Iseltwald, la azotea de Geumga Plaza, el puente del paraguas de Lovely Runner y más — te dicen ahora exactamente dónde plantar los pies, hacia dónde mirar y qué hora entrega el encuadre. Las etiquetas de episodio aparecen solo donde la ubicación es indudable.",
      "Cada guía viene con su contrapeso honesto: la cola del marco de fotos, las reglas de horas de silencio, las estaciones que coinciden con la pantalla. Recrear una escena nunca debería significar llevarse una sorpresa con la realidad.",
    ],
    linkLabels: ["Prueba una: rompeolas de Jumunjin", "Todas las localizaciones"],
  },
  "vincenzo-geumga-plaza-photos": {
    title: "El Geumga Plaza de Vincenzo, fotografiado de verdad",
    excerpt:
      "Sewoon Sangga y Common Ground se suman al archivo fotográfico — y por qué este mega-edificio brutalista es la peregrinación más infravalorada de Seúl.",
    body: [
      "Los fans seguían preguntando si Geumga Plaza existe. Existe: es Sewoon Sangga, la mega-galería de 1968 cuya pasarela de azotea sirve exactamente el skyline que usó el final del drama. Hemos añadido fotografía con licencia abierta y créditos completos para él y para los contenedores azules de Common Ground.",
      "Ve en la hora dorada: la cubierta alinea los tejados de Jongmyo contra las torres, y los puestos de electrónica de abajo son una máquina del tiempo. Súmale el mercado Gwangjang, a diez minutos al este, y tienes todo el Seúl de Vincenzo en una tarde.",
    ],
    linkLabels: ["Localizaciones de Vincenzo", "Guía de Sewoon Sangga"],
  },
  "six-new-shows-disney-apple": {
    title: "Seis mundos nuevos: Moving, Pachinko, Vincenzo, 2521, Our Blues y King the Land",
    excerpt:
      "El mapa cubre ya Disney+ y Apple TV+: 11 localizaciones recién verificadas, del Yeongdo de Busan a las callejuelas de la fortaleza de Suwon.",
    body: [
      "El catálogo crece de 14 a 20 títulos y por primera vez cruza las fronteras de las OTT: Moving trae los superpoderes del Seúl cotidiano de Disney+, Pachinko ancla los capítulos de Apple TV+ en el Yeongdo y el Jagalchi de Busan, y cuatro favoritas de Netflix completan el grupo.",
      "Cada incorporación siguió la regla de la casa: al menos dos localizaciones físicamente visitables y verificadas con fuentes, o la serie no se publica. Once lugares pasaron el corte; cada uno lleva su nota de escena, indicaciones de transporte y fecha de última verificación.",
    ],
    linkLabels: ["Las 20 series", "El Busan de Pachinko"],
  },
  "ccw-booking-playbook": {
    title: "El manual de reservas de Culinary Class Wars, probado en el terreno",
    excerpt:
      "Las plazas se abren ~30 días antes y se evaporan. La secuencia exacta de alarma-a-mesa para los 12 restaurantes que seguimos.",
    body: [
      "Cada página de restaurante lleva ahora su canal de reserva preciso, el momento de apertura y las probabilidades de entrar sin reserva. El patrón que funciona: alarma para la apertura de 30 días a medianoche KST, reservar primero la mesa más difícil (Mosu, luego Choi Dot) y guardar Tian Mi Mi como ancla fiable de walk-in.",
      "El Route Pass del planificador integra estos plazos en tu calendario automáticamente: las alarmas de reserva llegan al .ics junto con el propio viaje.",
    ],
    linkLabels: ["Todos los restaurantes de CCW", "CatchTable paso a paso"],
  },
};

const DROP_OVERLAYS: Partial<Record<Locale, Record<string, DropL10n>>> = {
  ko: KO,
  ja: JA,
  zh: ZH,
  es: ES,
};

/** Merge a drop with its translation for the locale (English fallback per field). */
export function lDrop(drop: Drop, locale: Locale): Drop {
  const o = DROP_OVERLAYS[locale]?.[drop.slug];
  if (!o) return drop;
  return {
    ...drop,
    title: o.title ?? drop.title,
    excerpt: o.excerpt ?? drop.excerpt,
    body: o.body ?? drop.body,
    links: drop.links.map((link, i) => ({
      ...link,
      label: o.linkLabels?.[i] ?? link.label,
    })),
  };
}
