import { CoursesGrid } from '@/widgets/CoursesGrid'
import { MY_COURSES_HEADER } from '@/shared/config/content/my-courses.content'
import type {CourseWithProgress} from "@/entities/course/course.ts";

interface MyCoursesTabProps {
    myCourses?: CourseWithProgress[]
    error: any
}

export const MyCoursesTab = ({ myCourses, error }: MyCoursesTabProps) => {
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
        <CoursesGrid
            title={MY_COURSES_HEADER.title}
            titleHighlight={MY_COURSES_HEADER.titleHighlight}
            description={MY_COURSES_HEADER.description}
            courses={myCourses}
            variant="my-courses"
            coursesProgress={myCourses}
            disableAnimations={true}
        />
    )
}