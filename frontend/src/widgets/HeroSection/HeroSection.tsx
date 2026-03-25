import { Link } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { HOME_HERO } from '@/shared/config/content'
import {HeroSlider} from "@/widgets/HeroSlider";
import {ROUTES} from "@/app/router/routes.ts";

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
                                        {HOME_HERO.avatars.map((avatar, idx) => (
                                            <div key={idx} className={`hero-avatar-wrapper ${idx === 0 ? 'first' : ''}`}>
                                                <div className="avatar-wrapper _48px">
                                                    <img src={avatar} alt="Student Avatar" className="avatar-image circle" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-neutral-500 semi-bold">
                                        {HOME_HERO.trustedText} <span className="bold text-neutral-100">{HOME_HERO.trustedCount}</span> {HOME_HERO.trustedSuffix}
                                    </div>
                                </div>

                                {/* Мобильное изображение - показывается только на малых экранах */}
                                <div className="hero-mobile-image mg-top-32px">
                                    <img
                                        src={HOME_HERO.images.main}
                                        loading="lazy"
                                        alt="Hero Image"
                                        className="image"
                                    />
                                </div>

                                <div className="mg-top-32px">
                                    <h1 className="display-10-compact text-neutral-100">
                                        {HOME_HERO.title} <span className="heading-gradient">{HOME_HERO.titleHighlight}</span> {HOME_HERO.titleHighlight1} <span className="heading-gradient">{HOME_HERO.titleHighlight2}</span>
                                    </h1>
                                </div>
                                <div className="mg-top-40px">
                                    <div className="buttons-row left">
                                        <Link to={ROUTES.CATALOG} className="button-primary white w-inline-block">
                                            <div className="text-block">{HOME_HERO.ctaPrimary}</div>
                                            <div className="item-icon-right">
                                                <div className="custom-icon-font"></div>
                                            </div>
                                        </Link>
                                        <Link
                                            to={ROUTES.ABOUT}
                                            className="secondary-button white w-inline-block"
                                        >
                                            <div className="text-block">{HOME_HERO.ctaSecondary}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="7c05c230-fecd-bfaf-c56b-58783c2d6d1c" className="image-container hero-image---home-v1">
                                <img
                                    src={HOME_HERO.images.main}
                                    loading="lazy"
                                    alt="Hero Image"
                                    className="image z-index-1 floating-image---down"
                                />
                                <div className="blur-bg hero-bg---home-v1"></div>

                            </div>
                        </div>
                    </div>

                    <HeroSlider/>
                </div>
            </div>
        </section>
    )
}