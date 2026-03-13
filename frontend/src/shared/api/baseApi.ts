import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {tokenService} from "@/features/auth/lib/tokenService.ts";
import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import { Mutex } from 'async-mutex'
import {clearAuth, setAuthenticated} from "@/features/auth/model/authSlice.ts";
import {getUserKey} from "@/shared/lib/userKey/userKey.ts";

// Базовая настройка для всех API запросов
const baseQuery = fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers) => {
        const token = tokenService.getAccessToken()
        if (token){
            headers.set("Authorization", `Bearer ${token}`)
        }
        headers.set("X-UserKey", getUserKey())

        return headers
    },
})

const mutex = new Mutex();

// Query с автоматическим refresh
const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    await mutex.waitForUnlock()

    let result = await baseQuery(args, api, extraOptions)

    if (result.error) {
        console.log('[Auth] Request failed:', {
            status: result.error.status,
            url: typeof args === 'string' ? args : args.url
        })
    }

    if (result.error?.status === 401 || result.error?.status === 403) {

        const hasToken = !!tokenService.getAccessToken()

        // Если нет токена - это анонимный пользователь, не пытаемся refresh
        if (!hasToken) {
            console.log('[Auth] No token, skipping refresh')
            return result
        }

        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                const refreshToken = tokenService.getRefreshToken()
                if (!refreshToken) throw new Error('No refresh token')

                const refreshResult = await baseQuery(
                    {
                        url: '/auth/refresh',
                        method: 'POST',
                        params: { refreshToken },
                    },
                    api,
                    extraOptions
                )

                if (refreshResult.data) {
                    const { tokens } = refreshResult.data as {
                        tokens: { accessToken: string; refreshToken: string }
                    }

                    tokenService.setTokens(tokens.accessToken, tokens.refreshToken)
                    api.dispatch(setAuthenticated(true))

                    result = await baseQuery(args, api, extraOptions)
                } else {
                    throw new Error('Refresh failed')
                }
            } catch (error) {
                console.error('[Auth] Token refresh failed:', error)
                tokenService.clearTokens()
                api.dispatch(clearAuth())

                window.location.href = '/sign-in'

            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }

    return result
}

// Базовый API
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Auth', 'Courses', 'User', 'Dashboard', 'MyCourses', "Course", "Tariffs", "Notifications", "Statistics", "CourseLike"],
    endpoints: () => ({}),
})