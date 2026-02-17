import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CoursesGrid} from '@/widgets/CoursesGrid'
import {MY_COURSES_HEADER} from '@/shared/config/content/my-courses.content'
import {useGetMyCoursesQuery} from "@/shared/api/courseApi.ts";

export const MyCoursesPage = () => {

    const {data: myCourses, error} = useGetMyCoursesQuery()

    return (
        <div className="page-wrapper">
            <Header/>

            {error ? (
                <div style={{ textAlign: 'center', padding: '100px 0' }}>
                    <p style={{ color: 'red' }}>Failed to load courses. Please try again later.</p>
                </div>
            ) : (
                <CoursesGrid
                    title={MY_COURSES_HEADER.title}
                    titleHighlight={MY_COURSES_HEADER.titleHighlight}
                    description={MY_COURSES_HEADER.description}
                    courses={myCourses}
                    variant="my-courses"
                    coursesProgress={myCourses}
                />
            )}

            <Footer/>
        </div>
    )
}