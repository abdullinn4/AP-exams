import { Link } from 'react-router-dom'

export const PricingSection = () => {
    const plans = [
        {
            name: "Basic",
            icon: "/src/assets/webflow/images/basic-plan-icon-courselify-webflow-ecommerce-template.png",
            description: "Perfect for beginners who want to start learning web design",
            price: "$49",
            features: [
                "Access to all basic lessons",
                "Community forum access",
                "Monthly Q&A sessions",
                "Certificate of completion",
                "Lifetime access"
            ]
        },
        {
            name: "Pro",
            icon: "/src/assets/webflow/images/pro-plan-icon-courselify-webflow-ecommerce-template.png",
            description: "For serious learners who want the complete experience",
            price: "$99",
            features: [
                "Everything in Basic",
                "1-on-1 mentorship sessions",
                "Advanced lessons & critiques",
                "Priority support",
                "Exclusive resources library",
                "Job placement assistance"
            ],
            featured: true
        }
    ]

    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="9e898e90-7c6e-18e6-7bea-3465030fade7" className="text-center">
                    <h2 className="display-9">Pricing plans <span className="heading-gradient">for you</span></h2>
                    <div className="mg-top-16px">
                        <div className="inner-container _528px center">
                            <p>Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div className="section-bg-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="grid-2-columns pricing-grid w-dyn-items">
                                {plans.map((plan, idx) => (
                                    <div key={idx} role="listitem" className="w-dyn-item">
                                        <div data-w-id="9cc40930-7fef-a5d8-ac6b-b4d06d1f538b" className={`card pricing-card-v1 ${plan.featured ? 'featured' : ''}`}>
                                            <div className="pricing-card-content-wrapper">
                                                <div>
                                                    <div className="image-wrapper pricing-card-image">
                                                        <img alt={`${plan.name} Plan`} loading="eager" src={plan.icon} className="width-100" />
                                                    </div>
                                                    <div className="mg-top-16px">
                                                        <h3 className="display-5">{plan.name}</h3>
                                                    </div>
                                                    <div className="mg-top-8px">
                                                        <p>{plan.description}</p>
                                                    </div>
                                                    <div className="mg-top-32px">
                                                        <div className="w-layout-grid grid-1-column gap-row-16px">
                                                            {plan.features.map((feature, featureIdx) => (
                                                                <div key={featureIdx} className="pricing-feature-wrapper v1">
                                                                    <div className="check-icon"></div>
                                                                    <div className="list-item---text-margin">{feature}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mg-top-40px">
                                                    <div className="pricing-bottom-wrapper v1">
                                                        <div className="pricing-price-wrapper">
                                                            <div className="display-8 bold text-neutral-800">{plan.price}</div>
                                                            <div className="display-2 text-neutral-600">/ one-time</div>
                                                        </div>
                                                        <Link to="/pricing" className="button-primary full-width w-inline-block">
                                                            <div className="text-block">Get started</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blur-bg gradient-bg"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
