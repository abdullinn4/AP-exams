import type {TestResultDetailsResponse} from '@/entities/test/test'
import {useMemo, useState} from 'react'
import {QuestionRenderer} from '@/widgets/QuestionRenderer'
import {QuestionNavigationPanel} from '@/widgets/QuestionNavigationPanel'

interface TestResultsViewProps {
    resultDetails: TestResultDetailsResponse
}

export const TestResultsView = ({resultDetails}: TestResultsViewProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const currentQuestionResult = resultDetails.questionResults[currentQuestionIndex]

    const goToQuestion = (index: number) => {
        const clamped = Math.max(0, Math.min(index, resultDetails.questionResults.length - 1))
        setCurrentQuestionIndex(clamped)
    }

    const handleNextQuestion = () => goToQuestion(currentQuestionIndex + 1)
    const handlePreviousQuestion = () => goToQuestion(currentQuestionIndex - 1)

    const parseAnswers = (answer: string): string[] => {
        try {
            const parsed = JSON.parse(answer)
            return Array.isArray(parsed) ? parsed : [answer]
        } catch {
            return [answer]
        }
    }

    const options = useMemo(() => {
        if (currentQuestionResult.type !== 'MULTIPLE_CHOICE' && currentQuestionResult.type !== 'SINGLE_CHOICE') return []
        try {
            return JSON.parse(currentQuestionResult.optionsJson)
        } catch {
            return []
        }
    }, [currentQuestionResult.optionsJson, currentQuestionResult.type])

    const userAnswers = useMemo(() => parseAnswers(currentQuestionResult.userAnswer), [currentQuestionResult.userAnswer])
    const correctAnswers = useMemo(() => parseAnswers(currentQuestionResult.correctAnswer), [currentQuestionResult.correctAnswer])

    // Формируем массив статусов для QuestionNavigationPanel
    const questionStatuses = resultDetails.questionResults.map(result =>
        result.isCorrect ? 'correct' : 'incorrect'
    ) as ('correct' | 'incorrect')[]

    // Формируем массив вопросов для QuestionNavigationPanel
    const questions = useMemo(
        () =>
            resultDetails.questionResults.map(r => ({
                id: r.questionId,
                prompt: r.prompt,
                optionsJson: r.optionsJson,
                type: r.type,
                imageUrl: r.imageUrl
            })),
        [resultDetails.questionResults]
    )

    const getOptionClassName = (optionId: string) => {
        const isUserAnswer = userAnswers.includes(optionId)
        const isCorrectAnswer = correctAnswers.includes(optionId)
        return ['test-option-label', isCorrectAnswer && 'correct', isUserAnswer && !isCorrectAnswer && 'incorrect']
            .filter(Boolean)
            .join(' ')
    }

    const OptionTag = ({ optionId }: { optionId: string }) => {
        const isUser = userAnswers.includes(optionId)
        const isCorrect = correctAnswers.includes(optionId)

        if (isCorrect) return <span className="text-green ml-auto font-bold">✓ Correct</span>
        if (isUser && !isCorrect) return <span className="text-red ml-auto font-bold">✗ Your answer</span>
        return null
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

                            <div className="mg-top-32px">
                                {/* SINGLE CHOICE */}
                                {currentQuestionResult.type === 'SINGLE_CHOICE' && (
                                    <div className="test-options-wrapper">
                                        {options.map((option: { id: string; text: string }) => (
                                            <div key={option.id} className={getOptionClassName(option.id)}>
                                                <input
                                                    type="radio"
                                                    checked={userAnswers.includes(option.id)}
                                                    disabled
                                                    className="test-radio-input"
                                                />
                                                <span className="text-neutral-700">{option.text}</span>
                                                <OptionTag optionId={option.id} />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* MULTIPLE CHOICE */}
                                {currentQuestionResult.type === 'MULTIPLE_CHOICE' && (
                                    <div className="test-options-wrapper">
                                        {options.map((option: { id: string; text: string }) => (
                                            <div key={option.id} className={getOptionClassName(option.id)}>
                                                <input
                                                    type="checkbox"
                                                    checked={userAnswers.includes(option.id)}
                                                    disabled
                                                    className="test-checkbox-input"
                                                />
                                                <span className="text-neutral-700">{option.text}</span>
                                                <OptionTag optionId={option.id} />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* TEXT ANSWER */}
                                {currentQuestionResult.type === 'OPEN' && (
                                        <div>
                                            <div className="mg-bottom-16px">
                                                <div className="display-2 text-neutral-600 mg-bottom-8px">
                                                    Your Answer:
                                                </div>
                                                <div
                                                    className={`card ${
                                                        currentQuestionResult.isCorrect
                                                            ? 'bg-secondary-green-100'
                                                            : 'bg-secondary-red-100'
                                                    }`}
                                                    style={{
                                                        padding: '16px',
                                                        borderLeft: `4px solid ${
                                                            currentQuestionResult.isCorrect
                                                                ? 'var(--secondary--green-400)'
                                                                : 'var(--secondary--red-400)'
                                                        }`,
                                                    }}
                                                >
                                                    <p className="display-2 text-neutral-800">
                                                        {currentQuestionResult.userAnswer || 'No answer provided'}
                                                    </p>
                                                </div>
                                            </div>

                                            {!currentQuestionResult.isCorrect && (
                                                <div>
                                                    <div className="display-2 text-neutral-600 mg-bottom-8px">
                                                        Correct Answer:
                                                    </div>
                                                    <div
                                                        className="card bg-secondary-green-100"
                                                        style={{
                                                            padding: '16px',
                                                            borderLeft:
                                                                '4px solid var(--secondary--green-400)',
                                                        }}
                                                    >
                                                        <p className="display-2 text-neutral-800">
                                                            {currentQuestionResult.correctAnswer}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                            </div>


                            {/* Блок объяснения */}
                            {currentQuestionResult.explanation && (
                                <div className="explanation-block">
                                    <h5 className="display-3 bold text-neutral-800 mg-bottom-12px">Explanation</h5>
                                    <p className="display-2 text-neutral-700">{currentQuestionResult.explanation}</p>
                                </div>
                            )}

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
                                    disabled={currentQuestionIndex === resultDetails.questionResults.length - 1}
                                    style={{opacity: currentQuestionIndex === resultDetails.questionResults.length - 1 ? 0.5 : 1}}
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
                </div>
            </div>
        </div>
    )
}