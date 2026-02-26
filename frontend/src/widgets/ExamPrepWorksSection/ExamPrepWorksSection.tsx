import { useEffect, useRef } from 'react'
import { EXAM_PREP_STEPS } from '@/shared/config/content'
import Swiper from 'swiper'
import { Autoplay, Mousewheel, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export const ExamPrepWorksSection = () => {
    const swiperRef = useRef<Swiper | null>(null)

    useEffect(() => {
        swiperRef.current = new Swiper('.exam-prep-swiper', {
            modules: [Autoplay, Mousewheel, Pagination, EffectCoverflow, Keyboard],
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
            mousewheel: true,
            keyboard: {
                enabled: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.exam-prep-pagination',
                dynamicBullets: false,
                clickable: true,
            },
        })

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy()
            }
        }
    }, [])

    return (
        <section className="section exam-prep-section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="exam-prep-header">
                    <h2 className="display-9 mg-bottom-0">
                        How <span className="heading-gradient">Exam Prep Works</span>
                    </h2>
                </div>
            </div>

            <div className="exam-prep-container">
                <div className="exam-prep-swiper swiper">
                    <div className="swiper-wrapper">
                        {EXAM_PREP_STEPS.map((step, index) => (
                            <div key={step.id} className="swiper-slide exam-prep-slide">
                                <div
                                    className={`exam-prep-card slide-${index + 1}`}
                                    style={{ background: step.bgGradient }}
                                >
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
                </div>
            </div>
        </section>
    )
}