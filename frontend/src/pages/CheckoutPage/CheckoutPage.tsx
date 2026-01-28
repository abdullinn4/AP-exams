import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CheckoutForm} from '@/features/checkout/ui/CheckoutForm'
import {OrderSummary} from '@/features/checkout/ui/OrderSummary'
import {useCart} from '@/features/cart'

export const CheckoutPage = () => {
    const navigate = useNavigate()
    const { items } = useCart()

    // Редирект если корзина пуста
    useEffect(() => {
        if (items.length === 0) {
            navigate('/catalog')
        }
    }, [items.length, navigate])

    if (items.length === 0) {
        return null
    }

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px mg-bottom-48px">
                        <h1 className="mg-bottom-16px">Checkout</h1>
                        <p>
                            Review your order and complete your purchase. You will be redirected to our secure payment processor.
                        </p>
                    </div>

                    <div className="w-commerce-commercecheckoutformcontainer checkout-form">
                        <div className="w-commerce-commercelayoutmain checkout-col-left">
                            <CheckoutForm items={items} />
                        </div>

                        <div className="w-commerce-commercelayoutsidebar checkout-col-right">
                            <OrderSummary items={items} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="full"/>
        </div>
    )
}