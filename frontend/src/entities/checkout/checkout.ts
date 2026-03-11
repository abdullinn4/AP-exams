export interface CheckoutFormData {
    email: string;
    discordNickname: string;
    acceptedTerms: boolean;
}

export interface CheckoutPrepareRequest {
    email: string
    discordNickname: string
    tariffIds: string[]  // Массив ID тарифов из корзины
    acceptedTerms: boolean
    acceptedAt: string // ISO timestamp
}

export interface CheckoutPrepareResponse {
    checkoutId: string
    payProCheckoutUrl: string
}

// Данные для success страницы (из URL параметров после редиректа с PayPro)
export interface CheckoutSuccessData {
    email: string
    discordNickname: string
    tariffIds: string[]
    courseIds: string[]
}

export interface OrderItemResponse {
    orderId: string
    courseId: string
    courseTitle: string
    courseSlug: string
    tariffId: string
    tariffTitle: string
    tariffTier: string
    priceCents: number
    currency: string
    status: string
}

export interface OrdersByCheckoutResponse {
    checkoutId: string
    userEmail: string
    discordNickname: string
    items: OrderItemResponse[]
    overallStatus: 'pending' | 'completed' | 'partial'
    totalAmountCents: number
    currency: string
}