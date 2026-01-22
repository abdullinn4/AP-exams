import { Link } from 'react-router-dom'

export const CTASection = () => {
    return (
        <section className="section-card-padding">
            <div data-w-id="b59a59eb-8135-53d7-934d-15fd43cb5117" className="section-card cta v1">
                <div className="w-layout-grid grid-2-columns cta-v1-grid">
                    <div data-w-id="1e6ebfa9-6b59-fb8a-6b39-bffb1716ae84">
                        <h2 className="display-9 text-neutral-100">
                            It's your turn to stand as a <span className="heading-gradient">web designer</span>
                        </h2>
                        <div className="inner-container _525px _100-tablet">
                            <div className="mg-top-16px">
                                <p className="text-neutral-400">Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.</p>
                            </div>
                        </div>
                        <div className="mg-top-48px">
                            <div className="buttons-row left">
                                <Link to="/pricing" className="button-primary white w-inline-block">
                                    <div className="text-block">Start learning</div>
                                    <div className="item-icon-right">
                                        <div className="custom-icon-font"></div>
                                    </div>
                                </Link>
                                <a href="#" className="lighbox-button-wrapper w-inline-block w-lightbox">
                                    <div className="secondary-button white">
                                        <div>Watch video</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="d3e8bab9-1a86-5716-e12d-7503b0a51d95" className="image-container main-image---cta-v1">
                        <div className="blur-bg bg-cta-v1"></div>
                        <img 
                            src="/src/assets/webflow/images/stand-as-a-web-designer-main-image-courselify-x-webflow-template.png" 
                            loading="eager" 
                            alt="Stand as a Web Designer" 
                            className="image position-relative floating-image---down"
                        />
                        <div className="image-wrapper left-image---cta-v1 floating-image---up">
                            <img src="/src/assets/webflow/images/stand-as-a-web-designer-image-01-courselify-x-webflow-template.png" loading="eager" alt="" className="image" />
                        </div>
                        <div className="image-wrapper right-image-01---cta-v1 floating-image---up">
                            <img src="/src/assets/webflow/images/stand-as-a-web-designer-image-03-courselify-x-webflow-template.png" loading="eager" alt="" className="image" />
                        </div>
                        <div className="image-wrapper right-image-02---cta-v1 floating-image---down">
                            <img src="/src/assets/webflow/images/stand-as-a-web-designer-image-02-courselify-x-webflow-template.png" loading="eager" alt="" className="image" />
                        </div>
                        <div data-w-id="3b0e7f5d-d15c-be14-3d10-f79e13daafde" className="image-wrapper float-image-01---cta-v1">
                            <img src="/src/assets/webflow/images/square-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate-15-deg" />
                        </div>
                        <div data-w-id="49aa9ff9-2b9f-3f88-3506-8b2ab8f7008d" className="image-wrapper float-image-02---cta-v1">
                            <img src="/src/assets/webflow/images/circle-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate-30-deg" />
                        </div>
                        <div data-w-id="6f5a6fb2-74ac-ecea-a0f8-23b52d867b58" className="image-wrapper float-image-03---cta-v1">
                            <img src="/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate-15-deg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
