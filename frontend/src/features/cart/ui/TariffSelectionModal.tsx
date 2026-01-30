import { useGetTariffsByCourseIdQuery } from '@/shared/api/courseApi'
import { TariffCard } from '@/widgets/TariffCard'
import { useAddCourseToCart } from "@/shared/lib/hooks/useAddCourseToCart"
import type {TariffDetails} from "@/entities/tariff/tariff.ts";
import {useEffect, useRef} from "react";

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
    const { data: tariffs = [], isLoading, error } = useGetTariffsByCourseIdQuery(courseId, {
        skip: !isOpen,
    })
    const { addTariffToCart, errorMessage } = useAddCourseToCart({
        id: courseId,
        title: courseTitle,
        coverUrl: courseCoverUrl
    })

    const messageRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (errorMessage && messageRef.current) {
            messageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [errorMessage])

    if (!isOpen) return null

    const handleAddToCart = (tariff: TariffDetails) => {
        const success = addTariffToCart(tariff)
        if (success) {
            onClose()
        }
    }


    return (
        <div
            className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
            onClick={onClose}
        >
            <div
                className="card overflow-visible"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="w-commerce-commercecartheader cart-header" style={{
                    borderBottom: '1px solid #f1f1f3',
                    padding: '40px 48px 32px',
                    position: 'relative'
                }}>
                    {/* Close button */}
                    <a
                        className="w-commerce-commercecartcloselink close-button w-inline-block"
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
                        &#x2715;
                    </a>

                    {/* Title */}
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

                {/* Modal Content */}
                <div className="w-commerce-commercecartformwrapper cart-form-wrapper"
                     style={{
                         padding: '0px 48px',
                         maxHeight: 'calc(90vh - 180px)',
                         overflowY: 'auto',
                     }}>

                    {error ? (
                        <div className="pd-sides-24px flex-vertical text-center" style={{ padding: '60px 20px' }}>
                            <div className="display-2 text-neutral-800 mg-bottom-24px">Failed to load plans</div>
                            <p className="text-neutral-600">Please try again later</p>
                        </div>
                    ) : tariffs.length === 0 && !isLoading ? (
                        <div className="pd-sides-24px flex-vertical text-center" style={{ padding: '60px 20px' }}>
                            <div className="display-2 text-neutral-800 mg-bottom-24px">No plans available</div>
                            <p className="text-neutral-600">There are no active plans for this course</p>
                        </div>
                    ) : (
                        <div>
                            {errorMessage && (
                                <div ref={messageRef} className="w-commerce-commercecarterrorstate error-message-wrapper"
                                     style={{ margin: '0 auto 24px', maxWidth: '720px' }}>
                                    <div className="w-cart-error-msg">{errorMessage}</div>
                                </div>
                            )}

                            {isLoading ? (
                                <div className="text-center" style={{ padding: '60px 20px' }}>
                                    <div className="display-2 text-neutral-800">Loading plans...</div>
                                </div>
                            ) : (
                                <div className="section-bg-wrapper" style={{ width: '100%' }}>
                                    <div
                                        className="pricing-grid"
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                            gap: '32px',
                                            maxWidth: '720px',
                                        }}
                                    >
                                        {tariffs.map((tariff) => (
                                            <TariffCard
                                                key={tariff.id}
                                                tier={tariff.tier as 'BASIC' | 'PRO'}
                                                title={tariff.title}
                                                price={tariff.price}
                                                currency={tariff.currency}
                                                featured={tariff.tier === 'PRO'}
                                                actionLabel="Add to Cart"
                                                onAction={() => handleAddToCart(tariff)}
                                                variant="modal"
                                            />
                                        ))}
                                    </div>
                                    <div className="blur-bg pricing-section-bg---home-v1" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}