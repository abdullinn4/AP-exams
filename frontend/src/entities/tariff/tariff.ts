export interface TariffDetails {
    id: string
    courseId: string
    title: string
    tier: 'BASIC' | 'PRO'
    price: number
    currency: string
    payProProductId: string
    isActive: boolean
}