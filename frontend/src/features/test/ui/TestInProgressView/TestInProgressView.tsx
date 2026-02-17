import type {StartTestResponse, TestAnswers} from "@/entities/test/test.ts";
import {useMemo, useRef, useState} from "react";
import {TestTimer} from "@/widgets/TestTimer";
import {QuestionRenderer} from "@/widgets/QuestionRenderer";
import {QuestionNavigationPanel} from "@/widgets/QuestionNavigationPanel";
import {ConfirmSubmitModal} from "@/widgets/ConfirmSubmitModal";
import {TimeUpModal} from "@/widgets/TimeUpModal";
import {useTestNavigation} from "@/features/test/model/useTestNavigation.ts";
import {useUnloadProtection} from "@/features/test/model/useUnloadProtection.ts";
import {OptionText} from "@/features/test/ui/OptionText";

interface TestInProgressViewProps {
    testData: StartTestResponse;
    onSubmit: (answers: TestAnswers) => void;
    isSubmitting: boolean;
}

export const TestInProgressView = ({testData, onSubmit, isSubmitting}: TestInProgressViewProps) => {
    const {
        currentQuestionIndex,
        currentQuestion,
        answers,
        answerQuestion,
        goNext,
        goPrevious,
        goTo,
        isFirst,
        isLast
    } = useTestNavigation(testData)

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showTimeUpModal, setShowTimeUpModal] = useState(false)
    const hasCompletedRef = useRef(false);

    useUnloadProtection(!showTimeUpModal && !isSubmitting);

    const handleFinish = () => setShowConfirmModal(true)
    const handleConfirm = () => {
        setShowConfirmModal(false);
        onSubmit(answers);
    };
    const handleTimeUp = () => {
        if (hasCompletedRef.current) return;
        hasCompletedRef.current = true;

        setShowTimeUpModal(true);
        setTimeout(() => {
            setShowTimeUpModal(false);
            onSubmit(answers);
        }, 2000);
    }

    const options = useMemo(() => {
        if (currentQuestion.type !== 'MULTIPLE_CHOICE' && currentQuestion.type !== 'SINGLE_CHOICE') return [];

        try {
            return JSON.parse(currentQuestion.optionsJson);
        } catch {
            return [];
        }
    }, [currentQuestion]);

    return (
        <div>

            <div className="w-layout-grid grid-2-columns"
                 style={{gridTemplateColumns: '2fr 1fr', gap: '32px', alignItems: 'start'}}>
                {/* Левая колонка - вопросы */}
                <div>
                    <div className="card">
                        <div style={{padding: '32px'}}>
                            <QuestionRenderer
                                question={currentQuestion}
                                questionNumber={currentQuestionIndex + 1}
                            />

                            <div className="mg-top-32px">
                                {currentQuestion.type === 'SINGLE_CHOICE' && (
                                    <div className="test-options-wrapper">
                                        {options.map((option: { id: string; text: string }) => (
                                            <label key={option.id} className="test-option-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestion.id}`}
                                                    value={option.id}
                                                    checked={answers[currentQuestion.id] === option.id}
                                                    onChange={() =>
                                                        answerQuestion(
                                                            currentQuestion.id,
                                                            option.id,
                                                            'SINGLE_CHOICE'
                                                        )
                                                    }
                                                    className="test-radio-input"
                                                    disabled={isSubmitting}
                                                />
                                                <OptionText text={option.text} className="text-neutral-700"/>
                                            </label>
                                        ))}
                                    </div>
                                )}
                                {currentQuestion.type === 'MULTIPLE_CHOICE' && (
                                    <div className="test-options-wrapper">
                                        {options.map((option: { id: string; text: string }) => {
                                            const selectedAnswers = Array.isArray(
                                                answers[currentQuestion.id]
                                            )
                                                ? (answers[currentQuestion.id] as string[])
                                                : []

                                            return (
                                                <label key={option.id} className="test-option-label">
                                                    <input
                                                        type="checkbox"
                                                        value={option.id}
                                                        checked={selectedAnswers.includes(option.id)}
                                                        onChange={() =>
                                                            answerQuestion(
                                                                currentQuestion.id,
                                                                option.id,
                                                                'MULTIPLE_CHOICE'
                                                            )
                                                        }
                                                        className="test-checkbox-input"
                                                        disabled={isSubmitting}
                                                    />
                                                    <OptionText text={option.text} className="text-neutral-700"/>
                                                </label>
                                            )
                                        })}
                                    </div>
                                )}
                                {currentQuestion.type === 'OPEN' && (
                                    <textarea
                                        className="test-textarea-input"
                                        value={answers[currentQuestion.id] || ''}
                                        onChange={e =>
                                            answerQuestion(
                                                currentQuestion.id,
                                                e.target.value,
                                                'OPEN'
                                            )
                                        }
                                        placeholder="Type your answer here..."
                                        rows={6}
                                        disabled={isSubmitting}
                                    />
                                )}

                            </div>

                            <div className="mg-top-32px"
                                 style={{display: 'flex', gap: '16px', justifyContent: 'space-between'}}>
                                <button onClick={goPrevious} disabled={isFirst || isSubmitting}
                                        className="button-primary w-button">Previous
                                </button>
                                {isLast ? (
                                    <button onClick={handleFinish} disabled={isSubmitting}
                                            className="button-primary w-button">{isSubmitting ? 'Submitting...' : 'Finish Test'}</button>
                                ) : (
                                    <button onClick={goNext} disabled={isSubmitting}
                                            className="button-primary w-button">Next Question</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая колонка - таймер + навигация */}
                <div style={{position: 'sticky', top: '24px'}}>
                    <TestTimer
                        timeLimitSec={testData.timeLimitSec}
                        startedAt={testData.startedAt}
                        onTimeUp={handleTimeUp}
                    />

                    <div className="mg-top-24px">
                        <QuestionNavigationPanel
                            questions={testData.questions}
                            answers={answers}
                            currentQuestionIndex={currentQuestionIndex}
                            onQuestionSelect={goTo}
                            onFinishTest={handleFinish}
                            isSubmitting={isSubmitting}
                            mode="test"
                        />
                    </div>
                </div>
            </div>

            {showConfirmModal && (
                <ConfirmSubmitModal
                    isOpen={showConfirmModal}
                    onConfirm={handleConfirm}
                    onCancel={() => setShowConfirmModal(false)}
                    isSubmitting={isSubmitting}
                />
            )}

            {showTimeUpModal && <TimeUpModal isOpen={showTimeUpModal}/>}
        </div>
    );
};