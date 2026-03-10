import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {ABOUT_HERO, ABOUT_PORTFOLIO, ABOUT_QUOTE} from '@/shared/config/content'
import {CTAFooterBlock} from "@/widgets/CTAFooterBlock";
import {VideoCircle} from "@/widgets/VideoCircle";
import { useState } from "react";

export const AboutPage = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    return (
        <div className="page-wrapper v2">
            <section className="section-card-padding top">
                <div
                    data-w-id="19870dc9-2082-ec46-dd5a-7e8dd29abecb"
                    style={{opacity: 0}}
                    className="section-card hero-section about-page"
                >
                    <Header variant="full" theme="light"/>

                    <div className="w-layout-blockcontainer container-default width-100 z-index-1 w-container">
                        <div className="w-layout-grid grid-2-columns hero-grid---about-page">
                            <div
                                id="w-node-_5a2c5ebe-e2fe-ffff-2494-bde9ed3e0770-ad098e69"
                                data-w-id="5a2c5ebe-e2fe-ffff-2494-bde9ed3e0770"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="hero-content-right---about-page"
                            >
                                <div className="inner-container _525px _100-tablet">
                                    <h1 className="display-10 text-neutral-100">
                                        Hello, I'm <span className="heading-gradient">{ABOUT_HERO.name}</span>
                                    </h1>
                                </div>
                                <div className="image-wrapper border-radius-32px overflow-hidden">
                                    <img
                                        src={ABOUT_HERO.images.main}
                                        loading="eager"
                                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 991px) 45vw, (max-width: 1439px) 47vw, 600px"
                                        srcSet={`${ABOUT_HERO.images.main.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_HERO.images.main.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_HERO.images.main.replace('.jpg', '-p-1080.jpg')} 1080w, ${ABOUT_HERO.images.main} 1806w`}
                                        alt={`Hello Im ${ABOUT_HERO.name} - Courselify X Webflow Template`}
                                    />
                                </div>
                            </div>
                            <div
                                id="w-node-_75e4621d-f034-0a35-68ad-960bc681dcd6-ad098e69"
                                data-w-id="75e4621d-f034-0a35-68ad-960bc681dcd6"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="hero-content-left---about-page"
                            >
                                <div className="image-wrapper border-radius-32px overflow-hidden">
                                    <img
                                        src={ABOUT_HERO.images.secondary}
                                        loading="eager"
                                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 991px) 41vw, (max-width: 1439px) 42vw, 544px"
                                        srcSet={`${ABOUT_HERO.images.secondary.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_HERO.images.secondary.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_HERO.images.secondary.replace('.jpg', '-p-1080.jpg')} 1080w, ${ABOUT_HERO.images.secondary} 1638w`}
                                        alt={`Hello Im ${ABOUT_HERO.name} - Courselify X Webflow Template`}
                                    />
                                </div>
                                <div className="inner-container _525px _100-tablet">
                                    <h1 className="display-10 text-neutral-100">
                                        Hello, I'm <span className="heading-gradient">{ABOUT_HERO.name2}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blur-bg hero-bg---about-page"></div>
                </div>
            </section>

            <section id="more-about-me" className="section">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="w-layout-grid grid-2-columns portfolio-grid">
                        <div
                            id="w-node-_53147515-0e7e-fedf-28bf-94649a57c7b1-ad098e69"
                            className="portfolio-image-grid"
                        >
                            <div
                                id="w-node-f3301946-d279-8059-4cbc-8d4a340c8345-ad098e69"
                                data-w-id="f3301946-d279-8059-4cbc-8d4a340c8345"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="image-wrapper border-radius-32px overflow-hidden"
                            >
                                <img
                                    src={ABOUT_PORTFOLIO.images.left}
                                    loading="eager"
                                    sizes="(max-width: 479px) 77vw, (max-width: 991px) 46vw, (max-width: 1439px) 23vw, 309.6484375px"
                                    srcSet={`${ABOUT_PORTFOLIO.images.left.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_PORTFOLIO.images.left.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_PORTFOLIO.images.left} 1240w`}
                                    alt="A Professional Web Designer - Courselify X Webflow Template"
                                />
                            </div>
                            <div
                                id="w-node-c50668a2-8877-2a89-07b8-c875a29e3f76-ad098e69"
                                data-w-id="c50668a2-8877-2a89-07b8-c875a29e3f76"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="image-wrapper border-radius-32px overflow-hidden"
                            >
                                <img
                                    src={ABOUT_PORTFOLIO.images.right}
                                    loading="eager"
                                    sizes="(max-width: 479px) 77vw, (max-width: 991px) 46vw, (max-width: 1439px) 23vw, 309.65625px"
                                    srcSet={`${ABOUT_PORTFOLIO.images.right.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_PORTFOLIO.images.right.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_PORTFOLIO.images.right} 1240w`}
                                    alt="A Professional Web Designer - Courselify X Webflow Template"
                                />
                            </div>
                        </div>
                        <div
                            id="w-node-_8918d195-4e9e-f7d0-b53b-96e2eb673df9-ad098e69"
                            data-w-id="8918d195-4e9e-f7d0-b53b-96e2eb673df9"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                        >
                            <h2 className="display-9">
                                <span
                                    className="heading-gradient">{ABOUT_PORTFOLIO.title}</span> {ABOUT_PORTFOLIO.subtitle}
                            </h2>
                            <div className="mg-top-16px">
                                <p>{ABOUT_PORTFOLIO.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-card-padding">
                <div
                    data-w-id="19870dc9-2082-ec46-dd5a-7e8dd29abf2c"
                    className="container-default w-container about-quote-container"
                >

                    <VideoCircle
                        id="video1"
                        videoSrc="/assets/webflow/gifs/marat_circle.mp4"
                        borderColor="var(--primary--02)"
                        position="top-left"
                        activeVideo={activeVideo}
                        setActiveVideo={setActiveVideo}
                    />

                    <VideoCircle
                        id="video2"
                        videoSrc="/assets/webflow/gifs/kamil_circle.mp4"
                        borderColor="#a78bfa"
                        position="top-right"
                        activeVideo={activeVideo}
                        setActiveVideo={setActiveVideo}
                    />

                    <div className="about-quote-content">
                        <div className="about-quote-text">
                            {ABOUT_QUOTE.quote}
                        </div>
                    </div>

                    <img
                        className="about-quote-svg-1"
                        src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png"
                        alt="icon"
                    />

                    <img
                        className="about-quote-svg-2"
                        src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                        alt="icon"
                    />

                    <img
                        className="about-quote-svg-3"
                        src="/assets/webflow/images/circle-figure-courselify-x-webflow-template.png"
                        alt="icon"
                    />

                </div>
            </section>


            <footer className="footer-wrapper">
                <div data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-card">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock/>
                    </div>
                </div>
            </footer>

            <Footer variant="full"/>
        </div>
    )
}