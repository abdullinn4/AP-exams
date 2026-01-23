export interface CheckoutFormData {
    email: string;
    discordNickname: string;
    promoCode?: string;
}

export interface CheckoutPrepareRequest {
    tariffId: string
    email: string
    discordNickname: string
}

export interface CheckoutPrepareResponse {
    orderId: string
    lemonSqueezyCheckoutUrl: string
}

export interface PromoCodeValidationRequest {
    code: string,
    tariffId: string
}

export interface PromoCodeValidationResponse {
    valid: boolean,
    message: string,
    discountPercent?: number,
    originalPrice?: number,
    discountedPrice?: number,
    finalPrice?: number,
}

// Данные для success страницы (из URL параметров после редиректа с LemonSqueezy)
export interface CheckoutSuccessData {
    email: string
    discordNickname: string
    tariffId: string
    courseId: string
}