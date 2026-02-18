import type { CartItem } from '@/entities/cart/cart'

// Bundle variants из LemonSqueezy
const BUNDLE_VARIANTS: Record<number, string> = {
    2: 'bundle_2_courses',
    3: 'bundle_3_courses',
    4: 'bundle_4_courses',
    5: 'bundle_5_courses',
}

/**
 * Определяет какой variant использовать для checkout
 * - Если 1 курс → используем lemonSqueezyVariantId тарифа
 * - Если 2-5 курсов → используем bundle variant
 */
export function getCheckoutVariantId(items: CartItem[]): string {
    if (items.length === 0) {
        throw new Error('Cart is empty')
    }

    if (items.length === 1) {
        // Один курс - используем его variant
        const variantId = items[0].paddleVariantId
        if (!variantId) {
            throw new Error('Tariff does not have LemonSqueezy variant ID')
        }
        return variantId
    }

    // Несколько курсов - используем bundle
    const bundleVariantId = BUNDLE_VARIANTS[items.length]
    if (!bundleVariantId) {
        throw new Error(`No bundle variant for ${items.length} courses`)
    }

    return bundleVariantId
}

/**
 * Рассчитывает скидку за bundle (для отображения на фронте)
 */
export function getBulkDiscountPercent(itemCount: number): number {
    switch (itemCount) {
        case 1: return 0
        case 2: return 10
        case 3: return 15
        case 4: return 20
        default: return 25 // 5+
    }
}

/**
 * Рассчитывает примерную финальную цену с учетом bulk скидки
 * ВАЖНО: Это только для preview! Реальная цена придет от LemonSqueezy
 */
export function calculateEstimatedPrice(items: CartItem[]): {
    originalPrice: number
    bulkDiscountPercent: number
    estimatedPrice: number
} {
    const originalPrice = items.reduce((sum, item) => sum + item.price, 0)
    const bulkDiscountPercent = getBulkDiscountPercent(items.length)
    const estimatedPrice = Math.round(originalPrice * (1 - bulkDiscountPercent / 100))

    return {
        originalPrice,
        bulkDiscountPercent,
        estimatedPrice,
    }
}