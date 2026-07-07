function BadgeList({ title, items = [], color = "blue", emptyText = "표시할 항목이 없습니다." }) {
  const colorClass =
    color === "amber"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : "border-blue-200 bg-blue-50 text-blue-700";

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-800">
        {title}
      </h3>

      {items && items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={`rounded-full border px-3 py-1 text-sm font-medium ${colorClass}`}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">{emptyText}</p>
      )}
    </section>
  );
}

function ResultCard({
  answer,
  matchedSkills = [],
  missingSkills = [],
  recommendedProjects = [],
  confidence = "unknown",
}) {
  const confidenceValue = String(confidence).toLowerCase();

  const confidenceClass =
    confidenceValue === "high"
      ? "border-blue-200 bg-blue-50 text-blue-700"
      : confidenceValue === "low"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : "border-slate-200 bg-slate-50 text-slate-600";

  const confidenceText =
    confidenceValue === "high"
      ? "높음"
      : confidenceValue === "low"
      ? "낮음"
      : "확인 필요";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            📊 AI 분석 결과
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            입력한 전공과 스킬을 바탕으로 포트폴리오 준비 방향을 정리했습니다.
          </p>
        </div>

        <span
          className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${confidenceClass}`}
        >
          신뢰도: {confidenceText}
        </span>
      </div>

      <section className="rounded-xl border border-slate-100 bg-slate-50 p-5">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          핵심 분석
        </h3>
        <p className="max-h-72 overflow-y-auto whitespace-pre-line break-words text-base leading-7 text-slate-700">
          {answer || "아직 분석 결과가 없습니다."}
        </p>
      </section>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <BadgeList
          title="잘 맞는 스킬"
          items={matchedSkills}
          color="blue"
          emptyText="아직 매칭된 스킬이 없습니다."
        />

        <BadgeList
          title="추가로 준비하면 좋은 스킬"
          items={missingSkills}
          color="amber"
          emptyText="추가 준비 스킬 정보가 없습니다."
        />
      </div>

      <div className="mt-4">
        <BadgeList
          title="추천 프로젝트 방향"
          items={recommendedProjects}
          color="blue"
          emptyText="추천 프로젝트 정보가 없습니다."
        />
      </div>
    </div>
  );
}

export default ResultCard;