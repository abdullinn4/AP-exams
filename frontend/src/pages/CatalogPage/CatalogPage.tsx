import { Link } from 'react-router-dom'
import { useState } from "react"
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { CTAFooterBlock } from '@/widgets/CTAFooterBlock'
import { CATALOG_HEADER, CATALOG_COURSES } from '@/shared/config/content'
import { TariffSelectionModal } from "@/features/cart"

export const CatalogPage = () => {
    const [selectedCourse, setSelectedCourse] = useState<{
        id: string
        title: string
        coverUrl: string
    } | null>(null)

    return (
        <div className="page-wrapper">
            <Header />

            <section className="section top">
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
                            {CATALOG_HEADER.title} <span className="heading-gradient">{CATALOG_HEADER.titleHighlight}</span>
                        </h2>
                        <div className="inner-container _704px center">
                            <div className="mg-top-16px">
                                <p>{CATALOG_HEADER.description}</p>
                            </div>
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
                                {CATALOG_COURSES.items.map((course) => (
                                    <div
                                        key={course.id}
                                        data-w-id={course.wId}
                                        className={`card project-card ${course.className}`}
                                    >
                                        <div className="image-wrapper border-radius-32px overflow-hidden">
                                            <img
                                                src={course.coverUrl}
                                                loading="eager"
                                                sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1439px) 31vw, 404px"
                                                srcSet={`${course.coverUrl.replace('.jpg', '-p-500.jpg')} 500w, ${course.coverUrl.replace('.jpg', '-p-800.jpg')} 800w, ${course.coverUrl} 1212w`}
                                                alt={`${course.title} - Course Cover`}
                                                className="image"
                                            />
                                        </div>
                                        <div className="project-card-bottom-content">
                                            <h3 className="display-5">{course.title}</h3>
                                            <div className="mg-top-16px">
                                                <p>{course.snippet}</p>
                                            </div>
                                            <div className="mg-top-24px">
                                                <div className="buttons-row left">
                                                    <button
                                                        onClick={() => setSelectedCourse({
                                                            id: course.id,
                                                            title: course.title,
                                                            coverUrl: course.coverUrl
                                                        })}
                                                        className="button-primary w-inline-block"
                                                    >
                                                        <div className="text-block">Add to Cart</div>
                                                        <div className="item-icon-right">
                                                            <div className="custom-icon-font"></div>
                                                        </div>
                                                    </button>
                                                    <Link to={`/courses/${course.id}`} className="link-wrapper w-inline-block">
                                                        <div className="display-2 bold text-neutral-800">
                                                            <div className="flex y-align-center">
                                                                <div>View Course</div>
                                                                <div className="item-icon-right">
                                                                    <div className="icon-font-squared"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blur-bg gradient-bg bg-projects"></div>
                    </div>
                </div>
            </section>

            {/* Модалка вынесена за пределы map */}
            {selectedCourse && (
                <TariffSelectionModal
                    isOpen={!!selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                    courseId={selectedCourse.id}
                    courseTitle={selectedCourse.title}
                    courseCoverUrl={selectedCourse.coverUrl}
                />
            )}

            <footer className="footer-wrapper">
                <div data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-card">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <CTAFooterBlock />
                    </div>
                </div>
            </footer>

            <Footer />
        </div>
    )
}