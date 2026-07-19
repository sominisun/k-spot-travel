# K-SPOT 운영 매뉴얼 (1인 운영자용)

사이트는 "데이터 파일 + 환경변수"로만 운영됩니다. 관리자 페이지는 없고, 필요하지도 않습니다.

## 1. 메시지가 나에게 오는 길 (인박스 구조)

사용자 접점 4곳이 전부 같은 곳으로 모입니다:

```
챗봇 질문(답변 실패/👎만) ─┐
문의 폼 (/contact)        ├─→ ① Discord 웹훅(폰 알림) ② 내 이메일(Resend) ③ .chatlog/*.jsonl(로컬 백업)
뉴스레터 가입             ─┘
정보 제보 링크 ──────────→ 문의 폼과 동일
```

⚠️ **Vercel(서버리스)에서는 ③이 임시 저장이라, ① 또는 ②를 켜기 전까지 메시지가 유실될 수 있습니다. 도메인보다 먼저 하세요.**

- **① Discord 웹훅 (5분, 무료)**: Discord 서버 생성 → 채널(#inbox) → 채널 설정 → 연동 → 웹훅 만들기 → URL 복사 → Vercel 환경변수 `DISCORD_WEBHOOK_URL`.
- **② 이메일 연동 (10분, 무료)**: resend.com 가입(구글 로그인 가능) → API Keys에서 키 발급 → Vercel에 `RESEND_API_KEY` + `CONTACT_FORWARD_EMAIL=<Resend 가입에 쓴 내 이메일>`. 도메인 인증 전에는 발신자가 `onboarding@resend.dev`이고 **수신은 내 계정 이메일로만** 가능(문의 수신 용도로는 충분). 도메인 인증 후 `RESEND_FROM`을 내 도메인 주소로 교체하면 고객에게 보내는 PDF 메일도 활성화.

## 2. 환경변수 총람 (Vercel → Settings → Environment Variables)

| 변수 | 발급처 | 켜지는 기능 |
|---|---|---|
| `DISCORD_WEBHOOK_URL` | Discord 채널 연동 | 문의·챗봇·뉴스레터 실시간 알림 |
| `RESEND_API_KEY` | resend.com | 문의 이메일 포워딩 + 루트패스 PDF 이메일 발송(플래너에 이메일 입력란 자동 표시) |
| `CONTACT_FORWARD_EMAIL` | 내 이메일 | 문의·가입 알림 수신 주소 |
| `RESEND_AUDIENCE_ID` | Resend → Audiences | 뉴스레터 가입자가 자동으로 발송 리스트에 적재 |
| `NEXT_PUBLIC_CHECKOUT_PASS_URL` / `NEXT_PUBLIC_CHECKOUT_INSIDER_URL` | Creem 상품별 결제 링크 | 결제 버튼이 실제 체크아웃으로 연결 |
| `CREEM_API_KEY` + `PASS_SECRET` | Creem Developers→API Keys + 아무 랜덤 문자열(40자+) | **실결제 게이트 가동** (둘 다 있어야 데모모드 해제) |
| `CREEM_INSIDER_PRODUCT_ID` | Creem Insider 상품 ID (`prod_...`) | Insider 키를 자동 구분 |
| `CREEM_TEST_MODE` | `1`이면 샌드박스 API 사용 | 테스트 결제 검증용 (라이브 전환 시 비우기) |
| `ANTHROPIC_API_KEY` | console.anthropic.com | 챗봇이 FAQ 밖 질문도 5개 언어로 즉답 |
| `NEXT_PUBLIC_AFF_*` (Klook 등 6종) | 각 제휴 대시보드 | 제휴 링크에 트래킹 자동 부착 |
| `NEXT_PUBLIC_ADSENSE_*` | AdSense 승인 후 | 광고 슬롯 표시 |

넣고 나면 **Deployments → 최신 → Redeploy** 한 번 (또는 `npx vercel --prod --yes`).

## 3. Creem 결제 연결 (단계별)

1. 기존 Creem 계정의 대시보드에서 상품 2개 생성:
   - "K-SPOT Route Pass" — 일회성 $4.90, 세금 포함 켜기, **상품 기능 → 라이선스 키**(만료 없음·한도 3)
   - "K-SPOT Insider" — 구독 $3.90/월, 동일하게 라이선스 키 기능
2. 각 상품의 **결제 링크(checkout URL)** 복사 → `NEXT_PUBLIC_CHECKOUT_PASS_URL`, `NEXT_PUBLIC_CHECKOUT_INSIDER_URL`
3. Insider 상품의 ID(`prod_...`, 상품 페이지 URL에 표시) → `CREEM_INSIDER_PRODUCT_ID`
4. **Developers → API Keys**에서 키 발급 → `CREEM_API_KEY` (Vercel에 직접 입력)
5. `PASS_SECRET`는 긴 랜덤 문자열 — 패스 토큰 서명 키 (한 번 정하면 유지)
6. 테스트: Creem 테스트 모드 키 + `CREEM_TEST_MODE=1`로 배포 → 테스트 카드 결제 → 이메일로 받은 라이선스 키를 플래너 "이미 구매하셨나요?"에 입력 → 패스 활성화 확인 → 라이브 키로 교체하고 `CREEM_TEST_MODE` 비우기

구매 흐름: 결제(Creem이 세금·환불 처리) → 이메일로 라이선스 키 수령 → 사이트에 키 입력 → 서버가 Creem에 검증(`/v1/licenses/activate`) → 서명 토큰 발급. **웹훅·DB·계정 시스템 불필요.**

## 4. 주간 루틴 (합계 약 2.5~3시간)

| 주기 | 일 | 시간 | 참고 |
|---|---|---|---|
| 주 1 | 신작 1편 추가 + 드롭 1편 | 60~90분 | `docs/ADDING-A-SHOW.md` 체크리스트 |
| 주 1 | 인박스 → FAQ 반영 | 15분 | 반복 질문을 `src/data/faq.ts`에 추가 → 챗봇이 다음부터 즉답 |
| 주 1 | 뉴스레터 발행 | 20분 | Resend에서 드롭 본문 재사용 |
| 주 2~3 | Discord 순회 | 20분 | |
| 월 1 | Fan Frame 선정, 제휴 대시보드 확인 | 35분 | |
| 분기 1 | 콘텐츠 재검증 → `SITE.lastVerified` 갱신 | 2시간 | |

## 5. 배포

```
git add -A && git commit -m "..." && git push   # 기록
npx vercel --prod --yes                          # 배포 (E:\k-spot-travel-v2에서)
```
Vercel 대시보드에서 Git 연동(vercel.link/git)을 걸어두면 push만으로 자동 배포됩니다 — 권장.
