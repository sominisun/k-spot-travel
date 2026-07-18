# 신작 추가 운영 가이드 (주 1회, 60~90분)

새 인기작이 떴을 때 이 문서 하나로 끝냅니다. 코드 수정 없이 **데이터 파일 추가 → push → 자동 배포**.

## 0. 게이트 (싣기 전 검증)

- **공신력 출처(공식 보도자료·언론 기사·관광공사)로 확인된, 실제 방문 가능한 촬영지 2곳 이상**. 미달이면 싣지 않는다 — "20개 채우기"가 아니라 "전부 방문 가능"이 브랜드다.
- 세트장 전용·루머·비공개 사유지는 탈락.

## 1. 데이터 추가 (순서대로)

| # | 파일 | 할 일 |
|---|---|---|
| 1 | `src/data/shows-recent.ts` | Show 객체 1개 추가 (slug, title, koreanTitle, ott, status:"trending", synopsis, whyVisit, filmingSpots[{spotSlug, sceneNote}]) |
| 2 | 같은 파일 하단 spots 배열 | 신규 스팟 정의 (slug, name, koreanName, region, area, address, howToGet, tips 3개+, mapQuery) |
| 3 | `src/data/geo.ts` | 스팟 좌표 (플래너 동선·지도에 필수) |
| 4 | `src/data/images.ts` | 위키미디어 CC/공공누리 1유형 사진 — **피사체 정확할 때만**. 없으면 비워둠(타이포 카드+UGC 유도가 정상 동작) |
| 5 | `src/data/scene-guides.ts` | 대표 장면 1~2개: shotTip(서는 위치·방향·시간대) + nowNote(현장 실태). 에피소드 번호는 확실할 때만 |
| 6 | `src/data/l10n/{ko,ja,zh,es}-core.ts` | 작품 제목·시놉시스·장면노트 번역 (미번역 필드는 영어 폴백 — 급하면 나중에) |
| 7 | `src/data/faq.ts` | 작품명 키워드 항목 1개 (한·일·중 제목 포함, 4자+ CJK는 자동 2점) |
| 8 | `src/data/drops.ts` 상단 | 드롭 1편 (insiderUntil = date+7) + `src/data/drops-l10n.ts`에 4개 언어 |

## 2. 톤앤매너 (글쓰기 헌법)

- **관점**: 팬에게 말하는 에디터. 홍보문이 아니라 "가 본 사람의 조언".
- **문장**: 짧은 단정 + 구체 수치. "아름다운 곳입니다" 금지 → "일출 30분 전 서쪽 진입로, 4월엔 유채가 앞에 깔린다".
- **금지**: 이모지, 느낌표 남발, "must-visit/hidden gem/stunning"류 상투어, 확인 안 된 에피소드 번호.
- **필수**: 모든 정보에 실행 방법(예약 채널·지하철 출구·요금), 과장 대신 트레이드오프("주말 오후는 줄이 길다 — 평일 오전에").
- **장면 노트**: 스포일러 없이 "그 장면"이 떠오르게. 예: "우산 두 개가 스치던 그 다리".

## 3. 확인 & 배포

```
npm run build        # 로컬 빌드 통과 확인
git add -A && git commit && git push   # → Vercel 자동/CLI 배포
npx vercel --prod --yes                # CLI 배포 시
```

- 배포 후 `/{locale}/shows/{slug}` 5개 언어 열어 깨진 곳 확인.
- Discord·뉴스레터에 드롭 링크 공유 (뉴스레터는 Resend 대시보드에서 드롭 본문 재사용).

## 4. 챗봇·플래너는 손대지 않는다

데이터 파일만 추가하면 검색 인덱스·플래너·지도·sitemap·hreflang이 전부 자동 반영된다. 별도 작업 0.
