import { useState, useEffect } from 'react'
import { useCart } from '@/features/cart'
import type { TariffDetails } from '@/entities/tariff/tariff'

export const useAddCourseToCart = (course: {
    id: string
    title: string
    coverUrl?: string | null
}) => {
    const { addItem, hasItem, canAddMore } = useCart()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    // Auto-clear error after 3 seconds
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => setErrorMessage(null), 3000)
            return () => clearTimeout(timer)
        }
        if (successMessage){
            const timer = setTimeout(() => setSuccessMessage(null), 3000)
            return () => clearTimeout(timer)
        }
    }, [errorMessage, successMessage])

    const addTariffToCart = (tariff: TariffDetails): boolean => {
        if (hasItem(course.id)) {
            setErrorMessage('This course is already in your cart')
            return false
        }

        if (!canAddMore()) {
            setErrorMessage('Cart is full (maximum 5 courses)')
            return false
        }

        addItem({
            id: `${course.id}-${tariff.id}`,
            courseId: course.id,
            courseTitle: course.title,
            courseCoverUrl: course.coverUrl || '',
            tariffId: tariff.id,
            tariffTitle: tariff.title,
            tariffTier: tariff.tier,
            price: tariff.price,
            currency: tariff.currency,
            addedAt: new Date().toISOString(),
            payProProductId: tariff.payProProductId,
        })

        setSuccessMessage('Course added to cart successfully')
        return true
    }

    return {
        addTariffToCart,
        errorMessage,
        successMessage,
        clearMessages: () => {
            setErrorMessage(null)
            setSuccessMessage(null)
        },
    }
}