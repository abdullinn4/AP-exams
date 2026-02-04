import type { TestAttemptResult } from '@/entities/test/test'

interface TestResultsViewProps {
    result: TestAttemptResult
}

export const TestResultsView = ({ result }: TestResultsViewProps) => {
    const parsedResults = JSON.parse(result.resultJson)
    const { correctCount, totalCount, results } = parsedResults

    const percentage = Math.round((correctCount / totalCount) * 100)
    const isPassed = percentage >= 70

    return (
        <div>
            <div className="mg-bottom-40px" style={{ textAlign: 'center' }}>
                <h2 className="display-6 mg-bottom-16px">Test Completed!</h2>
                <div className={`display-9 bold ${isPassed ? 'text-success' : 'text-error'}`}>
                    {percentage}%
                </div>
                <p className="text-neutral-600 mg-top-16px">
                    You got {correctCount} out of {totalCount} questions correct
                </p>
            </div>

            <div className="card" style={{ padding: '32px' }}>
                <h3 className="display-5 mg-bottom-24px">Results Breakdown</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(results).map(([questionId, isCorrect], index) => (
                        <div
                            key={questionId}
                            className="card"
                            style={{
                                padding: '16px 24px',
                                background: isCorrect ? '#f0fdf4' : '#fef2f2',
                                border: `2px solid ${isCorrect ? '#86efac' : '#fca5a5'}`,
                                borderRadius: '12px'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: isCorrect ? '#22c55e' : '#ef4444',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {isCorrect ? '✓' : '✗'}
                                </div>
                                <div>
                                    <span className="display-2 bold">Question {index + 1}</span>
                                    <span className={`display-1 ${isCorrect ? 'text-success' : 'text-error'}`} style={{ marginLeft: '12px' }}>
                                        {isCorrect ? 'Correct' : 'Incorrect'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mg-top-32px" style={{ textAlign: 'center' }}>
                    {isPassed ? (
                        <div className="card" style={{ padding: '24px', background: '#f0fdf4', border: '2px solid #86efac' }}>
                            <h4 className="display-4 text-success mg-bottom-8px">🎉 Congratulations!</h4>
                            <p className="text-neutral-600">You passed the test! You can now proceed to the next lesson.</p>
                        </div>
                    ) : (
                        <div className="card" style={{ padding: '24px', background: '#fef2f2', border: '2px solid #fca5a5' }}>
                            <h4 className="display-4 text-error mg-bottom-8px">Keep Practicing</h4>
                            <p className="text-neutral-600">You need at least 70% to pass. Review the material and try again.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}