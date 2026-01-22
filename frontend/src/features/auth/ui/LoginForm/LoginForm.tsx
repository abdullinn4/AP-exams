import {useAuth} from "@/features/auth/model/useAuth.ts";
import {type FormEvent, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";
import type {LoginRequest} from "@/entities/users/auth/auth.ts";

export const LoginForm = () => {
    const { login } = useAuth()

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        const email = emailRef.current?.value || ''
        const password = passwordRef.current?.value || ''

        const loginRequest: LoginRequest = {
            email,
            password
        }

        const result = await login(loginRequest)

        if (!result.success) {
            setError(result.error || 'Login failed')
        }

        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="form-wrapper sign-in-form">
            <div className="flex-vertical text-center">
                <h1 className="display-6">Log into your account</h1>
                <div className="mg-top-12px">
                    <p>Welcome back! Please enter your credentials.</p>
                </div>
            </div>

            {error && (
                <div className="mg-top-24px">
                    <div className="error-message-wrapper" style={{ display: 'block' }}>
                        <div>{error}</div>
                    </div>
                </div>
            )}

            <div className="mg-top-24px">
                <div className="w-layout-grid grid-1-column sign-in-grid">

                <input
                    className="input w-input"
                    ref={emailRef}
                    placeholder="Enter your email address"
                    type="email"
                    required
                    disabled={isLoading}
                />
                <input
                    className="input w-input"
                    ref={passwordRef}
                    placeholder="Enter your password"
                    type="password"
                    required
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="button-primary w-button"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Log in'}
                </button>
                </div>
            </div>
            <div className="mg-top-32px">
                <div className="text-center">
                    <div className="mg-top-24px">
                        <div className="display-2">
                            <Link to={ROUTES.FORGOT_PASSWORD} className="text-link semi-bold text-decoration-none">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}