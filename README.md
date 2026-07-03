# careerfit_ai_new

# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요



취업에 필요한 스펙, 공모전을 손쉽게 알려주는 서비스


## 기술 스택



| 영역 | 기술 |

|---|---|

| 백엔드 | Python, FastAPI |

| AI API | Gemini 2.5 Flash-Lite |

| 데이터 | Pandas, SQLite, ChromaDB |

| 프론트엔드 | React, Vite |

| 실행 환경 | Docker |


## 🚀 로컬 실행 방법

### 1. 백엔드 폴더로 이동

```bash
cd backend
```

### 2. Python 가상환경 생성 및 활성화

```bash
python -m venv venv
```

macOS / Linux:

```bash
source venv/bin/activate
```

### 3. 필요한 패키지 설치

```bash
pip install -r requirements.txt
```

### 4. 환경변수 설정

`backend/.env` 파일을 생성하고 아래 항목을 설정합니다.

```bash
GEMINI_API_KEY=발급받은_API_KEY
MOCK_MODE=true
LLM_MODEL=gemini-2.5-flash-lite
```

> `.env` 파일은 API Key가 포함되므로 GitHub에 올리지 않습니다. `.gitignore`에 `.env`가 포함되어 있는지 확인합니다.

### 5. FastAPI 서버 실행

```bash
uvicorn main:app --reload
```

### 6. 실행 확인

브라우저에서 아래 주소에 접속해 API가 정상 동작하는지 확인합니다.

* 서버 상태 확인: `http://localhost:8000/health`
* API 문서 확인: `http://localhost:8000/docs`
* 공고 목록 API: `http://localhost:8000/jobs`

현재 2일차 기준으로 `/health`, `/jobs`, `/analyze` 엔드포인트를 구현했으며, `MOCK_MODE=true` 설정 시 Gemini API 호출 없이 mock 응답으로 테스트할 수 있습니다.

## 진행 현황



- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
    * Python 개발 환경과 FastAPI 백엔드 기본 구조를 세팅했습니다.
    * `/health`, `/jobs`, `/analyze` 엔드포인트를 구현해 API 흐름을 확인했습니다.
    * Gemini 2.5 Flash-Lite API를 연결해 LLM 응답 생성 구조를 테스트했습니다.
    * `MOCK_MODE` 환경변수를 설정해 API 한도 초과 상황에서도 mock 응답으로 개발을 이어갈 수 있도록 했습니다.

- [x] 3일차: 데이터 파이프라인 구축
    * 3일차에는 취업 공고 CSV 데이터를 Pandas로 전처리했습니다.
    * 결측치 처리, 중복 제거, 스킬 표준화 과정을 통해 분석 가능한 데이터로 정리했습니다.
    * 전처리된 데이터를 SQLite 데이터베이스(`careerfit.db`)에 저장했습니다.
    * RAG 검색을 위해 공고 데이터를 문서 형태로 변환하고 ChromaDB 저장 구조를 준비했습니다.
    * ChromaDB 검색 테스트를 통해 관련 공고가 검색되는지 확인했습니다.
    
    ### 내가 추가할 관심 직무 분야
    - 관심 직무 1: 계리 데이터 분석
    - 관심 직무 2: 보험 AI 서비스 기획
    ### 내가 추가할 공모전 분야
    - 공모전 분야: 금융데이터 분석, 보험 관련 공모전
    ### 강조하고 싶은 스킬 키워드
    - Python, 딥러닝, ai에이전트
    나는 [통계학과 학생]이고 데이터 분석 직무에 관심이 있어.

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성
