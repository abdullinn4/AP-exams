import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {formatPrice} from '@/shared/lib/utils/money'
import {ROUTES} from '@/app/router/routes'

interface CheckoutSuccessItem {
    courseId: string
    courseTitle: string
    tariffId: string
    tariffTitle: string
    tariffTier: string
    price: number
    currency: string
}

interface CheckoutSuccessData {
    email: string
    discordNickname: string
    tariffIds: string[]
    items: CheckoutSuccessItem[]
}

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

    if (!checkoutData) {
        return null
    }

    const totalPrice = checkoutData.items.reduce((sum, item) => sum + item.price, 0)
    const currency = checkoutData.items[0]?.currency || 'USD'

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px mg-bottom-48px text-center">
                        <h1 className="mg-bottom-16px">Order Confirmation</h1>
                        <p className="text-200">
                            Thanks for your purchase! You will receive access details and course information via email shortly.
                        </p>
                    </div>

                    <div className="w-layout-grid checkout-form" style={{gridTemplateColumns: '1fr'}}>
                        <div style={{maxWidth: '800px', margin: '0 auto', width: '100%'}}>
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
                                        <div className="text-200 text-weight-semibold mg-bottom-8px">Discord Nickname</div>
                                        <div className="text-200 text-neutral-600">{checkoutData.discordNickname}</div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Purchased Courses */}
                            <div className="card checkout-block">
                                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                                    <h2 className="display-6">Purchased Courses</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    {checkoutData.items.map((item, index) => (
                                        <div
                                            key={item.tariffId}
                                            className="order-item"
                                            style={index > 0 ? {marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb'} : {}}
                                        >
                                            <div className="order-item-details">
                                                <h3 className="display-6 mg-bottom-8px">{item.courseTitle}</h3>
                                                <p className="text-200 text-neutral-600 mg-bottom-16px">
                                                    {item.tariffTitle} - {item.tariffTier}
                                                </p>
                                                <div className="text-200 text-weight-semibold">
                                                    {formatPrice(item.price, item.currency)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Total */}
                                    <div className="mg-top-24px" style={{paddingTop: '24px', borderTop: '2px solid #e5e7eb'}}>
                                        <div className="w-commerce-commercecheckoutsummarylineitem">
                                            <div className="text-200 text-weight-semibold">Total Paid</div>
                                            <div className="text-200 text-weight-semibold">
                                                {formatPrice(totalPrice, currency)}
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Action Buttons */}
                            <div className="mg-top-32px" style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
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