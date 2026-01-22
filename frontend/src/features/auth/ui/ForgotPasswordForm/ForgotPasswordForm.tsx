import {useForgotPasswordMutation} from "@/shared/api/authApi.ts";
import {type FormEvent, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";

interface ForgotPasswordFormProps {
    onSuccess?: () => void
}

export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
    const [forgotPassword] = useForgotPasswordMutation()

    const emailRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        const email = emailRef.current?.value || ''

        try{
            await forgotPassword({email}).unwrap()
            onSuccess?.()
        }catch (error: any){
            setError(error?.data?.message || 'Failed to send reset password email')
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-wrapper inside-input">
            {error && (
                <div className="mg-bottom-24px">
                    <div className="error-message-wrapper" style={{ display: 'block' }}>
                        <div>{error}</div>
                    </div>
                </div>
            )}

            <div className="input-wrapper">
                <input
                    className="input w-input"
                    placeholder="Enter your email address"
                    ref={emailRef}
                    type="email"
                    required
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="button-primary inside-button w-button"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Enter now'}
                </button>
            </div>

            <div className="mg-top-32px">
                <div className="text-center">
                    <div className="mg-top-24px">
                        <div className="display-2">
                            <Link to={ROUTES.SIGN_IN} className="text-link semi-bold text-decoration-none">
                                Back to Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}