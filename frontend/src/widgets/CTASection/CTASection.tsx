import { ROUTES } from "@/app/router/routes"
import { HOME_CTA } from '@/shared/config/content'
import { Link } from "react-router-dom"

export const CTASection = () => {
    return (
        <section className="section-card-padding top">
            <div className="section-card cta v1">
                <div className="w-layout-grid grid-2-columns cta-v1-grid">
                    <div data-w-id="1e6ebfa9-6b59-fb8a-6b39-bffb1716ae84">
                        <h2 className="display-9 text-neutral-100">
                            {HOME_CTA.title} <span className="heading-gradient">{HOME_CTA.titleHighlight}</span>
                        </h2>

                        {/* Мобильное изображение - показывается только на малых экранах */}
                        <div className="cta-mobile-image mg-top-32px">
                            <img
                                src={HOME_CTA.images.main}
                                loading="eager"
                                alt="Stand as a Web Designer"
                                className="image"
                            />
                        </div>

                        <div className="inner-container _525px _100-tablet">
                            <div className="mg-top-16px">
                                <p className="text-neutral-400" style={{ color: '#fff', fontSize: '20px' }}>{HOME_CTA.description}</p>
                            </div>
                        </div>
                        <div className="mg-top-48px">
                            <div className="buttons-row left">
                                <Link
                                    to={ROUTES.CATALOG}
                                    className="secondary-button white w-inline-block"
                                >
                                    {HOME_CTA.ctaSecondary}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="d3e8bab9-1a86-5716-e12d-7503b0a51d95" className="image-container main-image---cta-v1">
                        <div className="blur-bg bg-cta-v1"></div>
                        <img
                            src={HOME_CTA.images.main}
                            loading="eager"
                            alt="Stand as a Web Designer"
                            className="image z-index-1 floating-image---down"
                            style={{ width: '90%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}