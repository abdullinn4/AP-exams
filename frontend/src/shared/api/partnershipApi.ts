import { baseApi } from "@/shared/api/baseApi.ts"

export interface PartnershipSubscriptionRequest {
    email: string
}

export const partnershipApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        subscribeToPartnership: builder.mutation<void, PartnershipSubscriptionRequest>({
            query: (data) => ({
                url: '/partnership/subscribe',
                method: 'POST',
                body: data
            }),
        }),
    }),
})

export const { useSubscribeToPartnershipMutation } = partnershipApi