import { Link } from 'react-router-dom'
import { ProgressBar } from '@/widgets/ProgressBar'
import {useGetMockExamsPreviewQuery, useGetMockExamsQuery} from '@/shared/api/mockExamApi'

interface MockExamsSectionProps {
    courseSlug?: string,
    isPreview?: boolean
}

export const MockExamsSection = ({ courseSlug, isPreview }: MockExamsSectionProps) => {
    const previewQuery = useGetMockExamsPreviewQuery(courseSlug!, {
        skip: !isPreview || !courseSlug,
    })

    const fullQuery = useGetMockExamsQuery(courseSlug!, {
        skip: isPreview || !courseSlug,
    })

    const error = isPreview ? previewQuery.error : fullQuery.error

    return (
        <div>
            {error ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Failed to load test details. Please try again later.</p>
                </div>
            ) : (
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="mg-top-32px mg-bottom-80px">
                        <div className="w-layout-grid grid-1-column gap-row-24px">
                            {isPreview ? (
                                <div className="card chapter-premium-card">
                                    <div className="chapter-premium-card---left-content">
                                        <div className="image-wrapper chapter-icon">
                                            <img
                                                src='/assets/webflow/images/examtestsicon.svg'
                                                loading="eager"
                                                alt="Exam Tests Icon"
                                            />
                                        </div>
                                        <div className="inner-container _460px">
                                            <h2 className="display-5 title">Exam Tests</h2>
                                            <div className="mg-top-4px">
                                                <p>Practice with full-length mock exams to test your knowledge</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chapter-premium-card---right-content">
                                        <div className="badge secondary">
                                            <div>{previewQuery.data?.totalExams} Tests</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={`/courses/${courseSlug}/mock-exams`}
                                    className="card chapter-premium-card w-inline-block"
                                >
                                    <div className="chapter-premium-card---left-content">
                                        <div className="image-wrapper chapter-icon">
                                            <img
                                                src='/assets/webflow/images/examtestsicon.svg'
                                                loading="eager"
                                                alt="Exam Tests Icon"
                                            />
                                        </div>
                                        <div className="inner-container _460px">
                                            <h2 className="display-5 title">Exam Tests</h2>
                                            <div className="mg-top-4px">
                                                <p>Practice with full-length mock exams to test your knowledge</p>
                                            </div>
                                            <div className="mg-top-16px">
                                                <ProgressBar
                                                    percentage={fullQuery.data?.progressPercentage}
                                                    animated={true}
                                                    height="6px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chapter-premium-card---right-content">
                                        <div className="badge secondary">
                                            <div>{fullQuery.data?.totalExams} Tests</div>
                                        </div>
                                        <div className="display-2 bold text-neutral-800">
                                            <div className="link">
                                                <div>Browse tests</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}