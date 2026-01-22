import { Link } from 'react-router-dom'

export const MeetCEOSection = () => {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="w-layout-grid grid-2-columns about-grid---home-v1">
                    <div data-w-id="174cc1dd-b481-b118-43b3-746088e6d3bd" className="image-wrapper">
                        <img 
                            src="/src/assets/webflow/images/meet-andy-smith-image-courselify-x-webflow-template.jpg" 
                            loading="eager" 
                            alt="Meet Andy Smith" 
                            className="image"
                        />
                    </div>
                    <div data-w-id="cc74c954-b469-2eaf-83f0-e544b7ff85cd" className="inner-container _516px _100-tablet">
                        <h2 className="display-9">Meet <span className="heading-gradient">Andy Smith</span></h2>
                        <div className="mg-top-16px">
                            <p>Lorem ipsum dolor sit amet consectetur dictum interdum ut orci elit cras in proin arcu mauris blandit diam velit viverra odio donec bibendum vel a in justo consequat lorem vivamus dolor neque eu purus purus sodales.</p>
                        </div>
                        <div className="mg-top-16px mg-top-8px-tablet">
                            <p>Viverra sit quis id justo placerat vestibulum venenatis nulla semper metus proin eleifend suspendisse mattis. Aliquet.</p>
                        </div>
                        <div className="mg-top-48px mg-top-24px-tablet">
                            <div className="buttons-row left">
                                <Link to="/about" className="secondary-button w-inline-block">
                                    <div className="text-block">More about me</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
