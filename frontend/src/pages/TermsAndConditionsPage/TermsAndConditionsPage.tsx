import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { MarkdownRenderer } from '@/widgets/MarkdownRenderer'
import termsOfServiceMd from '@/shared/config/content/legal/terms-of-service.md?raw'
import privacyPolicyMd from '@/shared/config/content/legal/privacy-policy.md?raw'
import refundPolicyMd from '@/shared/config/content/legal/refund-policy.md?raw'

export const TermsAndConditionsPage = () => {
    return (
        <div className="page-wrapper">
            <Header />

            {/* Content Section */}
            <section>
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="grid-2-columns template-page-sidebar">
                        {/* Sidebar Navigation */}
                        <div className="card template-pages---sticky-card">
                            <ul role="list" className="template-pages---sidebar-navigation w-list-unstyled">
                                <li className="template-pages---nav-item-wrapper">
                                    <a href="#terms-of-service" className="template-pages---nav-item-link">
                                        Terms of Service
                                    </a>
                                </li>
                                <li className="template-pages---nav-item-wrapper">
                                    <a href="#privacy-policy" className="template-pages---nav-item-link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="template-pages---nav-item-wrapper">
                                    <a href="#refund-policy" className="template-pages---nav-item-link">
                                        Refund Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Main Content */}
                        <div className="card template-pages---text-card">
                            {/* Terms of Service */}
                            <div id="terms-of-service" className="pd-top-24px">
                                <h2 className="mg-bottom-16px">Terms of Service for Smash AP</h2>
                                <MarkdownRenderer content={termsOfServiceMd} />
                            </div>

                            <div className="divider _64px---40px"></div>

                            {/* Privacy Policy */}
                            <div id="privacy-policy" className="pd-top-24px">
                                <h2 className="mg-bottom-16px">Privacy Policy for Smash AP</h2>
                                <MarkdownRenderer content={privacyPolicyMd} />
                            </div>

                            <div className="divider _64px---40px"></div>

                            {/* Refund Policy */}
                            <div id="refund-policy" className="pd-top-24px">
                                <h2 className="mg-bottom-16px">Refund Policy for Smash AP</h2>
                                <MarkdownRenderer content={refundPolicyMd} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}