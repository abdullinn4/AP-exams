import {useCallback, useEffect, useRef, useState} from 'react'
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
    const [prepareCheckout, {isLoading: isPreparingCheckout, reset}] = usePrepareCheckoutMutation()
    const [error, setError] = useState<string | null>(null)

    const errorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!error) return

        const el = errorRef.current
        if (!el) return

        requestAnimationFrame(() => {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        })
    }, [error])

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
                if (payload.sub) {
                    methods.setValue('email', payload.sub)
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
            const message = err?.data?.message

            if (message) {
                setError(message)
                console.error(message)
            } else {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPreparingCheckout, onSubmitTrigger])

    useEffect(() => {
        return () => {
            reset()
            setError(null)
        }
    }, [reset])

    useEffect(() => {
        const subscription = methods.watch(() => {
            if (error) {
                setError(null)
                reset()
            }
        })
        return () => subscription.unsubscribe()
    }, [methods, error, reset])

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {error && (
                    <div ref={errorRef} className="error-message-wrapper mg-top-16px" style={{display: 'block'}}>
                        <div>{error}</div>
                    </div>
                )}

                <CustomerInfoFields/>
                <OrderItemsBlock items={items}/>
            </form>
        </FormProvider>
    )
}