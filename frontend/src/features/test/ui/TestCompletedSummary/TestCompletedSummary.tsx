import type {TestAttemptSummary} from '@/entities/test/test'

interface TestCompletedSummaryProps {
    result: TestAttemptSummary
    onViewResults: () => void
}

export const TestCompletedSummary = ({ result, onViewResults }: TestCompletedSummaryProps) => {
    const { correctCount, totalCount, score, attemptedAt } = result

    const percentage = Math.round(score)

    // Форматируем дату прохождения теста
    const attemptDate = new Date(attemptedAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    return (
        <div>
            {/* Карточка с результатами */}
            <div className="card bg-neutral-300" style={{ padding: '40px' }}>
                <div className="grid-2-columns" style={{
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    gap: '48px'
                }}>
                    {/* Левая часть - основная информация */}
                    <div>
                        <h2 className="display-5 bold text-neutral-800 mg-bottom-8px">
                            Solved correctly {correctCount} {correctCount === 1 ? 'question' : 'questions'} out of {totalCount}
                        </h2>
                        <p className="display-2 text-neutral-600 mg-bottom-24px">
                            No attempts remaining
                        </p>

                        <button
                            className="button-primary w-button"
                            onClick={onViewResults}
                        >
                            View Results
                        </button>
                    </div>

                    {/* Правая часть - детали */}
                    <div style={{ minWidth: '240px' }}>
                        {/* Баллы */}
                        <div className="mg-bottom-24px">
                            <div className="display-1 text-neutral-600 mg-bottom-4px">
                                Score
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="display-3 bold text-neutral-800">
                                   {percentage}%
                                </span>
                            </div>
                        </div>

                        {/* Дата прохождения */}
                        <div>
                            <div className="display-1 text-neutral-600 mg-bottom-4px">
                                Completed on
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="display-2 text-neutral-800">
                                    {attemptDate}
                                </span>
                                <span style={{ fontSize: '16px', opacity: 0.4 }}>📅</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}