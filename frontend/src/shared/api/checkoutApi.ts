import {baseApi} from "@/shared/api/baseApi.ts";
import type {CheckoutPrepareRequest, CheckoutPrepareResponse} from "@/entities/checkout/checkout.ts";

export const checkoutApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        prepareCheckout: builder.mutation<CheckoutPrepareResponse, CheckoutPrepareRequest>({
            query: (data) => ({
                url: '/checkout/prepare',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const {
    usePrepareCheckoutMutation,
} = checkoutApi