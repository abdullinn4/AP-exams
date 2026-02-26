import { Link } from 'react-router-dom'
import {ROUTES} from "@/app/router/routes.ts";

export const CTAFooterBlock = () => {
    return (
        <div className="footer-cta">
            <div className="inner-container _625px">
                <h2 className="display-9 text-neutral-100">
                    Start your <span className="heading-gradient">way to «5»</span>
                </h2>
            </div>
            <div className="buttons-row wrap---tablet">
                <Link to={ROUTES.CATALOG} className="button-primary white w-inline-block">
                    <div className="text-block">Start learning</div>
                    <div className="item-icon-right">
                        <div className="custom-icon-font"></div>
                    </div>
                </Link>
                <Link to="#" className="secondary-button white w-inline-block">
                    <div className="text-block">Watch video</div>
                </Link>
            </div>
            <div className="blur-bg footer-v1"></div>
            <div data-w-id="7db5901c-44b7-157f-5569-1c9e8b4606d7" className="image-wrapper float-image-01---footer-cta">
                <img
                    src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    alt=""
                    className="image rotate-15-deg"
                />
            </div>
            <div data-w-id="9c5962a2-7bf8-17a2-3293-2e3492f2c883" className="image-wrapper float-image-02---footer-cta">
                <img
                    src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    alt=""
                    className="image rotate-15-deg"
                />
            </div>
            <div data-w-id="3ba83132-614a-f4bc-e975-9e63394648dd" className="image-wrapper float-image-03---footer-cta">
                <img
                    src="/assets/webflow/images/circle-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    alt=""
                    className="image rotate-30-deg"
                />
            </div>
            <div className="full-section-bg-wrapper">
                <img
                    src="/assets/webflow/images/footer-cta-bg-texture-courselify-webflow-ecommerce-template.png"
                    loading="eager"
                    alt=""
                    className="fit-cover width-100"
                />
            </div>
        </div>
    )
}