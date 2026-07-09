# K-SPOT Travel — 최종 빌드 스펙 (v1.0)

> 결정: **방향 A(미디어 플랫폼) 기반, 방향 B(커머스) 확장을 구조적으로 내장**
> 컨셉: **"Your K-Content is Your Korea Travel Map"** — 본 작품이 곧 여행 지도가 되는 설렘
> 원칙: **1인 관리 맥스** — 코드 수정 없이 데이터 파일만 고치면 운영 가능, 주간 2시간 운영 루틴

---

## 1. 이번 빌드에 반영된 추가 요구사항

| 요구사항 | 구현 방식 |
|---|---|
| A→B 확장 대비 구조 | 데이터 모델에 커머스 필드 예약(`affiliate` → 추후 `price/booking`), `/routes`가 추후 판매상품으로 승격 가능한 구조, lib 데이터 접근 계층 분리(정적 파일→DB 교체 시 페이지 무수정) |
| 2026년 최신+꾸준한 사랑 OTT | `status: 'trending'(2025-26 히트) / 'evergreen'(꾸준)` 이중 트랙. Netflix 외 Disney+(무빙), Apple TV+(파친코) 포함 |
| 고객 소통 커뮤니티 | **Discord 채택** (Slack은 폐쇄형 업무툴이라 공개 팬 커뮤니티 부적합). /community 페이지 + 전 페이지 CTA + Discord 서버 위젯 embed. 환경변수로 초대링크 관리 |
| K-뷰티/쇼핑 | `/beauty` 섹션 신설 — 올리브영 쇼핑 가이드, 카테고리별 추천, **올리브영 글로벌 어필리에이트(최대 13% 커미션, PayPal 정산) 링크 슬롯** |
| 한국 여행 모든 궁금증 해결 | `/guide` 실용 가이드(교통·유심·환전·예약앱·에티켓) + AI 챗봇 + 플래너 = 원스톱 |
| 콘텐츠 풍부 | 작품 18+, 스팟 50+, 루트 8+, 식당 12+, 뷰티 가이드, 실용 아티클 10+ |

## 2. 기술 스택 (확정)

- Next.js 16 (App Router, 기존 저장소 계승) + TypeScript + React 19
- **Tailwind CSS v4** (기존 devDeps 활용) — Mantine/Notion 의존성 제거 (경량화, 1인 유지보수 최적)
- 데이터: **정적 TypeScript 데이터 모듈** (`src/data/*`) + 접근 계층(`src/lib/data.ts`)
  - 이유: DB 서버 비용 0, 백업=git, 배포=Vercel 무료. 트래픽 성장 시 Supabase로 데이터 계층만 교체
- AI 챗봇: `/api/chat` — `ANTHROPIC_API_KEY` 있으면 Claude API, 없으면 자체 DB 키워드 검색 폴백 (**키 없이도 동작**)
- 지도: Google Maps 무키 embed iframe (`maps.google.com/maps?q=...&output=embed`) — API 키·비용 불필요
- 광고: `AdSlot` 컴포넌트 — `NEXT_PUBLIC_ADSENSE_CLIENT` 설정 시에만 렌더 (승인 전엔 비표시)
- 이미지: 저작권 세이프 전략 — 작품 스틸컷 전면 미사용. 카테고리별 그라디언트 아트카드 기본 + `imageUrl` 필드로 실사진 교체 가능 (TourAPI/직접 촬영분)

## 3. 사이트맵 (구현 라우트)

```
/                  홈 (트렌딩, 카테고리 허브, 커뮤니티/플래너 CTA)
/shows             작품 디렉토리 (OTT·장르·상태 필터)
/shows/[slug]      작품 허브 — 촬영지+장면노트+지도+관련 루트/식당
/spots             스팟 디렉토리 (지역 필터)
/spots/[slug]      스팟 상세 — 등장 작품, 교통, 팁, 지도
/routes            큐레이션 루트 목록
/routes/[slug]     일자별 타임라인 + 예산 + 지도
/food              미식 허브 (흑백요리사 셰프 식당 + 드라마 음식)
/food/[slug]       식당 상세 — 예약 방법(CatchTable), 시그니처 메뉴
/beauty            K-뷰티 허브 — 올리브영 가이드, 카테고리 추천 (제휴 슬롯)
/guide             실용 가이드 아티클 목록
/guide/[slug]      아티클 (구조화 섹션 + 중간 광고 슬롯 + FAQ 스키마)
/planner           AI 트립플래너 (시청작품→일정 생성, 클라이언트 알고리즘)
/community         Discord 커뮤니티 랜딩 + 위젯
/about /contact /privacy-policy /terms   AdSense 필수 4종
/api/chat          챗봇 API
sitemap.xml robots.txt   자동 생성
```

## 4. 데이터 모델 (src/lib/types.ts)

- `Show` — slug, title, koreanTitle, ott[], category, genres, years, status(trending/evergreen), synopsis, whyVisit, filmingSpots[{spotSlug, sceneNote}]
- `Spot` — slug, name, region, area, address, description, howToGet, tips[], mapQuery, 예약형 커머스 확장 필드(affiliateTourUrl?)
- `Route` — slug, days, budgetUSD, dayPlans[{day, theme, stops[]}], showSlugs[] ← **추후 B단계에서 판매상품 승격 대상**
- `Restaurant` — chef, sourceShow, bookingMethod, priceRange, signature[]
- `Article` — 구조화 섹션(heading/paragraphs/list/tip) + faq[] → 광고 삽입·JSON-LD 자동화
- `BeautyGuide` — category, picks[], oliveYoungTip, affiliateUrl?
- 스팟은 배치 파일 간 slug 기준 자동 병합 (여러 작품이 같은 장소 공유)

## 5. 수익 레이어 (1인 관리 기준 우선순위)

1. **AdSense** — /guide, /shows, /food, /beauty 콘텐츠 지면 (승인 체크리스트 §7)
2. **제휴** — Klook/Trazy(투어), 올리브영 글로벌(뷰티, 최대 13%), Agoda(숙박): 링크만 관리, 재고 0
3. **이메일 리스트** — 플래너 결과 저장 시 수집 (추후 B단계 고객 풀)
4. (B단계 예약석) 프리미엄 플랜 PDF, 맞춤 컨설팅, 자체 패키지

## 6. 1인 운영 설계 (관리 맥스)

- 콘텐츠 추가 = `src/data/`의 TS 파일에 객체 1개 추가 → git push → Vercel 자동배포 (관리자 페이지보다 오류 적고 백업 완전)
- 신작 대응 루틴(주 1회): 트렌딩 작품 1개 추가(30–60분) + 가이드 1편(60분)
- 챗봇/플래너는 데이터 파일을 자동 반영 — 별도 유지보수 0
- Discord: 채널 4개(#introductions #trip-questions #spot-photos #show-talk)로 시작, 커뮤니티가 사진·후기 콘텐츠를 생산하는 구조 (UGC = 무료 콘텐츠 파이프라인)
- 환경변수만으로 온오프: ADSENSE_CLIENT / ANTHROPIC_API_KEY / DISCORD_INVITE / 제휴 ID

## 7. AdSense 론칭 체크리스트 (빌드에 포함되는 것)

- [x] 필수 4페이지 + 쿠키 동의 배너
- [x] sitemap.xml / robots.txt / 페이지별 메타·OG / JSON-LD(Article, FAQPage, TouristAttraction, BreadcrumbList)
- [x] 아티클 10편+ (각 900단어급, 오리지널)
- [x] 모바일 반응형 + 이미지 무의존 고속 로딩
- [ ] (운영자 액션) 도메인 구입 → Vercel 연결 → Search Console 등록 → 2주 후 AdSense 신청

## 8. 벤치마킹 차용 (사전조사 반영)

- Tudum식 작품 허브 스토리텔링 → /shows/[slug]의 "Why fans visit" 섹션
- Wanderlog식 일자별 타임라인 → /routes/[slug], 플래너 출력
- Creatrip식 트렌드 매거진+실용정보 결합 → 홈·guide 구성
- CatchTable 예약 허들 해소 → /food의 "How to book" 단계 가이드
- Klook식 소셜프루프 → 스팟·루트 카드의 작품 태그·인기 배지
