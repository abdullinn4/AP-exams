import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import {
    ABOUT_HERO,
    ABOUT_PORTFOLIO,
    ABOUT_CTA,
    ABOUT_PROJECTS,
    ABOUT_HOBBIES
} from '@/shared/config/content'
import {CTAFooterBlock} from "@/widgets/ CTAFooterBlock";

export const AboutPage = () => {
    return (
        <div className="page-wrapper v2">
            <section className="section-card-padding top">
                <div
                    data-w-id="19870dc9-2082-ec46-dd5a-7e8dd29abecb"
                    style={{ opacity: 0 }}
                    className="section-card hero-section about-page"
                >
                    <Header variant="full" theme="light" />

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
                                        className="image"
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
                                        className="image"
                                    />
                                </div>
                                <div className="about-hero-paragraph-and-button">
                                    <p className="text-neutral-400">{ABOUT_HERO.description}</p>
                                    <div className="buttons-row left">
                                        <a href="#more-about-me" className="secondary-button white w-inline-block">
                                            <div className="text-block">More about me</div>
                                        </a>
                                    </div>
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
                                    className="image cover-image"
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
                                    className="image cover-image"
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
                                <span className="heading-gradient">{ABOUT_PORTFOLIO.title}</span> {ABOUT_PORTFOLIO.subtitle}
                            </h2>
                            <div className="mg-top-16px">
                                <p>{ABOUT_PORTFOLIO.description}</p>
                            </div>
                            <div className="mg-top-40px">
                                <div className="buttons-row left">
                                    <a href="#portfolio" className="secondary-button w-inline-block">
                                        <div className="text-block">My portfolio</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-card-padding">
                <div
                    data-w-id="19870dc9-2082-ec46-dd5a-7e8dd29abf2c"
                    style={{ opacity: 0 }}
                    className="section-card cta-v3"
                >
                    <div className="w-layout-blockcontainer container-default width-100 w-container">
                        <div className="w-layout-grid grid-2-columns cta-v3-grid">
                            <div
                                id="w-node-fc57433e-a865-68e8-6a2b-785d82dfff8e-ad098e69"
                                data-w-id="fc57433e-a865-68e8-6a2b-785d82dfff8e"
                                style={{ opacity: 0 }}
                                className="image-container main-image---cta-v3"
                            >
                                <div className="image-wrapper main-image---cta-v3">
                                    <img
                                        src={ABOUT_CTA.images.main}
                                        loading="eager"
                                        sizes="(max-width: 479px) 72vw, (max-width: 991px) 71vw, (max-width: 1439px) 30vw, 419.734375px"
                                        srcSet={`${ABOUT_CTA.images.main.replace('.png', '-p-500.png')} 500w, ${ABOUT_CTA.images.main.replace('.png', '-p-800.png')} 800w, ${ABOUT_CTA.images.main} 1263w`}
                                        alt="The Reason Behind My Course - Courselify X Webflow Template"
                                        className="image floating-image---down"
                                    />
                                </div>
                                <div className="image-wrapper left-image---cta-v3 floating-image---up">
                                    <img
                                        src={ABOUT_CTA.images.left}
                                        loading="eager"
                                        alt="The Reason Behind My Course - Courselify X Webflow Template"
                                        className="image"
                                    />
                                </div>
                                <div className="image-wrapper right-image-01---cta-v3 floating-image---up">
                                    <img
                                        src={ABOUT_CTA.images.rightTop}
                                        loading="eager"
                                        alt="The Reason Behind My Course - Courselify X Webflow Template"
                                        className="image"
                                    />
                                </div>
                                <div className="image-wrapper right-image-02---cta-v3 floating-image---down">
                                    <img
                                        src={ABOUT_CTA.images.rightBottom}
                                        loading="eager"
                                        alt="Clicker Image - Courselify X Webflow Template"
                                        className="image"
                                    />
                                </div>
                                <div
                                    data-w-id="eb43c28a-aa6b-b196-835c-825cfbd6f94d"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-01---cta-v3"
                                >
                                    <img
                                        src={ABOUT_CTA.images.floatSquare}
                                        loading="eager"
                                        sizes="(max-width: 479px) 9vw, (max-width: 767px) 8vw, (max-width: 991px) 9vw, (max-width: 1439px) 4vw, (max-width: 1919px) 3vw, 50.3671875px"
                                        srcSet={`${ABOUT_CTA.images.floatSquare.replace('.png', '-p-500.png')} 500w, ${ABOUT_CTA.images.floatSquare} 648w`}
                                        alt=""
                                        className="image rotate-180-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="b477b01a-3b0b-e76e-3452-7293c0711205"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-02---cta-v3"
                                >
                                    <img
                                        src={ABOUT_CTA.images.floatPyramid}
                                        loading="eager"
                                        alt=""
                                        className="image rotate-120-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="c3112639-5464-4689-0fae-d4090cd15596"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-03---cta-v3"
                                >
                                    <img
                                        src={ABOUT_CTA.images.floatPyramid}
                                        loading="eager"
                                        alt=""
                                        className="image rotate--120-deg"
                                    />
                                </div>
                                <div
                                    data-w-id="4ef62fb1-87bf-e3fe-5e70-31508e0c3e64"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)',
                                        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)'
                                    }}
                                    className="image-wrapper float-image-04---cta-v3"
                                >
                                    <img
                                        src={ABOUT_CTA.images.floatCircle}
                                        loading="eager"
                                        alt=""
                                        className="image rotate-150-deg"
                                    />
                                </div>
                            </div>
                            <div
                                id="w-node-_06e58005-73c9-d74e-0484-6da9bb748b58-ad098e69"
                                data-w-id="06e58005-73c9-d74e-0484-6da9bb748b58"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                className="inner-container _540px _100-tablet"
                            >
                                <h2 className="display-9">
                                    <span className="heading-gradient">{ABOUT_CTA.title} </span>{ABOUT_CTA.subtitle}
                                </h2>
                                <div className="mg-top-16px">
                                    <p>{ABOUT_CTA.description}</p>
                                </div>
                                <div className="mg-top-40px">
                                    <div className="buttons-row left">
                                        <a href="/pricing" className="button-primary w-inline-block">
                                            <div className="text-block">Start learning</div>
                                            <div className="item-icon-right">
                                                <div className="custom-icon-font"></div>
                                            </div>
                                        </a>
                                        <a href="/chapters" className="secondary-button w-inline-block">
                                            <div className="text-block">Preview course</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="section">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div
                        data-w-id="b2447a67-5892-f160-6c20-f07401875c38"
                        style={{
                            WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            opacity: 0
                        }}
                        className="inner-container _670px _100-tablet"
                    >
                        <h2 className="display-9">
                            {ABOUT_PROJECTS.title} <span className="heading-gradient">{ABOUT_PROJECTS.subtitle}</span>
                        </h2>
                        <div className="mg-top-16px">
                            <p>{ABOUT_PROJECTS.description}</p>
                        </div>
                    </div>
                    <div
                        data-w-id="b77c8737-6df8-1c39-d38e-0639668f6b8b"
                        style={{
                            WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            opacity: 0
                        }}
                        className="projects-wrapper"
                    >
                        <div className="z-index-1">
                            <div className="w-layout-grid grid-3-columns projects-grid">
                                {ABOUT_PROJECTS.items.map((project, index) => (
                                    <a
                                        key={index}
                                        data-w-id={project.id}
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`card project-card ${project.className} w-inline-block`}
                                    >
                                        <div className="image-wrapper border-radius-32px overflow-hidden">
                                            <img
                                                src={project.image}
                                                loading="eager"
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1439px) 31vw, 404px"
                                                srcSet={`${project.image.replace('.jpg', '-p-500.jpg')} 500w, ${project.image.replace('.jpg', '-p-800.jpg')} 800w, ${project.image} 1212w`}
                                                alt={`${project.name} Image - Courselify X Webflow Template`}
                                                className="image"
                                            />
                                        </div>
                                        <div className="project-card-bottom-content">
                                            <div className="image-wrapper project-logo">
                                                <img
                                                    src={project.logo}
                                                    loading="eager"
                                                    alt={`${project.name} - Courselify X Webflow Template`}
                                                />
                                            </div>
                                            <div className="mg-top-16px">
                                                <p>{project.description}</p>
                                            </div>
                                            <div className="mg-top-24px">
                                                <div className="display-2 bold text-neutral-800">
                                                    <div className="flex y-align-center">
                                                        <div>View Project</div>
                                                        <div className="item-icon-right">
                                                            <div className="icon-font-squared"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="blur-bg gradient-bg bg-projects"></div>
                    </div>
                </div>
            </section>

            <section className="section top-0px">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="w-layout-grid grid-2-columns hobbies-grid">
                        <div
                            id="w-node-_199e84a1-7822-b651-a3b9-c55988aad27c-ad098e69"
                            data-w-id="199e84a1-7822-b651-a3b9-c55988aad27c"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="grid-1-column hobbies-grid"
                        >
                            <div>
                                <h2 className="display-9">
                                    {ABOUT_HOBBIES.hobbies.title} <span className="heading-gradient">{ABOUT_HOBBIES.hobbies.subtitle}</span>
                                </h2>
                                <div className="mg-top-16px">
                                    <p style={{ whiteSpace: 'pre-line' }}>{ABOUT_HOBBIES.hobbies.description}</p>
                                </div>
                            </div>
                            <div className="image-wrapper border-radius-32px overflow-hidden">
                                <img
                                    src={ABOUT_HOBBIES.hobbies.image}
                                    loading="eager"
                                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 620px"
                                    srcSet={`${ABOUT_HOBBIES.hobbies.image.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_HOBBIES.hobbies.image.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_HOBBIES.hobbies.image.replace('.jpg', '-p-1080.jpg')} 1080w, ${ABOUT_HOBBIES.hobbies.image} 1860w`}
                                    alt="My Hobbies - Courselify X Webflow Template"
                                    className="image cover-image"
                                />
                            </div>
                        </div>
                        <div
                            id="w-node-_9acf382d-9d16-d828-27c3-bf8a765e3e80-ad098e69"
                            data-w-id="9acf382d-9d16-d828-27c3-bf8a765e3e80"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                            className="grid-1-column hobbies-grid gap-row-40px"
                        >
                            <div className="image-wrapper border-radius-32px overflow-hidden">
                                <img
                                    src={ABOUT_HOBBIES.location.image}
                                    loading="eager"
                                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 620px"
                                    srcSet={`${ABOUT_HOBBIES.location.image.replace('.jpg', '-p-500.jpg')} 500w, ${ABOUT_HOBBIES.location.image.replace('.jpg', '-p-800.jpg')} 800w, ${ABOUT_HOBBIES.location.image.replace('.jpg', '-p-1080.jpg')} 1080w, ${ABOUT_HOBBIES.location.image} 1860w`}
                                    alt="Where I Live - Courselify X Webflow Template"
                                    className="image cover-image"
                                />
                            </div>
                            <div id="w-node-_9acf382d-9d16-d828-27c3-bf8a765e3e81-ad098e69">
                                <h2 className="display-9">
                                    {ABOUT_HOBBIES.location.title} <span className="heading-gradient">{ABOUT_HOBBIES.location.subtitle}</span>
                                </h2>
                                <div className="mg-top-16px">
                                    <p>{ABOUT_HOBBIES.location.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-wrapper">
                <div data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-card">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock />
                    </div>
                </div>
            </footer>

            <Footer variant="full" />
        </div>
    )
}