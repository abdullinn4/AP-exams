import { CDN_BASE_URL } from "@/shared/config/cdn.config.ts"

export const processLessonMarkdown = (markdown: string, courseTitle: string) => {
    return markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        (match, alt, src) => {
            // Если уже полный URL, не трогаем
            if (src.startsWith('http')) return match

            // Кодируем название курса для URL (например "AP Calculus BC" -> "AP%20Calculus%20BC")
            const encodedCourseTitle = encodeURIComponent(courseTitle)

            // Формируем полный URL
            const fullUrl = `${CDN_BASE_URL}/courses/${encodedCourseTitle}/lessons/${src}`

            return `![${alt}](${fullUrl})`
        }
    )
}

export const processTestMarkdown = (markdown: string, courseTitle: string) => {
    return markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        (match, alt, src) => {
            if (src.startsWith('http')) return match

            const encodedCourseTitle = encodeURIComponent(courseTitle)
            const fullUrl = `${CDN_BASE_URL}/courses/${encodedCourseTitle}/tests/${src}`

            return `![${alt}](${fullUrl})`
        }
    )
}