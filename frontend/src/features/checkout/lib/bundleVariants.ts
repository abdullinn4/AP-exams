import type { CartItem } from '@/entities/cart/cart'

export function getBulkDiscountPercent(itemCount: number): number {

    switch (itemCount) {
        case 2:
            return 10
        case 3:
            return 20
        case 4:
        case 5:
        case 6:
            return 25
        default:
            return 0
    }
}

export function calculateEstimatedPrice(items: CartItem[]) {

    const originalPrice = items.reduce((sum, item) => sum + item.price, 0)

    const bulkDiscountPercent = getBulkDiscountPercent(items.length)

    const estimatedPrice = Math.round(
        originalPrice * (1 - bulkDiscountPercent / 100)
    )

    return {
        originalPrice,
        bulkDiscountPercent,
        estimatedPrice
    }
}