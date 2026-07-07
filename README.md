# careerfit_ai_new

# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요



CareerFit AI는 사용자의 전공, 보유 스킬, 관심 직무를 입력받아
취업 공고 데이터를 기반으로 현재 역량을 분석하고
부족한 역량과 추천 프로젝트를 제안하는
RAG 기반 AI 포트폴리오 코치 서비스입니다.

### 대상 사용자

- 부족한 역량이나 스펙을 채우고자 하는 취업 준비생



## 기술 스택



| 영역 | 기술 |

|---|---|

| 백엔드 | Python, FastAPI |

| AI API | Gemini 2.5 Flash-Lite |

| 데이터 | Pandas, SQLite, ChromaDB |

| 프론트엔드 | React, Vite |

| 실행 환경 | Docker |

## 시스템 구조

```text
사용자 입력
↓
React UI
↓
FastAPI /analyze
↓
ChromaDB 검색 (RAG)
↓
Gemini 분석
↓
분석 결과 + 출처 반환
↓
ResultCard + SourceCard
```

## 주요 기능

### 역량 분석

- 전공 입력
- 보유 스킬 입력
- 관심 직무 입력

### RAG 기반 분석

- 관련 공고 검색
- Gemini 기반 분석
- confidence 반환

### 출처 제공

- 참고 공고 표시
- 매칭 이유 제공

## 아키텍처

```text
Frontend (React)
↓
FastAPI
↓
RAG Layer (ChromaDB)
↓
Gemini API
```

## 배포

Backend

https://careerfit-ai-new.onrender.com/

Health Check

https://careerfit-ai-new.onrender.com/health


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



## 진행 현황



- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
    - Python 개발 환경과 FastAPI 백엔드 기본 구조를 세팅했습니다.
    - `/health`, `/jobs`, `/analyze` 엔드포인트를 구현해 API 흐름을 확인했습니다.
    - Gemini 2.5 Flash-Lite API를 연결해 LLM 응답 생성 구조를 테스트했습니다.
    - `MOCK_MODE` 환경변수를 설정해 API 한도 초과 상황에서도 mock 응답으로 개발을 이어갈 수 있도록 했습니다.

    ### 2일차 주요 성과

    - FastAPI 기반 백엔드 서버를 구축하고 `/health`, `/jobs`, `/analyze` API를 구현했습니다.
    - Gemini 2.5 Flash-Lite API를 연동하여 생성형 AI 응답 생성 구조를 완성했습니다.
    - MOCK_MODE를 도입하여 API 한도 초과 상황에서도 안정적으로 개발할 수 있는 환경을 구축했습니다.


- [x] 3일차: 데이터 파이프라인 구축
    - 3일차에는 취업 공고 CSV 데이터를 Pandas로 전처리했습니다.
    - 결측치 처리, 중복 제거, 스킬 표준화 과정을 통해 분석 가능한 데이터로 정리했습니다.
    - 전처리된 데이터를 SQLite 데이터베이스(`careerfit.db`)에 저장했습니다.
    - RAG 검색을 위해 공고 데이터를 문서 형태로 변환하고 ChromaDB 저장 구조를 준비했습니다.
    - ChromaDB 검색 테스트를 통해 관련 공고가 검색되는지 확인했습니다.
    
    ### 3일차 주요 성과

    - 취업 공고 데이터를 전처리하고 SQLite·ChromaDB에 저장하는 데이터 파이프라인을 구축했습니다.
    - 데이터 분석 직무와 금융·보험 분야 공고를 중심으로 RAG 검색 환경을 구현했습니다.
    - Python, AI, 데이터 분석 역량을 기반으로 관련 공고를 검색할 수 있도록 구조를 설계했습니다.


- [x] 4일차: RAG 기반 서비스 + React UI
    ### Backend
    -ChromaDB 기반 문서 검색 기능 구현
    -search_documents() 구현
    -Gemini와 RAG 연동
    -/analyze API를 RAG 기반 응답으로 개선
    -answer + sources + confidence 반환
    
    ### Frontend
    -React + Vite 프로젝트 구성
    -Tailwind CSS 적용
    -InputForm 컴포넌트 구현
    -ResultCard 컴포넌트 구현
    -SourceCard 컴포넌트 구현
    -fetch를 이용한 FastAPI 연동
    -분석 결과 및 출처 시각화
    
    ### UI 설계
    -design-skill.md 작성
    -전문성 + 친근함 중심 디자인 적용
    -Blue + Slate 컬러 시스템 적용
    -Empty / Loading / Success / Error 상태 구분

    ### 4일차 주요 성과

    - RAG 기반 역량 분석 서비스를 구현하여 사용자의 전공·스킬·관심 직무에 맞는 분석 결과를 제공했습니다.
    - React UI를 통해 분석 결과, 부족한 역량, 추천 프로젝트, 출처 공고를 시각화했습니다.
    - 통계학과 학생의 데이터 분석 진로 탐색을 지원하는 AI 포트폴리오 코치 서비스를 완성했습니다.

- [x] 5일차: Docker + 포트폴리오 완성
    
    -  Dockerfile 작성 및 컨테이너 환경 구성
    -  Docker 이미지 빌드 및 로컬 실행 테스트
    -  환경변수(.env) 분리 및 보안 설정 점검
    -  비루트 사용자 실행 및 Health Check 적용
    -  Render를 활용한 백엔드 배포
    -  React UI 최종 개선 및 사용자 경험(UX) 정리
    -  README 및 포트폴리오 문서화
    -  GitHub Repository 최종 정리

    ### 5일차 주요 성과

    - FastAPI + Gemini + ChromaDB 기반 RAG 서비스를 Docker 환경에서 실행 가능하도록 구성
    - Render 배포를 통해 외부에서 접근 가능한 서비스 형태로 전환
    - React UI를 개선하여 분석 결과, 신뢰도, 출처 정보를 직관적으로 확인할 수 있도록 구현
    - 프로젝트 구조, 실행 방법, 기술 선택 이유를 README에 문서화하여 포트폴리오 수준으로 정리


## 보안

- API Key는 .env 파일로 관리
- .env 파일은 GitHub에 업로드하지 않음
- React 코드에 API Key 저장 금지
- Render 환경변수로 API Key 주입

## 프로젝트 결과

- FastAPI + Gemini 기반 AI 분석 서비스 구현
- ChromaDB 기반 RAG 검색 환경 구축
- React UI를 통한 사용자 입력 및 결과 시각화
- Docker 컨테이너화 및 Render 배포 완료
- GitHub 기반 프로젝트 문서화 완료

## 아쉬웠던 점

### 1. 제한된 데이터셋

이번 프로젝트에서는 제공된 취업 공고 데이터를 활용하여 RAG 시스템을 구축했습니다.

실제 서비스 수준에서는 다양한 채용 플랫폼의 최신 공고 데이터를 지속적으로 반영해야 하지만, 프로젝트 기간 내에는 구현하지 못했습니다.

### 2. RAG 검색 품질 평가 부족

ChromaDB를 이용한 의미 기반 검색은 구현했지만, 검색 결과의 정확도와 관련성을 정량적으로 평가하는 자동화된 평가 체계는 구축하지 못했습니다.

### 3. 사용자 맞춤 기능 부족

현재는 전공, 보유 스킬, 관심 직무를 기반으로 분석을 수행하지만, 학년, 프로젝트 경험, 자격증, 대외활동 등의 추가 정보를 반영하지 못했습니다.

### 4. 프론트엔드 기능 한계

React UI를 구현했지만 사용자 로그인, 분석 결과 저장, 이력 관리 기능은 구현하지 못했습니다.

---

## 향후 보완 사항

### 1. 실시간 공고 데이터 연동

채용 플랫폼 API 또는 크롤링을 활용하여 최신 공고 데이터를 자동으로 수집하고 반영할 예정입니다.

### 2. RAG 평가 자동화

검색 정확도, 근거성, 답변 품질을 측정할 수 있는 평가 지표를 구축하여 RAG 성능을 개선할 계획입니다.

### 3. 이력서 분석 기능 추가

PDF 이력서를 업로드하면 보유 역량을 자동 분석하고 부족한 역량을 추천하는 기능을 추가할 계획입니다.

### 4. 맞춤형 포트폴리오 생성

사용자의 관심 직무와 부족한 역량을 기반으로 프로젝트 주제와 학습 로드맵을 자동 생성하는 기능을 추가할 계획입니다.

### 5. 사용자 경험 개선

분석 결과 저장, 이전 분석 조회, 반응형 UI 개선 등을 통해 실제 서비스 수준의 사용자 경험을 제공할 계획입니다.

### 개인적으로 배운 점

통계학과에서 주로 다루던 데이터 분석 과정을 넘어 FastAPI, ChromaDB, React, Docker를 활용한 AI 서비스 개발 전 과정을 경험할 수 있었습니다. 특히 RAG 구조를 직접 구현하면서 데이터 처리와 생성형 AI를 연결하는 방법을 이해할 수 있었습니다.