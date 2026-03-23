import { Link } from 'react-router-dom'
import { ABOUT_CTA_CARDS } from '@/shared/config/content'
import {ROUTES} from "@/app/router/routes.ts";

export const CTACardsSection = () => {
    return (
        <section className="section cta-sales-home">
            <div className="home-sales---features-section-wrapper">
                <div className="home-sales---features-section-bottom"></div>
            </div>
            <div data-w-id="75e4621d-f034-0a35-68ad-960bc681dcd6" className="w-layout-blockcontainer container-default width-100 z-index-1 w-container">
                <div style={{ textAlign: 'center' }} className="grid-2-columns more-templates-grid">
                    {ABOUT_CTA_CARDS.cards.map((card) => {

                        const isDark = card.variant === 'dark'
                        const cardClass = isDark
                            ? 'card buy-now w-inline-block'
                            : 'card buy-now white w-inline-block'

                        const cardStyle = card.backgroundColor
                            ? { background: card.backgroundColor }
                            : {}

                        const commonProps = {
                            key: card.id,
                            className: cardClass,
                            style: cardStyle
                        }

                        const content = (
                            <div className="sales-home---cta-card-text-container">
                                <img
                                    src={card.logo}
                                    loading="eager"
                                    alt={card.title}
                                    className="sales-home-cta-card-square-logo"
                                />
                                <h2 className={`${isDark ? 'text-neutral-100' : ''} mg-bottom-32px`}>
                                    {card.title}
                                </h2>

                                {/* Bullet points */}
                                {card.points.map((point, idx) => {
                                    const isLast = idx === card.points.length - 1
                                    const borderColor = isDark ? '#d8d7d7' : '#959595'
                                    const textClass = isDark
                                        ? 'text-neutral-100 opacity-90'
                                        : 'text-neutral-600 opacity-90'

                                    const pointStyle = isLast
                                        ? {}
                                        : {
                                            borderBottom: `1px ${borderColor} dashed`,
                                            paddingBottom: '12px'
                                        }

                                    return (
                                        <p
                                            key={idx}
                                            style={pointStyle}
                                            className={`${textClass} mg-bottom-${isLast && !card.ctaText ? '24px' : '12px'}`}
                                        >
                                            {point.text}
                                        </p>
                                    )
                                })}

                                {/* CTA Button */}
                                {card.ctaText && (
                                    <div
                                        className="button-primary white sales-home-cta-card-button mg-bottom-32px"
                                        style={card.ctaTextColor ? { color: card.ctaTextColor } : {}}
                                    >
                                        {card.ctaText}
                                    </div>
                                )}
                            </div>
                        )

                        // Условный рендеринг: Link или div
                        return card.ctaLink ? (
                            <Link {...commonProps} to={ROUTES.CATALOG}>
                                {content}
                            </Link>
                        ) : (
                            <div {...commonProps}>
                                {content}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}