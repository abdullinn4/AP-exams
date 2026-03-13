import { useState } from 'react'
import { CoursesGrid } from '@/widgets/CoursesGrid'
import { TariffSelectionModal } from '@/features/cart'
import type { DashboardResponse } from '@/entities/dashboard/dashboard'

interface CatalogTabProps {
    dashboard?: DashboardResponse
    error: any
}

export const CatalogTab = ({ dashboard, error }: CatalogTabProps) => {
    const [selectedCourse, setSelectedCourse] = useState<{
        id: string
        title: string
        coverUrl: string
    } | null>(null)

    const handleAddToCart = (id: string, title: string, coverUrl: string) => {
        setSelectedCourse({ id, title, coverUrl })
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ color: 'red' }}>
                    Failed to load courses. Please try again later.
                </p>
            </div>
        )
    }

    return (
        <>
            <CoursesGrid
                title="Available"
                titleHighlight="Courses"
                description="Explore courses you haven't purchased yet"
                courses={dashboard?.availableCourses || []}
                variant="catalog"
                onAddToCart={handleAddToCart}
                disableAnimations={true}
                compact={true}
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
        </>
    )
}