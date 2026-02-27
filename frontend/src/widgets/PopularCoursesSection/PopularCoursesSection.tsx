import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '@/widgets/CourseCard'
import { HOME_POPULAR_COURSES } from '@/shared/config/content'

export const PopularCoursesSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Инициализация Webflow слайдера
        if (window.Webflow && sliderRef.current) {
            window.Webflow.require('slider').redraw()
        }
    }, [])

    return (
        <section className="section">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div data-w-id="f402fcd4-a56b-275f-aeb1-72593824ca6a" className="inner-container _704px center-tablet">
                        <div className="center-content---tablet">
                            <h2 className="display-9">
                                {HOME_POPULAR_COURSES.title}{' '}
                                <span className="heading-gradient">{HOME_POPULAR_COURSES.titleHighlight}</span>
                            </h2>
                        </div>
                    </div>

                    <div className="mg-top-64px">
                        <div
                            ref={sliderRef}
                            data-delay="4000"
                            data-animation="slide"
                            className="slider-wrapper testimonial-v1 w-slider"
                            data-autoplay="false"
                            data-easing="ease"
                            data-hide-arrows="false"
                            data-disable-swipe="false"
                            data-w-id="ef77529f-1336-8fb1-c66b-8948ce1e97d7"
                            data-autoplay-limit="0"
                            data-nav-spacing="3"
                            data-duration="500"
                            data-infinite="true"
                        >
                            <div className="slider-mask testimonial-slider-v1 w-slider-mask">
                                {HOME_POPULAR_COURSES.courses.map((course) => (
                                    <div key={course.id} className="mg-right-28px w-slide">
                                        <CourseCard
                                            course={course}
                                            variant="catalog"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="secondary-button-icon large slider-button-left---top-right w-slider-arrow-left">
                                <div className="custom-icon-font">
                                    <img src="/assets/webflow/images/arrow-left-black.svg" alt="left-arrow" style={{ height: '60%', width: '60%' }}/>
                                </div>
                            </div>
                            <div className="secondary-button-icon large slider-button-right---top-right w-slider-arrow-right">
                                <div className="custom-icon-font">
                                    <img src="/assets/webflow/images/arrow-right-black.svg" alt="right-arrow" style={{ height: '60%', width: '60%' }}/>
                                </div>
                            </div>
                            <div className="hidden w-slider-nav w-round w-num"></div>
                        </div>
                    </div>

                    <div className="mg-top-40px">
                        <div className="buttons-row center">
                            <Link to={HOME_POPULAR_COURSES.ctaLink} className="button-primary w-inline-block">
                                <div className="text-block">{HOME_POPULAR_COURSES.ctaText}</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}