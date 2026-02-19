import { Link } from 'react-router-dom'
import type { DashboardCourseDetail } from '@/entities/dashboard/dashboard'

interface CourseDetailCardProps {
    courseDetail: DashboardCourseDetail
}

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'IN_PROGRESS':
            return (
                <div className="lesson_status_in_progress">
                    <div>In Progress</div>
                </div>
            )
        case 'COMPLETED':
            return (
                <div className="lesson_status_completed">
                    <div>Completed</div>
                </div>
            )
        default:
            return (
                <div className="lesson_status_not_started">
                    <div>Not Started</div>
                </div>
            )
    }
}

export const CourseDetailCard = ({ courseDetail }: CourseDetailCardProps) => {
    return (
        <div className="mg-bottom-48px">
            <div className="chapters-top-content-wrapper first">
                <div className="chapters-top-content">
                    <div className="image-wrapper chapter-icon">
                        <img src='/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png' alt="Course"/>
                    </div>
                    <div className="inner-container _418px">
                        <h2 className="display-5">{courseDetail.courseTitle}</h2>
                        {courseDetail.snippet && (
                            <div className="mg-top-4px">
                                <p>{courseDetail.snippet}</p>
                            </div>
                        )}
                    </div>
                </div>
                <Link
                    to={`/courses/${courseDetail.courseSlug}`}
                    className="link bold w-inline-block"
                >
                    <div>Browse all lessons</div>
                    <div className="item-icon-right">
                        <div className="icon-font-squared"></div>
                    </div>
                </Link>
            </div>
            <div className="mg-top-32px">
                <div className="position-relative">
                    <div className="z-index-1">
                        <div className="w-layout-grid grid-1-column gap-row-24px">
                            {courseDetail.lessons.map((lesson) => (
                                <Link
                                    key={lesson.lessonId}
                                    to={`/courses/${courseDetail.courseSlug}/units/${lesson.unitId}/lessons/${lesson.lessonId}`}
                                    className="card chapter-card-v3 w-inline-block"
                                >
                                    <div className="chapter-card-left-content">
                                        <div className="image-wrapper play-icon">
                                            <img
                                                src="/assets/webflow/images/play-icon-courselify-x-webflow-template.svg"
                                                alt="Play"
                                            />
                                        </div>

                                        <h3 className="link">{lesson.lessonTitle}</h3>

                                    </div>
                                    <div>{getStatusBadge(lesson.status)}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="blur-bg gradient-bg bg-chapters---home-premium"></div>
                </div>
            </div>
        </div>
    )
}