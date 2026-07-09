# K-SPOT Travel v2 — "The K Edit"

> **당신이 본 K-콘텐츠가 곧 여행 지도가 된다** — 작품별 촬영지·미식 가이드 매거진 + AI가 소액/구독으로 루트를 짜주는 세트제팅 플랫폼
> 기획서: `../k-spot-travel/docs/04-MASTER-PLAN.md` (v1 비교용 사이트는 :3000, 본 사이트는 :3001)

## 실행

```bash
npm install
npm run dev     # http://localhost:3001
npm run build && npm start   # 프로덕션
```

## v1과 다른 점 (핵심)

| 영역 | v2 |
|---|---|
| 디자인 | 흰 배경 · 쪽빛 인디고(#1E3A6E) 단일 키칼라 · 4/8px 라운드 · 라인 아이콘(이모지 0) · 언어별 매거진 세리프 헤드라인 |
| 이미지 | **위키미디어 커먼즈 CC 라이선스 실사진 35장** — 모든 이미지에 작가·라이선스 출처 캡션 자동 표기(`SourcedImage`) |
| 작품 | **20편** (Netflix 17 + Disney+ 무빙·킹더랜드 스팟재활용 + Apple TV+ 파친코), 스팟 47곳 |
| 다국어 | **EN/한국어/日本語/中文/Español** — URL `/en /ko /ja /zh /es`, hreflang, 언어별 폰트(Libre Caslon·Noto Serif KR/JP/SC) |
| 지도 | Leaflet+OpenStreetMap(무키·무료): `/map` 전체 탐색(작품 필터), 루트 일자별 폴리라인, 스팟 미니맵 |
| 수익 | 플래너 무료 요약 → **루트 패스 $4.9**(분단위+예약마감+**PDF 이메일 발송**) → Insider 구독. Lemon Squeezy 연결 전 **데모 모드**로 전체 흐름 동작 |
| 챗봇 | 하단 "Ask the Editor" 슬림바 · FAQ 우선응답(`src/data/faq.ts`) · **전 문답 로그 + Discord 웹훅 인박스** · 👍👎 피드백 |
| 팬덤 | 퀴즈(작품 매칭+공유링크) · 성지순례 스탬프(`/stamps`) · 위시리스트(`/saved`) · 플랜 셔플 변주 |

## 환경변수 (`.env.example`)

키 없이도 전부 동작(데모 모드), 키를 넣는 순간 실기능으로 전환:

| 변수 | 켜지는 것 |
|---|---|
| `RESEND_API_KEY` + `RESEND_FROM` | 루트 패스 PDF **이메일 발송** (없으면 브라우저 다운로드로 폴백) |
| `NEXT_PUBLIC_LS_PASS_URL` 등 | Lemon Squeezy 실결제 (없으면 '데모 잠금해제' 버튼 표시) |
| `DISCORD_WEBHOOK_URL` | 챗봇 질문/피드백이 운영자 Discord 채널로 실시간 전송 |
| `ANTHROPIC_API_KEY` | 챗봇이 Claude 기반으로 승격(질문 언어로 답변) |
| `NEXT_PUBLIC_DISCORD_INVITE` | 커뮤니티 버튼 활성화 |
| `NEXT_PUBLIC_ADSENSE_CLIENT`+슬롯 | 광고 노출 시작 |

## 1인 운영 루틴

- **신작 추가**: `src/data/shows-expansion.ts`에 Show+Spot 객체 추가 → 사진은 위키미디어 커먼즈에서 CC 파일 골라 `src/data/images.ts`에 slug 추가 → 좌표는 `src/data/geo.ts` → push
- **챗봇 개선(주 15분)**: `.chatlog/chat.jsonl` 또는 Discord #chat-inbox 확인 → 반복 질문을 `src/data/faq.ts`에 추가 → 즉답화
- **이미지 파이프라인 재실행**: 세션 스크래치의 `collect-images*.ps1`/`geocode.ps1`/`bake-data.ps1` (신규 스팟 일괄 수집·베이크)
- 콘텐츠 데이터(식당·루트·가이드·뷰티)는 v1과 동일 구조 — v1 README 참고

## 저작권 준수 구조

- 스틸컷/포스터 0장. 사진 전부 CC BY/CC BY-SA/CC0/PD + 출처 캡션 강제 렌더
- 지도 OSM 저작자표시 자동 포함 · About 페이지에 검증·이미지 정책 공개
- 오매칭 방지: 수집 47장 중 피사체 불일치 12장 큐레이션 제외(사진 없는 스팟은 타이포그래피 카드 + "사진 제보" 훅)
