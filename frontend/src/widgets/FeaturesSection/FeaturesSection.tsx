import { Link } from 'react-router-dom'

export const FeaturesSection = () => {
    const features = [
        {
            icon: '/src/assets/webflow/images/beginner-friendly-icon-courselify-webflow-ecommerce-template.png',
            title: 'Beginner friendly',
            description: 'Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.',
            maxWidth: 'max-width-92px'
        },
        {
            icon: '/src/assets/webflow/images/amazing-community-icon-courselify-webflow-ecommerce-template.png',
            title: 'Amazing community',
            description: 'Neque euismod massa libero rutrum pulvinar faucibus dis massa curabitur dolor sed risus nec tincidunt eget id accumsan suspendisse sagittis phasellus nibh quam nec volutpat.',
            maxWidth: 'max-width-102px'
        },
        {
            icon: '/src/assets/webflow/images/live-streams-icon-courselify-webflow-ecommerce-template.png',
            title: 'Weekly Q&A live streams',
            description: 'Neque euismod massa libero rutrum pulvinar faucibus dis massa curabitur dolor sed risus nec tincidunt eget id accumsan suspendisse sagittis phasellus nibh quam nec volutpat.',
            maxWidth: 'max-width-116px'
        },
        {
            icon: '/src/assets/webflow/images/free-resources-icon-courselify-webflow-ecommerce-template.png',
            title: '1,000+ free resources',
            description: 'Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.',
            maxWidth: 'max-width-124px'
        }
    ]

    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="1247ceeb-1829-6c2e-4abc-6c47ef4a0671" className="text-center">
                    <h2 className="display-9">Is this course <span className="heading-gradient">for you?</span></h2>
                    <div className="inner-container _528px center">
                        <div className="mg-top-16px">
                            <p>Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div data-w-id="d86e9d98-6635-a5e6-f0aa-e4b22e00a144" className="features-wrapper---home-v1">
                        <div className="w-layout-grid features-grid---home-v1">
                            <div className="w-layout-grid feature-grid-row---home-v1">
                                {features.slice(0, 2).map((feature, idx) => (
                                    <div key={idx} data-w-id={`feature-${idx}`} className="card feature-card-v1">
                                        <img src={feature.icon} loading="eager" alt={feature.title} className={feature.maxWidth} />
                                        <div className="mg-top-24px">
                                            <h3 className="display-5">{feature.title}</h3>
                                        </div>
                                        <div className="mg-top-16px">
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-layout-grid feature-grid-row---home-v1 bottom">
                                {features.slice(2, 4).map((feature, idx) => (
                                    <div key={idx + 2} data-w-id={`feature-${idx + 2}`} className="card feature-card-v1">
                                        <img src={feature.icon} loading="eager" alt={feature.title} className={feature.maxWidth} />
                                        <div className="mg-top-24px">
                                            <h3 className="display-5">{feature.title}</h3>
                                        </div>
                                        <div className="mg-top-16px">
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blur-bg gradient-bg"></div>
                    </div>
                </div>
                <div className="mg-top-48px">
                    <div data-w-id="95d11aef-03a2-85bc-d687-0d0fc34eb359" className="buttons-row">
                        <Link to="/pricing" className="button-primary w-inline-block">
                            <div className="text-block">Start learning</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
