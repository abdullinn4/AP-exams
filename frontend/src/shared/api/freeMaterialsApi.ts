import { baseApi } from "@/shared/api/baseApi.ts"

export interface FreeMaterialRequest {
    email: string
    materialSlug: string
}

export const freeMaterialsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestFreeMaterial: builder.mutation<void, FreeMaterialRequest>({
            query: (data) => ({
                url: '/free-materials/request',
                method: 'POST',
                body: data
            }),
        }),
    }),
})

export const { useRequestFreeMaterialMutation } = freeMaterialsApi