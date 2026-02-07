import type { QuestionForStudent, TestAnswers } from '@/entities/test/test'

type QuestionStatus = 'answered' | 'unanswered' | 'correct' | 'incorrect'

interface QuestionNavigationPanelProps {
    questions: QuestionForStudent[]
    currentQuestionIndex: number
    onQuestionSelect: (index: number) => void

    // Для режима прохождения теста
    answers?: TestAnswers
    onFinishTest?: () => void
    isSubmitting?: boolean

    // Для режима просмотра результатов
    mode?: 'test' | 'results'
    questionStatuses?: QuestionStatus[]

}

export const QuestionNavigationPanel = ({
                                            questions,
                                            currentQuestionIndex,
                                            onQuestionSelect,
                                            answers = {},
                                            onFinishTest,
                                            isSubmitting = false,
                                            mode = 'test',
                                            questionStatuses,
                                        }: QuestionNavigationPanelProps) => {

    const getQuestionStatus = (index: number): QuestionStatus => {
        if (mode === 'results') {
            if (!questionStatuses) {
                console.warn('questionStatuses is required in results mode')
                return 'unanswered'
            }
            return questionStatuses[index]
        }

        const question = questions[index]
        const answer = answers?.[question.id]

        if (Array.isArray(answer)) {
            return answer.length > 0 ? 'answered' : 'unanswered'
        }

        return answer != null && answer !== '' ? 'answered' : 'unanswered'
    }


    const getStatusClassName = (status: QuestionStatus, isCurrent: boolean): string => {
        const baseClass = 'test-question-box'
        const statusClass = status
        const currentClass = isCurrent ? 'current' : ''
        return `${baseClass} ${statusClass} ${currentClass}`
    }

    return (
        <div className="card cta-v7-card" style={{ padding: '16px' }}>
            <div className="z-index-1">
                <div className="test-questions-grid mg-bottom-24px">
                    {questions.map((question, index) => {
                        const status = getQuestionStatus(index)
                        const isCurrent = index === currentQuestionIndex

                        return (
                            <button
                                key={question.id}
                                onClick={() => onQuestionSelect(index)}
                                className={getStatusClassName(status, isCurrent)}
                                disabled={isSubmitting}
                                aria-current={isCurrent ? 'step' : undefined}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                </div>

                {/* Кнопка Finish Test (только для режима test) */}
                {mode === 'test' && onFinishTest && (
                    <button
                        className="button-primary white w-button"
                        onClick={onFinishTest}
                        style={{ width: '100%' }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Finish Test'}
                    </button>
                )}
            </div>
            <div className="blur-bg bg-cta-v7"></div>
        </div>
    )
}