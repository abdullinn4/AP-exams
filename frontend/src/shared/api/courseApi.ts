import { baseApi } from '@/shared/api/baseApi.ts'
import type {
    CourseDetails,
    CourseDetailsWithProgress,
    CourseWithProgress,
    CourseWithUnits, LessonDetails, UnitWithProgress
} from '@/entities/course/course.ts'
import type {TariffDetails} from "@/entities/tariff/tariff.ts";
import type {StartTestResponse, TestAttemptResult} from "@/entities/test/test.ts";
import {MOCK_START_TEST_RESPONSE, MOCK_TEST_RESULT} from "@/shared/config/content/test-mock.content.ts";

// Mock данные для тарифов (временно)
const MOCK_TARIFFS: Record<string, TariffDetails[]> = {
    '1': [
        {
            id: 'tariff-1-basic',
            courseId: '1',
            title: 'Basic Plan',
            tier: 'BASIC',
            price: 49,
            currency: 'USD',
            lemonSqueezyVariantId: '1',
            isActive: true,
        },
        {
            id: 'tariff-1-pro',
            courseId: '1',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: '2',
            isActive: true,
        },
    ],
    '2': [
        {
            id: 'tariff-2-basic',
            courseId: '2',
            title: 'Basic Plan',
            tier: 'BASIC',
            price: 49,
            currency: 'USD',
            lemonSqueezyVariantId: '3',
            isActive: true,
        },
        {
            id: 'tariff-2-pro',
            courseId: '2',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: '4',
            isActive: true,
        },
    ],
    '3': [
        {
            id: 'tariff-3-basic',
            courseId: '3',
            title: 'Basic Plan',
            tier: 'BASIC',
            price: 49,
            currency: 'USD',
            lemonSqueezyVariantId: '5',
            isActive: true,
        },
        {
            id: 'tariff-3-pro',
            courseId: '3',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: '6',
            isActive: true,
        },
    ],
    '4': [
        {
            id: 'tariff-4-basic',
            courseId: '4',
            title: 'Basic Plan',
            tier: 'BASIC',
            price: 49,
            currency: 'USD',
            lemonSqueezyVariantId: '7',
            isActive: true,
        },
        {
            id: 'tariff-4-pro',
            courseId: '4',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: '8',
            isActive: true,
        },
    ],
    '5': [
        {
            id: 'tariff-5-basic',
            courseId: '5',
            title: 'Basic Plan',
            tier: 'BASIC',
            price: 49,
            currency: 'USD',
            lemonSqueezyVariantId: '9',
            isActive: true,
        },
        {
            id: 'tariff-5-pro',
            courseId: '5',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: '10',
            isActive: true,
        },
    ],
}


export const coursesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourses: builder.query<CourseDetails[], void>({
            query: () => 'public/courses',
            providesTags: ['Courses'],
        }),
        getCourseBySlug: builder.query<CourseWithUnits, string>({
            query: (slug) => `public/courses/${slug}/preview`,
            //providesTags: (result, error, slug) => [{ type: 'Courses', slug }],
        }),
        getTariffsByCourseId: builder.query<TariffDetails[], string>({
            /*query: (courseId) => `/public/courses/${courseId}/tariffs`,
            providesTags: (_result, _error, courseId) => [{ type: 'Tariffs', id: courseId }],*/
            queryFn: (courseId) =>{
                return {
                    data: MOCK_TARIFFS[courseId]
                }
            }
        }),
        getMyCourses: builder.query<CourseWithProgress[], void>({
            query: () => 'courses',
            providesTags: ['MyCourses'],
        }),
        getCourseDetails: builder.query<CourseDetailsWithProgress, string>({
            query: (courseId) => `courses/${courseId}`,
            providesTags: (result, error, courseId) => [{ type: 'Courses', id: courseId }],
        }),
        getUnitDetails: builder.query<UnitWithProgress, { courseSlug: string; unitId: string }>({
            query: ({ courseSlug, unitId }) => `/courses/${courseSlug}/units/${unitId}`,
            providesTags: (result, error, { unitId }) => [{ type: 'Course', id: unitId }],
        }),
        getLessonDetails: builder.query<LessonDetails, {
            courseSlug: string
            unitId: string
            lessonId: string
        }>({
            query: ({ courseSlug, unitId, lessonId }) =>
                `/courses/${courseSlug}/units/${unitId}/lessons/${lessonId}`,
            providesTags: (result, error, { lessonId }) => [{ type: 'Course', id: lessonId }],
        }),
        // Тесты
        /*startTest: builder.mutation<StartTestResponse, string>({
            query: (testId) => ({
                url: `/tests/${testId}/attempts`,
                method: 'POST',
            }),
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
        getTestResult: builder.query<TestAttemptResult, string>({
            query: (attemptId) => `/test-attempts/${attemptId}/result`,
            providesTags: (result, error, attemptId) => [{ type: 'Course', id: attemptId }],
        }),*/

        startTest: builder.mutation<StartTestResponse, string>({
            queryFn: async (testId) => {
                // Mock данные
                await new Promise(resolve => setTimeout(resolve, 500))
                return { data: MOCK_START_TEST_RESPONSE }
            },
            invalidatesTags: ['Course'],
        }),

        submitTest: builder.mutation<TestAttemptResult, { attemptId: string; answers: TestAnswers }>({
            queryFn: async ({ attemptId, answers }) => {
                // Mock данные
                await new Promise(resolve => setTimeout(resolve, 1000))
                return { data: MOCK_TEST_RESULT }
            },
            invalidatesTags: ['Course'],
        }),

        getTestResult: builder.query<TestAttemptResult, string>({
            queryFn: async (attemptId) => {
                // Mock данные
                await new Promise(resolve => setTimeout(resolve, 300))
                return { data: MOCK_TEST_RESULT }
            },
            providesTags: (result, error, attemptId) => [{ type: 'Course', id: attemptId }],
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
    useGetTestResultQuery,
} = coursesApi