import type {TestResultDetailsResponse} from '@/entities/test/test'
import {useMemo, useState} from 'react'
import {QuestionRenderer} from '@/widgets/QuestionRenderer'
import {QuestionNavigationPanel} from '@/widgets/QuestionNavigationPanel'
import {QuestionResultItem} from "@/features/test/ui/QuestionResultItem";

interface TestResultsViewProps {
    resultDetails: TestResultDetailsResponse
    onBackToSummary: () => void
}

export const TestResultsView = ({resultDetails, onBackToSummary}: TestResultsViewProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const currentQuestionResult = resultDetails.questions[currentQuestionIndex]

    const goToQuestion = (index: number) => {
        const clamped = Math.max(0, Math.min(index, resultDetails.questions.length - 1))
        setCurrentQuestionIndex(clamped)
    }

    const handleNextQuestion = () => goToQuestion(currentQuestionIndex + 1)
    const handlePreviousQuestion = () => goToQuestion(currentQuestionIndex - 1)

    // Формируем массив статусов для QuestionNavigationPanel
    const questionStatuses = resultDetails.questions.map(result =>
        result.isCorrect ? 'correct' : 'incorrect'
    ) as ('correct' | 'incorrect')[]

    // Формируем массив вопросов для QuestionNavigationPanel
    const questions = useMemo(
        () =>
            resultDetails.questions.map(r => ({
                id: r.questionId,
                prompt: r.prompt,
                optionsJson: r.optionsJson,
                type: r.type,
                imageUrl: r.imageUrl
            })),
        [resultDetails.questions]
    )


    if (!resultDetails.questions || resultDetails.questions.length === 0) {
        return (
            <div style={{textAlign: 'center', padding: '40px'}}>
                <p>No results available</p>
            </div>
        )
    }

    return (
        <div>
            <div className="w-layout-grid grid-2-columns"
                 style={{gridTemplateColumns: '2fr 1fr', gap: '32px', alignItems: 'start'}}>
                {/* Левая колонка - вопросы */}
                <div>
                    <div className="card">
                        <div style={{padding: '32px'}}>
                            <QuestionRenderer
                                question={{
                                    id: currentQuestionResult.questionId,
                                    prompt: currentQuestionResult.prompt,
                                    optionsJson: currentQuestionResult.optionsJson,
                                    type: currentQuestionResult.type,
                                    imageUrl: currentQuestionResult.imageUrl
                                }}
                                questionNumber={currentQuestionIndex + 1}
                            />

                            <QuestionResultItem questionResult={currentQuestionResult}/>

                            {/* Кнопки навигации */}
                            <div className="mg-top-32px"
                                 style={{display: 'flex', gap: '16px', justifyContent: 'space-between'}}>
                                <button
                                    className="button-primary w-button"
                                    onClick={handlePreviousQuestion}
                                    disabled={currentQuestionIndex === 0}
                                    style={{opacity: currentQuestionIndex === 0 ? 0.5 : 1}}
                                >
                                    Previous Question
                                </button>

                                <button
                                    className="button-primary w-button"
                                    onClick={handleNextQuestion}
                                    disabled={currentQuestionIndex === resultDetails.questions.length - 1}
                                    style={{opacity: currentQuestionIndex === resultDetails.questions.length - 1 ? 0.5 : 1}}
                                >
                                    Next Question
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая колонка - навигация */}
                <div style={{position: 'sticky', top: '24px'}}>
                    <QuestionNavigationPanel
                        questions={questions}
                        currentQuestionIndex={currentQuestionIndex}
                        onQuestionSelect={goToQuestion}
                        mode="results"
                        questionStatuses={questionStatuses}
                    />

                    {/* Блок результатов под навигацией */}
                    <div className="card bg-neutral-300 mg-top-24px"
                         style={{padding: '20px', textAlign: 'center', background: '#DCDCDC'}}>
                        <div className="display-2 text-neutral-600 mg-bottom-8px">
                            Your Score
                        </div>
                        <div className="display-4 bold text-neutral-800">
                            {resultDetails.correctCount}/{resultDetails.totalCount} correct
                        </div>
                    </div>
                    <button
                        onClick={onBackToSummary}
                        className="button-primary w-button mg-top-16px"
                        style={{width: '100%'}}
                    >
                        Back to Summary
                    </button>
                </div>
            </div>
        </div>
    )
}