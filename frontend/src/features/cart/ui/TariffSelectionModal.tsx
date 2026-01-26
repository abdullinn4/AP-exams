import { useState } from 'react'
import { useGetTariffsByCourseIdQuery } from '@/shared/api/courseApi'
import type { TariffDetails } from '@/entities/tariff/tariff'
import { useCart } from "@/features/cart"

interface TariffSelectionModalProps {
    isOpen: boolean
    onClose: () => void
    courseId: string
    courseTitle: string
    courseCoverUrl: string
}

export const TariffSelectionModal = ({
                                         isOpen,
                                         onClose,
                                         courseId,
                                         courseTitle,
                                         courseCoverUrl,
                                     }: TariffSelectionModalProps) => {
    const { data: tariffs, isLoading, error } = useGetTariffsByCourseIdQuery(courseId, {
        skip: !isOpen,
    })
    const { addItem, hasItem, canAddMore } = useCart()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    if (!isOpen) return null

    const handleAddToCart = (tariff: TariffDetails) => {
        if (hasItem(courseId)) {
            setErrorMessage('This course is already in your cart')
            setTimeout(() => setErrorMessage(null), 3000)
            return
        }

        if (!canAddMore()) {
            setErrorMessage('Cart is full (maximum 5 courses)')
            setTimeout(() => setErrorMessage(null), 3000)
            return
        }

        addItem({
            id: `${courseId}-${tariff.id}`,
            courseId,
            courseTitle,
            courseCoverUrl,
            tariffId: tariff.id,
            tariffTitle: tariff.title,
            tariffTier: tariff.tier,
            price: tariff.price,
            currency: tariff.currency,
            addedAt: new Date().toISOString(),
        })

        onClose()
    }

    const activeTariffs = tariffs?.filter(t => t.isActive) || []

    return (
        <div
            className="modal-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                padding: '20px'
            }}
            onClick={onClose}
        >
            <div
                className="card overflow-visible"
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '32px',
                    maxWidth: '1000px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="w-commerce-commercecartheader cart-header" style={{
                    borderBottom: '1px solid #f1f1f3',
                    padding: '40px 48px 32px',
                    position: 'relative'
                }}>
                    {/* Close button - top right */}
                    <a
                        className="w-commerce-commercecartcloselink close-button w-inline-block modal-close-btn"
                        role="button"
                        aria-label="Close modal"
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '32px',
                            right: '32px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none',
                            fontSize: '24px',
                            lineHeight: 1
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#333';
                            e.currentTarget.style.transform = 'rotate(90deg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#666';
                            e.currentTarget.style.transform = 'rotate(0deg)';
                        }}
                    >
                        ×
                    </a>

                    {/* Title centered */}
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <h4 className="display-7" style={{ margin: 0 }}>
                            Choose your plan for{' '}
                            <span className="heading-gradient">{courseTitle}</span>
                        </h4>
                        <p className="text-neutral-600 mg-top-8px" style={{ margin: 0 }}>
                            Select the perfect plan that matches your learning goals
                        </p>
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="w-commerce-commercecarterrorstate error-message-wrapper"
                         style={{ margin: '24px 48px 0' }}>
                        <div className="w-cart-error-msg">{errorMessage}</div>
                    </div>
                )}

                {/* Modal Content */}
                <div className="w-commerce-commercecartformwrapper cart-form-wrapper"
                     style={{
                         padding: '40px 48px',
                         maxHeight: 'calc(90vh - 180px)',
                         overflowY: 'auto',
                         display: 'flex',
                         justifyContent: 'center'
                     }}>

                    {isLoading ? (
                        <div className="pd-sides-24px flex-vertical text-center" style={{ padding: '60px 20px' }}>
                            <div className="display-2 text-neutral-800 mg-bottom-24px">Loading plans...</div>
                        </div>
                    ) : error ? (
                        <div className="pd-sides-24px flex-vertical text-center" style={{ padding: '60px 20px' }}>
                            <div className="display-2 text-neutral-800 mg-bottom-24px">Failed to load plans</div>
                            <p className="text-neutral-600">Please try again later</p>
                        </div>
                    ) : activeTariffs.length === 0 ? (
                        <div className="pd-sides-24px flex-vertical text-center" style={{ padding: '60px 20px' }}>
                            <div className="display-2 text-neutral-800 mg-bottom-24px">No plans available</div>
                            <p className="text-neutral-600">There are no active plans for this course</p>
                        </div>
                    ) : (
                        <div
                            className="section-bg-wrapper"
                            style={{
                                width: '100%',
                                marginTop: '48px',
                            }}
                        >
                            <div
                                className="pricing-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '32px',
                                    maxWidth: '720px',
                                    margin: '0 auto',
                                }}
                            >
                                {activeTariffs.map((tariff) => {
                                    const isPro = tariff.tier?.toUpperCase() === 'PRO'

                                    return (
                                        <div
                                            key={tariff.id}
                                            className={`card pricing-card-v1 ${tariff.tier === 'PRO' ? 'popular' : ''}`}
                                            style={{marginTop: '60px'}}
                                        >
                                                <div
                                                    className={`pricing-card-content-wrapper ${tariff.tier === 'PRO' ? 'popular' : ''}`}
                                                    style={{ padding: '32px' }}
                                                >
                                                    <div>
                                                        {/* Image */}
                                                        <div className="image-wrapper pricing-card-image">
                                                            <img
                                                                alt={`${tariff.tier} Plan`}
                                                                loading="lazy"
                                                                src={`/src/assets/webflow/images/${tariff.tier.toLowerCase()}-plan-courselify-x-webflow-template.png`}
                                                                className="width-100"
                                                            />
                                                        </div>

                                                        {/* Title */}
                                                        <div className="mg-top-16px">
                                                            <h3 className="display-5">{tariff.title}</h3>
                                                        </div>

                                                        <div className="mg-top-8px">
                                                            <p className="text-neutral-600">{tariff.tier} tier</p>
                                                        </div>

                                                        {/* Features */}
                                                        <div className="mg-top-32px">
                                                            <div className="w-layout-grid grid-1-column gap-row-16px">
                                                                <div className="pricing-feature-wrapper v1">
                                                                    <div className="check-icon">✓</div>
                                                                    <div>All chapters included</div>
                                                                </div>
                                                                <div className="pricing-feature-wrapper v1">
                                                                    <div className="check-icon">✓</div>
                                                                    <div>Lifetime access</div>
                                                                </div>
                                                                <div className="pricing-feature-wrapper v1">
                                                                    <div className="check-icon">✓</div>
                                                                    <div>Certificate of completion</div>
                                                                </div>

                                                                {isPro && (
                                                                    <>
                                                                        <div className="pricing-feature-wrapper v1">
                                                                            <div className="check-icon">✓</div>
                                                                            <div>Weekly Q&A sessions</div>
                                                                        </div>
                                                                        <div className="pricing-feature-wrapper v1">
                                                                            <div className="check-icon">✓</div>
                                                                            <div>1-on-1 monthly meetings</div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="badge-position-absolute">
                                                        <div className={`badge ${isPro ? 'popular-badge' : ''}`}>
                                                            {tariff.currency === 'USD' ? '$' : tariff.currency}
                                                            {tariff.price} {tariff.currency}
                                                        </div>
                                                    </div>

                                                    {/* CTA */}
                                                    <div className="mg-top-32px">
                                                        <a
                                                            onClick={() => handleAddToCart(tariff)}
                                                            className="button-primary w-button"
                                                            style={{
                                                                cursor: 'pointer',
                                                                width: '100%',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            <div className="text-block">Add to Cart</div>
                                                            <div className="item-icon-right">
                                                                <div className="custom-icon-font"></div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className="blur-bg pricing-section-bg---home-v1" />
                        </div>


                    )}
                </div>
            </div>
        </div>
    )
}