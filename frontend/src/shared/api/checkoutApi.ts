import {baseApi} from "@/shared/api/baseApi.ts";
import type {
    CheckoutPrepareRequest,
    CheckoutPrepareResponse,
    PromoCodeValidationRequest,
    PromoCodeValidationResponse
} from "@/entities/checkout/checkout.ts";
import type {TariffDetails} from "@/entities/tariff/tariff.ts";
import type {CourseDetails} from "@/entities/course/course.ts";

export const checkoutApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        prepareCheckout: builder.mutation<CheckoutPrepareResponse, CheckoutPrepareRequest>({
            query: (data) => ({
                url: '/checkout/prepare',
                method: 'POST',
                body: data,
            }),
        }),
        validatePromoCode: builder.mutation<PromoCodeValidationResponse, PromoCodeValidationRequest>({
            query: (data) => ({
                url: '/promo-codes/validate',
                method: 'POST',
                body: data,
            }),
        }),
        getTariffById: builder.query<TariffDetails, string>({
            query: (id) => `/tariffs/${id}`,
        }),
        getCourseById: builder.query<CourseDetails, string>({
            query: (id) => `/courses/${id}`,
        }),
    }),
})

export const {
    useValidatePromoCodeMutation,
    usePrepareCheckoutMutation,
    useGetTariffByIdQuery,
    useGetCourseByIdQuery,
} = checkoutApi