import {useEffect, useCallback, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {type CheckoutFormData, checkoutSchema} from '@/features/checkout/lib/checkoutSchema'
import {CustomerInfoFields} from '@/features/checkout/ui/CustomerInfoFields'
import {OrderItemsBlock} from '@/features/checkout/ui/OrderItemsBlock'
import type {TariffDetails} from '@/entities/tariff/tariff'
import type {CourseDetails} from '@/entities/course/course'
import {tokenService} from '@/features/auth/lib/tokenService'
import {usePrepareCheckoutMutation} from '@/shared/api/checkoutApi'

interface CheckoutFormProps {
    tariff: TariffDetails
    course: CourseDetails
    finalPrice?: number
    discountPercent?: number
    discountAmount?: number
    promoCode?: string
    onSubmitTrigger?: (submitFn: () => void, isSubmitting: boolean) => void
}

export const CheckoutForm = ({
                                 tariff,
                                 course,
                                 onSubmitTrigger
                             }: CheckoutFormProps) => {
    const [prepareCheckout, {isLoading: isPreparingCheckout}] = usePrepareCheckoutMutation()
    const [error, setError] = useState<string | null>(null)

    const methods = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            email: '',
            discordNickname: '',
            promoCode: '',
        },
    })

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
    }, [methods.setValue])

    const onSubmit = useCallback(async (data: CheckoutFormData) => {
        setError(null)

        try {
            // Сохраняем данные для success страницы
            sessionStorage.setItem('checkoutFormData', JSON.stringify({
                email: data.email,
                discordNickname: data.discordNickname,
                tariffId: tariff.id,
                courseId: course.id,
            }))

            // Вызываем API для создания checkout session
            const response = await prepareCheckout({
                tariffId: tariff.id,
                email: data.email,
                discordNickname: data.discordNickname,
            }).unwrap()

            // Редиректим на LemonSqueezy для оплаты
            window.location.href = response.lemonSqueezyCheckoutUrl
        } catch (err) {
            console.error('Checkout preparation failed:', err)
            setError('Failed to prepare checkout. Please try again.')
        }
    }, [tariff.id, course.id, prepareCheckout])

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
                <OrderItemsBlock tariff={tariff} course={course}/>

                {error && (
                    <div className="error-message-wrapper mg-top-16px" style={{display: 'block'}}>
                        <div>{error}</div>
                    </div>
                )}
            </form>
        </FormProvider>
    )
}