import { LoginForm } from '@/features/auth/ui/LoginForm'
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";

export const SignInPage = () => {


    return (
        <div className="page-wrapper full-page coming-soon-page">
            <section className="section full-page-section sign-in-page">
                {/* Минимальный хэдер со светлым логотипом (на темном фоне) */}
                <Header variant="minimal" theme="light" />

                <div className="mg-top-80px">
                    <div className="w-layout-blockcontainer container-default width-100 z-index-1 w-container">
                        <div className="inner-container _562px center">
                            <div data-w-id="cee90be0-c333-3cde-fd20-bbc440bfd105" className="section-bg-wrapper" >                                <div className="card sign-in-card">
                                    <div className="form _400px center w-form">
                                        <LoginForm />
                                    </div>
                                </div>
                                <div className="blur-bg bg-sign-in-form"></div>
                                <div data-w-id="a8095e3e-c257-a69c-a249-fb5e0231c893" className="image-wrapper float-image-left-01---sign-in-page">
                                    <img src="/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template_1.png" loading="eager" alt="" className="image rotate-120-deg" />
                                </div>
                                <div data-w-id="2a43acf4-c671-724d-d632-c94a182156b9" className="image-wrapper float-image-left-02---sign-in-page">
                                    <img src="/src/assets/webflow/images/circle-figure-courselify-x-webflow-template_1.png" loading="eager" alt="" className="image rotate-120-deg" />
                                </div>
                                <div data-w-id="7be6877b-46d2-65f7-c832-eac14ef4f2f4" className="image-wrapper float-image-left-03---sign-in-page">
                                    <img src="/src/assets/webflow/images/square-figure-courselify-x-webflow-template_1.png" loading="eager" sizes="(max-width: 767px) 25vw, 151.734375px" srcSet="/src/assets/webflow/images/square-figure-courselify-x-webflow-template_1-p-500.png 500w, /src/assets/webflow/images/square-figure-courselify-x-webflow-template_1.png 648w" alt="" className="image rotate-180-deg" />
                                </div>
                                <div data-w-id="48fff09a-e61c-d936-7583-79a7e56a12fd" className="image-wrapper float-image-right-01---sign-in-page">
                                    <img src="/src/assets/webflow/images/square-figure-courselify-x-webflow-template.png" loading="eager" alt="" className="image rotate--120-deg" />
                                </div>
                                <div data-w-id="42cf0a92-f7b4-5eda-81c7-53514bfde820" className="image-wrapper float-image-right-02---sign-in-page">
                                    <img src="/src/assets/webflow/images/circle-figure-courselify-x-webflow-template_1.png" loading="eager" alt="" className="image rotate--120-deg" />
                                </div>
                                <div data-w-id="8952dcae-0365-4e91-89b0-5f158420aa95" className="image-wrapper float-image-right-03---sign-in-page">
                                    <img src="/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template_1.png" loading="eager" alt="" className="image rotate-150-deg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Минимальный футер */}
            <Footer variant="minimal" />
        </div>
    )
}