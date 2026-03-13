import {baseApi} from "@/shared/api/baseApi.ts";
import type {ForgotPasswordRequest, LoginRequest, LoginResponse} from "@/entities/users/auth/auth.ts";
import type {ChangePasswordRequest} from "@/entities/users/student/student.ts";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // POST /api/v1/auth/login
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['Auth'],
        }),
        // POST /api/v1/auth/forgot-password
        forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
            query: (data) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: data
            }),
        }),
        // POST /api/v1/auth/logout
        logout: builder.mutation<void, {refreshToken: string}>({
            query: (data) => ({
                url: '/auth/logout',
                method: 'POST',
                params: {refreshToken: data.refreshToken}
            }),
            invalidatesTags: ['Auth'],
        }),
        changePassword: builder.mutation<void, ChangePasswordRequest>({
            query: (body) => ({
                url: "/me/password",
                method: "PUT",
                body
            })
        })
    }),
})

export const {
    useLoginMutation,
    useForgotPasswordMutation,
    useLogoutMutation,
    useChangePasswordMutation
} = authApi