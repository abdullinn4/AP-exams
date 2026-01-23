export const formatPrice = (price: number, currency: string = 'USD'): string => {
    const symbol = getCurrencySymbol(currency)
    return `${symbol}${price.toFixed(2)}`
}

export const getCurrencySymbol = (currency: string): string => {
    switch (currency.toUpperCase()) {
        case 'USD': return '$'
        case 'EUR': return '€'
        case 'GBP': return '£'
        case 'RUB': return '₽'
        default: return currency + ' '
    }
}