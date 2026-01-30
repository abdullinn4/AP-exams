import type {Unit} from "@/entities/course/course.ts";

interface CourseUnitsSectionProps {
    units: Unit[]
    isClickable?: boolean
    showProgress?: boolean
}

export const CourseUnitsSection = ({
                                       units,
                                       isClickable = false,
                                       showProgress = false
                                   }: CourseUnitsSectionProps) => {
    return (
        <div className="w-layout-blockcontainer container-default w-container">
            <div className="inner-container _865px center">
                <div className="mg-top-80px">
                    <div
                        data-w-id="3e8bcdc3-75c2-b6ad-3b2f-352a328fd021"
                        className="title-left---content-right center"
                    >
                        <h2>Course units</h2>
                    </div>
                </div>
                <div className="mg-top-32px mg-bottom-80px">
                    <div className="w-layout-grid grid-1-column gap-row-24px">
                        {units.map((unit) => {
                            const content = (
                                <>
                                    <div className="chapter-premium-card---left-content">
                                        <div className="image-wrapper chapter-icon">
                                            <img
                                                src={unit.iconUrl || ''}
                                                loading="eager"
                                                alt={`${unit.title} Icon`}
                                            />
                                        </div>
                                        <div className="inner-container _460px">
                                            <h2 className="display-5 title">{unit.title}</h2>
                                            <div className="mg-top-4px">
                                                <p>{unit.snippet}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chapter-premium-card---right-content">
                                        <div className="badge secondary">
                                            <div>{unit.lessonsCount} Lessons</div>
                                        </div>
                                        {showProgress && (
                                            <div className="badge secondary" style={{ marginLeft: '8px' }}>
                                                <div>0% Complete</div>
                                            </div>
                                        )}
                                        {isClickable && (
                                            <div className="display-2 bold text-neutral-800">
                                                <div className="flex y-align-center">
                                                    <div>Browse lessons</div>
                                                    <div className="item-icon-right">
                                                        <div className="icon-font-squared"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )

                            return isClickable ? (
                                <a
                                    key={unit.id}
                                    href={`#unit-${unit.id}`}
                                    className="card chapter-premium-card w-inline-block"
                                    data-w-id={`unit-card-${unit.id}`} // Для Webflow анимаций
                                >
                                    {content}
                                </a>
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