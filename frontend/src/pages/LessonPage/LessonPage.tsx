import {Link, useParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {YouTubePlayer} from '@/widgets/YouTubePlayer'
import {MarkdownRenderer} from '@/widgets/MarkdownRenderer'
import {MOCK_LESSON_DETAIL} from '@/shared/config/content/lesson-detail.content'
import {TestInstructionView} from "@/features/test/ui/TestInstructionView/TestInstructionView.tsx"
import {TestInProgressView} from "@/features/test/ui/TestInProgressView"
import {TestCompletedSummary} from "@/features/test/ui/TestCompletedSummary"
import {TestResultsView} from "@/features/test/ui/TestResultsView";
import {useLessonTest} from "@/features/test/model/useLessonTest.ts";
import type {TestAttemptResult} from "@/entities/test/test.ts";
import {useRef} from "react";
import {useScrollToTest} from "@/features/test/model/useScrollToTest.ts";

export const LessonPage = () => {
    const {slug, unitId} = useParams<{
        slug: string
        unitId: string
    }>()

    const lesson = MOCK_LESSON_DETAIL
    const {
        view,
        testData,
        testResult,
        resultDetails,
        isStarting,
        isSubmitting,
        isLoadingResults,
        startTest,
        submitTest,
        viewResults,
        backToSummary,
    } = useLessonTest(lesson)

    const testSectionRef = useRef<HTMLDivElement | null>(null)
    useScrollToTest(view, testSectionRef)

    return (
        <div className="page-wrapper">
            <Header/>

            <section className="section hero-section---lesson-single">
                <div className="w-layout-blockcontainer container-default w-container">
                    {/* Breadcrumbs */}
                    <div
                        data-w-id="eeef16b4-fc0f-b861-a8d1-1c014480109e"
                        style={{opacity: 0}}
                        className="breadcrumb-wrapper"
                    >
                        <Link to={`/courses/${slug}`} className="breadcrumb-link">
                            Chapters
                        </Link>
                        <div className="icon-font-wrapper breadcrumb-arrow">
                            <div className="icon-font-squared"></div>
                        </div>
                        <Link to={`/courses/${slug}/units/${unitId}`} className="breadcrumb-link">
                            Back to Unit
                        </Link>
                        <div className="icon-font-wrapper breadcrumb-arrow">
                            <div className="icon-font-squared"></div>
                        </div>
                        <div className="breadcrumb-link static text-neutral-800">
                            {lesson.title}
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
                            className="title-left---content-right"
                        >
                            <div className="inner-container _730px">
                                <div className="chapter-detail-wrapper">
                                    <div className="display-2 bold text-neutral-800">
                                        {lesson.orderIndex}
                                    </div>
                                    <div className="divider-details large"></div>
                                    <div className="display-2 bold text-neutral-800">
                                        {lesson.title}
                                    </div>
                                </div>
                                <div className="mg-top-16px">
                                    <h1 className="display-9">Welcome to the lesson</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="mg-top-48px">
                        <div className="w-layout-grid grid-2-columns lesson-single-grid">
                            <div
                                data-w-id="e46a1783-89a6-280e-179e-e1b7bfc5c06c"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                            >
                                {lesson.videoPayload && (
                                    <YouTubePlayer videoUrl={lesson.videoPayload}/>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="mg-top-80px">
                        <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100"
                             className="w-tabs">
                            <div className="tabs-menu-wrapper w-tab-menu">
                                <a data-w-tab="Tab 1" className="tab-button w-inline-block w-tab-link w--current">
                                    <div>Theory</div>
                                </a>
                                {lesson.testId && (
                                    <a data-w-tab="Tab 2" className="tab-button w-inline-block w-tab-link">
                                        <div>Test</div>
                                    </a>
                                )}
                                {lesson.canContactCurator && (
                                    <a data-w-tab="Tab 3" className="tab-button w-inline-block w-tab-link">
                                        <div>Contact Curator</div>
                                    </a>
                                )}
                            </div>

                            <div className="mg-top-40px w-tab-content">
                                {/* Theory Tab */}
                                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                                    <div className="card tab-card">
                                        {lesson.textPayload && (
                                            <MarkdownRenderer content={lesson.textPayload}/>
                                        )}
                                    </div>
                                </div>

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
                                                />
                                            )}

                                            {view === 'summary' && (
                                                <TestCompletedSummary
                                                    result={(testResult ?? lesson.testAttemptSummary) as TestAttemptResult}
                                                    onViewResults={viewResults}
                                                />
                                            )}

                                            {view === 'results' && (
                                                isLoadingResults ? (
                                                    <p>Loading...</p>
                                                ) : resultDetails ? (
                                                    <TestResultsView resultDetails={resultDetails}/>
                                                ) : (
                                                    <button onClick={backToSummary}>Back</button>
                                                )
                                            )}

                                        </div>
                                    </div>
                                )}

                                {/* Contact Curator Tab */}
                                {lesson.canContactCurator && (
                                    <div data-w-tab="Tab 3" className="w-tab-pane">
                                        <div className="card tab-card">
                                            <h2 className="display-6">Contact Curator</h2>
                                            <div className="mg-top-16px">
                                                <p>Join our Discord community to get help from curators.</p>
                                            </div>
                                            {lesson.discordInviteUrl && (
                                                <div className="mg-top-24px">
                                                    <a
                                                        href={lesson.discordInviteUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="button-primary w-inline-block"
                                                    >
                                                        <div className="text-block">Join Discord</div>
                                                        <div className="item-icon-right">
                                                            <div className="custom-icon-font"></div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mg-bottom-80px"></div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}