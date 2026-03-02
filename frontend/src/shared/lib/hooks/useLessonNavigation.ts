import { useMemo } from 'react'
import { useGetCourseDetailsQuery } from '@/shared/api/courseApi'

interface LessonNavigationItem {
    unitId: string
    lessonId: string
    url: string
}

interface NavigationResult {
    prevUrl: string | null
    nextUrl: string | null
    hasPrev: boolean
    hasNext: boolean
}

export const useLessonNavigation = (
    courseSlug: string,
    currentUnitId: string,
    currentLessonId: string
): NavigationResult => {
    const { data: course } = useGetCourseDetailsQuery(courseSlug, {
        skip: !courseSlug
    })

    return useMemo(() => {
        if (!course || !course.units) {
            return {
                prevUrl: null,
                nextUrl: null,
                hasPrev: false,
                hasNext: false
            }
        }

        // Создаем плоский массив всех уроков с их URLs
        const allLessons: LessonNavigationItem[] = []

        const sortedUnits = [...course.units].sort((a, b) => a.orderIndex - b.orderIndex)

        sortedUnits.forEach(unit => {
            const sortedLessons = [...unit.lessons].sort((a, b) => a.orderIndex - b.orderIndex)

            sortedLessons.forEach(lesson => {
                allLessons.push({
                    unitId: unit.id,
                    lessonId: lesson.id,
                    url: `/courses/${courseSlug}/units/${unit.id}/lessons/${lesson.id}`
                })
            })
        })

        // Находим индекс текущего урока
        const currentIndex = allLessons.findIndex(
            item => item.unitId === currentUnitId && item.lessonId === currentLessonId
        )

        if (currentIndex === -1) {
            return {
                prevUrl: null,
                nextUrl: null,
                hasPrev: false,
                hasNext: false
            }
        }

        // Определяем предыдущий урок
        const prevUrl = currentIndex > 0
            ? allLessons[currentIndex - 1].url
            : null

        // Определяем следующий урок или переход на MockExamsPage
        let nextUrl: string | null = null
        if (currentIndex < allLessons.length - 1) {
            nextUrl = allLessons[currentIndex + 1].url
        } else {
            // Последний урок - переход на MockExamsPage
            nextUrl = `/courses/${courseSlug}/mock-exams`
        }

        return {
            prevUrl,
            nextUrl,
            hasPrev: prevUrl !== null,
            hasNext: nextUrl !== null
        }
    }, [course, courseSlug, currentUnitId, currentLessonId])
}