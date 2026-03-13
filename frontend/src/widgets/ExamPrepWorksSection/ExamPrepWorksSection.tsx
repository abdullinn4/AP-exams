import { useEffect, useRef } from 'react'
import { EXAM_PREP_STEPS } from '@/shared/config/content'
import Swiper from 'swiper'
import { Autoplay, Mousewheel, Pagination, EffectCoverflow, Keyboard, Navigation} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export const ExamPrepWorksSection = () => {
    const swiperRef = useRef<Swiper | null>(null)

    useEffect(() => {
        swiperRef.current = new Swiper('.exam-prep-swiper', {
            modules: [Autoplay, Mousewheel, Pagination, EffectCoverflow, Keyboard, Navigation],
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            effect: 'coverflow',
            speed: 1500,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            mousewheel: {
                forceToAxis: true,
            },
            keyboard: {
                enabled: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            },
            pagination: {
                el: '.exam-prep-pagination',
                dynamicBullets: false,
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev',
            },
        })

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy()
            }
        }
    }, [])

    return (
        <section className="section exam-prep-section top">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="exam-prep-header">
                    <h2 className="display-9 mg-bottom-0">
                        How <span className="heading-gradient">Exam Prep Works</span>
                    </h2>
                </div>
            </div>

            <div className="w-layout-blockcontainer container-default w-container">
                <div className="exam-prep-container">
                    <div className="exam-prep-swiper swiper">
                        <div className="swiper-wrapper">
                            {EXAM_PREP_STEPS.map((step, index) => (
                                <div key={step.id} className="swiper-slide exam-prep-slide">
                                    <div
                                        className={`exam-prep-card slide-${index + 1}`}
                                        style={{ background: step.bgGradient }}
                                    >
                                        {step.video && (
                                            <div className="exam-prep-card-video">
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="exam-prep-video"
                                                    style={{ mixBlendMode: 'screen'}}
                                                >
                                                    <source src={step.video} type="video/mp4"/>
                                                </video>
                                            </div>
                                        )}

                                        <div className="exam-prep-card-content">
                                            <div
                                                className="exam-prep-card-sub-title"
                                                style={{ color: step.subtitleColor }}
                                            >
                                                {step.subtitle}
                                            </div>
                                            <h2
                                                className="exam-prep-card-title"
                                                data-text={step.title}
                                                style={{ color: step.titleColor }}
                                            >
                                                {step.title}
                                            </h2>
                                            <p
                                                className="exam-prep-card-description"
                                                style={{ color: step.descriptionColor }}
                                            >
                                                {step.description}
                                            </p>
                                            <div className="exam-prep-card-cta">
                                                <a
                                                    href="#"
                                                    className="exam-prep-cta-button"
                                                    style={{
                                                        backgroundColor: step.buttonColor,
                                                        color: 'white'
                                                    }}
                                                >
                                                    {step.buttonText}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="exam-prep-card-ghost-info">
                                            <span style={{ backgroundColor: step.ghostInfoColor }}></span>
                                            <div className="exam-prep-ghost-name">{step.ghostName}</div>
                                            <div>{step.ghostRole}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="exam-prep-pagination swiper-pagination"></div>

                        <div className="slider-button-prev slider-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                                <g className="slider-svg-wrap">
                                    <g className="slider-svg-circle-wrap">
                                        <circle cx="42" cy="42" r="40"></circle>
                                    </g>
                                    <path className="slider-svg-arrow" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
                                    <path className="slider-svg-line" d="M80,0H0"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="slider-button-next slider-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                                <g className="slider-svg-wrap">
                                    <g className="slider-svg-circle-wrap">
                                        <circle cx="42" cy="42" r="40"></circle>
                                    </g>
                                    <path className="slider-svg-arrow" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
                                    <path className="slider-svg-line" d="M80,0H0"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}