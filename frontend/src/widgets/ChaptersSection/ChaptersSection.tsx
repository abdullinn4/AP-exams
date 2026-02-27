import {HOME_CHAPTERS} from "@/shared/config/content";

export const ChaptersSection = () => {
    return (
        <section id="chapters" className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="34843878-4922-e140-fb72-ce72b9457d79" className="inner-container _585px center">
                    <div className="text-center">
                        <h2 className="display-9">{HOME_CHAPTERS.title} <span
                            className="heading-gradient">{HOME_CHAPTERS.titleHighlight}</span></h2>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div className="section-bg-wrapper">
                        <div className="w-layout-grid grid-3-columns chapters-grid v1">
                            {HOME_CHAPTERS.items.map((chapter) => (
                                <div key={chapter.id} data-w-id={chapter.wId}
                                     className={`card chapter-card-v1 chapter-card-square ${chapter.className}`}>
                                    {chapter.type === 'text' ? (
                                        <div>
                                            {chapter.icon && (
                                                <div className="image-wrapper chapter-image-wrapper">
                                                    <img src={chapter.icon} loading="eager" alt={`${chapter.title} Icon`}
                                                         className="chapter-icon-large"/>
                                                </div>
                                            )}
                                            <div className="mg-top-40px">
                                                <h3 className="display-4">{chapter.title}</h3>
                                            </div>
                                        </div>
                                    ) : chapter.type === 'video' ? (
                                        <video
                                            src={chapter.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="chapter-media-fill"
                                        />
                                    ) : (
                                        <img
                                            src={chapter.image}
                                            loading="eager"
                                            alt="Chapter visual"
                                            className="chapter-media-fill"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="blur-bg gradient-bg bg-chapters-section"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}