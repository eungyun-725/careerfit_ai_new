import { useState } from "react";

function InputForm({ onSubmit, isLoading }) {
  const [major, setMajor] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [jobType, setJobType] = useState("");

  function handleSubmit() {
    if (!major.trim() || !skillsInput.trim() || !jobType.trim()) {
      return;
    }

    const skills = skillsInput
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    onSubmit({
      major: major.trim(),
      skills,
      jobType: jobType.trim(),
    });
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          내 정보 입력
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          전공, 보유 스킬, 관심 직무를 입력하면 AI가 맞춤형 포트폴리오 방향을 분석합니다.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            전공
          </label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="예: 통계학과"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            보유 스킬
          </label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="예: Python, SQL, R"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-xs text-slate-400">
            여러 개의 스킬은 쉼표로 구분해 주세요.
          </p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            관심 직무
          </label>
          <input
            type="text"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            placeholder="예: 데이터 분석"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading || !major.trim() || !skillsInput.trim() || !jobType.trim()}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isLoading ? "분석 중..." : "역량 분석 요청"}
        </button>
      </div>
    </div>
  );
}

export default InputForm;