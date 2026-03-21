import { HOME_CTA } from '@/shared/config/content'

export const CTASection = () => {
    return (
        <section className="section-card-padding top">
            <div data-w-id="b59a59eb-8135-53d7-934d-15fd43cb5117" className="section-card cta v1">
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
                                <a href="/courses" className="lighbox-button-wrapper w-inline-block w-lightbox">
                                    <div className="secondary-button white">
                                        <div>{HOME_CTA.ctaSecondary}</div>
                                    </div>
                                </a>
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
                        <div data-w-id="3b0e7f5d-d15c-be14-3d10-f79e13daafde" className="image-wrapper float-image-01---cta-v1">
                            <img src={HOME_CTA.images.floatSquare} loading="eager" alt="" className="image rotate-15-deg" />
                        </div>
                        <div data-w-id="49aa9ff9-2b9f-3f88-3506-8b2ab8f7008d" className="image-wrapper float-image-02---cta-v1">
                            <img src={HOME_CTA.images.floatCircle} loading="eager" alt="" className="image rotate-30-deg" />
                        </div>
                        <div data-w-id="6f5a6fb2-74ac-ecea-a0f8-23b52d867b58" className="image-wrapper float-image-03---cta-v1">
                            <img src={HOME_CTA.images.floatPyramid} loading="eager" alt="" className="image rotate-15-deg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}