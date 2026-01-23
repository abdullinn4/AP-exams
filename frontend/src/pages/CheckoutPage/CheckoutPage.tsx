import {useEffect, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {CheckoutForm} from '@/features/checkout/ui/CheckoutForm'
import {OrderSummary} from '@/features/checkout/ui/OrderSummary'
import {useGetCourseByIdQuery, useGetTariffByIdQuery} from '@/shared/api/checkoutApi'
import type {TariffDetails} from '@/entities/tariff/tariff'
import type {CourseDetails} from '@/entities/course/course'

const MOCK_TARIFF: TariffDetails = {
    id: '1',
    courseId: '1',
    title: 'AP Computer Science A - Basic Plan',
    tier: 'BASIC',
    price: 99.99,
    currency: 'USD',
    lemonSqueezyVariantId: null,
    isActive: true,
}

const MOCK_COURSE: CourseDetails = {
    id: '1',
    title: 'AP Computer Science A',
    slug: 'ap-computer-science-a',
    description: 'Master Java programming and prepare for the AP Computer Science A exam with comprehensive lessons, practice problems, and expert guidance.',
    previewVideoUrl: null,
    coverUrl: '/src/assets/webflow/images/course-cover-placeholder.jpg',
    status: 'PUBLISHED',
    discordInviteUrl: 'https://discord.gg/example',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
}

export const CheckoutPage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const tariffId = searchParams.get('tariffId')

    const USE_MOCK_DATA = true

    const [finalPrice, setFinalPrice] = useState<number>()
    const [discountPercent, setDiscountPercent] = useState<number>()
    const [discountAmount, setDiscountAmount] = useState<number>()
    const [promoCode, setPromoCode] = useState<string>()
    const [submitForm, setSubmitForm] = useState<(() => void) | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (!tariffId && !USE_MOCK_DATA) {
            navigate('/pricing')
        }
    }, [tariffId, navigate])

    const {data: tariff, isLoading: tariffLoading, error: tariffError} = useGetTariffByIdQuery(
        tariffId || '',
        {skip: !tariffId || USE_MOCK_DATA}
    )

    const {data: course, isLoading: courseLoading} = useGetCourseByIdQuery(
        tariff?.courseId || '',
        {skip: !tariff?.courseId || USE_MOCK_DATA}
    )

    const displayTariff = USE_MOCK_DATA ? MOCK_TARIFF : tariff
    const displayCourse = USE_MOCK_DATA ? MOCK_COURSE : course

    const handlePriceChange = (
        newFinalPrice: number,
        newDiscountPercent: number,
        newDiscountAmount: number,
        newPromoCode?: string
    ) => {
        setFinalPrice(newFinalPrice)
        setDiscountPercent(newDiscountPercent)
        setDiscountAmount(newDiscountAmount)
        setPromoCode(newPromoCode)
    }

    const handleSubmit = () => {
        if (submitForm) {
            submitForm()
        }
    }

    const handleSubmitTrigger = (fn: () => void, submitting: boolean) => {
        setSubmitForm(() => fn)
        setIsSubmitting(submitting)
    }

    if (!USE_MOCK_DATA && (tariffLoading || courseLoading)) {
        return (
            <div className="page-wrapper">
                <Header variant="full" theme="dark"/>
                <section className="section top">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="inner-container _600px text-center">
                            <h2 className="display-6">Loading checkout...</h2>
                        </div>
                    </div>
                </section>
                <Footer variant="full"/>
            </div>
        )
    }

    if (!USE_MOCK_DATA && (tariffError || !tariff || !course)) {
        return (
            <div className="page-wrapper">
                <Header variant="full" theme="dark"/>
                <section className="section top">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="inner-container _600px text-center">
                            <h2 className="display-6 mg-bottom-24px">Tariff not found</h2>
                            <button
                                onClick={() => navigate('/pricing')}
                                className="button-primary"
                            >
                                Go to Pricing
                            </button>
                        </div>
                    </div>
                </section>
                <Footer variant="full"/>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
            <Header variant="full" theme="dark"/>

            <section className="section top">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="inner-container _600px mg-bottom-48px">
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
                            Checkout
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
                        >
                            Please review your checkout details below. If everything is correct, place your order and you will receive more information via email.
                        </p>
                    </div>

                    <div
                        data-node-type="commerce-checkout-form-container"
                        className="w-commerce-commercecheckoutformcontainer checkout-form"
                    >
                        <div
                            data-w-id="64f8cd77d5e21d3daa05112400000000000c"
                            style={{opacity: 0}}
                            className="w-commerce-commercelayoutmain checkout-col-left"
                        >
                            {displayTariff && displayCourse && (
                                <CheckoutForm
                                    tariff={displayTariff}
                                    course={displayCourse}
                                    finalPrice={finalPrice}
                                    discountPercent={discountPercent}
                                    discountAmount={discountAmount}
                                    promoCode={promoCode}
                                    onSubmitTrigger={handleSubmitTrigger}
                                />
                            )}
                        </div>

                        <div
                            data-w-id="64f8cd77d5e21d3daa051124000000000096"
                            style={{opacity: 0}}
                            className="w-commerce-commercelayoutsidebar checkout-col-right"
                        >
                            {displayTariff && displayCourse && (
                                <OrderSummary
                                    tariff={displayTariff}
                                    onPriceChange={handlePriceChange}
                                    onSubmit={handleSubmit}
                                    isSubmitting={isSubmitting}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="full"/>
        </div>
    )
}