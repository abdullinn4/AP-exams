export const CDN_BASE_URL = import.meta.env.VITE_CDN_URL || 'https://pub-ebed5112be004dd2a3eb1a7ef425d981.r2.dev'

export const getCourseImageUrl = (courseTitle: string, imagePath: string): string => {
    const encodedCourseTitle = encodeURIComponent(courseTitle)
    return `${CDN_BASE_URL}/courses/${encodedCourseTitle}/lessons/${imagePath}`
}