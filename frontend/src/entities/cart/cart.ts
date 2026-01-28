export interface CartItem {
    id: string
    courseId: string
    courseTitle: string
    courseCoverUrl: string | null
    tariffId: string
    tariffTitle: string
    tariffTier: 'BASIC' | 'PRO'
    price: number
    currency: string
    addedAt: string
    lemonSqueezyVariantId: string
}

export interface CartState {
    items: CartItem[]
    totalItems: number
    totalPrice: number
}