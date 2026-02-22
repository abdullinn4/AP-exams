import {useParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {CourseVideoHeroSection} from "@/widgets/CourseHeroSection"
import {useGetCourseDetailsQuery} from "@/shared/api/courseApi.ts";
import {MockExamsSection} from "@/widgets/MockExamsSection";

export const MyCoursePage = () => {
    const {slug} = useParams<{ slug: string }>()

    const {data: course, error} = useGetCourseDetailsQuery(slug!, {
        skip: !slug
    })

    if (!slug) {
        return (
            <div className="page-wrapper">
                <Header/>
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Course slug is missing</p>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
            <Header/>

            {error ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Failed to load course details. Please try again later.</p>
                </div>
            ) : (
                <>
                    <CourseVideoHeroSection course={course}/>

                    <CourseUnitsSection
                        units={course?.units}
                        isClickable={true}
                        showProgress={true}
                        courseSlug={course?.slug}
                    />

                    <MockExamsSection courseSlug={course?.slug}/>

                </>
            )}

            <Footer/>
        </div>
    )
}