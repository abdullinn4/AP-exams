import {Footer} from '@/widgets/Footer'
import {HeroSection} from '@/widgets/HeroSection'
import {ChaptersSection} from '@/widgets/ChaptersSection'
import {WhyCourseSection} from '@/widgets/WhyCourseSection'
import {MeetCEOSection} from '@/widgets/MeetCEOSection'
import {CTASection} from '@/widgets/CTASection'
import {FeaturesSection} from '@/widgets/FeaturesSection'
import {TestimonialsSection} from '@/widgets/TestimonialsSection'
import {PricingSection} from '@/widgets/PricingSection'
import {FinalCTASection} from '@/widgets/FinalCTASection'
import {CTAFooterBlock} from "@/widgets/CTAFooterBlock";
import {useNavigate} from "react-router-dom";
import {homeTariffs} from "@/shared/config/content";

export const HomePage = () => {
    const navigate = useNavigate()

    const handleTariffAction = () => {
        navigate('/courses')
    }


    return (
        <div className="page-wrapper">
            <HeroSection/>
            <ChaptersSection/>
            <WhyCourseSection/>
            <MeetCEOSection/>
            <CTASection/>
            <FeaturesSection/>
            <TestimonialsSection/>
            <FinalCTASection/>
            <PricingSection
                title='Pricing plans <span class="heading-gradient">for you</span>'
                description="Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat."
                tariffs={homeTariffs}
                onTariffAction={handleTariffAction}
                actionLabel="Get started"
                showBackground={true}
            />

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
