import { baseApi } from '@/shared/api/baseApi.ts'
import type { CourseDetails } from '@/entities/course/course.ts'
import type {TariffDetails} from "@/entities/tariff/tariff.ts";

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
            lemonSqueezyVariantId: null,
            isActive: true,
        },
        {
            id: 'tariff-1-pro',
            courseId: '1',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: null,
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
            lemonSqueezyVariantId: null,
            isActive: true,
        },
        {
            id: 'tariff-2-pro',
            courseId: '2',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: null,
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
            lemonSqueezyVariantId: null,
            isActive: true,
        },
        {
            id: 'tariff-3-pro',
            courseId: '3',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: null,
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
            lemonSqueezyVariantId: null,
            isActive: true,
        },
        {
            id: 'tariff-4-pro',
            courseId: '4',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: null,
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
            lemonSqueezyVariantId: null,
            isActive: true,
        },
        {
            id: 'tariff-5-pro',
            courseId: '5',
            title: 'Pro Plan',
            tier: 'PRO',
            price: 99,
            currency: 'USD',
            lemonSqueezyVariantId: null,
            isActive: true,
        },
    ],
}

const USE_MOCK_TARIFFS = true // Переключатель для mock данных

export const coursesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourses: builder.query<CourseDetails[], void>({
            query: () => '/courses',
            providesTags: ['Courses'],
        }),
        getCourseById: builder.query<CourseDetails, string>({
            query: (id) => `/courses/${id}`,
            providesTags: (result, error, id) => [{ type: 'Courses', id }],
        }),
        getTariffsByCourseId: builder.query<TariffDetails[], string>({
            queryFn: async (courseId) => {
                if (USE_MOCK_TARIFFS) {
                    // Имитация задержки сети
                    await new Promise(resolve => setTimeout(resolve, 300))
                    return { data: MOCK_TARIFFS[courseId] || [] }
                }
                // Когда будет готов бэк, используется обычный запрос
                return { error: { status: 'CUSTOM_ERROR', error: 'Backend not ready' } }
            },
            providesTags: (_result, _error, courseId) => [{ type: 'Courses', id: courseId }],
        }),
    }),
})

export const {
    useGetAllCoursesQuery,
    useGetCourseByIdQuery,
    useGetTariffsByCourseIdQuery,
} = coursesApi