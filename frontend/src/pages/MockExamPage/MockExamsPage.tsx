import { Link, useParams } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { ProgressBar } from '@/widgets/ProgressBar'
import { useGetMockExamsQuery } from '@/shared/api/mockExamApi'

import playIcon from '/assets/webflow/images/play-icon-courselify-x-webflow-template.svg'
import completedIcon from '/assets/webflow/images/completed_icon.svg'
import notStartedIcon from '/assets/webflow/images/not_started_icon.svg'

export const MockExamsPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const { data: mockExamsData, error } = useGetMockExamsQuery(slug!, {
        skip: !slug
    })

    if (!slug) {
        return (
            <div className="page-wrapper">
                <Header variant="protected" />
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Course slug is missing</p>
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
                    <p style={{ color: 'red' }}>Failed to load mock exams. Please try again later.</p>
                </div>
            ) : (
                <>
                    {/* Hero Section */}
                    <section className="section hero-section---chapter-single-premium">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div
                                data-w-id="32acf298-0698-5e73-ac83-f73b692fe101"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                            >
                                <div>
                                    {/* Иконка и название */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                        <div className="image-wrapper chapter-single-premium-image">
                                            <img
                                                src='/assets/webflow/images/examtestsicon.svg'
                                                loading="eager"
                                                alt="Exam Tests Icon"
                                                className="image"
                                            />
                                        </div>
                                        <h1 className="display-7" style={{ flex: 1, margin: 0 }}>Exam Tests</h1>
                                    </div>
                                    <div className="mg-top-16px">
                                        <p>Practice with full-length mock exams to test your knowledge and prepare for the real exam</p>
                                    </div>
                                    <div className="mg-top-24px">
                                        <ProgressBar
                                            percentage={mockExamsData?.progressPercentage}
                                            animated={true}
                                            showLabel={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content Section */}
                    <section className="section chapter-single-section">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="w-layout-grid grid-2-columns chapter-single-grid">
                                {/* Left Column - About + Tests List */}
                                <div
                                    data-w-id="32acf298-0698-5e73-ac83-f73b692fe121"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        opacity: 0
                                    }}
                                >
                                    <div>
                                        <div className="rich-text mg-bottom--24px w-richtext">
                                            <h2>About the tests</h2>
                                            <p>
                                                These mock exams are designed to simulate the real exam experience.
                                                Each test covers all topics from the course and includes a time limit
                                                to help you practice time management. You can take each test multiple
                                                times to improve your score.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mg-top-64px">
                                        <h2 className="display-7">Mock Exams</h2>
                                        <div className="mg-top-24px">
                                            <div className="w-layout-grid grid-1-column gap-row-24px">
                                                {mockExamsData?.mockExams.map((exam, index) => (
                                                    <Link
                                                        key={exam.id}
                                                        to={`/courses/${slug}/mock-exams/${exam.id}`}
                                                        className="card chapter-card-v3 w-inline-block"
                                                        data-w-id="32acf298-0698-5e73-ac83-f73b692fe13c"
                                                    >
                                                        <div className="chapter-card-left-content">
                                                            {/* Order Index */}
                                                            <div className="image-wrapper play-icon">
                                                                <div className="display-2 bold text-neutral-800">
                                                                    {index + 1}.
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h3 className="display-2 title">{exam.title}</h3>
                                                            </div>
                                                        </div>
                                                        <div className="chapter-detail-wrapper">
                                                            {/* Play icon */}
                                                            <div className="image-wrapper play-icon">
                                                                <img
                                                                    src={playIcon}
                                                                    loading="eager"
                                                                    alt="Start"
                                                                />
                                                            </div>
                                                            <div className="divider-details large"></div>
                                                            {/* Status Icon */}
                                                            <div className="image-wrapper play-icon">
                                                                <img
                                                                    src={exam.isCompleted ? completedIcon : notStartedIcon}
                                                                    loading="eager"
                                                                    alt={exam.isCompleted ? 'Completed' : 'Not Started'}
                                                                />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - пустая колонка для сохранения grid layout */}
                                <div
                                    data-w-id="32acf298-0698-5e73-ac83-f73b692fe17c"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        opacity: 0
                                    }}
                                >
                                    {/* Пустая колонка - можно добавить статистику или советы */}
                                </div>
                            </div>

                            {/* Отступ перед футером */}
                            <div className="mg-bottom-80px"></div>
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </div>
    )
}