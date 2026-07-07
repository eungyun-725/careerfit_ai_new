function SourceCard({ sources }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
        참고한 공고가 없습니다. 입력 정보를 더 구체적으로 작성해보세요.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          📄 참고한 공고 출처
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          AI가 분석에 참고한 취업·공모전 데이터입니다.
        </p>
      </div>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div
            key={source.source_id || index}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-800">
                {source.title || "제목 정보 없음"}
              </p>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {source.type || "source"}
              </span>
            </div>

            <p className="text-sm text-slate-600">
              {source.matched_reason || "매칭 이유 정보가 없습니다."}
            </p>

            {source.source_id && (
              <p className="mt-2 text-xs text-slate-400">
                source_id: {source.source_id}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCard;