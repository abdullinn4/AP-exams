import {Footer} from '@/widgets/Footer'
import {HeroSection} from '@/widgets/HeroSection'
import {ChaptersSection} from '@/widgets/ChaptersSection'
import {WhyCourseSection} from '@/widgets/WhyCourseSection'
import {CTASection} from '@/widgets/CTASection'
import {FeaturesSection} from '@/widgets/FeaturesSection'
import {TestimonialsSection} from '@/widgets/TestimonialsSection'
import {FinalCTASection} from '@/widgets/FinalCTASection'
import {CTAFooterBlock} from "@/widgets/CTAFooterBlock";
import {PopularCoursesSection} from "@/widgets/PopularCoursesSection";
import {CourseSliderSection} from "@/widgets/CourseSliderSection";
import {ExamPrepWorksSection} from "@/widgets/ExamPrepWorksSection";
import {QuoteWithVideos} from "@/widgets/QuoteWithVideos";
import {IncludedFeaturesSection} from "@/widgets/IncludedFeaturesSection";

export const HomePage = () => {

    return (
        <div className="page-wrapper">
            <HeroSection/>
            <WhyCourseSection/>
            <ChaptersSection/>
            <ExamPrepWorksSection/>
            <CourseSliderSection/>
            <IncludedFeaturesSection/>
            <CTASection/>
            <PopularCoursesSection/>
            <TestimonialsSection/>
            <FeaturesSection/>
            <QuoteWithVideos/>
            <FinalCTASection/>

            <footer className="footer-wrapper">
                <div
                    data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135"
                    className="footer-card"
                >
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock/>
                    </div>
                </div>
            </footer>

            <Footer variant="full"/>
        </div>
    )
}
