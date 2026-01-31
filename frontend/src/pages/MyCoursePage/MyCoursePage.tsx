import {useParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CourseUnitsSection} from '@/widgets/CourseUnitsSection/CourseUnitsSection'
import {CourseVideoHeroSection} from "@/widgets/CourseHeroSection"
import {MOCK_MY_COURSE_DETAIL} from '@/shared/config/content/my-course-detail.content'

export const MyCoursePage = () => {
    const {slug} = useParams<{ slug: string }>()
    const course = MOCK_MY_COURSE_DETAIL

    return (
        <div className="page-wrapper">
            <Header/>

            <CourseVideoHeroSection course={course}/>

            <CourseUnitsSection
                units={course.units}
                isClickable={true}
                showProgress={true}
                courseSlug={slug}
            />

            <Footer/>
        </div>
    )
}