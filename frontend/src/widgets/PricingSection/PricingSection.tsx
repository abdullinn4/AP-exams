import { TariffCard } from "@/widgets/TariffCard"
import type { TariffDetails } from '@/entities/tariff/tariff'
import {useEffect, useRef} from "react";


interface PricingSectionProps {
    title?: string
    description?: string
    tariffs: TariffDetails[]
    isLoading?: boolean
    errorMessage?: string | null
    successMessage?: string | null
    onTariffAction: (tariff: TariffDetails) => void
    actionLabel?: string
    showBackground?: boolean
}

export const PricingSection = ({
                                   title = "Pricing plans for you",
                                   description = "Select the perfect plan that matches your learning goals",
                                   tariffs,
                                   isLoading = false,
                                   errorMessage = null,
                                   successMessage = null,
                                   onTariffAction,
                                   actionLabel = "Get started",
                                   showBackground = true
                               }: PricingSectionProps) => {

    const successRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if ((errorMessage || successMessage) && successRef.current) {
            successRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }
    }, [errorMessage, successMessage])

    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                {/* Title */}
                <div data-w-id="9e898e90-7c6e-18e6-7bea-3465030fade7" className="text-center mg-bottom-64px">
                    <h2 className="display-9" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="mg-top-16px">
                        <div className="inner-container _528px center">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div ref={successRef} className="w-commerce-commercecarterrorstate error-message-wrapper"
                         style={{ margin: '0 auto 24px', maxWidth: '720px' }}>
                        <div className="w-cart-error-msg">{errorMessage}</div>
                    </div>
                )}

                {successMessage && (
                    <div ref={successRef} className="success-message-wrapper"
                         style={{ margin: '0 auto 24px', maxWidth: '720px', backgroundColor: 'var(--secondary--green-100)'}}>
                        <div className="success-msg">{successMessage}</div>
                    </div>
                )}

                {/* Loading State */}
                {isLoading ? (
                    <div className="text-center" style={{ padding: '60px 20px' }}>
                        <div className="display-2 text-neutral-800">Loading plans...</div>
                    </div>
                ) : (
                    <div className={showBackground ? "section-bg-wrapper" : ""}>
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
                            {tariffs.map((tariff) => (
                                <TariffCard
                                    key={tariff.id}
                                    tier={tariff.tier as 'BASIC' | 'PRO'}
                                    title={tariff.title}
                                    price={tariff.price}
                                    currency={tariff.currency}
                                    featured={tariff.tier === 'PRO'}
                                    actionLabel={actionLabel}
                                    onAction={() => onTariffAction(tariff)}
                                    variant="modal"
                                />
                            ))}
                        </div>
                        {showBackground && <div className="blur-bg pricing-section-bg---home-v1" />}
                    </div>
                )}
            </div>
        </section>
    )
}