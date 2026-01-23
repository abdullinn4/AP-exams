import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {formatPrice} from '@/shared/lib/utils/money'
import {useGetCourseByIdQuery, useGetTariffByIdQuery} from '@/shared/api/checkoutApi'
import type {CheckoutSuccessData} from '@/entities/checkout/checkout'
import {ROUTES} from '@/app/router/routes'

export const CheckoutSuccessPage = () => {
    const navigate = useNavigate()
    const [checkoutData, setCheckoutData] = useState<CheckoutSuccessData | null>(null)

    useEffect(() => {
        const data = sessionStorage.getItem('checkoutFormData')
        if (!data) {
            navigate(ROUTES.CHECKOUT)
            return
        }

        try {
            const parsedData = JSON.parse(data) as CheckoutSuccessData
            queueMicrotask(() => setCheckoutData(parsedData))
            // Очищаем данные после использования
            sessionStorage.removeItem('checkoutFormData')
        } catch (error) {
            console.error('Failed to parse checkout data:', error)
            navigate(ROUTES.CHECKOUT)
        }
    }, [navigate])

    const {data: tariff} = useGetTariffByIdQuery(
        checkoutData?.tariffId || '',
        {skip: !checkoutData?.tariffId}
    )

    const {data: course} = useGetCourseByIdQuery(
        checkoutData?.courseId || '',
        {skip: !checkoutData?.courseId}
    )

    if (!checkoutData) {
        return null
    }

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px mg-bottom-48px text-center">
                        <h1
                            data-w-id="bb5abbaa-a20a-39df-7abf-1886366cf573"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="mg-bottom-16px"
                        >
                            Order Confirmation
                        </h1>
                        <p
                            data-w-id="0a4dd4fe-6d4a-341a-4525-61693b619968"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="text-200"
                        >
                            Thanks for placing your order. You will be receiving more information via email.
                        </p>
                    </div>

                    <div className="w-layout-grid checkout-form" style={{gridTemplateColumns: '1fr'}}>
                        <div
                            data-w-id="64f8cd77d5e21d3daa05112400000000000c"
                            style={{opacity: 0, maxWidth: '800px', margin: '0 auto', width: '100%'}}
                        >
                            {/* Customer Info */}
                            <div className="card checkout-block">
                                <div className="w-commerce-commercecheckoutblockheader checkout-block-header">
                                    <h2 className="display-6">Customer Information</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <div className="mg-bottom-24px">
                                        <div className="text-200 text-weight-semibold mg-bottom-8px">Email</div>
                                        <div className="text-200 text-neutral-600">{checkoutData.email}</div>
                                    </div>
                                    <div>
                                        <div className="text-200 text-weight-semibold mg-bottom-8px">Discord Nickname
                                        </div>
                                        <div className="text-200 text-neutral-600">{checkoutData.discordNickname}</div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Order Details */}
                            <div className="card checkout-block">
                                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                                    <h2 className="display-6">Order Details</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <div className="order-item">
                                        <div className="order-item-details">
                                            <h3 className="display-6 mg-bottom-8px">
                                                {course?.title || 'Loading...'}
                                            </h3>
                                            <p className="text-200 text-neutral-600 mg-bottom-16px">
                                                {tariff?.title || 'Loading...'} - {tariff?.tier || ''}
                                            </p>
                                            {tariff && (
                                                <div className="text-200 text-weight-semibold">
                                                    {formatPrice(tariff.price, tariff.currency)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Action Buttons */}
                            <div className="mg-top-32px"
                                 style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
                                <button
                                    onClick={() => navigate(ROUTES.HOME)}
                                    className="button-primary"
                                >
                                    Go to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="full"/>
        </div>
    )
}