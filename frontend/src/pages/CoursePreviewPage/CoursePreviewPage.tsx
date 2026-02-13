import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CTAFooterBlock} from '@/widgets/CTAFooterBlock'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {CourseVideoHeroSection} from "@/widgets/CourseHeroSection"
import {PricingSection} from "@/widgets/PricingSection"
import {useGetCourseBySlugQuery, useGetTariffsByCourseIdQuery} from "@/shared/api/courseApi"
import {useAddCourseToCart} from "@/shared/lib/hooks/useAddCourseToCart"
import {useParams} from "react-router-dom";

export const CoursePreviewPage = () => {
    const {slug} = useParams<{slug: string}>()
    const { data: course, isLoading: courseLoading, error: courseError } = useGetCourseBySlugQuery(
        slug || '',
        { skip: !slug } // Пропустить запрос если slug undefined
    )
    const { data: tariffs, isLoading: tariffsLoading } = useGetTariffsByCourseIdQuery(
        course?.id || '',
        { skip: !course?.id } // Пропустить запрос если course undefined
    )
    const {addTariffToCart, errorMessage, successMessage} = useAddCourseToCart(
        course || { id: '', title: '', coverUrl: null })

    if (courseLoading) return null

    // Error или нет slug
    if (!slug) {
        return (
            <div className="page-wrapper">
                <Header />
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p>Invalid course URL</p>
                </div>
                <Footer />
            </div>
        )
    }

    if (courseError || (!courseLoading && !course)) {
        return (
            <div className="page-wrapper">
                <Header />
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p>Course not found</p>
                </div>
                <Footer />
            </div>
        )
    }

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
                isLoading={tariffsLoading}
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