import { Link } from 'react-router-dom'
import { ROUTES } from '@/app/router/routes'

export const LessonPromoCard = () => {
    return (
        <div
            data-w-id="9f3807cf-b856-d10c-13d3-bebf05a0791e"
            style={{
                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
            }}
            className="card cta-v7-card"
        >
            <div className="z-index-1">
                <h2 className="display-5 text-neutral-100">
                    Your voice <span className="heading-gradient">matters</span>
                </h2>
                <div className="mg-top-12px">
                    <p className="text-neutral-400">
                        Send your feedback and help us build a better platform for you!
                    </p>
                </div>
                <div className="mg-top-24px">
                    <div className="buttons-row">
                        <Link
                            to={ROUTES.CATALOG}
                            className="button-primary white w-inline-block"
                        >
                            <div className="text-block">Go to discord</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="blur-bg bg-cta-v7"></div>
            <div
                data-w-id="9836d8c8-7c41-9a12-0018-45c695c2545c"
                style={{
                    WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                }}
                className="image-wrapper float-image-01---cta-v7"
            >
                <img
                    src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    alt=""
                    className="image rotate-15-deg"
                />
            </div>
            <div
                data-w-id="84453151-f2b1-4093-6cab-2882a1d8a0f0"
                style={{
                    WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                }}
                className="image-wrapper float-image-02---cta-v7"
            >
                <img
                    src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    alt=""
                    className="image rotate-15-deg"
                />
            </div>
            <div
                data-w-id="1e4a28ea-4006-e969-cefd-18d23bbe6e67"
                style={{
                    WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                }}
                className="image-wrapper float-image-03---cta-v7"
            >
                <img
                    src="/assets/webflow/images/circle-figure-courselify-x-webflow-template.png"
                    loading="eager"
                    sizes="(max-width: 479px) 37vw, (max-width: 991px) 23vw, (max-width: 1439px) 12vw, 161.77734375px"
                    srcSet="/assets/webflow/images/circle-figure-courselify-x-webflow-template-p-500.png 500w, /assets/webflow/imagescle-figure-courselify-x-webflow-template.png 640w"
                    alt=""
                    className="image rotate-30-deg"
                />
            </div>
        </div>
    )
}