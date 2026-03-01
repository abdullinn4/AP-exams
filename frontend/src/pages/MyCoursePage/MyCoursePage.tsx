import {useParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {useGetCourseDetailsQuery} from "@/shared/api/courseApi.ts";
import {MockExamsSection} from "@/widgets/MockExamsSection";
import {CourseStructureCard} from "@/widgets/CourseStructureCard";
import {CourseHeroSection} from "@/widgets/CourseHeroSection";
import {CourseAboutSection} from "@/widgets/CourseAboutSection";

export const MyCoursePage = () => {
    const {slug} = useParams<{ slug: string }>()

    const {data: course, error} = useGetCourseDetailsQuery(slug!, {
        skip: !slug
    })

    if (!slug) {
        return (
            <div className="page-wrapper">
                <Header/>
                <div style={{textAlign: 'center', padding: '100px 0'}}>
                    <p style={{color: 'red'}}>Course slug is missing</p>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
            <div className="course-preview-sticky-container">
                <CourseHeroSection course={course}/>


                {error ? (
                    <div style={{textAlign: 'center', padding: '100px 0'}}>
                        <p style={{color: 'red'}}>Failed to load course details. Please try again later.</p>
                    </div>
                ) : (
                    <>
                        {/* Grid Layout Container */}
                        <section className="section chapter-single-section">
                            <div className="w-layout-blockcontainer container-default w-container">
                                <div className="course-preview-grid-layout">
                                    <div className="course-preview-main-content">
                                        <CourseAboutSection course={course}/>

                                        <CourseUnitsSection
                                            units={course?.units}
                                            isClickable={true}
                                            showProgress={true}
                                            courseSlug={course?.slug}
                                        />

                                        <MockExamsSection courseSlug={course?.slug}/>
                                    </div>
                                    {/* Right Column - Sticky Sidebar */}
                                    <aside
                                        data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135"
                                        style={{
                                            WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                            opacity: 0
                                        }}
                                        className="course-preview-sidebar">
                                        <CourseStructureCard/>
                                        <div className="mg-top-24px">

                                        </div>
                                    </aside>

                                    {/* Mobile Version */}
                                    <div className="course-preview-sidebar-mobile">
                                        <CourseStructureCard/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                <Footer/>
            </div>
        </div>
    )
}