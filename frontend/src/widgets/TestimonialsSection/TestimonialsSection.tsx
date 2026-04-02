import { HOME_TESTIMONIALS } from '@/shared/config/content'
import { Link } from "react-router-dom"
import {ROUTES} from "@/app/router/routes.ts";

export const TestimonialsSection = () => {
    return (
        <section className="section-card-padding top">
            <div data-w-id="f402fcd4-a56b-275f-aeb1-72593824ca6a" className="section-card testimonial-section---home-v2-purple" style={{paddingBottom: '10rem'}}>
                <div className="w-layout-blockcontainer container-default width-100 w-container">
                    <div data-w-id="ef77529f-1336-8fb1-c66b-8948ce1e97d7" className="title-left---content-right">
                        <div className="inner-container _704px _100-tablet">
                            <h2 className="display-9 text-neutral-100">
                                {HOME_TESTIMONIALS.title}{' '}
                                <span className="heading-gradient">{HOME_TESTIMONIALS.titleHighlight}</span>
                            </h2>
                        </div>
                        <Link to={ROUTES.CATALOG}
                            className="button-primary white w-inline-block"
                        >
                            <div className="text-block">Start learning</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="testimonial-cards-wrapper---home-v2">
                    <div data-w-id="728df94a-b0ea-f0dd-a73f-a243fc93e0df" className="image-container testimonial-image---home-v2">
                        <img
                            src="/assets/webflow/images/what-students-saying-about-the-courses-image-courselify-x-webflow-template.png"
                            loading="eager"
                            alt="Student testimonials background"
                            className="image"
                        />
                    </div>
                    {HOME_TESTIMONIALS.items.map((testimonial, idx) => {

                        return (
                            <div
                                key={idx}
                                className={`testimonial-card-v2-wrapper _0${idx + 1}`}
                            >
                                <div className="card testimonial-card-v2">
                                    <div className="testimonial-card-v2---text" style={{fontSize: '13px', lineHeight: '1.5', fontWeight: '500'}}>"{testimonial.quote}"</div>
                                    <div>
                                        <div className="display-1 bold text-neutral-800 ">{testimonial.name}</div>
                                        <div className="display-1 text-neutral-800 ">{testimonial.grade}</div>
                                        <div className="testimonial-card-v2---details-text">{testimonial.position}</div>
                                    </div>
                                </div>
                                <div className="testimonial-card-v2---avatar-wrapper">
                                    <img
                                        src={testimonial.avatar}
                                        loading="eager"
                                        alt={`${testimonial.name} Avatar`}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}