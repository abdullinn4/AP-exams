import { Link } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

export const NotFoundPage = () => {
    return (
        <div className="page-wrapper">
            <Header />

            <div className="utility-page-wrap _404-page">
                <div className="w-layout-blockcontainer container-default width-100 w-container">
                    <div className="w-layout-grid grid-2-columns page-not-found-grid">
                        <div className="inner-container _516px _100-tablet">
                            <div className="utility-page-content _404-page">
                                <div
                                    data-w-id="53a85472-7d05-f9fe-7b92-7f3b7c7f2cf1"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        opacity: 0
                                    }}
                                    className="card page-not-found-card"
                                >
                                    <div className="page-not-found-number">
                                        <div>404</div>
                                    </div>
                                    <div className="mg-top-4px">
                                        <h1 className="display-5">Page not found</h1>
                                    </div>
                                    <div className="mg-top-16px">
                                        <p>
                                            The page you're looking for doesn't exist or has been moved.
                                            Please check the URL or return to the homepage to continue your learning journey.
                                        </p>
                                    </div>
                                    <div className="mg-top-32px">
                                        <div className="buttons-row left">
                                            <Link
                                                to="/"
                                                data-w-id="e9da5fd6-ab44-5b2f-81ad-6e5f36bfab9c"
                                                className="button-primary w-inline-block"
                                            >
                                                <div className="text-block">Go back home</div>
                                                <div className="item-icon-right">
                                                    <div className="custom-icon-font"></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-w-id="eb19ffed-dbee-ac18-b27e-790472ea82b5"
                            style={{ opacity: 0 }}
                            className="image-container page-not-found-image"
                        >
                            <img
                                src="/assets/webflow/images/page-not-found-image-courselify-x-webflow-template.png"
                                loading="eager"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 85vw, (max-width: 1439px) 43vw, 524px"
                                srcSet="/assets/webflow/images/page-not-found-image-courselify-x-webflow-template-p-500.png 500w, /assets/webflow/images/page-not-found-image-courselify-x-webflow-template-p-800.png 800w, /assets/webflow/images/page-not-found-image-courselify-x-webflow-template-p-1080.png 1080w, /assets/webflow/images/page-not-found-image-courselify-x-webflow-template.png 1572w"
                                alt="Page Not Found"
                                className="image"
                            />
                            <div className="image-wrapper left-image---404-page floating-image---down">
                                <img
                                    src="/assets/webflow/images/page-not-found-left-image-courselify-x-webflow-template.png"
                                    loading="eager"
                                    alt="Page Not Found"
                                    className="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}