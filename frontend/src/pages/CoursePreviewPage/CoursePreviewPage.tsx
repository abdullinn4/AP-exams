import {Footer} from '@/widgets/Footer'
import {CTAFooterBlock} from '@/widgets/CTAFooterBlock'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {PricingSection} from "@/widgets/PricingSection"
import {useGetCourseBySlugQuery, useGetTariffsByCourseIdQuery} from "@/shared/api/courseApi"
import {useAddCourseToCart} from "@/shared/lib/hooks/useAddCourseToCart"
import {useParams} from "react-router-dom";
import {Header} from "@/widgets/Header";
import {PopularCoursesSection} from "@/widgets/PopularCoursesSection";
import {CourseHeroSection} from "@/widgets/CourseHeroSection";
import {CourseAboutSection} from "@/widgets/CourseAboutSection";
import {CourseStructureCard} from "@/widgets/CourseStructureCard";
import {useGetMockExamsPreviewQuery} from "@/shared/api/mockExamApi.ts";
import {MockExamsSection} from "@/widgets/MockExamsSection";
import {useRef} from "react";

export const CoursePreviewPage = () => {
    const {slug} = useParams<{ slug: string }>()
    const pricingSectionRef = useRef<HTMLDivElement>(null)

    const {data: course, error} = useGetCourseBySlugQuery(
        slug || '',
        {skip: !slug} // Пропустить запрос если slug undefined
    )
    const {data: tariffs, isLoading: tariffsLoading} = useGetTariffsByCourseIdQuery(
        course?.id || '',
        {skip: !course?.id} // Пропустить запрос если course undefined
    )
    const {addTariffToCart, errorMessage, successMessage} = useAddCourseToCart(
        course || {id: '', title: '', coverUrl: null})

    const { data: mockExamsData } = useGetMockExamsPreviewQuery(course?.slug || '', {
        skip: !course?.slug
    })

    const scrollToPricing = () => {
        pricingSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    // Рассчитать totalLessons
    const totalLessons = course?.units?.reduce((sum, unit) => sum + unit.lessonsCount, 0) || 0


    // Error или нет slug
    if (!slug) {
        return (
            <div className="page-wrapper">
                <Header/>
                <div style={{textAlign: 'center', padding: '100px 0'}}>
                    <p>Invalid course URL</p>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
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
                                {/* Left Column - Main Content */}
                                <div className="course-preview-main-content">
                                    <CourseAboutSection course={course} variant={'preview'}/>

                                    <CourseUnitsSection
                                        units={course?.units}
                                        isClickable={false}
                                        showProgress={false}
                                        courseSlug={course?.slug}
                                    />

                                    <MockExamsSection courseSlug={course?.slug} isPreview={true} />

                                    <div ref={pricingSectionRef}>
                                        <PricingSection
                                            title='Choose your <span class="heading-gradient">plan</span>'
                                            description="Select the perfect plan that matches your learning goals"
                                            tariffs={tariffs || []}
                                            isLoading={tariffsLoading}
                                            errorMessage={errorMessage}
                                            successMessage={successMessage}
                                            onTariffAction={addTariffToCart}
                                            actionLabel="Add to Cart"
                                            showBackground={true}
                                        />
                                    </div>
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
                                    <CourseStructureCard
                                        totalUnits={course?.units?.length || 0}
                                        totalLessons={totalLessons}
                                        totalMockExams={mockExamsData?.totalExams}
                                        showStartButton={true}
                                        onStartClick={scrollToPricing}
                                    />
                                    <div className="mg-top-24px">

                                    </div>
                                </aside>

                                {/* Mobile Version */}
                                <div className="course-preview-sidebar-mobile">
                                    <CourseStructureCard
                                        totalUnits={course?.units?.length || 0}
                                        totalLessons={totalLessons}
                                        totalMockExams={mockExamsData?.totalExams}
                                        showStartButton={true}
                                        onStartClick={scrollToPricing}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <PopularCoursesSection
                title="You Might Also"
                titleHighlight="Like"
            />

            <footer className="footer-wrapper">
                <div data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-card">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock/>
                    </div>
                </div>
            </footer>

            <Footer/>
        </div>
    )
}