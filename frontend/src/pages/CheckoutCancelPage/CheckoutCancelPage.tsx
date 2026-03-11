import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {ROUTES} from '@/app/router/routes'

export const CheckoutCancelPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const cleanUrl = window.location.origin + window.location.pathname
        if (window.location.search) {
            window.history.replaceState({}, '', cleanUrl)
        }
    }, [])

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px text-center">
                        <div style={{fontSize: '64px', marginBottom: '24px'}}>😔</div>
                        <h1 className="mg-bottom-16px">Payment Cancelled</h1>
                        <p className="text-200 mg-bottom-32px" style={{color: '#6b7280'}}>
                            Your payment was cancelled. Don't worry, no charges were made.
                        </p>

                        <div style={{maxWidth: '600px', margin: '0 auto'}}>
                            {/* Info Card */}
                            <div className="card checkout-block" style={{
                                backgroundColor: '#fef3c7',
                                border: '2px solid #fbbf24',
                                marginBottom: '32px'
                            }}>
                                <div className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                                        <div style={{fontSize: '32px', lineHeight: '1'}}>💡</div>
                                        <div style={{flex: 1, textAlign: 'left'}}>
                                            <h3 className="display-6 mg-bottom-12px" style={{color: '#92400e'}}>
                                                What happened?
                                            </h3>
                                            <p className="text-200 mg-bottom-8px" style={{color: '#78350f'}}>
                                                You cancelled the payment process or closed the payment window.
                                            </p>
                                            <p className="text-200" style={{color: '#78350f'}}>
                                                Your selected courses are still in your cart and ready when you are!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Help Section */}
                            <div className="card checkout-block" style={{marginBottom: '32px'}}>
                                <div className="w-commerce-commercecheckoutblockheader checkout-block-header">
                                    <h2 className="display-6">Need Help?</h2>
                                </div>
                                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                                    <p className="text-200 mg-bottom-16px">
                                        If you experienced any issues during checkout, we're here to help:
                                    </p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'left'
                                    }}>
                                        <li className="text-200" style={{marginBottom: '12px', paddingLeft: '24px', position: 'relative'}}>
                                            <span style={{position: 'absolute', left: 0}}>📧</span>
                                            Email us at <a href="mailto:support@smashap.com" style={{color: '#7c3aed', textDecoration: 'underline'}}>support@smashap.com</a>
                                        </li>
                                        <li className="text-200" style={{marginBottom: '12px', paddingLeft: '24px', position: 'relative'}}>
                                            <span style={{position: 'absolute', left: 0}}>💬</span>
                                            Join our Discord community for instant support
                                        </li>
                                        <li className="text-200" style={{paddingLeft: '24px', position: 'relative'}}>
                                            <span style={{position: 'absolute', left: 0}}>❓</span>
                                            Check our FAQ for common questions
                                        </li>
                                    </ul>
                                </fieldset>
                            </div>

                            {/* Action Buttons */}
                            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
                                <button
                                    onClick={() => navigate(ROUTES.CHECKOUT)}
                                    className="button-primary"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={() => navigate(ROUTES.CATALOG)}
                                    className="button-secondary"
                                >
                                    Browse Courses
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