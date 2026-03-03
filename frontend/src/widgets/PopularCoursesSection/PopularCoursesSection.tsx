import {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { CourseCard } from '@/widgets/CourseCard'
import { HOME_POPULAR_COURSES } from '@/shared/config/content'
import 'swiper/swiper-bundle.css'
import {TariffSelectionModal} from "@/features/cart";

interface PopularCoursesSectionProps {
    title?: string
    titleHighlight?: string
}

export const PopularCoursesSection = ({
                                          title = HOME_POPULAR_COURSES.title,
                                          titleHighlight = HOME_POPULAR_COURSES.titleHighlight
                                      }: PopularCoursesSectionProps) => {
    const swiperRef = useRef<SwiperType | null>(null)

    const [selectedCourse, setSelectedCourse] = useState<{
        id: string
        title: string
        coverUrl: string
    } | null>(null)

    const handleAddToCart = (id: string, title: string, coverUrl: string) => {
        setSelectedCourse({id, title, coverUrl})
    }

    return (
        <section className="section-card-padding top">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div data-w-id="f402fcd4-a56b-275f-aeb1-72593824ca6a" className="inner-container _704px center-tablet">
                            <div className="center-content---tablet">
                                <h2 className="display-9">
                                    {title}{' '}
                                    <span className="heading-gradient">{titleHighlight}</span>
                                </h2>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="popular-courses-nav-buttons" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                            <div className="secondary-button-icon large popular-courses-prev">
                                <div className="custom-icon-font">
                                    <img src="/assets/webflow/images/arrow-left_black.svg" alt="left-arrow"/>
                                </div>
                            </div>
                            <div className="secondary-button-icon large popular-courses-next">
                                <div className="custom-icon-font">
                                    <img src="/assets/webflow/images/arrow-right_black.svg" alt="right-arrow"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mg-top-64px">
                    <div className="popular-courses-swiper-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={28}
                            slidesPerView={3}
                            navigation={{
                                prevEl: '.popular-courses-prev',
                                nextEl: '.popular-courses-next',
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 28
                                }
                            }}
                        >
                            {HOME_POPULAR_COURSES.courses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <CourseCard
                                        course={course}
                                        variant="popular-courses"
                                        onAddToCart={() => handleAddToCart(course.id, course.title, course.coverUrl || '')}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
            {selectedCourse && (
                <TariffSelectionModal
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                    courseId={selectedCourse.id}
                    courseTitle={selectedCourse.title}
                    courseCoverUrl={selectedCourse.coverUrl}
                />
            )}
        </section>
    )
}