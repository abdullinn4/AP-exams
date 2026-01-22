import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ForgotPasswordForm } from '@/features/auth/ui/ForgotPasswordForm'
import { ROUTES } from '@/app/router/routes'
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";

export const ForgotPasswordPage = () => {
    const [success, setSuccess] = useState(false)

    if (success) {
        return (
            <div className="page-wrapper full-page">
                {/* Минимальный хэдер с темным логотипом (на светлом фоне) */}
                <Header variant="minimal" theme="dark" />

                <section className="section full-page-section">
                    <div className="w-layout-blockcontainer container-default width-100 w-container">
                        <div className="inner-container _516px center">
                            <div className="card reset-password-card">
                                <div className="flex-vertical text-center">
                                    <h1 className="display-5">Check your email</h1>
                                    <div className="mg-top-12px">
                                        <p>We've sent a new password to your email address.</p>
                                    </div>
                                </div>
                                <div className="mg-top-32px">
                                    <Link to={ROUTES.SIGN_IN} className="button-primary w-button" style={{ textAlign: 'center', display: 'block' }}>
                                        Back to Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer variant="minimal" />
            </div>
        )
    }

    return (
        <div className="page-wrapper full-page">
            <Header variant="minimal" theme="dark" />

            <section className="section full-page-section">
                <div className="w-layout-blockcontainer container-default width-100 w-container">
                    <div className="inner-container _516px center">
                        <div data-w-id="c36fa34f-8149-2d93-e1cd-d449bf7f246c" className="card reset-password-card">                            <div className="flex-vertical text-center">
                                <div className="image-wrapper reset-password-image">
                                    <img
                                        src="/src/assets/webflow/images/reset-password-courselify-x-webflow-template.png"
                                        loading="eager"
                                        alt="Reset Password Icon - Courselify X Webflow Template"
                                        className="image"
                                    />
                                </div>
                                <div className="mg-top-24px">
                                    <h1 className="display-5">Reset your password</h1>
                                </div>
                                <div className="mg-top-12px">
                                    <p>Enter your email and we'll send you a new password.</p>
                                </div>
                            </div>

                            <div className="mg-top-32px">
                                <div className="form w-form">
                                    <ForgotPasswordForm onSuccess={() => setSuccess(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="minimal" />
        </div>
    )
}