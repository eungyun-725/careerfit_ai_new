import { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import SourceCard from "./components/SourceCard";

const API_BASE = "http://localhost:8000";
// ⚠️ API Key는 절대 React 코드에 넣지 않습니다.

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleAnalyze(formData) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          major: formData.major,
          skills: formData.skills,
          job_type: formData.jobType,
        }),
      });

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      if (err.message.includes("Failed to fetch")) {
        setError(
          "FastAPI 서버에 연결할 수 없습니다. localhost:8000 서버가 실행 중인지 확인하세요."
        );
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <main className="mx-auto max-w-4xl space-y-6">
        <header className="text-center">
          <p className="mb-2 text-sm font-medium text-blue-600">
            취업·공모전 데이터 기반 AI 코치
          </p>
          <h1 className="text-3xl font-bold text-slate-900">
            CareerFit AI
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            전공, 보유 스킬, 관심 직무를 입력하면 맞춤형 포트폴리오 준비 방향을 제안합니다.
          </p>
        </header>

        <InputForm onSubmit={handleAnalyze} isLoading={isLoading} />

        {!result && !isLoading && !error && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-700">
              아직 분석 전입니다.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              위 입력칸을 채우고 역량 분석 요청 버튼을 눌러보세요.
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {isLoading && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center text-sm text-blue-700">
            분석 중입니다. AI가 입력 정보를 바탕으로 관련 공고를 확인하고 있습니다...
          </div>
        )}

        {result && (
          <div className="space-y-4">
            <ResultCard
              answer={result.answer}
              matchedSkills={result.matched_skills}
              missingSkills={result.missing_skills}
              recommendedProjects={result.recommended_projects}
              confidence={result.confidence}
            />

            <SourceCard sources={result.sources || []} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;