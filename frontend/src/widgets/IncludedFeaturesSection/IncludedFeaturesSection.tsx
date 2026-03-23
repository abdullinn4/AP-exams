import { HOME_INCLUDED_FEATURES } from '@/shared/config/content'

export const IncludedFeaturesSection = () => {
    return (
        <section className="section">
            <div data-w-id="34843878-4922-e140-fb72-ce72b9457d79" className="w-layout-blockcontainer container-default w-container">
                {/* Заголовок и описание */}
                <div className="inner-container _640px center">
                    <div
                        data-w-id="9dabc3b1-cb78-d347-7c77-5a8b55c31260"
                        className="text-center mg-bottom-40px"
                    >
                        <h2 className="display-6">{HOME_INCLUDED_FEATURES.title}</h2>
                        <div className="mg-top-16px">
                            <p>{HOME_INCLUDED_FEATURES.description}</p>
                        </div>
                    </div>
                </div>

                <div className="section-bg-wrapper">
                    {/* Три мини-карточки */}
                    <div className="grid-3-columns _1-col-tablet mg-bottom-24px">
                        {HOME_INCLUDED_FEATURES.miniCards.map((card) => {
                            return (
                                <div
                                    key={card.id}
                                    className="card"
                                >
                                    <img
                                        src={card.image}
                                        loading="eager"
                                        alt={card.title}
                                        className="width-100"
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Два больших блока */}
                    {HOME_INCLUDED_FEATURES.largeCards.map((card) => {

                        const isImageLeft = card.imagePosition === 'left'

                        return (
                            <div
                                key={card.id}
                                className={`card sales-home---text-and-image ${isImageLeft ? 'image-left' : ''}`}
                            >
                                {isImageLeft && (
                                    <div className="text-and-image-card---image-wrapper">
                                        <img
                                            src={card.image}
                                            loading="eager"
                                            alt={card.title}
                                            className="cover-image"
                                        />
                                    </div>
                                )}

                                <div className="text-and-image-card---text-container">
                                    <img
                                        src={card.icon}
                                        loading="eager"
                                        alt=""
                                        className="max-width-64px mg-bottom-16px"
                                    />
                                    <h2 className="display-5 mg-bottom-8px">{card.title}</h2>
                                    <p className="mg-bottom-24px">{card.description}</p>
                                </div>

                                {!isImageLeft && (
                                    <div className="text-and-image-card---image-wrapper">
                                        <img
                                            src={card.image}
                                            loading="eager"
                                            alt={card.title}
                                            className="cover-image"
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {/* Градиентный фон */}
                    <div className="blur-bg gradient-bg bg-sections-included---home-sales-page"></div>
                </div>

            </div>
        </section>
    )
}