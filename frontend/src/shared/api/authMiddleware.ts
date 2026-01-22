import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'
import { tokenService } from '@/features/auth/lib/tokenService'
import { baseApi } from './baseApi'
import type { LoginResponse } from '@/entities/users/auth/auth'

let isRefreshing = false
let failedQueue: Array<{
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
}> = []

const processQueue = (error: unknown = null) => {
    failedQueue.forEach(promise => {
        if (error) {
            promise.reject(error)
        } else {
            promise.resolve()
        }
    })
    failedQueue = []
}

export const authMiddleware: Middleware = (api) => (next) => async (action) => {
    if (isRejectedWithValue(action)) {

        const payload = action.payload as {
            status?: number
            originalStatus?: number
            data?: unknown
        }

        const status = payload?.status || payload?.originalStatus
        if (status === 401) {
            const refreshToken = tokenService.getRefreshToken()

            if (!refreshToken) {
                tokenService.clearTokens()
                window.location.href = '/sign-in'
                return next(action)
            }

            if (!isRefreshing) {
                isRefreshing = true

                try {
                    const result = await api.dispatch(
                        baseApi.endpoints.refreshToken.initiate({ refreshToken })
                    )

                    if ('data' in result && result.data) {
                        const data = result.data as LoginResponse
                        tokenService.setTokens(data.accessToken, data.refreshToken)
                        processQueue()
                        isRefreshing = false
                        return next(action)
                    } else {
                        processQueue(new Error('Token refresh failed'))
                        isRefreshing = false
                        tokenService.clearTokens()
                        window.location.href = '/sign-in'
                    }
                } catch (error) {
                    processQueue(error)
                    isRefreshing = false
                    tokenService.clearTokens()
                    window.location.href = '/sign-in'
                }
            } else {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                })
            }
        }
    }

    return next(action)
}