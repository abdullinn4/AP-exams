import { Link } from 'react-router-dom'
import { HOME_WHY_COURSE } from '@/shared/config/content'
import {ROUTES} from "@/app/router/routes.ts";

export const WhyCourseSection = () => {
    return (
        <section id="why-course-section" className="section">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div data-w-id="3d388a41-0fb9-3d4a-6162-054e74091a48" className="stats-top-content-grid">
                        <h2 className="display-9">{HOME_WHY_COURSE.title} <span className="heading-gradient">{HOME_WHY_COURSE.titleHighlight}</span></h2>
                        <div className="mg-top-16px-tablet">
                            <Link to={ROUTES.CATALOG} className="button-primary w-inline-block">
                                <div className="text-block">{HOME_WHY_COURSE.ctaText}</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </Link>
                        </div>
                        <p>{HOME_WHY_COURSE.description1}</p>
                        <p>{HOME_WHY_COURSE.description2}</p>
                    </div>
                    <div className="w-layout-grid grid-2-columns stats-grid-wrapper---home-v1">
                        <div data-w-id="0a90b4e8-7a1e-2305-bd6a-ed7d223593fb" className="image-wrapper video-bg-image-wrapper">
                            <video
                                src={HOME_WHY_COURSE.videoImage}
                                className="video-bg-image"
                                controls
                            />
                        </div>
                        <div data-w-id="99cfc867-4269-c8a4-a611-afe3e06388c3" className="grid-1-column gap-row-28px gap-row-16px-tablet">
                            <div className="stat-row---home-v1">
                                {HOME_WHY_COURSE.stats.slice(0, 2).map((stat, idx) => (
                                    <div key={idx} className="card stat-card-v1">
                                        <div className="display-9 bold text-neutral-800">{stat.value}<span className="text-color-primary-1">{stat.suffix}</span></div>
                                        <div className="display-5 text-neutral-800">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="stat-row---home-v1 bottom">
                                {HOME_WHY_COURSE.stats.slice(2, 4).map((stat, idx) => (
                                    <div key={idx} className="card stat-card-v1">
                                        <div className="display-9 bold text-neutral-800">{stat.value}<span className="text-color-primary-1">{stat.suffix}</span></div>
                                        <div className="display-4 text-neutral-800">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
