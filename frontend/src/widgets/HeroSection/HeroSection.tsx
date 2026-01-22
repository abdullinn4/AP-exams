import { Link } from 'react-router-dom'
import { Header } from '@/widgets/Header'

export const HeroSection = () => {
    return (
        <section className="section-card-padding top">
            <div className="position-relative">
                <Header variant="full" theme="light" />
                <div data-w-id="fa95ee18-0a5c-64ab-0aaf-ae790687b46c" className="section-card hero-section">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="w-layout-grid grid-2-columns hero-grid---home-v1">
                            <div data-w-id="e8a6f687-fe4a-e09e-5e42-20e8a17d0903">
                                <div className="hero-top-content-wrapper---home-v1">
                                    <div className="flex-horizontal justify-start">
                                        <div className="hero-avatar-wrapper first">
                                            <div className="avatar-wrapper _48px">
                                                <img src="/src/assets/webflow/images/john-carter-avatar-image-courselify-x-webflow-template.jpg" alt="Student Avatar" className="avatar-image circle" />
                                            </div>
                                        </div>
                                        <div className="hero-avatar-wrapper">
                                            <div className="avatar-wrapper _48px">
                                                <img src="/src/assets/webflow/images/sophie-moore-avatar-image-courselify-x-webflow-template.jpg" alt="Student Avatar" className="avatar-image circle" />
                                            </div>
                                        </div>
                                        <div className="hero-avatar-wrapper">
                                            <div className="avatar-wrapper _48px">
                                                <img src="/src/assets/webflow/images/andy-smith-avatar-image-courselify-x-webflow-template.jpg" alt="Student Avatar" className="avatar-image circle" />
                                            </div>
                                        </div>
                                        <div className="hero-avatar-wrapper">
                                            <div className="avatar-wrapper _48px">
                                                <img src="/src/assets/webflow/images/lily-woods-avatar-image-courselify-x-webflow-template.jpg" alt="Student Avatar" className="avatar-image circle" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-neutral-500 semi-bold">
                                        Trusted by over <span className="bold text-neutral-100">10,000+</span> students
                                    </div>
                                </div>
                                <div className="mg-top-32px">
                                    <h1 className="display-10 text-neutral-100">
                                        It's your turn to stand out as a <span className="heading-gradient">web designer</span>
                                    </h1>
                                </div>
                                <p className="text-neutral-400">
                                    Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.
                                </p>
                                <div className="mg-top-40px">
                                    <div className="buttons-row left">
                                        <Link to="/pricing" className="button-primary white w-inline-block">
                                            <div className="text-block">Start learning</div>
                                            <div className="item-icon-right">
                                                <div className="custom-icon-font"></div>
                                            </div>
                                        </Link>
                                        <Link to="/chapters" className="secondary-button white w-inline-block">
                                            <div className="text-block">Preview course</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="7c05c230-fecd-bfaf-c56b-58783c2d6d1c" className="image-container hero-image---home-v1">
                                <img 
                                    src="/src/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-right-image-courselify-x-webflow-template.png" 
                                    loading="lazy" 
                                    alt="Hero Image" 
                                    className="image z-index-1 floating-image---down"
                                />
                                <div className="blur-bg hero-bg---home-v1"></div>
                                <div className="image-wrapper hero-float-image---home-v1 floating-image---up">
                                    <img src="/src/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-left-image-courselify-x-webflow-template.png" loading="eager" alt="" className="image" />
                                </div>
                                <div data-w-id="10aaa36f-a5fa-5307-350c-2670b8214199" className="image-wrapper float-image-01---hero-home-v1">
                                    <img src="/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate-60-deg" />
                                </div>
                                <div data-w-id="7fb39435-788a-a0e2-eebf-8fa67eedace6" className="image-wrapper float-image-02---hero-home-v1">
                                    <img src="/src/assets/webflow/images/square-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image" />
                                </div>
                                <div data-w-id="8dea4324-cda8-84c2-908d-22dfcf9d549a" className="image-wrapper float-image-03---hero-home-v1">
                                    <img src="/src/assets/webflow/images/circle-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate-30-deg" />
                                </div>
                                <div data-w-id="8a2279e7-a56c-fc6a-4b5a-4983b72955ca" className="image-wrapper float-image-04---hero-home-v1">
                                    <img src="/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate--60-deg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-section-bg-wrapper">
                        <img src="/src/assets/webflow/images/home-v1-hero-bg-texture-courselify-webflow-ecommerce-template.png" loading="eager" alt="" className="fit-cover width-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}
