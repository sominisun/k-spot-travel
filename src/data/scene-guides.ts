// Scene-recreation layer — the editorial depth that turns a one-line scene
// note into a visit-worthy page. Keyed by "showSlug:spotSlug".
// Editorial rules: shot tips describe where to stand and when (safe,
// verifiable on site); "now" notes describe current on-the-ground reality.
// Episode numbers appear only for scenes whose placement is widely
// documented — otherwise the scene is named, not numbered.
export interface SceneGuide {
  /** e.g. "Episode 1" — omit when placement isn't certain */
  episode?: string;
  /** where to stand, which direction, what time — the recreation recipe */
  shotTip?: string;
  /** what the place is actually like today vs. on screen */
  nowNote?: string;
}

export const SCENE_GUIDES: Record<string, SceneGuide> = {
  "goblin:jumunjin-breakwater": {
    episode: "Episode 1",
    shotTip:
      "Stand a third of the way out on the breakwater with the sea on your right and the lighthouse behind you — that's the axis of the buckwheat-bouquet summons. Late afternoon puts the sun behind the camera; bring a red scarf and a bouquet for the full re-creation.",
    nowNote:
      "A scene-replica photo frame now stands on the breakwater, and on weekends a short queue forms for it. Come before 10:00 or on a weekday for an empty walkway — and mind the wind, which is exactly as strong as it looks on screen.",
  },
  "goblin:woljeongsa-fir-forest": {
    shotTip:
      "The avenue reads best shot straight down its center line from a low angle, letting the firs converge overhead. After fresh snow it recreates the drama's winter palette almost exactly; in other seasons go within an hour of opening for mist between the trunks.",
    nowNote:
      "This is an active temple's approach path — quiet voices, no tripods blocking the lane during busy hours. The 1km walk is flat and easy; the temple itself deserves the extra half hour.",
  },
  "goblin:deoksugung-stonewall-path": {
    shotTip:
      "Walk the curve from the palace gate end — the wall's arc plus the ginkgo canopy frames exactly the walking-conversation shots. Late October afternoons, when the ginkgos turn, are the money window.",
    nowNote:
      "It's a public downtown path, busiest at lunch hour on weekdays with office workers. Early weekend mornings you can have whole stretches to yourself.",
  },
  "squid-game:ssangmun-dong-neighborhood": {
    shotTip:
      "Gi-hun's world is the ordinary alleys — corner stores, steep steps, low-rise walls. Shoot at street level down an alley with power lines converging overhead and you have the show's visual grammar without needing any specific address.",
    nowNote:
      "This is a lived-in residential district, not a set: keep voices down, don't photograph into windows or open gates, and buy something at a corner store — the shopkeepers have seen a lot of pilgrims.",
  },
  "squid-game:yangjae-citizens-forest-station": {
    episode: "Episode 1",
    shotTip:
      "The ddakji recruitment scene lives on the station bench. Any quiet bench on the platform reads correctly on camera — bring a folded blue and red ddakji (stationery stores sell them) as the prop that makes the photo.",
    nowNote:
      "A working commuter station (Sinbundang line): shoot quickly between trains, keep clear of the platform edge, and skip rush hour entirely.",
  },
  "when-life-gives-you-tangerines:seongsan-ilchulbong": {
    shotTip:
      "The drama's Jeju is dawn light on the tuff cone from the west approach — arrive for sunrise (the name literally means Sunrise Peak), shoot from the coastal path with canola fields in the foreground in spring.",
    nowNote:
      "The summit climb is ~50 minutes round trip on maintained stairs, busiest 10:00–15:00 with tour buses. Sunrise slots are surprisingly uncrowded outside holidays; haenyeo divers perform below the cliffs at set times.",
  },
  "when-life-gives-you-tangerines:handam-coastal-trail": {
    shotTip:
      "Walk west-to-east in late afternoon so the low sun hits the turquoise shallows the series lingers on. The boardwalk's first 500m from Handam Beach carries the strongest screen resemblance.",
    nowNote:
      "Cafes now line the trailhead and weekend afternoons get busy — mornings keep the wind-and-water soundtrack the drama used. The full walk to Gwakji Beach is an easy 40 minutes.",
  },
  "when-life-gives-you-tangerines:seopjikoji": {
    shotTip:
      "In canola season (late March–April) shoot from the path with yellow fields sweeping toward the lighthouse — that's the postcard the series painted. Off-season, the volcanic coastline from the boardwalk does the emotional work.",
    nowNote:
      "It's an open cape with no entry fee and real wind; the walk from the parking area to the lighthouse end takes ~40 minutes round trip.",
  },
  "queen-of-tears:korean-stone-art-museum": {
    shotTip:
      "The garden's stone guardians in rows — shoot along a row at waist height in soft late light and you're inside the drama's confession-scene frame. The upper garden terraces give the wide establishing look.",
    nowNote:
      "A small, quiet private museum (closed Mondays; modest admission). Staff are used to fans but it stays serene — this is the rare drama spot that's calmer in person than on screen.",
  },
  "queen-of-tears:the-hyundai-seoul": {
    shotTip:
      "Sound Forest — the indoor garden atrium under the glass roof — is the recognizable 'Queens department store' texture. Shoot from the escalator mid-level for the canopy-and-light look.",
    nowNote:
      "A working luxury department store: photography of spaces is fine, but keep staff and shoppers out of frame. Weekday mornings are near-empty; the basement food hall is a destination in itself.",
  },
  "lovely-runner:hwaseomun-pedestrian-bridge": {
    shotTip:
      "The umbrella scene reads from the bridge's center: fortress gate over one shoulder, stream below. Bring a clear umbrella at golden hour and shoot from ten paces back — every fan pair does exactly this, for good reason.",
    nowNote:
      "Fans have made this Suwon's busiest re-creation point on weekends; weekday evenings you'll likely have it to yourselves. The fortress wall walk from here is worth the extra hour.",
  },
  "vincenzo:sewoon-sangga": {
    shotTip:
      "Geumga Plaza's soul is the rooftop deck: Jongmyo's roofs against the towers, shot wide at golden hour. Down in the arcade, the long corridor perspectives with electronics stalls give you the interior texture.",
    nowNote:
      "A working arcade of real shops and a revitalized maker scene — browse, buy coffee, keep corridors clear. The rooftop is public and free; sunset draws a small, polite crowd.",
  },
  "crash-landing-on-you:iseltwald-pier": {
    episode: "Episode 1",
    shotTip:
      "The piano pier shot is from the shore looking down the jetty with the lake and peaks beyond. Early morning gives you mirror water and no queue; the low rail is where everyone sits for the re-creation.",
    nowNote:
      "The village now manages the fan crowd with a small turnstile fee for the pier. Mornings before the tour buses (pre-9:00) feel like the scene; midday feels like a queue.",
  },
  "crash-landing-on-you:first-cliff-walk-grindelwald": {
    shotTip:
      "The cliff walkway's final cantilever is the frame — shoot from the platform's approach with the Eiger face behind. Clear mornings before the haze build give the drama's crystalline look.",
    nowNote:
      "Included with the First gondola ticket; the walkway is sturdy and family-safe despite appearances. Check webcams before committing the day — cloud kills the view.",
  },
  "winter-sonata:nami-island": {
    shotTip:
      "The metasequoia lane, dead-center, one person small in the distance — that's the shot that started K-drama tourism. First ferry of the morning is the only time the lane is empty; snow days are the jackpot.",
    nowNote:
      "The island leans into its heritage: the couple statues, scene markers, and photo frames are all signposted. It's touristy and knows it — go early, and the charm wins anyway.",
  },
  "hometown-cha-cha-cha:cheongha-market": {
    shotTip:
      "Gongjin's market lanes are Cheongha's real ones: shoot down the covered arcade with shop awnings converging. Morning market hours give you the show's working-village energy.",
    nowNote:
      "A real neighborhood market that embraced the fame — several shops mark their cameo spots. Buy snacks, greet the owners, and it opens up; treat it as a set and it stays shut.",
  },
  "hometown-cha-cha-cha:igari-anchor-observatory": {
    shotTip:
      "Walk to the anchor-shaped deck's tip and shoot back toward land to get the observatory's sweep plus the coast — or from the shore path to place the anchor against open sea, the drama's establishing angle.",
    nowNote:
      "Free, open, and windy; sunset is the local hour. The coastal path connecting nearby coves makes an easy hour's walk either side.",
  },
  "extraordinary-attorney-woo:changwon-hackberry-tree": {
    shotTip:
      "The tree owns the hilltop: shoot from the field path below with the crown against open sky — a person at the base gives the scale the finale used. Golden hour turns the canopy translucent.",
    nowNote:
      "It's a protected natural monument on a working village's land: admire from the path, no climbing, and keep to the edges of the fields. The village asks visitors to take memories, not shortcuts through crops.",
  },
  "itaewon-class:itaewon-street": {
    shotTip:
      "The world-food street's neon stacking is the show's identity shot — stand mid-slope at dusk when signs light against the last blue sky. The quiet side alleys give you DanBam's texture without the crowds.",
    nowNote:
      "Itaewon's energy is fully back: weekend nights are dense, weeknights easy. The neighborhood rewards eating your way down rather than photographing your way through.",
  },
  "welcome-to-samdal-ri:gwangnyeong-ri-village": {
    shotTip:
      "Samdal-ri's lanes are these lanes: low stone walls, tangerine trees, sea glimpses between houses. Shoot at walking pace, wide, in morning light — the village's rhythm is the subject.",
    nowNote:
      "A real village that hosted a production, not a theme park: quiet hours matter, gates are private, and the small cafes appreciate the business more than the photos.",
  },
  "kpop-demon-hunters:bukchon-hanok-village": {
    shotTip:
      "The film's animated Seoul rooftops are Bukchon's: shoot from the upper viewpoints across tiled roofs to the towers beyond — the exact traditional-meets-modern layering the animators painted.",
    nowNote:
      "Observe the posted visiting hours and silence rules; guards enforce them kindly but firmly. Early morning gives you both empty lanes and the light.",
  },
  "kpop-demon-hunters:naksan-park": {
    shotTip:
      "The fortress wall at night, city lights below — walk the wall section south from the park summit and shoot along the illuminated stones. It's the film's night-flight backdrop in real life.",
    nowNote:
      "One of Seoul's best free night views and a favorite date walk; safe and lively into the late evening. The Ihwa mural village sits directly below for a combined loop.",
  },
  "pachinko:taejongdae": {
    shotTip:
      "From the cliff paths, shoot the open strait with the horizon high in frame — the emptiness is the point; it's the sea the era's crossings faced. The lighthouse terraces give the vantage.",
    nowNote:
      "A big coastal park: the danubi trolley loops it if the walk is too long, and the cliff viewpoints are fenced and family-safe. Give it two unhurried hours.",
  },
};

export function sceneGuide(showSlug: string, spotSlug: string): SceneGuide | undefined {
  return SCENE_GUIDES[`${showSlug}:${spotSlug}`];
}
