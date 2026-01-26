import { Link } from 'react-router-dom'
import { HOME_MEET_CEO } from '@/shared/config/content'

export const MeetCEOSection = () => {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="w-layout-grid grid-2-columns about-grid---home-v1">
                    <div data-w-id="174cc1dd-b481-b118-43b3-746088e6d3bd" className="image-wrapper">
                        <img 
                            src={HOME_MEET_CEO.image} 
                            loading="eager" 
                            alt="Meet Andy Smith" 
                            className="image"
                        />
                    </div>
                    <div data-w-id="cc74c954-b469-2eaf-83f0-e544b7ff85cd" className="inner-container _516px _100-tablet">
                        <h2 className="display-9">{HOME_MEET_CEO.title} <span className="heading-gradient">{HOME_MEET_CEO.titleHighlight}</span></h2>
                        <div className="mg-top-16px">
                            <p>{HOME_MEET_CEO.description1}</p>
                        </div>
                        <div className="mg-top-16px mg-top-8px-tablet">
                            <p>{HOME_MEET_CEO.description2}</p>
                        </div>
                        <div className="mg-top-48px mg-top-24px-tablet">
                            <div className="buttons-row left">
                                <Link to="/about" className="secondary-button w-inline-block">
                                    <div className="text-block">{HOME_MEET_CEO.ctaText}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
