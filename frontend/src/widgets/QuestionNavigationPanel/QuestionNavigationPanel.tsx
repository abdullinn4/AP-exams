import type { QuestionForStudent, TestAnswers } from '@/entities/test/test'

interface QuestionNavigationPanelProps {
    questions: QuestionForStudent[]
    answers: TestAnswers
    currentQuestionIndex: number
    onQuestionSelect: (index: number) => void
    onFinishTest: () => void
    isSubmitting?: boolean
}

export const QuestionNavigationPanel = ({
                                            questions,
                                            answers,
                                            currentQuestionIndex,
                                            onQuestionSelect,
                                            onFinishTest,
                                            isSubmitting = false
                                        }: QuestionNavigationPanelProps) => {
    return (
        <div className="card cta-v7-card" style={{ padding: '16px' }}>
            <div className="z-index-1">
                <div className="test-questions-grid mg-bottom-24px">
                    {questions.map((question, index) => {
                        const isAnswered = !!answers[question.id]
                        const isCurrent = index === currentQuestionIndex

                        return (
                            <button
                                key={question.id}
                                onClick={() => onQuestionSelect(index)}
                                className={`test-question-box ${isAnswered ? 'answered' : 'unanswered'} ${isCurrent ? 'current' : ''}`}
                                disabled={isSubmitting}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                </div>

                <button
                    className="button-primary white w-button"
                    onClick={onFinishTest}
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Finish Test'}
                </button>
            </div>
            <div className="blur-bg bg-cta-v7"></div>
        </div>
    )
}