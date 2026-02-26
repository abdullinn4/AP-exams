import { useEffect, useRef } from 'react'
import { EXAM_PREP_STEPS } from '@/shared/config/content'
import Swiper from 'swiper'
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export const ExamPrepWorksSection = () => {
    const swiperRef = useRef<Swiper | null>(null)

    useEffect(() => {
        swiperRef.current = new Swiper('.exam-prep-swiper', {
            modules: [Autoplay, Mousewheel, Pagination],
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: {
                forceToAxis: true,
                releaseOnEdges: true,
            },
            speed: 1500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
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
        <section className="section">
            <div className="section-card">
                <div data-w-id="9e898e90-7c6e-18e6-7bea-3465030fade7" className="exam-prep-header">
                    <h2 className="display-9 mg-bottom-0">
                        How <span className="heading-gradient">Exam Prep Works</span>
                    </h2>
                </div>
                <div data-w-id="174cc1dd-b481-b118-43b3-746088e6d3bd" className="w-layout-blockcontainer container-default w-container">
                    <div className="exam-prep-swiper swiper">
                        <div className="swiper-wrapper">
                            {EXAM_PREP_STEPS.map((step, index) => (
                                <div key={step.id} className="swiper-slide exam-prep-slide">
                                    <div className={`exam-prep-card slide-${index + 1}`}>
                                        <div className="exam-prep-image-wrapper">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="exam-prep-image"
                                            />
                                        </div>
                                        <div className="exam-prep-content">
                                            <div className="exam-prep-subtitle">{step.subtitle}</div>
                                            <h3 className="exam-prep-title">{step.title}</h3>
                                            <p className="exam-prep-description">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>


        </section>
    )
}