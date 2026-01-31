import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CoursesGrid} from '@/widgets/CoursesGrid'
import {MOCK_MY_COURSES, MY_COURSES_HEADER} from '@/shared/config/content/my-courses.content'

export const MyCoursesPage = () => {
    return (
        <div className="page-wrapper">
            <Header/>

            <CoursesGrid
                title={MY_COURSES_HEADER.title}
                titleHighlight={MY_COURSES_HEADER.titleHighlight}
                description={MY_COURSES_HEADER.description}
                courses={MOCK_MY_COURSES}
                variant="my-courses"
                coursesProgress={MOCK_MY_COURSES}
            />

            <Footer/>
        </div>
    )
}