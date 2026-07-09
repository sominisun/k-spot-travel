# [방향 A] K-SPOT Discover — 콘텐츠 미디어 & AI 트립플래너 플랫폼

> **한 줄 정의**: "당신이 본 K-콘텐츠가 곧 여행 지도가 된다" — 작품별 촬영지·미식 가이드 매거진 + AI가 무료로 루트를 짜주는 세트제팅(set-jetting) 미디어 플랫폼
>
> **수익 축**: AdSense 디스플레이 광고 + 제휴 커미션(Klook/Trazy/KKday/Agoda) + 프리미엄 디지털 가이드 소액결제
>
> **핵심 KPI**: 월간 오가닉 트래픽 · AdSense RPM · 제휴 클릭전환율

---

## 1. 왜 이 방향인가

- AdSense 승인·수익화에 **구조적으로 가장 유리** — 사이트 자체가 콘텐츠 허브
- 투어 재고·현지 운영·환불 CS가 없어 **1인 관리자 운영 부담 최소**
- 검색 수요가 이미 존재: "Squid Game filming location", "Culinary Class Wars restaurants" 등 영어권 검색량 풍부, 경쟁 사이트는 블로그 단편 글 수준 → 구조화된 DB형 콘텐츠로 SEO 우위 가능
- 트래픽이 쌓이면 방향 B(커머스)로 무손실 확장 가능한 **저위험 선행 전략**

## 2. 타깃 사용자

| 페르소나 | 상황 | 사이트가 주는 것 |
|---|---|---|
| 🇺🇸 K-드라마 팬 (25–40) | "폭싹 속았수다 보고 제주 가고 싶다" | 작품 페이지 → 스팟 목록 → 3일 루트 자동 생성 |
| 🇸🇬 미식 여행자 | "흑백요리사 식당 가보고 싶다" | 셰프·식당 DB + 예약 방법(CatchTable) 가이드 |
| 🇫🇷 첫 방한 계획자 | 뭘 봐야 할지 모름 | AI 챗봇: 본 작품 3개 입력 → 맞춤 코스 제안 |

## 3. 정보 구조 (IA / 사이트맵)

```
/                       홈 — 트렌딩 작품, 에디터 픽 루트, 챗봇 진입
/shows                  작품 디렉토리 (OTT·장르·지역 필터)
/shows/[slug]           작품 허브 — 줄거리 맥락 + 촬영 스팟 목록 + 지도 + 추천 루트 + 관련 미식
/spots                  스팟 디렉토리 (지역·유형 필터, 지도 뷰)
/spots/[slug]           스팟 상세 — 등장 작품, 가는 법, 주변 맛집, 제휴 투어 CTA
/routes                 큐레이션 루트 (예: "눈물의 여왕 서울 1일 코스")
/routes/[slug]          루트 상세 — 타임라인, 지도 폴리라인, 예산, 제휴 링크
/food                   미식 섹션 — 흑백요리사 셰프 식당, 드라마 속 음식 가이드
/food/[slug]            식당/음식 상세
/planner                AI 트립플래너 — 본 작품 + 여행일수 + 취향 입력 → 일정 생성 → PDF 저장(프리미엄)
/guide                  실용 가이드 아티클 (T-money, 교통, 예약앱 사용법 등) ← AdSense용 롱폼
/about /contact /privacy-policy /terms   필수 페이지
/admin                  관리자 (아래 §7)
```

## 4. 핵심 기능 명세

### 4.1 작품↔스팟 매칭 DB (플랫폼의 심장)
- 엔티티: `Show`(작품) ↔ N:M ↔ `Spot`(장소) ↔ `Route`(루트) ↔ `Restaurant`(식당)
- 각 매핑에 "등장 장면 설명(텍스트)" 저장 — 저작권 이미지 없이 팬 감성 전달
- 스팟 기본정보(주소·좌표·이미지·운영시간)는 **TourAPI 4.0 자동 수급 + 관리자 검수** 파이프라인

### 4.2 AI 챗봇 "K-Spot Concierge"
- Claude API 기반, 사이트 우하단 플로팅 위젯
- 시스템 프롬프트에 자체 DB(작품/스팟/루트 JSON)를 컨텍스트로 주입 → **환각 없는 자사 데이터 기반 답변**
- 기능: ① 본 작품 기반 코스 추천 ② 스팟 교통편 안내 ③ 식당 예약 방법 안내 ④ 관련 페이지 딥링크 제공
- 대화 로그를 관리자 대시보드에 저장 → 수요 파악·콘텐츠 기획 데이터로 활용

### 4.3 AI 트립플래너 (리드 확보 장치)
- 입력: 시청 작품(자동완성 검색) + 일수 + 관심사(미식/포토/쇼핑) + 도시
- 출력: 일자별 타임라인 + 지도 루트 + 예상 예산 + 각 스팟의 제휴 투어 링크
- 이메일 입력 시 PDF 발송(뉴스레터 리스트 확보) / 프리미엄 상세판($4.9, Stripe Checkout 단건결제)

### 4.4 제휴 수익 레이어
- 스팟·루트 페이지마다 "Book a guided tour" CTA → Klook/Trazy 제휴 링크 (파트너 프로그램 가입)
- 숙박: Agoda/Booking 어필리에이트, 식당: CatchTable 안내
- 링크 클릭 이벤트 자체 트래킹 → 전환 좋은 지면 파악

## 5. 기술 스택

| 레이어 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 15 (App Router) + TypeScript | 기존 저장소 계승, SSG/ISR로 SEO 최적 |
| 스타일 | Tailwind CSS + shadcn/ui | 개발속도, 일관성 |
| DB | Supabase (PostgreSQL) | 무료 티어, 관리자 인증 겸용 |
| CMS | 자체 admin (Supabase) — 아티클은 MDX 파일 병행 | Git 기반 아티클 = 백업·리뷰 용이 |
| AI | Claude API (claude-sonnet-4-6) | 챗봇+플래너 |
| 지도 | Google Maps JS API (해외 사용자 기준) | 카카오맵은 해외 UX 부적합 |
| 결제(경량) | Stripe Checkout | 프리미엄 PDF 단건결제만 |
| 다국어 | next-intl — EN(기본)/JA/ZH/KO | 해외 타깃이므로 영어가 default locale |
| 배포 | Vercel + 커스텀 도메인 | ISR·이미지 최적화·무료 시작 |
| 분석 | GA4 + Search Console + Vercel Analytics | AdSense 심사·SEO 필수 |

## 6. AdSense 승인 실행 계획 (론칭 체크리스트)

1. 도메인 구입 (예: kspot.travel / k-spot.guide) → Vercel 연결
2. **론칭 콘텐츠 최소선**: 작품 허브 10편 + 루트 가이드 6편 + 실용 가이드 8편 = 24편 (각 900단어+, 오리지널 문장, 실사/CC0 이미지만)
3. 필수 페이지 4종 + 쿠키 동의 배너(GDPR) 탑재
4. sitemap.xml / robots.txt / 구조화 데이터(Article, TouristAttraction, FAQPage 스키마)
5. Search Console 색인 확인 → 2주 트래픽 안정 후 AdSense 신청
6. 승인 후: 자동광고 OFF, 아티클 본문 상·중·하 3지면 수동 배치 (UX 보호)

## 7. 관리자 구조 (운영 편의 최우선)

- `/admin` — Supabase Auth 단일 계정 로그인
  - **Shows/Spots/Routes/Restaurants CRUD** — 폼 기반, TourAPI 검색→원클릭 임포트 버튼
  - **아티클 에디터** — MDX 마크다운 + 미리보기
  - **챗봇 로그 뷰어** — 자주 묻는 질문 순위
  - **제휴 클릭 리포트** — 페이지별/파트너별
- 주간 운영 루틴: 신작 1편 추가(30분) + 아티클 1편(1시간) 수준으로 유지 가능하게 설계

## 8. 데이터 모델 (요약)

```
shows(id, slug, title_en, title_ko, ott[], genre[], year, synopsis, popularity)
spots(id, slug, name_en, address, lat, lng, region, tourapi_id, images[], how_to_get)
show_spots(show_id, spot_id, scene_note_en)       ← 매칭 심장
routes(id, slug, title, days, city, budget_range, spot_order[])
restaurants(id, slug, name, chef, source_show, booking_method, price_range)
articles(slug, locale, title, mdx_path, category)
chat_logs(id, session, messages, created_at)
leads(email, generated_plan_json, created_at)
```

## 9. 로드맵

| Phase | 범위 | 완료 기준(DoD) |
|---|---|---|
| **P1 기반** | i18n 구조, 디자인시스템, DB 스키마, 필수 4페이지, 작품/스팟/루트 템플릿 | EN 사이트가 도메인에서 열리고 작품 3편 풀데이터로 동작 |
| **P2 콘텐츠** | 작품 10·루트 6·가이드 8편, TourAPI 임포터, 지도 | 24편 색인 완료, Lighthouse 90+ |
| **P3 AI** | 챗봇 + 트립플래너 + 이메일 PDF | 플래너가 실제 일정 생성·발송 |
| **P4 수익화** | AdSense 신청, 제휴 링크 전면 배치, Stripe 프리미엄 PDF | AdSense 승인, 첫 제휴 클릭 발생 |
| **P5 성장** | JA/ZH 로케일, 뉴스레터, 신작 대응 운영 루틴 | 월 신규 콘텐츠 파이프라인 가동 |

## 10. 리스크와 대응

| 리스크 | 대응 |
|---|---|
| 오가닉 트래픽 성장까지 수익 공백 | 제휴 커미션은 소량 트래픽에도 발생 — 초기부터 병행 |
| 작품 이미지 저작권 | 스틸컷 전면 미사용 원칙, 촬영지 실사·TourAPI 이미지·자체 일러스트만 |
| 콘텐츠 생산 부담 | AI 초안 + 관리자 편집 워크플로를 admin에 내장 (단, 편집 검수 필수) |
| Klook 등 대형사가 따라할 위험 | 작품→스팟 매핑 DB 깊이 + 챗봇 개인화로 선점 해자 구축 |
