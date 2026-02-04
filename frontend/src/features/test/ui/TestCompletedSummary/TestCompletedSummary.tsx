import type { TestAttemptResult } from '@/entities/test/test'

interface TestCompletedSummaryProps {
    result: TestAttemptResult
    onViewResults: () => void
}

export const TestCompletedSummary = ({ result, onViewResults }: TestCompletedSummaryProps) => {
    const parsedResults = JSON.parse(result.resultJson)
    const { correctCount, totalCount } = parsedResults

    const percentage = Math.round(result.score)
    const isPassed = percentage >= 70

    return (
        <div>
            <h2 className="display-6 mg-bottom-24px">Test Completed</h2>

            <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
                <div className={`display-8 bold mg-bottom-16px ${isPassed ? 'text-success' : 'text-error'}`}>
                    {correctCount} out of {totalCount} correct
                </div>

                <div className={`display-4 mg-bottom-24px ${isPassed ? 'text-success' : 'text-error'}`}>
                    Score: {percentage}%
                </div>

                <p className="text-neutral-600 mg-bottom-24px">
                    {isPassed
                        ? '🎉 Congratulations! You passed the test.'
                        : 'You need at least 70% to pass. Review the material and try again.'}
                </p>

                <p className="text-neutral-600 mg-bottom-32px">
                    No attempts remaining
                </p>

                <button
                    className="button-primary w-button"
                    onClick={onViewResults}
                >
                    View Results
                </button>
            </div>
        </div>
    )
}