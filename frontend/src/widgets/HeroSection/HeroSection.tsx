import { Link } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { HOME_HERO } from '@/shared/config/content'
import {HeroSlider} from "@/widgets/HeroSlider";
import {ROUTES} from "@/app/router/routes.ts";
import * as React from "react";

export const HeroSection = () => {
    const handleScrollToWhyCourse = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const element = document.getElementById('why-course-section')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

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
                                <div className="mg-top-32px">
                                    <h1 className="display-10 text-neutral-100">
                                        {HOME_HERO.title} <span className="heading-gradient">{HOME_HERO.titleHighlight}</span>
                                    </h1>
                                </div>
                                <p className="text-neutral-400">
                                    {HOME_HERO.description}
                                </p>
                                <div className="mg-top-40px">
                                    <div className="buttons-row left">
                                        <Link to={ROUTES.CATALOG} className="button-primary white w-inline-block">
                                            <div className="text-block">{HOME_HERO.ctaPrimary}</div>
                                            <div className="item-icon-right">
                                                <div className="custom-icon-font"></div>
                                            </div>
                                        </Link>
                                        <a
                                            href="#why-course-section"
                                            onClick={handleScrollToWhyCourse}
                                            className="secondary-button white w-inline-block"
                                        >
                                            <div className="text-block">{HOME_HERO.ctaSecondary}</div>
                                        </a>
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
                                <div className="image-wrapper hero-float-image---home-v1 floating-image---up">
                                    <img src={HOME_HERO.images.float} loading="eager" alt="" className="image" />
                                </div>
                                <div data-w-id="10aaa36f-a5fa-5307-350c-2670b8214199" className="image-wrapper float-image-01---hero-home-v1">
                                    <img src={HOME_HERO.images.floatPyramid} loading="eager" alt="" className="image rotate-60-deg" />
                                </div>
                                <div data-w-id="7fb39435-788a-a0e2-eebf-8fa67eedace6" className="image-wrapper float-image-02---hero-home-v1">
                                    <img src={HOME_HERO.images.floatSquare} loading="eager" alt="" className="image" />
                                </div>
                                <div data-w-id="8dea4324-cda8-84c2-908d-22dfcf9d549a" className="image-wrapper float-image-03---hero-home-v1">
                                    <img src={HOME_HERO.images.floatCircle} loading="eager" alt="" className="image rotate-30-deg" />
                                </div>
                                <div data-w-id="8a2279e7-a56c-fc6a-4b5a-4983b72955ca" className="image-wrapper float-image-04---hero-home-v1">
                                    <img src={HOME_HERO.images.floatPyramid} loading="eager" alt="" className="image rotate--60-deg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full-section-bg-wrapper">
                        <img src={HOME_HERO.images.bgTexture} loading="eager" alt="" className="fit-cover width-100" />
                    </div>

                    <HeroSlider/>
                </div>
            </div>
        </section>
    )
}
