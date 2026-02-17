import { baseApi } from '@/shared/api/baseApi.ts'
import type {
    CourseDetails,
    CourseDetailsWithProgress,
    CourseWithProgress,
    CourseWithUnits, LessonDetails, UnitWithProgress
} from '@/entities/course/course.ts'
import type {TariffDetails} from "@/entities/tariff/tariff.ts";
import type {
    StartTestResponse,
    TestAnswers,
    TestAttemptResult,
    TestResultDetailsResponse
} from "@/entities/test/test.ts";

import type {DashboardResponse} from "@/entities/dashboard/dashboard.ts";


export const coursesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourses: builder.query<CourseDetails[], void>({
            query: () => 'public/courses',
            providesTags: ['Courses'],
        }),
        getCourseBySlug: builder.query<CourseWithUnits, string>({
            query: (slug) => `public/courses/${slug}/preview`,
            providesTags: (_result, _error, slug) => [{ type: 'Courses', id: slug }],
        }),
        getTariffsByCourseId: builder.query<TariffDetails[], string>({
            query: (courseId) => `/public/courses/${courseId}/tariffs`,
            providesTags: (_result, _error, courseId) => [{ type: 'Tariffs', id: courseId }],

        }),
        getMyCourses: builder.query<CourseWithProgress[], void>({
            query: () => 'courses',
            providesTags: ['MyCourses'],
        }),
        getCourseDetails: builder.query<CourseDetailsWithProgress, string>({
            query: (courseId) => `courses/${courseId}`,
            providesTags: (_result, _error, courseId) => [{ type: 'Courses', id: courseId }],
        }),
        getUnitDetails: builder.query<UnitWithProgress, { courseSlug: string; unitId: string }>({
            query: ({ courseSlug, unitId }) => `/courses/${courseSlug}/units/${unitId}`,
            providesTags: (_result, _error, { unitId }) => [{ type: 'Course', id: unitId }],
        }),
        getLessonDetails: builder.query<LessonDetails, {
            courseSlug: string
            unitId: string
            lessonId: string
        }>({
            query: ({ courseSlug, unitId, lessonId }) =>
                `/courses/${courseSlug}/units/${unitId}/lessons/${lessonId}`,
            providesTags: (_result, _error, { lessonId }) => [{ type: 'Course', id: lessonId }],
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    // Инвалидируем дашборд и курсы после успешного запроса урока
                    dispatch(coursesApi.util.invalidateTags(['Dashboard', 'MyCourses']))
                } catch {
                    console.error('Failed to invalidate tags after lesson details query')
                }
            },
        }),
        // Тесты
        startTest: builder.mutation<StartTestResponse, string>({
            query: (testId) => {
                return {
                    url: `/tests/${testId}/attempts`,
                    method: 'POST',
                }
            },
            invalidatesTags: ['Course'],
        }),
        submitTest: builder.mutation<TestAttemptResult, { attemptId: string; answers: TestAnswers }>({
            query: ({ attemptId, answers }) => ({
                url: `/test-attempts/${attemptId}/submit`,
                method: 'POST',
                body: answers,
            }),
            invalidatesTags: ['Course'],
        }),
        getTestResultDetails: builder.query<TestResultDetailsResponse, string>({
            query: (attemptId) => `/test-attempts/${attemptId}/details`,
            providesTags: (_result, _error, attemptId) => [{ type: 'Course', id: `result-${attemptId}` }],
        }),
        getDashboard: builder.query<DashboardResponse, void>({
            query: () => 'dashboard',
            providesTags: ['Dashboard'],
        }),
    }),
})

export const {
    useGetAllCoursesQuery,
    useGetCourseBySlugQuery,
    useGetTariffsByCourseIdQuery,
    useGetMyCoursesQuery,
    useGetCourseDetailsQuery,
    useGetUnitDetailsQuery,
    useGetLessonDetailsQuery,
    useStartTestMutation,
    useSubmitTestMutation,
    useGetTestResultDetailsQuery,
    useGetDashboardQuery,
} = coursesApi