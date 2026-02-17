import type { Unit, UnitWithProgress } from "@/entities/course/course.ts"
import { ProgressBar } from '@/widgets/ProgressBar'
import { Link } from 'react-router-dom'

interface CourseUnitsSectionProps {
    units?: Unit[] | UnitWithProgress[]
    isClickable?: boolean
    showProgress?: boolean
    courseSlug?: string
}

const isUnitWithProgress = (unit: Unit | UnitWithProgress): unit is UnitWithProgress => {
    return 'progressPercentage' in unit
}

export const CourseUnitsSection = ({
                                       units = [],
                                       isClickable = false,
                                       showProgress = false,
                                       courseSlug
                                   }: CourseUnitsSectionProps) => {
    return (
        <div className="w-layout-blockcontainer container-default w-container">
            <div className="inner-container _865px center">
                <div className="mg-top-80px">
                    <div
                        data-w-id="3e8bcdc3-75c2-b6ad-3b2f-352a328fd021"
                        className="title-left---content-right center"
                        style={{
                            WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            opacity: 0
                        }}
                    >
                        <h2>Course units</h2>
                    </div>
                </div>
                <div className="mg-top-32px mg-bottom-80px">
                    <div className="w-layout-grid grid-1-column gap-row-24px">
                        {units.map((unit) => {
                            const unitWithProgress = isUnitWithProgress(unit) ? unit : null
                            const lessonsCount = unitWithProgress?.totalLessons ?? (unit as Unit).lessonsCount

                            const content = (
                                <>
                                    <div className="chapter-premium-card---left-content">
                                        <div className="image-wrapper chapter-icon">
                                            <img
                                                /*src={unit.iconUrl || ''}*/
                                                src='/src/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png'
                                                loading="eager"
                                                alt={`${unit.title} Icon`}
                                            />
                                        </div>
                                        <div className="inner-container _460px">
                                            <h2 className="display-5 title">{unit.title}</h2>
                                            <div className="mg-top-4px">
                                                <p>{unit.snippet}</p>
                                            </div>
                                            {showProgress && unitWithProgress && (
                                                <div className="mg-top-16px">
                                                    <ProgressBar
                                                        percentage={unitWithProgress.progressPercentage}
                                                        animated={true}
                                                        height="6px"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="chapter-premium-card---right-content">
                                        <div className="badge secondary">
                                            <div>{lessonsCount} Lessons</div>
                                        </div>
                                        {isClickable && (
                                            <div className="display-2 bold text-neutral-800">
                                                <div className="link">
                                                    <div>Browse lessons</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )

                            return isClickable ? (
                                <Link
                                    key={unit.id}
                                    to={`/courses/${courseSlug}/units/${unit.id}`}
                                    className="card chapter-premium-card w-inline-block"
                                >
                                    {content}
                                </Link>
                            ) : (
                                <div
                                    key={unit.id}
                                    className="card chapter-premium-card"
                                >
                                    {content}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}