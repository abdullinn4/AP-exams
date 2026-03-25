import { useParams } from 'react-router-dom'
import { Header } from '@/widgets/Header/Header'
import { LikeButton } from '@/features/like'
import { Footer } from "@/widgets/Footer"

export const ComingSoonCoursePage = () => {
    const { slug } = useParams<{ slug: string }>()

    if (!slug) {
        return <div>Course not found</div>
    }

    return (
        <div className="page-wrapper full-page coming-soon-page">
            <Header variant="minimal" theme="light" />

            <section className="section full-page-section">
                <div className="w-layout-blockcontainer container-default width-100 w-container">
                    <div className="inner-container _600px _100-tablet">
                        <div className="section-bg-wrapper">
                            <div
                                data-w-id="8b4d1070-12a2-586c-caff-3749c089e4ac"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="card coming-soon-card"
                            >
                                <h1 className="display-9">
                                    Hit like <span className="heading-gradient">if you can't wait for our course!</span>
                                </h1>
                                <div className="mg-top-12px">
                                    <p>
                                        Give us your reaction! That's how we'll know there's a huge demand for this course and it'll push us to work even harder.
                                    </p>
                                </div>
                                <div className="mg-top-40px mg-bottom-40px">
                                    <LikeButton courseSlug={slug} />
                                </div>
                                <div className="mg-top-24px">
                                    <div className="social-media-grid">

                                        <a href="https://www.instagram.com/kamilsmashap?igsh=eXM5aWdhYWF0dGQ4" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                            <div className="icon-font-social-media"></div>
                                        </a>

                                        <a href="https://youtube.com/@gabdulkhakovv?si=d80uEKFpzNM8X72C" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                            <div className="icon-font-social-media"></div>
                                        </a>
                                        <a href="https://www.tiktok.com/@marat.smashap?_r=1&_t=ZG-94srMyEwlmr" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                            <div className="icon-font-social-media">
                                                <img src="/assets/webflow/images/tiktok-icon.svg" alt="tiktok-icon"/>
                                            </div>
                                        </a>
                                        <a href="https://discord.gg/etvUeM62" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                            <div className="icon-font-social-media">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                     fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/share/g/1VAQmeCQbJ/?mibextid=wwXIfr" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                            <div className="icon-font-social-media">
                                                
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blur-bg bg-coming-soon"></div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-id="79865ffe-e6f8-c026-0d41-ea3175cbabf4"
                    style={{ opacity: 0 }}
                    className="image-container hero-image---coming-soon-page"
                >
                    <img
                        src="/assets/webflow/images/get-notified-when-we-launch-image-courselify-x-webflow-template.png"
                        loading="eager"
                        alt="Coming Soon"
                        className="image rotate-15-deg"
                    />
                    <div
                        data-w-id="3d20cb73-f737-74a0-b933-1bee29fd5000"
                        style={{
                            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                        }}
                        className="image-wrapper float-image-01---coming-soon-page"
                    >
                        <img
                            src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                            loading="eager"
                            alt=""
                            className="image"
                        />
                    </div>
                    <div
                        data-w-id="3939117b-696d-e094-75f1-1c3cb91578e1"
                        style={{
                            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                        }}
                        className="image-wrapper float-image-02---coming-soon-page"
                    >
                        <img
                            src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template_3.png"
                            loading="eager"
                            alt=""
                            className="image rotate-60-deg"
                        />
                    </div>
                    <div
                        data-w-id="f012d336-cb23-cd30-2df2-12a7729301a6"
                        style={{
                            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                        }}
                        className="image-wrapper float-image-03---coming-soon-page"
                    >
                        <img
                            src="/assets/webflow/images/circle-figure-courselify-x-webflow-template.png"
                            loading="eager"
                            alt=""
                            className="image rotate-30-deg"
                        />
                    </div>
                </div>
            </section>

            <Footer variant="minimal"/>
        </div>
    )
}