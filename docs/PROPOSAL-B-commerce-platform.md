# [방향 B] K-SPOT Journeys — 투어 커머스 & AI 컨설팅 부킹 플랫폼

> **한 줄 정의**: "본 작품을 알려주면, 결제까지 끝나는 나만의 한국 투어" — 작품 테마 투어 패키지 판매 + AI·전문가 하이브리드 맞춤 여행 컨설팅을 자체 결제로 완결하는 커머스 플랫폼
>
> **수익 축**: 자체 패키지 판매 마진 + 유료 맞춤 컨설팅(플랜 설계비) + 콘텐츠 섹션 AdSense + 제휴 보조
>
> **핵심 KPI**: 결제 전환율 · 객단가(AOV) · 컨설팅 요청→결제 전환율

---

## 1. 왜 이 방향인가

- **기존 저장소 자산을 100% 계승** — packages.ts 데이터 모델, 목록→상세→체크아웃 흐름이 이미 이 방향의 뼈대
- 트래픽 규모가 작아도 **건당 매출이 커서** 초기 수익 도달이 빠름 (패키지 $150–800, 컨설팅 $29–99)
- Trazy/Klook은 "기성 상품 판매"까지만 — **"내 시청 이력 기반 맞춤 설계→결제"**는 시장에 없는 차별화
- 흑백요리사 효과로 검증된 미식 수요를 "예약 대행+미식 코스"라는 고마진 상품으로 직접 수익화 가능

## 2. 비즈니스 모델 (3단 퍼널)

```
[무료] 콘텐츠·AI 챗봇으로 유입 (작품별 가이드, 스팟 정보 — AdSense 지면)
   ↓
[Self-serve] 기성 패키지 구매 — 작품 테마 투어 (즉시 결제, Stripe)
   ↓
[High-touch] 맞춤 컨설팅 — AI 초안 플랜(즉시) + 전문가 확정 플랜(48h) 유료 판매
                → 확정 플랜 내 투어·식당·숙박 예약 대행 수수료
```

| 상품 | 가격대 | 마진 구조 |
|---|---|---|
| 기성 테마 패키지 (현지 파트너 운영) | $150–800 | 파트너 원가 + 마진 15–25% |
| AI 맞춤 플랜 (즉시 생성 상세판) | $9.9 | 원가 ≈ 0 |
| 전문가 컨설팅 플랜 (48h, 수정 2회) | $49–99 | 인건비형 고마진 |
| 예약 대행 (식당 CatchTable·투어·차량) | 건당 fee | 컨설팅의 업셀 |

## 3. 타깃 사용자

| 페르소나 | 상황 | 구매 시나리오 |
|---|---|---|
| 🇺🇸 팬 여행자 커플 | 폭싹 속았수다 → 제주 4일 | "Tangerines Jeju Package" 기성 상품 결제 |
| 🇸🇬 미식 원정대 (3인) | 흑백요리사 식당 3곳 필수 | 컨설팅 $79 + 식당 예약 대행 |
| 🇩🇪 첫 방한 가족 | 아이가 K-POP 팬, 부모는 미식 | 챗봇 상담 → AI 플랜 $9.9 → 전문가 업그레이드 |

## 4. 정보 구조 (IA / 사이트맵)

```
/                        홈 — 히어로(작품 검색), 베스트 패키지, 컨설팅 CTA, 후기
/packages                패키지 목록 (작품·지역·기간·가격 필터)  ← 기존 코드 확장
/packages/[slug]         상세 — 일정 타임라인, 지도, 포함/불포함, 리뷰, 날짜·인원 선택
/checkout/[slug]         결제 — Stripe Checkout (카드/Apple Pay/Google Pay/PayPal)
/consulting              컨설팅 랜딩 — 프로세스 설명, 가격, 신청 폼(시청작품/일수/예산/취향)
/consulting/plan/[id]    생성된 플랜 뷰 — AI 초안 무료 미리보기 → 결제 후 전체 공개
/shows /shows/[slug]     작품 허브 (콘텐츠+해당 작품 패키지 CTA) ← AdSense 지면
/food /food/[slug]       미식 가이드 + 예약대행 CTA ← AdSense 지면
/guide/[slug]            실용 아티클 ← AdSense 지면
/my                      주문 조회 (이메일+주문번호, 계정가입 불필요)
/reviews                 후기 모음 (사회적 증거)
/about /contact /privacy-policy /terms /refund-policy   필수 페이지 (환불정책 = 커머스 필수)
/admin                   관리자 (§8)
```

## 5. 핵심 기능 명세

### 5.1 결제 시스템 (이 방향의 완성 조건)
- **Stripe Checkout** — 카드·Apple Pay·Google Pay 기본, PayPal 활성화 (해외 고객 커버리지 최우선)
- 통화: USD 기본, EUR/SGD/JPY 표시 지원
- 흐름: 날짜·인원 선택 → 주문 생성(DB, `pending`) → Stripe 세션 → webhook으로 `paid` 확정 → 확인 이메일(Resend) + 관리자 알림
- 환불: Stripe 대시보드 환불 + 주문상태 동기화, `/refund-policy`에 조건 명시 (분쟁 방어)
- 컨설팅·AI 플랜은 디지털 상품으로 별도 Price 객체 관리

### 5.2 맞춤 컨설팅 엔진 (핵심 차별화)
1. 신청 폼: 시청 작품(멀티선택 자동완성) / 기간·인원 / 예산 / 관심(미식·포토·쇼핑·자연) / 이동성
2. **AI 초안**: Claude API가 자체 스팟 DB 기반으로 일자별 플랜 생성 → 1일차만 무료 공개(티저)
3. 결제 → 전체 플랜 공개 + PDF 다운로드
4. 전문가 옵션: 관리자가 admin에서 플랜 검수·수정 → 48h 내 확정본 발송, 수정요청 2회 포함
5. 플랜 내 각 항목에 예약 대행 신청 버튼 (업셀)

### 5.3 AI 챗봇 "Journey Concierge"
- 상담원 역할: 패키지 추천, 컨설팅 안내, **주문번호로 예약 조회**, FAQ(환불·준비물·교통)
- 구매 직전 이탈 방지: 체크아웃 페이지에서 선제 도움말
- 상담 중 니즈 감지 시 컨설팅 신청 폼으로 유도 (리드 전환 장치)

### 5.4 콘텐츠 섹션 (AdSense + SEO 유입기)
- 방향 A의 작품 허브·미식 가이드를 축소 운영 (론칭 20편) — 모든 콘텐츠 하단에 관련 패키지 카드
- 커머스 페이지에는 광고 미배치(전환 보호), 콘텐츠 페이지에만 AdSense

## 6. 기술 스택

| 레이어 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 15 + TypeScript | 기존 코드 계승 |
| 스타일 | Tailwind CSS + shadcn/ui | 기존 CSS Modules에서 마이그레이션 |
| DB | Supabase (PostgreSQL) | 주문·패키지·플랜·리뷰 저장, RLS 보안 |
| 결제 | **Stripe** (Checkout + Webhooks) + PayPal via Stripe | 해외 결제 표준, PCI 부담 없음 |
| 이메일 | Resend | 주문확인·플랜발송·관리자 알림 |
| AI | Claude API | 챗봇 + 플랜 초안 생성 |
| 지도 | Google Maps JS API | 일정 루트 시각화 |
| 다국어 | next-intl — EN 기본, JA/ZH 확장 | 결제 페이지 포함 전체 영어 우선 |
| 배포 | Vercel + 커스텀 도메인 | webhook 엔드포인트 포함 |
| 분석 | GA4(전자상거래 이벤트) + Search Console | 퍼널 측정 |

## 7. 데이터 모델 (요약)

```
packages(id, slug, title_en, content_source, region, days, price_usd, stripe_price_id,
         itinerary_json, includes[], excludes[], images[], active)
orders(id, order_no, package_id, customer_name, email, phone, travelers, travel_date,
       amount, currency, status[pending|paid|confirmed|completed|refunded],
       stripe_session_id, created_at)
consulting_requests(id, email, shows[], days, party, budget, interests[],
                    status[draft|ai_generated|paid|expert_review|delivered], plan_json)
shows / spots / show_spots / restaurants     ← 방향 A와 동일 코어
reviews(id, package_id, name, country, rating, text, approved)
articles(slug, locale, title, mdx_path)
```

## 8. 관리자 구조 (운영 시나리오 중심)

- `/admin` (Supabase Auth)
  - **주문 보드** — 신규/확정/완료 칸반, 상태 변경 시 고객 자동 이메일, 주문 상세·환불 처리 링크
  - **컨설팅 큐** — AI 초안 검수 에디터(플랜 JSON을 폼으로 편집) → "확정본 발송" 버튼
  - **패키지 CRUD** — 일정 빌더(일자·스팟 드래그 정렬), Stripe Price 자동 생성
  - **리뷰 승인** / **아티클 에디터** / **챗봇 로그**
  - **매출 대시보드** — 일/주/월 매출, 상품별 판매, 컨설팅 전환율
- 알림: 신규 주문·컨설팅 신청 시 관리자 이메일 즉시 발송 → **하루 2회 확인으로 운영 가능**

## 9. AdSense 전략 (커머스 사이트 특화)

- 콘텐츠 섹션 20편+ 확보 후 신청 (커머스 단독 사이트는 "콘텐츠 부족" 탈락 흔함 — 콘텐츠 허브가 승인 열쇠)
- 광고는 `/shows` `/food` `/guide` 계열에만 배치, `/packages` `/checkout`은 무광고
- 필수 페이지에 **Refund Policy 추가** (커머스 신뢰 신호 = 심사 가점)
- 결제 성공/실패 페이지 noindex 처리

## 10. 로드맵

| Phase | 범위 | 완료 기준(DoD) |
|---|---|---|
| **P1 리빌드** | i18n(EN), Tailwind 마이그레이션, Supabase 스키마, 패키지 6종 영문 데이터 | EN 패키지 목록→상세가 실데이터로 동작 |
| **P2 결제** | Stripe Checkout+webhook, 주문 이메일, /my 조회, 환불정책 | **테스트 카드로 결제→확인메일→admin 표시 E2E 통과** |
| **P3 컨설팅** | 신청 폼, AI 플랜 생성, 티저→결제→공개, 전문가 큐 | 유료 플랜 1건 풀사이클 시연 |
| **P4 관리자** | 주문 보드·패키지 CRUD·매출 대시보드 | 코드 수정 없이 신규 패키지 등록 가능 |
| **P5 콘텐츠·수익화** | 콘텐츠 20편, 챗봇, AdSense 신청, 리뷰 시스템 | AdSense 승인 + 첫 실주문 |

## 11. 리스크와 대응

| 리스크 | 대응 |
|---|---|
| 현지 투어 운영 역량 부재 | 초기엔 파트너 재판매(Trazy/현지 여행사 B2B 계약) 또는 "가이드 없는 셀프투어 키트"(디지털 상품)로 시작 |
| 결제 분쟁·차지백 | 명확한 환불정책, Stripe Radar, 여행일 기준 환불 단계화 |
| 관광사업자 등록 등 법규 | 예약 "대행/중개" 포지션으로 시작하고 매출 성장 시 등록 검토 (법률 확인 필요 — 가정임) |
| 초기 신뢰 부족 (리뷰 0) | 베타 고객 무료 컨설팅 → 후기 확보, 국가별 후기 노출 |
| 콘텐츠·커머스 동시 운영 부담 | 콘텐츠는 AdSense 최소선(20편)만 유지, 커머스에 집중 |
