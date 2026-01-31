import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CTAFooterBlock} from '@/widgets/CTAFooterBlock'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {MOCK_COURSE_DETAIL} from '@/shared/config/content/course-detail.content'
import {CourseVideoHeroSection} from "@/widgets/CourseHeroSection"
import {PricingSection} from "@/widgets/PricingSection"
import {useGetTariffsByCourseIdQuery} from "@/shared/api/courseApi"
import {useAddCourseToCart} from "@/shared/lib/hooks/useAddCourseToCart"

export const CoursePreviewPage = () => {
    const course = MOCK_COURSE_DETAIL
    const {data: tariffs, isLoading} = useGetTariffsByCourseIdQuery(course.id)
    const {addTariffToCart, errorMessage, successMessage} = useAddCourseToCart(course)


    return (
        <div className="page-wrapper">
            <Header/>

            <CourseVideoHeroSection course={course}/>

            <CourseUnitsSection
                units={course.units}
                isClickable={false}
                showProgress={false}
                courseSlug={course.slug}
            />

            <PricingSection
                title='Choose your <span class="heading-gradient">plan</span>'
                description="Select the perfect plan that matches your learning goals"
                tariffs={tariffs || []}
                isLoading={isLoading}
                errorMessage={errorMessage}
                successMessage={successMessage}
                onTariffAction={addTariffToCart}
                actionLabel="Add to Cart"
                showBackground={true}
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