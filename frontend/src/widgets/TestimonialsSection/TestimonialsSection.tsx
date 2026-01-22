export const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Transformed my web design skills completely",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "John Carter",
            position: "Marketing Lead at Company",
            avatar: "/src/assets/webflow/images/john-carter-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "Incredible course, highly recommend to anyone!",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sophie Moore",
            position: "Head of Design at StartUp",
            avatar: "/src/assets/webflow/images/sophie-moore-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "The best investment I've made for my career.",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Matt Cannon",
            position: "Marketing Lead at Business",
            avatar: "/src/assets/webflow/images/matt-cannon-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "It gave me the confidence to design websites",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sandy Houston",
            position: "Growth Marketer at Agency",
            avatar: "/src/assets/webflow/images/sandy-houston-avatar-courselify-x-webflow-template.jpg"
        }
    ]

    return (
        <section className="section-card-padding">
            <div className="section-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div data-w-id="f402fcd4-a56b-275f-aeb1-72593824ca6a" className="inner-container _704px center-tablet">
                        <div className="center-content---tablet">
                            <h2 className="display-9">What are students saying <span className="heading-gradient">about the course</span></h2>
                        </div>
                    </div>
                    <div className="mg-top-64px">
                        <div data-delay="4000" data-animation="slide" className="slider-wrapper testimonial-v1 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-w-id="ef77529f-1336-8fb1-c66b-8948ce1e97d7" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                            <div className="slider-mask testimonial-slider-v1 w-slider-mask">
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="mg-right-28px w-slide">
                                        <div className="card testimonial-card-v1">
                                            <div className="inner-container _280px">
                                                <h3 className="display-3">"{testimonial.quote}"</h3>
                                            </div>
                                            <div className="mg-top-16px">
                                                <p>{testimonial.text}</p>
                                            </div>
                                            <div className="mg-top-24px">
                                                <div className="testimonial-bottom-content-v1">
                                                    <div className="avatar-wrapper _80px">
                                                        <img src={testimonial.avatar} alt={`${testimonial.name} Avatar`} className="avatar-image circle" />
                                                    </div>
                                                    <div>
                                                        <div className="display-2 bold text-neutral-800">{testimonial.name}</div>
                                                        <div className="mg-top-12px">
                                                            <div className="display-2">{testimonial.position}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="secondary-button-icon large slider-button-left---top-right w-slider-arrow-left">
                                <div className="custom-icon-font"></div>
                            </div>
                            <div className="secondary-button-icon large slider-button-right---top-right w-slider-arrow-right">
                                <div className="custom-icon-font"></div>
                            </div>
                            <div className="hidden w-slider-nav w-round w-num"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
