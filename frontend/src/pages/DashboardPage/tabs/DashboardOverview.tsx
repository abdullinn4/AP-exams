import { CourseDetailCard } from '@/widgets/CourseDetailCard'
import { PromoBanner } from '@/widgets/PromoBanner'
import type { DashboardResponse } from '@/entities/dashboard/dashboard'

interface DashboardOverviewProps {
    dashboard?: DashboardResponse
    error: any
}

export const DashboardOverview = ({ dashboard, error }: DashboardOverviewProps) => {
    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ color: 'red' }}>
                    Failed to load dashboard. Please try again later.
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="mg-bottom-24px"
            >
                <PromoBanner />
            </div>

            {dashboard?.selectedCourseDetail.map((courseDetail) => (
                <div
                    key={courseDetail.courseId}
                     className="mg-bottom-24px"

                >
                    <CourseDetailCard courseDetail={courseDetail} />
                </div>
            ))}
        </>
    )
}