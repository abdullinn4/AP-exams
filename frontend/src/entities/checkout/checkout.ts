export interface CheckoutFormData {
    email: string;
    discordNickname: string;
}

export interface CheckoutPrepareRequest {
    email: string
    discordNickname: string
    tariffIds: string[]  // Массив ID тарифов из корзины
    variantId: string    // LemonSqueezy variant ID (обычный или bundle)
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
    tariffIds: string[]
    courseIds: string
}