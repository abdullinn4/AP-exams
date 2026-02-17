import {OptionText} from "@/features/test/ui/OptionText"
import {MarkdownRenderer} from '@/widgets/MarkdownRenderer'

interface QuestionResultItemProps {
    questionResult: {
        type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'OPEN'
        optionsJson: string
        userAnswer: string
        correctAnswer: string
        isCorrect: boolean
        explanation: string
    }
}

// Парсит JSON-ответы, убирая лишние кавычки
const parseAnswers = (answer: string): string[] => {
    try {
        const parsed = JSON.parse(answer)
        if (Array.isArray(parsed)) {
            return parsed
        }
        return [String(parsed)]
    } catch {
        return [answer]
    }
}

// Определяет CSS класс для варианта ответа
const getOptionClassName = (
    optionId: string,
    userAnswers: string[],
    correctAnswers: string[]
): string => {
    const isUserAnswer = userAnswers.includes(optionId)
    const isCorrectAnswer = correctAnswers.includes(optionId)
    return [
        'test-option-label',
        isCorrectAnswer && 'correct',
        isUserAnswer && !isCorrectAnswer && 'incorrect'
    ]
        .filter(Boolean)
        .join(' ')
}

// Отображает тег статуса варианта (✓ Correct / ✗ Your answer)
const OptionTag = ({
                       optionId,
                       userAnswers,
                       correctAnswers
                   }: {
    optionId: string
    userAnswers: string[]
    correctAnswers: string[]
}) => {
    const isUser = userAnswers.includes(optionId)
    const isCorrect = correctAnswers.includes(optionId)

    if (isCorrect) return <span className="text-green ml-auto font-bold">✓ Correct</span>
    if (isUser && !isCorrect) return <span className="text-red ml-auto font-bold">✗ Your answer</span>
    return null
}

export const QuestionResultItem = ({ questionResult }: QuestionResultItemProps) => {
    const userAnswers = parseAnswers(questionResult.userAnswer)
    const correctAnswers = parseAnswers(questionResult.correctAnswer)

    let options: { id: string; text: string }[] = []
    try {
        options = JSON.parse(questionResult.optionsJson)
    } catch {
        options = []
    }

    return (
        <>
            <div className="mg-top-32px">
                {/* SINGLE CHOICE */}
                {questionResult.type === 'SINGLE_CHOICE' && (
                    <div className="test-options-wrapper">
                        {options.map((option) => (
                            <div key={option.id} className={getOptionClassName(option.id, userAnswers, correctAnswers)}>
                                <input
                                    type="radio"
                                    checked={userAnswers.includes(option.id)}
                                    disabled
                                    className="test-radio-input"
                                />
                                <OptionText text={option.text} className="text-neutral-700"/>
                                <OptionTag optionId={option.id} userAnswers={userAnswers} correctAnswers={correctAnswers} />
                            </div>
                        ))}
                    </div>
                )}

                {/* MULTIPLE CHOICE */}
                {questionResult.type === 'MULTIPLE_CHOICE' && (
                    <div className="test-options-wrapper">
                        {options.map((option) => (
                            <div key={option.id} className={getOptionClassName(option.id, userAnswers, correctAnswers)}>
                                <input
                                    type="checkbox"
                                    checked={userAnswers.includes(option.id)}
                                    disabled
                                    className="test-checkbox-input"
                                />
                                <OptionText text={option.text} className="text-neutral-700"/>
                                <OptionTag optionId={option.id} userAnswers={userAnswers} correctAnswers={correctAnswers} />
                            </div>
                        ))}
                    </div>
                )}

                {/* OPEN QUESTION */}
                {questionResult.type === 'OPEN' && (
                    <div>
                        <div className="mg-bottom-16px">
                            <div className="display-2 text-neutral-600 mg-bottom-8px">
                                Your Answer:
                            </div>
                            <div
                                className={`card ${
                                    questionResult.isCorrect
                                        ? 'bg-secondary-green-100'
                                        : 'bg-secondary-red-100'
                                }`}
                                style={{
                                    padding: '16px',
                                    borderLeft: `4px solid ${
                                        questionResult.isCorrect
                                            ? 'var(--secondary--green-400)'
                                            : 'var(--secondary--red-400)'
                                    }`,
                                }}
                            >
                                <p className="display-2 text-neutral-800">
                                    {questionResult.userAnswer || 'No answer provided'}
                                </p>
                            </div>
                        </div>

                        {!questionResult.isCorrect && (
                            <div>
                                <div className="display-2 text-neutral-600 mg-bottom-8px">
                                    Correct Answer:
                                </div>
                                <div
                                    className="card bg-secondary-green-100"
                                    style={{
                                        padding: '16px',
                                        borderLeft: '4px solid var(--secondary--green-400)',
                                    }}
                                >
                                    <p className="display-2 text-neutral-800">
                                        {questionResult.correctAnswer}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Explanation */}
            {questionResult.explanation && (
                <div className="explanation-block">
                    <h5 className="display-3 bold text-neutral-800 mg-bottom-12px">Explanation</h5>
                    <MarkdownRenderer content={questionResult.explanation} />
                </div>
            )}
        </>
    )
}