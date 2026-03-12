import {useLessonTest} from "@/features/test/model/useLessonTest.ts";
import {Link, useParams} from "react-router-dom";
import {useGetMockExamDetailsQuery} from "@/shared/api/mockExamApi.ts";
import {useRef} from "react";
import {useScrollToTest} from "@/features/test/model/useScrollToTest.ts";
import {useWebflowReinit} from "@/shared/lib/hooks/useWebflowReinit.ts";
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";
import {TestInstructionView} from "@/features/test/ui/TestInstructionView";
import {TestInProgressView} from "@/features/test/ui/TestInProgressView";
import {TestCompletedSummary} from "@/features/test/ui/TestCompletedSummary";
import {TestResultsView} from "@/features/test/ui/TestResultsView";

export const MockExamTestPage = () => {
    const { slug, examId } = useParams<{ examId: string, slug: string }>()
    const { data: mockExam, error } = useGetMockExamDetailsQuery(examId!, {
        skip: !examId
    })

    // Адаптируем данные под формат LessonDetails
    const lessonLikeData = mockExam ? {
        testId: mockExam.id,
        testTitle: mockExam.testTitle,
        testTimeLimitSec: mockExam.timeLimitSec,
        testAttemptStatus: mockExam.testAttemptStatus,
        testAttemptId: mockExam.testAttemptId,
        testAttemptSummary: mockExam.testAttemptSummary,
    } : undefined

    const {
        view,
        testData,
        resultDetails,
        isStarting,
        isSubmitting,
        isLoadingResults,
        testAttemptSummary,
        startTest,
        submitTest,
        viewResults,
        backToSummary,
    } = useLessonTest(lessonLikeData as any) // Переиспользуем существующий хук!

    const testSectionRef = useRef<HTMLDivElement | null>(null)
    useScrollToTest(view, testSectionRef)
    useWebflowReinit(mockExam)
    if (!examId) {
        return (
            <div className="page-wrapper">
                <Header variant="protected" />
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Exam ID is missing</p>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="page-wrapper">
            <Header variant="protected" />

            {error ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Failed to load mock exam. Please try again later.</p>
                </div>
            ) : (
                <section className="section hero-section---lesson-single">
                    <div className="w-layout-blockcontainer container-default w-container">
                        {/* Breadcrumbs */}
                        <div
                            data-w-id="eeef16b4-fc0f-b861-a8d1-1c014480109e"
                            style={{ opacity: 0 }}
                            className="breadcrumb-wrapper"
                        >
                            <Link to={`/courses/${slug}`} className="breadcrumb-link">
                                Chapters
                            </Link>
                            <div className="icon-font-wrapper breadcrumb-arrow">
                                <div className="icon-font-squared"></div>
                            </div>
                            <Link to={`/courses/${slug}/mock-exams`} className="breadcrumb-link">
                                Back to Exams Unit
                            </Link>
                            <div className="icon-font-wrapper breadcrumb-arrow">
                                <div className="icon-font-squared"></div>
                            </div>
                            <div className="breadcrumb-link static text-neutral-800">
                                {mockExam?.testTitle}
                            </div>
                        </div>

                        {/* Hero Section */}
                        <div className="mg-top-80px">
                            <div
                                data-w-id="e9b53cf6-cca5-08fa-8d80-a2350f63734b"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                            >
                                <h1>{mockExam?.testTitle}</h1>
                            </div>
                        </div>

                        {/* Test Section */}
                        <div className="mg-top-80px" ref={testSectionRef}>
                            <div className="card tab-card">
                                {view === 'instruction' && lessonLikeData && (
                                    <TestInstructionView
                                        lesson={lessonLikeData as any}
                                        onStartTest={startTest}
                                        isLoading={isStarting}
                                    />
                                )}

                                {view === 'inProgress' && testData && (
                                    <TestInProgressView
                                        testData={testData}
                                        onSubmit={submitTest}
                                        isSubmitting={isSubmitting}
                                    />
                                )}

                                {view === 'summary' && (
                                    testAttemptSummary ? (
                                        <TestCompletedSummary
                                            result={testAttemptSummary}
                                            onViewResults={viewResults}
                                        />
                                    ) : (
                                        <div style={{ textAlign: 'center', padding: '40px' }}>
                                            <p>Loading results...</p>
                                        </div>
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

                        <div className="mg-bottom-80px"></div>
                    </div>
                </section>
            )}
            <Footer />
        </div>
    )
}