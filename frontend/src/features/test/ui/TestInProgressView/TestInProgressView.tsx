import type {StartTestResponse, TestAnswers} from "@/entities/test/test.ts";
import {useEffect, useState} from "react";
import {TestTimer} from "@/widgets/TestTimer";
import {QuestionRenderer} from "@/widgets/QuestionRenderer";
import {QuestionNavigationPanel} from "@/widgets/QuestionNavigationPanel";
import {ConfirmSubmitModal} from "@/widgets/ConfirmSubmitModal";
import {TimeUpModal} from "@/widgets/TimeUpModal";

interface TestInProgressViewProps {
    testData: StartTestResponse;
    onSubmit: (answers: TestAnswers) => void;
    isSubmitting: boolean;
}

export const TestInProgressView = ({ testData, onSubmit, isSubmitting }: TestInProgressViewProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<TestAnswers>({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showTimeUpModal, setShowTimeUpModal] = useState(false);

    const currentQuestion = testData.questions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestion.id] || '';

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < testData.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleQuestionClick = (index: number) => {
        setCurrentQuestionIndex(index);
    };

    const handleFinishClick = () => {
        setShowConfirmModal(true);
    };

    const handleConfirmSubmit = () => {
        setShowConfirmModal(false);
        onSubmit(answers);
    };

    const handleTimeUp = () => {
        setShowTimeUpModal(true);
        setTimeout(() => {
            setShowTimeUpModal(false);
            onSubmit(answers);
        }, 2000);
    };

    const parseOptions = (optionsJson: string): Array<{ id: string; text: string }> => {
        try {
            return JSON.parse(optionsJson);
        } catch {
            return [];
        }
    };

    const options = currentQuestion.type === 'MULTIPLE_CHOICE'
        ? parseOptions(currentQuestion.optionsJson)
        : [];

    return (
        <div>

            <div className="w-layout-grid grid-2-columns" style={{ gridTemplateColumns: '2fr 1fr', gap: '32px', alignItems: 'start' }}>
                {/* Левая колонка - вопросы */}
                <div>
                    <div className="card">
                        <div style={{ padding: '32px' }}>
                            <QuestionRenderer
                                question={currentQuestion}
                                questionNumber={currentQuestionIndex + 1}
                            />

                            <div className="mg-top-32px">
                                {currentQuestion.type === 'MULTIPLE_CHOICE' ? (
                                    <div className="test-options-wrapper">
                                        {options.map((option) => (
                                            <label key={option.id} className="test-option-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestion.id}`}
                                                    value={option.id}
                                                    checked={currentAnswer === option.id}
                                                    onChange={(e) => setAnswers(prev => ({
                                                        ...prev,
                                                        [currentQuestion.id]: e.target.value
                                                    }))}
                                                    className="test-radio-input"
                                                    disabled={isSubmitting}
                                                />
                                                <span className="text-neutral-700">{option.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <textarea
                                        className="test-textarea-input"
                                        value={currentAnswer}
                                        onChange={(e) => setAnswers(prev => ({
                                            ...prev,
                                            [currentQuestion.id]: e.target.value
                                        }))}
                                        placeholder="Type your answer here..."
                                        rows={6}
                                        disabled={isSubmitting}
                                    />
                                )}
                            </div>

                            <div className="mg-top-32px" style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
                                <button
                                    className="button-primary w-button"
                                    onClick={handlePreviousQuestion}
                                    disabled={currentQuestionIndex === 0 || isSubmitting}
                                    style={{ opacity: (currentQuestionIndex === 0 || isSubmitting) ? 0.5 : 1 }}
                                >
                                    Previous
                                </button>

                                {currentQuestionIndex < testData.questions.length - 1 ? (
                                    <button
                                        className="button-primary w-button"
                                        onClick={handleNextQuestion}
                                        disabled={isSubmitting}
                                    >
                                        Next Question
                                    </button>
                                ) : (
                                    <button
                                        className="button-primary w-button"
                                        onClick={handleFinishClick}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Finish Test'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая колонка - таймер + навигация */}
                <div style={{ position: 'sticky', top: '24px' }}>
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
                            onQuestionSelect={handleQuestionClick}
                            onFinishTest={handleFinishClick}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                </div>
            </div>

            {showConfirmModal && (
                <ConfirmSubmitModal
                    isOpen={showConfirmModal}
                    onConfirm={handleConfirmSubmit}
                    onCancel={() => setShowConfirmModal(false)}
                />
            )}

            {showTimeUpModal && <TimeUpModal isOpen={showTimeUpModal} />}
        </div>
    );
};