export interface CourseCardResponse {
    id: string
    title: string
    slug: string
    coverUrl: string | null
}

export interface CourseLessonPreview {
    lessonId: string
    lessonTitle: string
    orderIndex: number
    unitId: string
    unitTitle: string
    status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
}

export interface DashboardCourseDetail {
    courseId: string
    courseTitle: string
    courseSlug: string
    snippet: string | null
    lessons: CourseLessonPreview[]
}

export interface DashboardResponse {
    myCourses: CourseCardResponse[]
    availableCourses: CourseCardResponse[]
    selectedCourseDetail: DashboardCourseDetail[]
}