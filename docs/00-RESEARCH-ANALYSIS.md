# K-SPOT Travel — 사전조사 및 현황 분석 보고서

> 작성일: 2026-07-08 | 대상 저장소: https://github.com/sominisun/k-spot-travel

---

## 1. 현재 저장소 분석

### 1.1 기술 현황
| 항목 | 내용 |
|---|---|
| 프레임워크 | Next.js (App Router) + TypeScript 87% |
| 스타일 | CSS Modules (Tailwind 미사용) |
| 배포/DB | 없음 (정적 데이터 하드코딩) |
| 결제 | **미구현** — 체크아웃은 주문 폼만 존재, 실 결제 게이트웨이 없음 |
| 주문 저장 | `/api/orders` — Notion API 연동 placeholder (주석 처리), 현재 console.log만 수행 |

### 1.2 구현된 것
- `src/data/packages.ts` — 여행 패키지 데이터 모델 (카테고리: netflix / kdrama / kpop / food, 일정·스팟·포함사항 구조 우수)
- 패키지 목록 → 상세(`/packages/[slug]`) → 체크아웃(`/checkout/[slug]`) 흐름
- Header / Footer / ProductCard 컴포넌트

### 1.3 결정적 한계 (신규 기획에서 해결해야 할 것)
1. **전부 한국어** — 타깃이 "해외 고객"인데 UI/데이터가 한국어. i18n 전면 재설계 필요
2. **결제 없음** — Stripe/PayPal 등 해외 결제 수단 필수
3. **콘텐츠 페이지 없음** — AdSense 승인에 필요한 아티클/가이드 콘텐츠 0개
4. **관리자 기능 없음** — 패키지/주문/콘텐츠 관리 UI 부재
5. **AI 챗봇 없음**
6. 필수 페이지(About / Privacy Policy / Contact / Terms) 없음 → AdSense 심사 탈락 요인

---

## 2. 시장 조사: OTT 한국 콘텐츠 × 관광 수요

### 2.1 핵심 수치
- 글로벌 넷플릭스 회원의 **80% 이상이 한국 콘텐츠 시청 경험** 보유
- 한류 목적 방한객: 2020년 6.3만 명 → 2023년 **176.5만 명**, 한류 연계 관광수입 **24억 달러**
- 해외 한국 콘텐츠 시청자의 **60% 이상이 한국 여행 의향** 표명
- 2026-06-17 한국관광공사 × 스튜디오드래곤 MOU — 드라마 **제작 단계부터 관광 요소 결합**, HiKR Ground에 K-드라마 체험관 조성 → 정부가 밀고 있는 국가 전략 분야
- 흑백요리사(Culinary Class Wars) 시즌2 공개 후 5주 내 **출연 식당 예약 303% 급증** → 문체부, 2026년 전략에 미식관광 공식 편입

### 2.2 견인 콘텐츠 (사이트 초기 DB 우선순위)
| 콘텐츠 | OTT | 관광 연결 포인트 |
|---|---|---|
| 오징어 게임 S1–S3 | Netflix | 대규모 인지도, 서울/인천 세트·테마 체험 |
| 폭싹 속았수다 (When Life Gives You Tangerines) | Netflix | 제주 전역 — 2025년 최대 화제작 (4.8억 시청시간) |
| 눈물의 여왕 / 선재 업고 튀어 | Netflix/tvN | 서울 근교 — Trazy·Klook 이미 상품화한 검증 수요 |
| 사랑의 불시착 | Netflix | 스위스까지 투어 발생한 세트제팅 대표 사례 |
| 이상한 변호사 우영우 / 웰컴투 삼달리 | Netflix/ENA | 제주 투어 상품 검증됨 (Klook 판매 중) |
| 흑백요리사 | Netflix | **식도락 축** — 출연 셰프 식당 투어, CatchTable 예약 연계 |
| 솔로지옥 | Netflix | 기존 packages.ts에 이미 데이터 있음 (사승봉도/파라다이스시티) |
| K-POP 데몬 헌터스 등 애니/영화 | Netflix | 북촌·명동·남산 등 배경지 성지순례 |

### 2.3 활용 가능한 공공 데이터
- **한국관광공사 TourAPI 4.0** (api.visitkorea.or.kr) — 관광지/식당/숙박/축제, **8개 언어**, 무료 오픈 API → 스팟 상세정보·좌표·이미지 자동 수급 가능
- **Visit Seoul API** (api.visitseoul.net) — 서울 명소/식당/행사 다국어 데이터
- 영화진흥위원회·지자체 촬영지 DB — 촬영지 검증용

---

## 3. 벤치마킹 조사

### 3.1 경쟁/참고 사이트별 차용 포인트
| 사이트 | 강점 (차용할 것) | 약점 (우리의 기회) |
|---|---|---|
| **Klook** | 상품 카드 UI, 리뷰·평점 사회적 증거, 카테고리 필터, 블로그→상품 연결 SEO 구조 | 콘텐츠(드라마)별 탐색 불가 — 상품 중심이라 "내가 본 작품"으로 못 찾음 |
| **Trazy** | K-드라마 전용 투어 카테고리, 최신 히트작 빠른 상품화, 영어 상세일정 표기 | 디자인 노후, 작품→스팟 매핑 DB 없음 |
| **Creatrip** | 로컬 트렌드 큐레이션 매거진 + 커머스 결합, 예약·쿠폰·환전까지 원스톱 | 드라마 특화 아님, 정보가 방대해 목적성 탐색 약함 |
| **Netflix Tudum** | 작품 중심 스토리텔링 페이지, 팬덤 언어 사용 | 여행 연결 없음 |
| **VisitKorea (KTO)** | 촬영지 공식 정보, 다국어, 일정 만들기 기능 | 관 냄새 나는 UX, 개인화·예약 부재 |
| **CatchTable Global** | 파인다이닝 예약 UX, 흑백요리사 식당 예약 허브 | 여행 일정과 결합 안 됨 |
| **Wanderlog / TripIt** | 드래그앤드롭 일정 빌더, 지도 연동 루트 시각화 | 한국 콘텐츠 맥락 없음 |

### 3.2 시장의 빈 자리 (= 우리 포지셔닝)
> **"작품(Title-first)으로 시작하는 여행 설계"**를 하는 곳이 없다.
> 기존 플랫폼은 전부 "장소/상품-first". 해외 팬의 실제 심리 흐름은
> **"이 드라마 봤어 → 저기 가보고 싶어 → 어떻게 가지? 뭘 먹지? 며칠 코스로?"** 인데,
> 이 흐름 전체를 받아주는 서비스가 없음. 이것이 K-SPOT의 핵심 차별화.

---

## 4. Google AdSense 승인 요건 (2026 기준)

| 요건 | 기준 | 본 프로젝트 적용 |
|---|---|---|
| 콘텐츠 분량 | 15–25개 이상 아티클, 각 800단어+ | 작품별 촬영지 가이드 20편+ 를 론칭 전 확보 |
| 독창성 | AI 단독 생성 콘텐츠 탈락 위험 | 공공 API 데이터 + 편집 검수 결합한 오리지널 가이드 |
| 필수 페이지 | About / Privacy Policy(GDPR) / Contact / Terms | 초기 빌드에 포함 |
| 품질 | 모바일 대응, Core Web Vitals, 명확한 내비게이션 | Next.js SSG/ISR + 이미지 최적화 |
| 도메인 | 커스텀 도메인 + Google 색인 | 도메인 구입, sitemap/robots, Search Console 등록 |
| 정책 | 저작권 침해 금지 | **작품 공식 스틸컷 사용 금지** — 직접 촬영/CC 라이선스/공공 API 이미지만 사용 (중요) |
| 심사 기간 | 1–3주 | 콘텐츠 확보 후 신청 |

⚠️ **저작권 주의**: OTT 작품 포스터·장면 캡처를 그대로 쓰면 AdSense 탈락 + 법적 리스크. 촬영지 실사진(TourAPI 제공분 포함)과 텍스트 기반 작품 언급으로 설계해야 함.

---

## 5. 수익 모델 옵션 정리

| 모델 | 난이도 | 비고 |
|---|---|---|
| AdSense 디스플레이 광고 | 하 | 콘텐츠 트래픽 기반, 방향 A의 주 수익 |
| 제휴(Affiliate) — Klook/Trazy/KKday/Agoda | 하 | 투어·숙박 예약 커미션 4–8%, 재고 부담 0 |
| 자체 투어 패키지 판매 | 상 | 방향 B의 주 수익 — 현지 파트너 운영 필요 |
| 맞춤 여행 컨설팅 (유료 플랜 설계) | 중 | 1:1 컨설팅 or AI+전문가 하이브리드, 고마진 |
| 프리미엄 일정 PDF / 디지털 가이드 | 하 | 소액결제, Stripe로 간단 구현 |

---

## 6. 결론 → 방향성 2안

- **[방향 A] PROPOSAL-A-media-platform.md** — 콘텐츠·SEO 미디어 중심. AdSense+제휴 수익. 운영부담 최소, 승인 최적화, 트래픽 우선 전략
- **[방향 B] PROPOSAL-B-commerce-platform.md** — 투어 커머스+컨설팅 중심. 자체 결제(Stripe) 직접 매출. 기존 코드 자산 계승, 고수익·고운영 전략

두 안 모두 공통 코어: **작품→스팟→루트 매칭 DB, AI 챗봇 컨시어지, 다국어(영어 우선), AdSense 대비 콘텐츠 허브, 관리자 편의 구조**.

---

## 출처
- [Statista — Most watched K-drama on Netflix 2025](https://www.statista.com/statistics/1428716/south-korea-most-viewed-korean-netflix-series/)
- [What's on Netflix — Most Popular K-Dramas of 2025](https://www.whats-on-netflix.com/news/k-dramas/most-popular-k-dramas-from-netflix-daily-top-10s-for-2025/)
- [National Geographic — Korean Wave boosting tourism](https://www.nationalgeographic.com/travel/article/korean-tv-series-filming-locations)
- [Travel And Tour World — KTO × Studio Dragon 전략](https://www.travelandtourworld.com/news/article/xpys9flgkeby/)
- [CNN — Iconic K-drama filming locations near Seoul](https://www.cnn.com/travel/gallery/south-korea-iconic-k-drama-locations-hnk-spc)
- [CNBC — Culinary Class Wars food tourism surge](https://www.cnbc.com/2026/03/23/culinary-class-wars-netflix-show-causes-food-tourism-increase.html)
- [Korea Times — 흑백요리사 파이널리스트 식당](https://www.koreatimes.co.kr/www/culture/2025/01/135_384779.html)
- [Klook — K-Drama Filming Locations Tour](https://www.klook.com/en-US/activity/122907-k-drama-filming-locations-tour-from-seoul-gyeonggi-do/)
- [Trazy — K-drama Shooting Spot Tour](https://www.trazy.com/experience/detail/seoul-kdrama-shooting-spot-tour)
- [Creatrip — 드라마 촬영지 블로그](https://creatrip.com/en/blog/10710)
- [한국관광콘텐츠랩 TourAPI](https://api.visitkorea.or.kr/)
- [Visit Seoul API](https://api.visitseoul.net/main/home?lang=en)
- [Google AdSense 자격 요건](https://support.google.com/adsense/answer/9724?hl=en)
- [AdSense Approval Checklist 2026](https://www.stackedbuddy.com/google-adsense-approval-checklist/)
