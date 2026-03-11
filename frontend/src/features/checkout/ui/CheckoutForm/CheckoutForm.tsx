import {useCallback, useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {type CheckoutFormData, checkoutSchema} from '@/features/checkout/lib/checkoutSchema'
import {CustomerInfoFields} from '@/features/checkout/ui/CustomerInfoFields'
import {OrderItemsBlock} from '@/features/checkout/ui/OrderItemsBlock'
import type {CartItem} from '@/entities/cart/cart'
import {tokenService} from '@/features/auth/lib/tokenService'
import {usePrepareCheckoutMutation} from '@/shared/api/checkoutApi'

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
            acceptedTerms: false,
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

            // Собираем tariff IDs
            const tariffIds = items.map(item => item.tariffId)

            // Вызываем API для создания checkout session
            const response = await prepareCheckout({
                email: data.email,
                discordNickname: data.discordNickname,
                tariffIds,
                acceptedTerms: data.acceptedTerms,
                acceptedAt: new Date().toISOString(),
            }).unwrap()

            // Сохраняем данные для success страницы
            localStorage.setItem('checkoutFormData', JSON.stringify({
                checkoutId: response.checkoutId,
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
                    payProProductId: item.payProProductId,
                }))
            }))

            // Редиректим для оплаты
            window.location.href = response.payProCheckoutUrl
        } catch (err: any) {
            if (err.response?.data?.message?.includes("already enrolled")) {
                setError('You are already enrolled in this course.')
                console.error('You are already enrolled in this course.')
            }else{
                console.error('Checkout preparation failed:', err)
                setError('Failed to prepare checkout. Please try again.')
            }
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
                {error && (
                    <div className="error-message-wrapper mg-top-16px" style={{display: 'block'}}>
                        <div>{error}</div>
                    </div>
                )}

                <CustomerInfoFields/>
                <OrderItemsBlock items={items}/>
            </form>
        </FormProvider>
    )
}