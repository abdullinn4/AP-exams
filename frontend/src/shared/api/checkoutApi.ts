import {baseApi} from "@/shared/api/baseApi.ts";
import type {
    CheckoutPrepareRequest,
    CheckoutPrepareResponse,
    OrdersByCheckoutResponse
} from "@/entities/checkout/checkout.ts";

export const checkoutApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        prepareCheckout: builder.mutation<CheckoutPrepareResponse, CheckoutPrepareRequest>({
            query: (data) => ({
                url: '/checkout/prepare',
                method: 'POST',
                body: data,
            }),
        }),
        getOrdersByCheckoutId: builder.query<OrdersByCheckoutResponse, string>({
            query: (checkoutId) => ({
                url: `/orders/by-checkout/${checkoutId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const {
    usePrepareCheckoutMutation,
    useGetOrdersByCheckoutIdQuery,
    useLazyGetOrdersByCheckoutIdQuery
} = checkoutApi