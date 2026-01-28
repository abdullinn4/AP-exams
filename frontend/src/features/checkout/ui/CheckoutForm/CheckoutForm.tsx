import {useEffect, useCallback, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {type CheckoutFormData, checkoutSchema} from '@/features/checkout/lib/checkoutSchema'
import {CustomerInfoFields} from '@/features/checkout/ui/CustomerInfoFields'
import {OrderItemsBlock} from '@/features/checkout/ui/OrderItemsBlock'
import type {CartItem} from '@/entities/cart/cart'
import {tokenService} from '@/features/auth/lib/tokenService'
import {usePrepareCheckoutMutation} from '@/shared/api/checkoutApi'
import {getCheckoutVariantId} from '@/features/checkout/lib/bundleVariants'

interface CheckoutFormProps {
    items: CartItem[]
    onSubmitTrigger?: (submitFn: () => void, isSubmitting: boolean) => void
}

export const CheckoutForm = ({items, onSubmitTrigger}: CheckoutFormProps) => {
    const [prepareCheckout, {isLoading: isPreparingCheckout}] = usePrepareCheckoutMutation()
    const [error, setError] = useState<string | null>(null)

    const methods = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            email: '',
            discordNickname: '',
        },
    })

    // Автозаполнение из токена
    useEffect(() => {
        const token = tokenService.getAccessToken()
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]))
                if (payload.email) {
                    methods.setValue('email', payload.email)
                }
                if (payload.discordNickname) {
                    methods.setValue('discordNickname', payload.discordNickname)
                }
            } catch (error) {
                console.error('Failed to parse token:', error)
            }
        }
    }, [methods])

    const onSubmit = useCallback(async (data: CheckoutFormData) => {
        setError(null)

        try {
            // Получаем variant ID (обычный или bundle)
            const variantId = getCheckoutVariantId(items)

            // Собираем tariff IDs
            const tariffIds = items.map(item => item.tariffId)

            // Сохраняем данные для success страницы
            sessionStorage.setItem('checkoutFormData', JSON.stringify({
                email: data.email,
                discordNickname: data.discordNickname,
                tariffIds,
                items: items.map(item => ({
                    courseId: item.courseId,
                    courseTitle: item.courseTitle,
                    tariffId: item.tariffId,
                    tariffTitle: item.tariffTitle,
                    tariffTier: item.tariffTier,
                    price: item.price,
                    currency: item.currency,
                }))
            }))

            // Вызываем API для создания checkout session
            const response = await prepareCheckout({
                email: data.email,
                discordNickname: data.discordNickname,
                tariffIds,
                variantId,
            }).unwrap()

            // Редиректим на LemonSqueezy для оплаты
            window.location.href = response.lemonSqueezyCheckoutUrl
        } catch (err) {
            console.error('Checkout preparation failed:', err)
            setError('Failed to prepare checkout. Please try again.')
        }
    }, [items, prepareCheckout])

    useEffect(() => {
        if (onSubmitTrigger) {
            onSubmitTrigger(
                () => methods.handleSubmit(onSubmit)(),
                isPreparingCheckout
            )
        }
    }, [methods.handleSubmit, isPreparingCheckout, onSubmit, onSubmitTrigger])

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CustomerInfoFields/>
                <OrderItemsBlock items={items}/>

                {error && (
                    <div className="error-message-wrapper mg-top-16px" style={{display: 'block'}}>
                        <div>{error}</div>
                    </div>
                )}
            </form>
        </FormProvider>
    )
}