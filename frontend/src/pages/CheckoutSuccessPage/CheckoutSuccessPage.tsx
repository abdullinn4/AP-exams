import {useEffect, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {formatPrice} from '@/shared/lib/utils/money'
import {ROUTES} from '@/app/router/routes'
import {useCart} from '@/features/cart/model/useCart'
import {useLazyGetOrdersByCheckoutIdQuery} from '@/shared/api/checkoutApi'

export const CheckoutSuccessPage = () => {
    const navigate = useNavigate()
    const {clear: clearCart} = useCart()
    const [searchParams] = useSearchParams()
    const [getOrders, {data: orderData, isLoading, isError}] = useLazyGetOrdersByCheckoutIdQuery()
    const [pollingCount, setPollingCount] = useState(0)
    const [checkoutId, setCheckoutId] = useState<string | null>(null)

    useEffect(() => {
        // Получаем checkout_id из URL (от paypro-redirect.html)
        const checkoutIdFromUrl = searchParams.get('checkout_id');

        // Очищаем URL от параметров
        if (window.location.search) {
            window.history.replaceState({}, '', window.location.pathname);
        }

        let extractedCheckoutId: string | null = checkoutIdFromUrl

        // Fallback: пытаемся из localStorage (на случай если что-то пошло не так)
        if (!extractedCheckoutId) {
            const storedData = localStorage.getItem('checkoutFormData');
            if (storedData) {
                try {
                    const parsed = JSON.parse(storedData)
                    // Можно добавить checkoutId в localStorage при prepareCheckout
                    extractedCheckoutId = parsed.checkoutId
                } catch (e) {
                    console.error('Failed to parse stored checkout data:', e)
                }
            }
        }

        if (extractedCheckoutId) {
            console.log('Found checkoutId:', extractedCheckoutId);
            setCheckoutId(extractedCheckoutId);
            getOrders(extractedCheckoutId);
        } else {
            console.warn('No checkoutId found');
        }
    }, [searchParams, getOrders])

    // Polling: проверяем статус каждые 2 секунды если заказ еще pending
    useEffect(() => {
        if (!checkoutId || !orderData) return

        if (orderData.overallStatus === 'pending' && pollingCount < 30) {
            const timer = setTimeout(() => {
                console.log('Polling order status...', pollingCount + 1)
                getOrders(checkoutId)
                setPollingCount(prev => prev + 1)
            }, 2000)

            return () => clearTimeout(timer)
        }

        // Когда заказ completed - очищаем корзину
        if (orderData.overallStatus === 'completed') {
            clearCart()
            localStorage.removeItem('checkoutFormData')
        }
    }, [orderData, checkoutId, pollingCount, getOrders, clearCart])

    if (isLoading || !orderData) {
        return (
            <div className="page-wrapper">
                <Header variant="full" theme="dark"/>
                <section className="section top">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="inner-container _600px text-center">
                            <div style={{fontSize: '64px', marginBottom: '24px'}}>⏳</div>
                            <h1 className="mg-bottom-16px">Processing Your Payment...</h1>
                            <p className="text-200">
                                Please wait while we confirm your purchase. This usually takes a few seconds.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer variant="full"/>
            </div>
        )
    }

    if (isError || !checkoutId) {
        return (
            <div className="page-wrapper">
                <Header variant="full" theme="dark"/>
                <section className="section top">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="inner-container _600px text-center">
                            <div style={{fontSize: '64px', marginBottom: '24px'}}>❌</div>
                            <h1 className="mg-bottom-16px">Something Went Wrong</h1>
                            <p className="text-200 mg-bottom-32px">
                                We couldn't find your order. Please contact support if you were charged.
                            </p>
                            <button
                                onClick={() => navigate(ROUTES.HOME)}
                                className="button-primary"
                            >
                                Go to Home
                            </button>
                        </div>
                    </div>
                </section>
                <Footer variant="full"/>
            </div>
        )
    }

    // Если заказ еще pending после 30 попыток
    if (orderData.overallStatus === 'pending' && pollingCount >= 30) {
        return (
            <div className="page-wrapper">
                <Header variant="full" theme="dark"/>
                <section className="section top">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="inner-container _600px text-center">
                            <div style={{fontSize: '64px', marginBottom: '24px'}}>⏰</div>
                            <h1 className="mg-bottom-16px">Payment Processing</h1>
                            <p className="text-200 mg-bottom-32px">
                                Your payment is still being processed. You will receive an email confirmation once it's complete.
                            </p>
                            <button
                                onClick={() => navigate(ROUTES.HOME)}
                                className="button-primary"
                            >
                                Go to Home
                            </button>
                        </div>
                    </div>
                </section>
                <Footer variant="full"/>
            </div>
        )
    }

    const totalPrice = orderData.totalAmountCents / 100

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px mg-bottom-48px text-center">
                        <div style={{fontSize: '64px', marginBottom: '16px'}}>🎉</div>
                        <h1 className="mg-bottom-16px">Order Confirmation</h1>
                        <p className="text-200">
                            Thanks for your purchase! You will receive access details and course information via email shortly.
                        </p>
                    </div>

                    <div className="w-layout-grid checkout-form" style={{gridTemplateColumns: '1fr'}}>
                        <div style={{maxWidth: '800px', margin: '0 auto', width: '100%'}}>
                            {/* Email Notification Block */}
                            <div className="card checkout-block" style={{
                                backgroundColor: '#f0fdf4',
                                border: '2px solid #86efac',
                                marginBottom: '24px'
                            }}>
                                <div className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                                        <div style={{fontSize: '32px', lineHeight: '1'}}>📧</div>
                                        <div style={{flex: 1}}>
                                            <h3 className="display-6 mg-bottom-8px" style={{color: '#166534'}}>
                                                Check Your Email
                                            </h3>
                                            <p className="text-200 mg-bottom-12px" style={{color: '#15803d'}}>
                                                We've sent a confirmation email to <strong>{orderData.userEmail}</strong> with:
                                            </p>
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                color: '#15803d'
                                            }}>
                                                <li className="text-200" style={{marginBottom: '8px'}}>
                                                    ✓ Your auto-generated password for login
                                                </li>
                                                <li className="text-200" style={{marginBottom: '8px'}}>
                                                    ✓ Course access details
                                                </li>
                                                <li className="text-200">
                                                    ✓ Getting started guide
                                                </li>
                                            </ul>
                                            <p className="text-100 mg-top-12px" style={{color: '#166534', fontStyle: 'italic'}}>
                                                💡 Don't see the email? Check your spam folder!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="card checkout-block">
                                <div className="w-commerce-commercecheckoutblockheader checkout-block-header">
                                    <h2 className="display-6">Customer Information</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <div className="mg-bottom-24px">
                                        <div className="text-200 text-weight-semibold mg-bottom-8px">Email</div>
                                        <div className="text-200 text-neutral-600">{orderData.userEmail}</div>
                                    </div>
                                    <div>
                                        <div className="text-200 text-weight-semibold mg-bottom-8px">Discord Nickname</div>
                                        <div className="text-200 text-neutral-600">{orderData.discordNickname}</div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Purchased Courses */}
                            <div className="card checkout-block">
                                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                                    <h2 className="display-6">Purchased Courses</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    {orderData.items.map((item, index) => (
                                        <div
                                            key={item.orderId}
                                            className="order-item"
                                            style={index > 0 ? {marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb'} : {}}
                                        >
                                            <div className="order-item-details">
                                                <h3 className="display-6 mg-bottom-8px">{item.courseTitle}</h3>
                                                <p className="text-200 text-neutral-600 mg-bottom-16px">
                                                    {item.tariffTitle} - {item.tariffTier}
                                                </p>
                                                <div className="text-200 text-weight-semibold">
                                                    {formatPrice(item.priceCents / 100, item.currency)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Total */}
                                    <div className="mg-top-24px" style={{paddingTop: '24px', borderTop: '2px solid #e5e7eb'}}>
                                        <div className="w-commerce-commercecheckoutsummarylineitem">
                                            <div className="text-200 text-weight-semibold">Total Paid</div>
                                            <div className="text-200 text-weight-semibold">
                                                {formatPrice(totalPrice, orderData.currency)}
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            {/* Action Buttons */}
                            <div className="mg-top-32px" style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <button
                                    onClick={() => navigate(ROUTES.SIGN_IN)}
                                    className="button-primary"
                                >
                                    Sign In to Start Learning
                                </button>
                                <button
                                    onClick={() => navigate(ROUTES.HOME)}
                                    className="button-secondary"
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