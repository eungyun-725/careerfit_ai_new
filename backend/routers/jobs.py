from fastapi import APIRouter

from typing import List

router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다

MOCK_JOBS = [
    {
        "id": 1,
        "company": "삼성생명",
        "title": "보험상품개발",
        "required_skills": ["Excel", "R", "통계분석"],
        "preferred_skills": ["SAS", "IFRS17", "금융수학"],
        "description": "생명보험 신규·개정 상품의 보험료·준비금을 산출하고 상품 설계안을 검토합니다. 사망률·해지율 등 경험통계를 분석해 요율의 타당성을 검증하는 업무를 담당합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 2,
        "company": "KB손해보험",
        "title": "손해보험 상품기획",
        "required_skills": ["SQL", "Python", "Excel"],
        "preferred_skills": ["Tableau", "손해율 분석", "보험업법"],
        "description": "자동차·일반 손해보험 상품의 시장 조사와 손해율·수익성 분석을 수행합니다. 언더라이팅 기준과 요율 구조를 검토하고, 신규 담보·특약 기획에 통계적 근거를 제공합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 3,
        "company": "한화생명",
        "title": "계리·상품분석",
        "required_skills": ["통계학", "Excel", "R"],
        "preferred_skills": ["Python", "Prophet", "보험계리사"],
        "description": "기존 상품의 수익성·지속성을 모니터링하고, 민감도 분석·시나리오 테스트로 상품 리스크를 평가합니다. 계리 모형과 경험지표를 활용해 상품 개선 및 감독 보고 자료 작성을 지원합니다.",
        "deadline": "2026-08-31"
    }
]


@router.get("/jobs", tags=["Jobs"])

def get_jobs():

    """

    취업 공고 목록을 반환하는 엔드포인트.

    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.

    """

    return {

        "count": len(MOCK_JOBS),

        "jobs": MOCK_JOBS

    }


@router.get("/jobs/{job_id}", tags=["Jobs"])

def get_job_by_id(job_id: int):

    """

    특정 공고의 상세 정보를 반환한다.

    """

    for job in MOCK_JOBS:

        if job["id"] == job_id:

            return job

    # 찾지 못한 경우

    from fastapi import HTTPException

    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")


