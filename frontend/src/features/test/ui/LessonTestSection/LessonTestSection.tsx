import {useLessonTest} from "@/features/test/model/useLessonTest.ts";
import {useRef} from "react";
import {useScrollToTest} from "@/features/test/model/useScrollToTest.ts";
import {TestInstructionView} from "@/features/test/ui/TestInstructionView";
import {TestInProgressView} from "@/features/test/ui/TestInProgressView";
import {TestCompletedSummary} from "@/features/test/ui/TestCompletedSummary";
import {TestResultsView} from "@/features/test/ui/TestResultsView";
import type {LessonDetails} from "@/entities/course/course.ts";

export const LessonTestSection = ({ lesson }: { lesson: LessonDetails }) => {
    const {
        view,
        testData,
        savedAnswers,
        resultDetails,
        isStarting,
        isSubmitting,
        isLoadingResults,
        testAttemptSummary,
        startTest,
        submitTest,
        viewResults,
        backToSummary,
    } = useLessonTest(lesson)

    const testSectionRef = useRef<HTMLDivElement | null>(null)
    useScrollToTest(view, testSectionRef)

    return (
        <>
            {/* Test Tab */}
            {lesson.testId && (
                <div data-w-tab="Tab 2" className="w-tab-pane" ref={testSectionRef}>
                    <div className="card tab-card">
                        {view === 'instruction' && (
                            <TestInstructionView
                                lesson={lesson}
                                onStartTest={startTest}
                                isLoading={isStarting}
                            />
                        )}

                        {view === 'inProgress' && testData && (
                            <TestInProgressView
                                testData={testData}
                                onSubmit={submitTest}
                                isSubmitting={isSubmitting}
                                initialAnswers={savedAnswers}
                            />
                        )}

                        {view === 'summary' && (
                            testAttemptSummary ? (
                                <TestCompletedSummary
                                    result={testAttemptSummary}
                                    onViewResults={viewResults}
                                />
                            ) : (
                                <p>Loading...</p>
                            )
                        )}

                        {view === 'results' && (
                            isLoadingResults ? (
                                <p>Loading...</p>
                            ) : resultDetails ? (
                                <TestResultsView
                                    resultDetails={resultDetails}
                                    onBackToSummary={backToSummary}
                                />
                            ) : (
                                <button onClick={backToSummary}>Back</button>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    )
}