import { Link } from 'react-router-dom'
import {Fragment} from "react";
import { HOME_CHAPTERS } from '@/shared/config/content'

export const ChaptersSection = () => {


    return (
        <section id="chapters" className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="34843878-4922-e140-fb72-ce72b9457d79" className="inner-container _585px center">
                    <div className="text-center">
                        <h2 className="display-9">{HOME_CHAPTERS.title} <span className="heading-gradient">{HOME_CHAPTERS.titleHighlight}</span></h2>
                        <div className="mg-top-16px">
                            <p>{HOME_CHAPTERS.description}</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div className="section-bg-wrapper">
                        <div className="w-layout-grid grid-3-columns chapters-grid v1">
                            {HOME_CHAPTERS.items.map((chapter) => (
                                <div key={chapter.id} data-w-id={chapter.wId} className={`card chapter-card-v1 ${chapter.className}`}>
                                    <div>
                                        <div className="image-wrapper chapter-image-wrapper">
                                            <img src={chapter.icon} loading="eager" alt={`${chapter.title} Icon`} className="max-width-122px width-100" />
                                        </div>
                                        <div className="mg-top-40px">
                                            <h3 className="display-5">{chapter.title}</h3>
                                        </div>
                                        <div className="mg-top-8px">
                                            <p>{chapter.description}</p>
                                        </div>
                                        <div className="mg-top-32px">
                                            <div className="w-layout-grid grid-1-column gap-row-24px">
                                                {chapter.lessons.map((lesson, idx) => (
                                                    <Fragment key={idx}>
                                                        <Link to="/lesson" className="link medium">
                                                            {lesson}
                                                        </Link>
                                                        {idx < chapter.lessons.length - 1 && (
                                                            <div className="divider bg-neutral-300"></div>
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mg-top-40px">
                                        <Link to="/chapter" className="secondary-button w-inline-block">
                                            <div className="text-block">Learn more</div>
                                        </Link>
                                    </div>
                                    <div className="chapter-badge-wrapper">
                                        <div className="badge secondary">
                                            <div>{chapter.lessonsCount} Lessons</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="blur-bg gradient-bg bg-chapters-section"></div>
                    </div>
                </div>
                <div className="mg-top-16px">
                    <address data-w-id="5870b1da-1e6f-e24f-1eb7-df49b3bd71f3" className="buttons-row">
                        <Link to="/pricing" className="button-primary w-inline-block">
                            <div className="text-block">{HOME_CHAPTERS.ctaPrimary}</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                        <Link to="/chapters" className="secondary-button w-inline-block">
                            <div className="text-block">{HOME_CHAPTERS.ctaSecondary}</div>
                        </Link>
                    </address>
                </div>
            </div>
        </section>
    )
}
