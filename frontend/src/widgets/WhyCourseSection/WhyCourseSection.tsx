import { Link } from 'react-router-dom'

export const WhyCourseSection = () => {
    return (
        <section className="section-card-padding">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div data-w-id="3d388a41-0fb9-3d4a-6162-054e74091a48" className="stats-top-content-grid">
                        <h2 className="display-9">Why this <span className="heading-gradient">course?</span></h2>
                        <div className="mg-top-16px-tablet">
                            <Link to="/pricing" className="button-primary w-inline-block">
                                <div className="text-block">Start learning</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.</p>
                    </div>
                    <div className="w-layout-grid grid-2-columns stats-grid-wrapper---home-v1">
                        <div data-w-id="0a90b4e8-7a1e-2305-bd6a-ed7d223593fb" className="image-wrapper video-bg-image-wrapper">
                            <img 
                                src="/src/assets/webflow/images/why-this-course-image-courselify-x-webflow-template.jpg" 
                                loading="eager" 
                                alt="Why this Course" 
                                className="video-bg-image"
                            />
                            <div className="bg-overlay">
                                <a href="#" className="lightbox-video-icon-wrapper w-inline-block w-lightbox">
                                    <img src="/src/assets/webflow/images/play-button-courselify-x-webflow-template.svg" loading="eager" alt="Play Button" className="play-button-image" />
                                </a>
                            </div>
                        </div>
                        <div data-w-id="99cfc867-4269-c8a4-a611-afe3e06388c3" className="grid-1-column gap-row-28px gap-row-16px-tablet">
                            <div className="stat-row---home-v1">
                                <div className="card stat-card-v1">
                                    <div className="display-9 bold text-neutral-800">80<span className="text-color-primary-1">+</span></div>
                                    <div>Lessons</div>
                                </div>
                                <div className="card stat-card-v1">
                                    <div className="display-9 bold text-neutral-800">2,000<span className="text-color-primary-1">+</span></div>
                                    <div>Critic videos</div>
                                </div>
                            </div>
                            <div className="stat-row---home-v1 bottom">
                                <div className="card stat-card-v1">
                                    <div className="display-9 bold text-neutral-800">3,500<span className="text-color-primary-1">+</span></div>
                                    <div>Community members</div>
                                </div>
                                <div className="card stat-card-v1">
                                    <div className="display-9 bold text-neutral-800">40<span className="text-color-primary-1">+</span></div>
                                    <div>Hours of content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
