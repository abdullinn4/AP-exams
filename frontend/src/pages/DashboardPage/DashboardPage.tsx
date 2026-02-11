import {useGetDashboardQuery} from '@/shared/api/courseApi'
import {Footer} from '@/widgets/Footer'
import {WelcomeBackSection} from "@/widgets/WelcomeBackSection";
import {CourseDetailCard} from "@/widgets/CourseDetailCard";
import {CourseNavigationPanel} from "@/widgets/CourseNavigationPanel";
import {PromoBanner} from "@/widgets/PromoBanner";

export const DashboardPage = () => {
    const {data: dashboard} = useGetDashboardQuery()


    return (
        <div className="page-wrapper">
            <WelcomeBackSection/>

            <section className="section home-premium-section">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="w-layout-grid grid-2-columns chapters-grid---home-premium-page">
                        <div
                            data-w-id="95ddbba0-9678-167b-678d-d86ffb290ed1"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="w-layout-grid grid-1-column gap-row-0px"
                        >
                            <div className="mg-top-24px">
                                <PromoBanner />
                            </div>

                            {dashboard?.selectedCourseDetail.map((courseDetail) => (
                                <div key={courseDetail.courseId} id={`course-${courseDetail.courseId}`}>
                                    <CourseDetailCard courseDetail={courseDetail} />
                                </div>
                            ))}
                        </div>

                        <div
                            id="w-node-_98def917-6dd7-0977-a532-f2abee2ed215-ad098e68"
                            data-w-id="98def917-6dd7-0977-a532-f2abee2ed215"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="card chapters-side-card"
                        >
                            <div className="position-sticky" style={{ top: '24px' }}>
                                {dashboard && (
                                    <>
                                        <CourseNavigationPanel
                                            myCourses={dashboard.myCourses}
                                            availableCourses={dashboard.availableCourses}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="full"/>
        </div>
    )
}