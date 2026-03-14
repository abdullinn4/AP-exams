import { useState, useEffect, useRef } from 'react'
import {COURSES_DATA} from "@/shared/config/content"

export const CourseSliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [animationType, setAnimationType] = useState<'next' | 'prev' | null>(null)
    const timeoutRef = useRef<number | null>(null)
    const autoPlayRef = useRef<number | null>(null)

    const courses = COURSES_DATA

    const showSlider = (type: 'next' | 'prev') => {
        if (isAnimating) return

        setIsAnimating(true)
        setAnimationType(type)

        if (type === 'next') {
            setCurrentIndex((prev) => (prev + 1) % courses.length)
        } else {
            setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
        }

        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(() => {
            setIsAnimating(false)
            setAnimationType(null)
        }, 450)

        resetAutoPlay()
    }

    const resetAutoPlay = () => {
        if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
        autoPlayRef.current = window.setTimeout(() => {
            showSlider('next')
        }, 7000)
    }

    useEffect(() => {
        resetAutoPlay()
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
            if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
        }
    }, [])

    const getOrderedCourses = () => {
        return [...courses.slice(currentIndex), ...courses.slice(0, currentIndex)]
    }

    const orderedCourses = getOrderedCourses()

    return (
        <section className="section-card-padding top">
            <div className="section-card">
                <div data-w-id="f402fcd4-a56b-275f-aeb1-72593824ca6a" className="w-layout-blockcontainer container-default w-container">
                    <div className="course-slider-header">
                        <h2 className="display-9">
                            Choose your goal — <span className="heading-gradient">and we'll get you there</span>
                        </h2>
                    </div>
                </div>

                <div data-w-id="cc74c954-b469-2eaf-83f0-e544b7ff85cd" className={`slider ${animationType || ''}`}>
                    <div className="mainslides">
                        {orderedCourses.map((course, index) => (
                            <div key={course.id} className="block" style={{ zIndex: index === 0 ? 1 : 0 }}>
                                <img src={course.image} alt={course.title} />
                                <div className="content">
                                    <div className="title">{course.title}</div>
                                    <div className="description">{course.description}</div>
                                    <div className="buttons">
                                        <button
                                            className="button-primary w-inline-block"
                                            onClick={() => window.location.href = `/courses/${course.slug}/preview`}
                                        >
                                            <div className="text-block">Explore Course</div>
                                            <div className="item-icon-right">
                                                <div className="custom-icon-font"></div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cards">
                        {orderedCourses.slice(1).map((course) => (
                            <div
                                key={course.id}
                                className="block"
                                onClick={() => window.location.href = `/courses/${course.slug}/preview`}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={course.image} alt={course.title} />
                                <div className="content">
                                    <div className="title">{course.shortTitle}</div>
                                    <div className="buttons">
                                        <button
                                            className="button-secondary-white w-inline-block"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                window.location.href = `/courses/${course.slug}/preview`
                                            }}
                                        >
                                            <div className="text-block">
                                                View
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="nav">
                        <button
                            className="secondary-button-icon"
                            onClick={() => showSlider('prev')}
                            disabled={isAnimating}
                        >
                            <div className="custom-icon-font">
                                <img src="/assets/webflow/images/arrow-left_black.svg" alt="left-arrow"/>
                            </div>
                        </button>
                        <button
                            className="secondary-button-icon"
                            onClick={() => showSlider('next')}
                            disabled={isAnimating}
                        >
                            <div className="custom-icon-font">
                                <img src="/assets/webflow/images/arrow-right_black.svg" alt="right-arrow"/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}