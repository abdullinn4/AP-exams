import {HOME_FEATURES} from '@/shared/config/content'

export const FeaturesSection = () => {
    return (
        <section className="section-card-padding">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="z-index-2">
                    <div
                        data-w-id="1247ceeb-1829-6c2e-4abc-6c47ef4a0671"
                        className="text-center"
                    >
                        <h2 className="display-9">
                            {HOME_FEATURES.title} <span className="heading-gradient">{HOME_FEATURES.titleHighlight}</span>
                        </h2>
                        <div className="mg-top-40px mg-top-24px-tablet">
                            <div className="buttons-row">
                                <a
                                    id="w-node-e9da5fd6-ab44-5b2f-81ad-6e5f36bfab9c-36bfab9c"
                                    data-w-id="e9da5fd6-ab44-5b2f-81ad-6e5f36bfab9c"
                                    href="/courses"
                                    className="button-primary w-inline-block"
                                >
                                    <div className="text-block">{HOME_FEATURES.ctaText}</div>
                                    <div className="item-icon-right">
                                        <div className="custom-icon-font"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-bg-wrapper">
                    <div className="blur-bg gradient-bg feature-section-bg---home-v2"></div>
                    <div
                        data-w-id="d86e9d98-6635-a5e6-f0aa-e4b22e00a144"
                        className="w-layout-grid features-grid---home-v2"
                    >
                        {HOME_FEATURES.items.map((feature, index) => {
                            const wIds = [
                                'bba126c3-be8f-c610-0087-8dfa188ad248',
                                'ef25bd3e-7fb7-edd9-d722-47c641416d91',
                                '3047e5c7-0d7e-d46d-f808-03cc25763c72'
                            ]

                            const isCenter = index === 1
                            const cardClasses = isCenter
                                ? 'card feature-card-v2 feature-card-redesign top'
                                : 'card feature-card-v2 feature-card-redesign'

                            const bgStyle = isCenter
                                ? {
                                    backgroundColor: 'var(--neutral--800)',
                                    backgroundImage: 'url(/assets/webflow/images/rich-text-bg-courselify-x-webflow-template.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }
                                : {}

                            return (
                                <div
                                    key={index}
                                    id={`w-node-${wIds[index]}-ad098e64`}
                                    data-w-id={wIds[index]}
                                    style={bgStyle}
                                    className={cardClasses}
                                >
                                    {/* Логотип для центрального блока */}
                                    {isCenter && feature.logo && (
                                        <div className="feature-logo-wrapper">
                                            <img
                                                src={feature.logo}
                                                loading="eager"
                                                alt="SmashAP Logo"
                                            />
                                        </div>
                                    )}

                                    {/* Заголовок */}
                                    <div className="mg-top-24px">
                                        <h3 className={`feature-card-title ${isCenter ? 'text-neutral-100' : 'text-neutral-800'}`}>
                                            {feature.title}
                                        </h3>
                                    </div>

                                    {/* Список фич */}
                                    <div className="mg-top-24px">
                                        <ul className="feature-list">
                                            {feature.features.map((item, idx) => (
                                                <li key={idx} className={`feature-list-item ${isCenter ? 'text-neutral-100' : 'text-neutral-800'}`}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Цена */}
                                    <div className="mg-top-32px">
                                        <p className={`feature-price ${isCenter ? 'text-neutral-100' : 'text-neutral-800'}`}>
                                            {feature.priceHighlight ? (
                                                <>
                                                    <span className="heading-gradient">{feature.price}</span>
                                                    {feature.priceSuffix}
                                                </>
                                            ) : (
                                                feature.price
                                            )}
                                        </p>
                                    </div>

                                    {/* Результат */}
                                    <div className="mg-top-16px">
                                        <p className={`feature-result ${isCenter ? 'text-neutral-100' : 'text-neutral-800'}`}>
                                            {feature.result}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}