import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// Базовая настройка для всех API запросов
const baseQuery = fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken")
        if (token){
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    },
})

// Базовый API
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ['Auth', 'Courses', 'User'],
    endpoints: () => ({}),
})