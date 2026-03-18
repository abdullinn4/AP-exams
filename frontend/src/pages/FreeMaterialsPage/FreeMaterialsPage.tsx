import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CTAFooterBlock} from '@/widgets/CTAFooterBlock'
import {CoursesGrid} from '@/widgets/CoursesGrid'
import {FREE_MATERIALS_HEADER, FREE_MATERIALS_MOCK_DATA} from '@/shared/config/content'
import {useWebflowReinit} from "@/shared/lib/hooks/useWebflowReinit.ts"

export const FreeMaterialsPage = () => {
    useWebflowReinit(FREE_MATERIALS_MOCK_DATA)

    return (
        <div className="page-wrapper">
            <Header/>

            <CoursesGrid
                title={FREE_MATERIALS_HEADER.title}
                titleHighlight={FREE_MATERIALS_HEADER.titleHighlight}
                description={FREE_MATERIALS_HEADER.description}
                courses={FREE_MATERIALS_MOCK_DATA}
                variant="free-materials"
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