import { useState } from "react"
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { CTAFooterBlock } from '@/widgets/CTAFooterBlock'
import { CoursesGrid } from '@/widgets/CoursesGrid'
import { TariffSelectionModal } from "@/features/cart"
import { CATALOG_HEADER} from '@/shared/config/content'
import {useGetAllCoursesQuery} from "@/shared/api/courseApi.ts";

export const CatalogPage = () => {
    const [selectedCourse, setSelectedCourse] = useState<{
        id: string
        title: string
        coverUrl: string
    } | null>(null)

    const handleAddToCart = (id: string, title: string, coverUrl: string) => {
        setSelectedCourse({ id, title, coverUrl })
    }

    const { data: courses, isLoading, error } = useGetAllCoursesQuery()

    return (
        <div className="page-wrapper">
            <Header />

                <CoursesGrid
                    title={CATALOG_HEADER.title}
                    titleHighlight={CATALOG_HEADER.titleHighlight}
                    description={CATALOG_HEADER.description}
                    courses={courses || []}
                    variant="catalog"
                    onAddToCart={handleAddToCart}
                />

            {isLoading && (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <p>Loading courses...</p>
                </div>
            )}

            {error && (
                <div style={{ textAlign: 'center', padding: '40px 0', color: 'red' }}>
                    <p>Error loading courses. Please try again later.</p>
                </div>
            )}

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