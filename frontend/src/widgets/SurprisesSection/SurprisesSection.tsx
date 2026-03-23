import { HOME_SURPRISES } from '@/shared/config/content'

export const SurprisesSection = () => {
    return (
        <section className="section-card-padding">
            <div data-w-id="19870dc9-2082-ec46-dd5a-7e8dd29abecb" className="section-card home-sales---features-section">
                <div className="w-layout-blockcontainer container-default w-container">
                    {/* Заголовок */}
                    <div
                        className="inner-container _860px center"
                    >
                        <div className="mg-bottom-80px">
                            <h2 className="display-7 text-center">{HOME_SURPRISES.title} <span className="heading-gradient">{HOME_SURPRISES.subtitle}</span></h2>
                        </div>
                    </div>

                    {/* 8 блоков с чередующимся расположением */}
                    {HOME_SURPRISES.blocks.map((block) => {
                        const isImageRight = block.imagePosition === 'right'
                        const gridClass = isImageRight
                            ? 'grid-2-columns surprises-image-right'
                            : 'grid-2-columns surprises-image-left'


                        return (
                            <div key={block.id} className={gridClass}>
                                {/* Если изображение слева */}
                                {!isImageRight && (
                                    <div
                                        className="sales-home---surprises-image-wrapper"
                                    >
                                        <img
                                            src={block.image}
                                            loading="eager"
                                            alt={block.title}
                                        />
                                    </div>
                                )}

                                {/* Текстовый блок */}
                                <div
                                    className="inner-container _472px _100-tablet"
                                >
                                    <h3 className="display-6 mg-bottom-12px">{block.title}</h3>
                                    <p className="mg-bottom-40px mg-bottom-16px-tablet">
                                        {block.description}
                                    </p>

                                </div>

                                {/* Если изображение справа */}
                                {isImageRight && (
                                    <div
                                        className="sales-home---surprises-image-wrapper"
                                    >
                                        <img
                                            src={block.image}
                                            loading="eager"
                                            alt={block.title}
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}