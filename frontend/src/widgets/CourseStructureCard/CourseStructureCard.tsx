import {ROUTES} from "@/app/router/routes.ts";

interface CourseStructureCardProps {
    totalUnits?: number
    totalLessons?: number
    totalMockExams?: number
    showStartButton?: boolean
}
export const CourseStructureCard = ({
    totalLessons,
    totalUnits,
    totalMockExams,
    showStartButton
}: CourseStructureCardProps) => {
    return (
        <div
            data-w-id="6dc62cd9-fa3f-cca2-b9db-25d248211a19"
            style={{
                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
            }}
            className="card chapter-information-card sticky-course-card"
        >
            <h2 className="display-5">Course Structure</h2>
            <div className="mg-top-24px">
                <div className="w-layout-grid grid-1-column gap-row-24px">
                    <div className="chapter-information-wrapper">
                        <img
                            src="/assets/webflow/images/learning-hours-icon-courselify-x-webflow-template.svg"
                            loading="eager"
                            alt="Learning Hours Icon"
                        />
                        <div>10+ hours of theory</div>
                    </div>
                    <div className="chapter-information-wrapper">
                        <img
                            src="/assets/webflow/images/practice_hours_info_icon.svg"
                            loading="eager"
                            alt="Lessons Icon"
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                        />
                        <div>20+ hours of practice</div>
                    </div>
                    <div className="chapter-information-wrapper">
                        <img
                            src="/assets/webflow/images/units_info_icon.svg"
                            loading="eager"
                            alt="Difficulty Icon"
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                        />
                        <div>{totalUnits} Units</div>
                    </div>
                    <div className="chapter-information-wrapper">
                        <img
                            src="/assets/webflow/images/difficulty-icon-courselify-x-webflow-template.svg"
                            loading="eager"
                            alt="Difficulty Icon"
                        />
                        <div>{totalLessons} Lessons + Unit Reviews</div>
                    </div>
                    <div className="chapter-information-wrapper">
                        <img
                            src="/assets/webflow/images/certificate-icon-courselify-x-webflow-template.svg"
                            loading="eager"
                            alt="Certificate Icon"
                        />
                        <div>{totalMockExams} Full Final Tests</div>
                    </div>
                </div>
            </div>
            <div className="mg-top-40px">
                {showStartButton && (
                    <a
                        id="w-node-e9da5fd6-ab44-5b2f-81ad-6e5f36bfab9c-36bfab9c"
                        data-w-id="e9da5fd6-ab44-5b2f-81ad-6e5f36bfab9c"
                        href={ROUTES.CATALOG}
                        className="button-primary w-inline-block"
                    >
                        <div className="text-block">Start learning</div>
                        <div className="item-icon-right">
                            <div className="custom-icon-font"></div>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}