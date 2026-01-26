import { Link } from 'react-router-dom'
import { HOME_FEATURES } from '@/shared/config/content'

export const FeaturesSection = () => {

    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="1247ceeb-1829-6c2e-4abc-6c47ef4a0671" className="text-center">
                    <h2 className="display-9">{HOME_FEATURES.title} <span className="heading-gradient">{HOME_FEATURES.titleHighlight}</span></h2>
                    <div className="inner-container _528px center">
                        <div className="mg-top-16px">
                            <p>{HOME_FEATURES.description}</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div data-w-id="d86e9d98-6635-a5e6-f0aa-e4b22e00a144" className="features-wrapper---home-v1">
                        <div className="w-layout-grid features-grid---home-v1">
                            <div className="w-layout-grid feature-grid-row---home-v1">
                                {HOME_FEATURES.items.slice(0, 2).map((feature, idx) => (
                                    <div key={idx} data-w-id={`feature-${idx}`} className="card feature-card-v1">
                                        <img src={feature.icon} loading="eager" alt={feature.title} className={feature.maxWidth} />
                                        <div className="mg-top-24px">
                                            <h3 className="display-5">{feature.title}</h3>
                                        </div>
                                        <div className="mg-top-16px">
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-layout-grid feature-grid-row---home-v1 bottom">
                                {HOME_FEATURES.items.slice(2, 4).map((feature, idx) => (
                                    <div key={idx + 2} data-w-id={`feature-${idx + 2}`} className="card feature-card-v1">
                                        <img src={feature.icon} loading="eager" alt={feature.title} className={feature.maxWidth} />
                                        <div className="mg-top-24px">
                                            <h3 className="display-5">{feature.title}</h3>
                                        </div>
                                        <div className="mg-top-16px">
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blur-bg gradient-bg"></div>
                    </div>
                </div>
                <div className="mg-top-48px">
                    <div data-w-id="95d11aef-03a2-85bc-d687-0d0fc34eb359" className="buttons-row">
                        <Link to="/pricing" className="button-primary w-inline-block">
                            <div className="text-block">{HOME_FEATURES.ctaText}</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
