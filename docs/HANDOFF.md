# Care Yard 배치도 — 이어서 하기

AFTERSPACE Care Yard(PBV 도크 + 보행 마당 + 서비스 코어 + 인계 게이트)의 인터랙티브 배치도와 3D 뷰. 2026-09-11 하루 세션에서 만든 것 전체 정리.

## 1. 바로 여는 곳

| 무엇 | 위치 |
|---|---|
| 배포 페이지 (정본) | https://ilyeolee.github.io/care-yard-parking/ |
| GitHub 리포 (공개) | https://github.com/IlYeoLee/care-yard-parking |
| 로컬 작업 폴더 | `~/care-yard-parking/index.html` (파일 하나가 전부) |
| Claude 배치도 Artifact | https://claude.ai/code/artifact/ac38093b-4c11-4724-b6df-d4f51c2f5f39 |
| 피그마 파일 | https://www.figma.com/design/kfZYxoYNrWqMuzSCMp4gT3 (페이지 "뉴-기아제작소" 1347:21871) |
| 기획안 원문 | `~/Documents/AFTERSPACE-기획아이디어최종/AFTERSPACE.md` |
| 이 폴더 | `~/Documents/AFTERSPACE-CareYard-배치도/` |

## 2. 이어서 시작하는 법

- 같은 대화로 이어가기: 터미널에서 `cd ~ && claude --resume 7904f807-5838-46f0-9486-7883b013137b`
- 새 대화로 시작: Claude Code에 "`~/Documents/AFTERSPACE-CareYard-배치도/HANDOFF.md` 읽고 Care Yard 배치도 이어서 하자"라고 말하기
- 전체 대화 원본: 이 폴더의 `transcript/session-7904f807.jsonl` (로컬에만 둠, 리포에는 안 올림)

## 3. 수정 → 배포 순서

1. `~/care-yard-parking/index.html` 수정
2. 문법 검사: 스크립트 부분만 뽑아 `node --check`
3. `git commit` → `git push` (main 브랜치, GitHub Pages가 자동 배포, 보통 1분)
4. Pages 빌드가 "building"에서 멈추면: `gh api -X POST repos/IlYeoLee/care-yard-parking/pages/builds`
5. Artifact도 같이 갱신하려면 같은 파일로 Artifact 재발행 (다운로드 버튼은 Artifact에선 안 됨, Pages에서만 됨)

최적안 숫자만 확인할 때: `node tools/optimize.js ~/care-yard-parking/index.html 30`

## 4. 확정된 설계 규칙

- **ㄷ자 일방통행**: 차는 바깥을 시계방향으로만 돔. 거리에서 우회전 진입, 우회전 퇴장. 거리 쪽 한 변을 열어 인계 게이트로 씀 → 보행자 차도 횡단 0회
- **전진 도킹 → 후진 출차**: 코가 마당(사이니지) 쪽, 뒤가 도로 쪽. 후진은 도로 쪽에서만. 뒤차는 대기선에서 정지(푸시백 방식)
- **도크 한 칸**: 차 폭 1.9 m + 양옆 0.55 m = 3.0 m, 깊이 5.5 m (+ 에이프런 2.0 m)
- **부두(아이가 걷는 폭)**: 4.0 m = 보도 유효폭 2.0 m × 2 (도로구조규칙 제16조) → 옆 차 간격 5.1 m
- **순환도로**: 6.5 m (직각주차 차로 6.0 m + 0.5)
- **공원 최소**: 초등학교 운동장 1개 3,000㎡ (체육장 법정 최소, 학생 600명 이하)
- **안전 경계**: 차 앞 가림판(남색) + 부두 양옆 난간 + 차 문 자리만 스크린도어(폭 1.6 m, 도킹 확인 후 열림, 헤더 LED 초록/빨강, 노란 안전선) + 빈 도크는 부두 입구 유리문 닫힘 + 바퀴 멈춤턱·정렬선
- **XL 사이니지**: 양면, 높이 2.0 m, 차 코앞 에이프런의 마당 쪽 끝. 앞면은 멀리서, 뒷면은 부두에서 나오는 아이가 봄
- **차 앞 스크린**: 사이니지와 같은 카테고리 화면 (피그마 Front Screen)
- **서비스 코어 위치**: 가장 먼 차에서 걷는 거리가 최소가 되는 x로 자동 배치. 출입구 3곳(마당 쪽 아이 입구, 게이트 쪽 체크인, 옆면 직원)
- **보호자**: 인도 → HANDOFF GATE(남색 단색) → 체크인. 체험 중엔 PARENT LOUNGE 대기. 길 건너편은 게이트 앞 횡단보도(신호등)
- **3D에서 도킹 차량은 도크의 75% 고정** (나머지는 픽업·EXPLORE 중)
- 디자인: AFTERSPACE 시스템(남색 #1B2A5E 단일 강조, 반경 0/999, 픽셀 모티브, 42dot Sans). 문장은 개조식, 대시·굵은 리드인 금지

## 5. 기획안 최적버전 (버튼 "기획안 최적버전 보기")

조건을 모두 지키면서 부지 최소: PV5 30대, 한 마당, 1대 1부두, 부두 4.0 m, 도크 3.0 m, 도로 6.5 m, 공원 ≥ 3,000㎡.

| 항목 | 값 |
|---|---|
| 부지 | 8,626㎡ (76 × 113 m) |
| 공원 | 3,533㎡ (운동장 1.18개) |
| 가장 먼 차 → 코어 | 93 m, 1분 24초 (아이 1.1 m/s) |
| 옆 도크 환승 | 약 16 m |

대가: 코어까지 멂 → "보조 코어(반대쪽 끝 화장실·응급함)" 후보.

## 6. 기능 목록

**2D**: 6안 비교표(한 마당/2·3포켓 × 1대1/2대1), 슬라이더(차종·도크 수 20~80·옆 차 간격·도로 폭·공원 넓히기·마당 비율), 출차 장면(A·D 동시 후진, B 대기 후 도킹), 도보 시뮬(도크·코어·라운지 아무거나 출발/도착, 10세 보폭 0.55 m·2걸음/s), 운동장·농구코트 크기 비교

**3D** (Three.js r128, 같은 geo() 결과로 세움): PV5 렌더 스타일 차량, 피그마 카드 사이니지(4배 해상도, 12종 무작위, 양면·옆면 카드색), 차 앞 스크린, 마네킹(아이 1.39 m·어른 1.70 m), 놀이공원(미끄럼틀·그네·돔·모래밭·벤치·가로등·피크닉·화단), 영문 간판, 신호등·횡단보도, 주행 차량 3대, 전체화면, 고해상도 PNG, 간판 레이어 투명 PNG

**카메라 칩**: 사선 · 조감 · 아이 눈높이 · 정중앙 조감/사선/정면 · 간판 원근 1/2(레퍼런스 구도) · 간판 정면 · 간판 열 · 간판 히어로 · 간판 히어로 + 차 · 간판 히어로 · CODE · 코너 · 도크 조감 · 망원 · 게이트

## 7. 피그마 노드 맵

| 무엇 | 노드 |
|---|---|
| 사이니지 카드 12장 (Cards / Tall) | 섹션 1444:7171, 카드 1387:626 CULTURE … 1387:1356 MAKER |
| 차 앞 스크린 12장 (차량인포 섹션 1444:7169) | CULTURE 1471:7173, STORY 1483:625, ART 1483:741, SCIENCE 1483:866, NATURE 1483:983, CODE 1483:1098, CITY 1483:1222, MEDIA 1483:6763, MUSIC 1483:6875, OPEN 1483:6987, ACTIVE 1483:7105, MAKER 1483:7215 |
| 앱 5화면 (유아이) | 섹션 1444:7170 |
| STORY 픽셀 아트 흩날림 버전 | 원본 1491:3725 → Scatter 1493:625 |
| 불규칙 흩날림 그리드 패턴 | 1491:3934 (수정본) · 원본 백업 1495:625 |

카드 순서(코드 CARDS·SCREENS 인덱스): 0 CULTURE, 1 STORY, 2 ART, 3 SCIENCE, 4 NATURE, 5 CODE, 6 CITY, 7 MEDIA, 8 MUSIC, 9 OPEN, 10 ACTIVE, 11 MAKER.
도크 → 카드: `floor(((no*2654435761) % 2^32) / 2^32 * 12)`. 30대 기준 NATURE = 12·20번, CODE = 4·25번 도크.

## 8. 코드 지도 (index.html)

- `geo(S)`: 배치 계산(포켓·도크 줄·도크 좌표·서비스 코어 최적 위치). DOM 없음
- `walkPath / toPlace / coreDist`: 아이 보행 경로와 거리
- `row() / render()`: 2D SVG
- `best()`: 기획안 최적버전 탐색
- `build3D(G)`: 3D 장면 전체. `car()` 차량, `person()` 마네킹, `cardMats()` 사이니지, `screenMat()` 앞 스크린, `signTex()` 영문 간판
- `cam3(k)`: 카메라 칩. `captureSigns()` 간판 레이어, `capture3()` PNG
- 데이터: `CARDS`, `SCREENS` (피그마 PNG를 data URI로 내장)
- 에셋 원본: 이 폴더 `assets/cards/`(800×3040), `assets/screens/`(1096×216)

## 9. 알려진 함정 (다시 안 밟기)

- SVG 텍스트: CSS에 `text-anchor`·`fill`을 직접 주면 요소 속성이 무시됨 → 루트에 상속으로
- 본문 `letter-spacing`이 SVG로 상속되면 1px대 글자가 겹침 → `#plan{letter-spacing:0}` + `geometricPrecision`
- `[hidden]`은 `.box{display:grid}`에 지므로 `[hidden]{display:none!important}` 필요
- Three.js r128: 색 코드는 `convertSRGBToLinear()` 안 하면 전부 뿌옇게 뜸
- 3D 캔버스는 `setSize(w,h,false)`로, 크기는 CSS에 맡겨야 전체화면 뒤 레이아웃이 안 깨짐
- 렌더 루프는 장면이 생긴 뒤에만 (`!R3.scene` 가드)
- 피그마에서 카드 그래픽을 복제하면 `layoutPositioning: ABSOLUTE`가 따라와 화면 밖으로 빠짐 → `'AUTO'`
- 피그마 `get_screenshot`은 원본 크기 이상으로 안 키워 줌 → 4배로 `rescale()`한 임시 복제본을 찍고 삭제
- 한 줄 끝에 `//` 주석을 붙이는 치환은 뒤 코드를 삼킬 수 있음 → 수정 후 조합 전수 검사

## 10. 다음 할 일 후보

- 보조 코어(반대쪽 끝 화장실·응급함)로 가장 먼 거리 줄이기
- 톱니형 승강장(후진 없음) 안을 비교표에 추가
- PV7 양산형 제원(9/14 IAA 공개) 반영
- 2D 범례의 가림판 색을 3D처럼 남색으로 통일
- 포폴용 내보내기: 윤곽선·깊이 가이드 컷 (AI 렌더 가이드용)
- 간판 히어로 컷에서 앞 마네킹 빼는 옵션
- 아이 키 1.39 m는 추정값 → 질병관리청 성장도표 원자료로 확인
