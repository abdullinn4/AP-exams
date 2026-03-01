import type { CourseDetails, CourseDetailsWithProgress } from "@/entities/course/course.ts"
import { Header } from "../Header"

interface CourseHeroSectionProps {
    course?: CourseDetails | CourseDetailsWithProgress
}

export const CourseHeroSection = ({ course }: CourseHeroSectionProps) => {
    return (
        <section className="section-card-padding top">
            <div data-w-id="182aa569-7882-5e75-85a4-ac41b78d6019" style={{ opacity: 0 }} className="position-relative">
                <Header variant="full" theme="light" />
                <div className="section-card hero-section chapter-single-page">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="w-layout-grid grid-2-columns hero-grid---chapters-single-page">
                            <div
                                id="w-node-_7047edef-8a46-61f7-22eb-0ca6c6ba8871-ad098ea0"
                                data-w-id="7047edef-8a46-61f7-22eb-0ca6c6ba8871"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="inner-container _525px"
                            >
                                <div className="center-content---tablet">
                                    <h1 className="display-10 text-neutral-100">{course?.title}</h1>
                                    <div className="mg-top-16px">
                                        <p className="text-neutral-400">{course?.snippet}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-w-id="3a44d1e2-8991-5533-aaba-1642706ade5c"
                                style={{ opacity: 0 }}
                                className="image-container hero-image-chapter-single"
                            >
                                <div className="blur-bg hero-bg---chapter-single"></div>
                                <img
                                    src="/assets/webflow/images/start-image-courselify-x-webflow-template.png"
                                    loading="eager"
                                    alt="Course Image"
                                    className="image position-relative"
                                />
                                <div
                                    data-w-id="69d08351-6704-d0f5-5b9f-e03384bc66d1"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-left-01---chapter-single"
                                >
                                    <img
                                        src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template_1.png"
                                        loading="eager"
                                        alt=""
                                        className="image rotate-120-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="e117542b-ca60-e71e-a4b0-a9733fc8727b"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-left-02---chapter-single"
                                >
                                    <img
                                        src="/assets/webflow/images/circle-figure-courselify-x-webflow-template_1.png"
                                        loading="eager"
                                        alt=""
                                        className="image rotate-150-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="13f555cb-7e77-ea4d-5c83-2bca0619db79"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-left-03---chapter-single"
                                >
                                    <img
                                        src="/assets/webflow/images/square-figure-courselify-x-webflow-template_1.png"
                                        loading="eager"
                                        alt=""
                                        className="image rotate-180-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="1fb8014a-645a-27b4-3a5b-abb3f02fe0e6"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-right-01---chapter-single"
                                >
                                    <img
                                        src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                                        loading="eager"
                                        alt=""
                                        className="image"
                                    />
                                </div>
                                <div
                                    data-w-id="2170c8df-a9ad-9d19-a190-7a5346c36e96"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-right-02---chapter-single"
                                >
                                    <img
                                        src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template_1.png"
                                        loading="eager"
                                        alt=""
                                        className="image rotate--150-deg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}