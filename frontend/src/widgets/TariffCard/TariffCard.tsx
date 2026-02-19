import { TARIFF_DESCRIPTIONS } from "@/shared/config/content/tariffs.config"

interface TariffCardProps {
    tier: 'BASIC' | 'PRO'
    title: string
    price: number
    currency: string
    onAction?: () => void
    actionLabel?: string
    featured?: boolean
    variant?: 'default' | 'modal'
}

export const TariffCard = ({
                               tier,
                               title,
                               price,
                               currency,
                               onAction,
                               actionLabel = "Get started",
                               featured = false,
                               variant = 'default'
                           }: TariffCardProps) => {
    const config = TARIFF_DESCRIPTIONS[tier]
    const iconUrl = `/assets/webflow/images/${tier.toLowerCase()}-plan-courselify-x-webflow-template.png`
    const isPro = tier === 'PRO'

    return (
        <div
            data-w-id="9cc40930-7fef-a5d8-ac6b-b4d06d1f538b"
            className={`card pricing-card-v1 ${featured ? 'featured' : ''}`}
            style={variant === 'modal' ? {
                marginTop: '60px',
                border: isPro ? '1px solid #FD6E70' : '1px solid #f1f1f3'
            } : undefined}
        >
            <div
                className="pricing-card-content-wrapper"
                style={variant === 'modal' ? { padding: '32px' } : undefined}
            >
                <div>
                    {/* Icon */}
                    <div className="image-wrapper pricing-card-image">
                        <img
                            alt={`${tier} Plan`}
                            loading="eager"
                            src={iconUrl}
                            className="width-100"
                        />
                    </div>

                    {/* Title */}
                    <div className="mg-top-16px">
                        <h3 className="display-5">{title}</h3>
                    </div>

                    {/* Description */}
                    <div className="mg-top-8px">
                        <p>{config.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mg-top-32px">
                        <div className="w-layout-grid grid-1-column gap-row-16px">
                            {config.features.map((feature, idx) => (
                                <div key={idx} className="pricing-feature-wrapper v1">
                                    <div className="check-icon"></div>
                                    <div className="list-item---text-margin">{feature}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Price & CTA */}
                {variant === 'default' ? (
                    <div className="mg-top-40px">
                        <div className="pricing-bottom-wrapper v1">
                            <div className="pricing-price-wrapper">
                                <div className="display-8 bold text-neutral-800">
                                    {currency === 'USD' ? '$' : currency}{price}
                                </div>
                            </div>
                            <button
                                onClick={onAction}
                                className="button-primary full-width w-inline-block"
                                style={{ border: 'none', cursor: 'pointer' }}
                            >
                                <div className="text-block">{actionLabel}</div>
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Price Badge */}
                        <div className="badge-position-absolute">
                            <div className={`badge ${isPro ? 'popular-badge' : ''}`}>
                                {currency === 'USD' ? '$' : currency}{price} {currency}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mg-top-32px">
                            <button
                                onClick={onAction}
                                className="button-primary w-button"
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    textAlign: 'center',
                                    border: 'none'
                                }}
                            >
                                <div className="text-block">{actionLabel}</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}