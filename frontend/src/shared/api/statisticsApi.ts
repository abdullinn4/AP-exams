import { baseApi } from '@/shared/api/baseApi'
import type { UserStatisticsResponse } from '@/entities/statistics/statistics'

export const statisticsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserStatistics: builder.query<UserStatisticsResponse, void>({
            query: () => '/statistics',
            providesTags: ['Statistics'],
        }),
    }),
})

export const { useGetUserStatisticsQuery } = statisticsApi