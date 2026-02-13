import {CDN_BASE_URL} from "@/shared/config/cdn.config.ts";

export const processLessonMarkdown = (markdown: string, courseSlug: string) => {
    return markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        (match, alt, src) => {
            if (src.startsWith('http')) return match
            const fullUrl = `${CDN_BASE_URL}/courses/${courseSlug}/lessons/${src}`
            return `![${alt}](${fullUrl})`
        }
    )
}

export const processTestMarkdown = (markdown: string, courseSlug: string) => {
    return markdown.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        (match, alt, src) => {
            if (src.startsWith('http')) return match
            const fullUrl = `${CDN_BASE_URL}/courses/${courseSlug}/tests/${src}`
            return `![${alt}](${fullUrl})`
        }
    )
}