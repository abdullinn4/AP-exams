import { Link } from 'react-router-dom'
import { HOME_FAQ } from '@/shared/config/content'

export const FinalCTASection = () => {
    return (
        <section className="section-card-padding">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div data-w-id="ce63cfa8-00b3-0766-ede8-8f40b1a913ac" className="title-left---content-right center">
                        <div className="inner-container _525px _100-tablet">
                            <h2 className="display-9"><span className="heading-gradient">{HOME_FAQ.title}</span> {HOME_FAQ.titleHighlight}</h2>
                        </div>
                        <Link to="/pricing" className="button-primary w-inline-block">
                            <div className="text-block">{HOME_FAQ.ctaText}</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                    </div>
                    <div data-w-id="a0917a0e-c191-9bf5-db91-46dd46ea0fe6" className="mg-top-40px mg-top-64px-tablet">
                        <div className="w-layout-grid grid-2-columns faq-v1-grid">
                            {HOME_FAQ.items.map((faq, idx) => {
                                const positions = ['', 'top-right', 'bottom-left', 'bottom-right']
                                const isFirstColumn = idx % 2 === 0
                                return (
                                    <div key={idx} className={`faqs-item-padding ${positions[idx]}`}>
                                        {isFirstColumn ? (
                                            <>
                                                <h3 className="display-5">{faq.question}</h3>
                                                <div className="inner-container _528px _100-tablet">
                                                    <p className="mg-top-16px">{faq.answer}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="inner-container _528px _100-tablet">
                                                <h3 className="display-5">{faq.question}</h3>
                                                <p className="mg-top-16px">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
