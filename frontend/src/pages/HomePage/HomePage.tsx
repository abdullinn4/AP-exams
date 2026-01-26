import { Footer } from '@/widgets/Footer'
import { HeroSection } from '@/widgets/HeroSection'
import { ChaptersSection } from '@/widgets/ChaptersSection'
import { WhyCourseSection } from '@/widgets/WhyCourseSection'
import { MeetCEOSection } from '@/widgets/MeetCEOSection'
import { CTASection } from '@/widgets/CTASection'
import { FeaturesSection } from '@/widgets/FeaturesSection'
import { TestimonialsSection } from '@/widgets/TestimonialsSection'
import { BlogSection } from '@/widgets/BlogSection'
import { PricingSection } from '@/widgets/PricingSection'
import { FinalCTASection } from '@/widgets/FinalCTASection'
import {CTAFooterBlock} from "@/widgets/CTAFooterBlock";

export const HomePage = () => {
    
    return (
        <div className="page-wrapper">
            <HeroSection />
            <ChaptersSection />
            <WhyCourseSection />
            <MeetCEOSection />
            <CTASection />
            <FeaturesSection />
            <TestimonialsSection />
            <BlogSection />
            <FinalCTASection />
            <PricingSection />

            <footer className="footer-wrapper">
                <div
                    data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135"
                    className="footer-card"
                >
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock />
                    </div>
                </div>
            </footer>



            <Footer variant="full" />
        </div>
    )
}
