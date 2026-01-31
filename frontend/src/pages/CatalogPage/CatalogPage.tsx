import { useState } from "react"
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { CTAFooterBlock } from '@/widgets/CTAFooterBlock'
import { CoursesGrid } from '@/widgets/CoursesGrid'
import { TariffSelectionModal } from "@/features/cart"
import { CATALOG_HEADER, CATALOG_COURSES } from '@/shared/config/content'

export const CatalogPage = () => {
    const [selectedCourse, setSelectedCourse] = useState<{
        id: string
        title: string
        coverUrl: string
    } | null>(null)

    const handleAddToCart = (id: string, title: string, coverUrl: string) => {
        setSelectedCourse({ id, title, coverUrl })
    }

    return (
        <div className="page-wrapper">
            <Header />

            <CoursesGrid
                title={CATALOG_HEADER.title}
                titleHighlight={CATALOG_HEADER.titleHighlight}
                description={CATALOG_HEADER.description}
                courses={CATALOG_COURSES.items}
                variant="catalog"
                onAddToCart={handleAddToCart}
            />

            {selectedCourse && (
                <TariffSelectionModal
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                    courseId={selectedCourse.id}
                    courseTitle={selectedCourse.title}
                    courseCoverUrl={selectedCourse.coverUrl}
                />
            )}

            <footer className="footer-wrapper">
                <div data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-card">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock />
                    </div>
                </div>
            </footer>

            <Footer />
        </div>
    )
}