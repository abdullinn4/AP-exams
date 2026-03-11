import {type CheckoutFormData} from "@/features/checkout/lib/checkoutSchema.ts";
import {useFormContext} from "react-hook-form";
import { Link } from "react-router-dom";

export const CustomerInfoFields = () => {
    const {register, formState: {errors, isSubmitting}} = useFormContext<CheckoutFormData>()

    return (
        <div className="card checkout-block">
            <div className="w-commerce-commercecheckoutblockheader checkout-block-header">
                <h2 className="display-6">Customer Info</h2>
                <div>* Required</div>
            </div>
            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                <div className="mg-bottom-32px">
                    <label htmlFor="email" className="w-commerce-commercecheckoutlabel">
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-commerce-commercecheckoutemailinput input"
                        disabled={isSubmitting}
                        {...register('email')}
                    />
                    {errors.email && (
                        <div className="error-message-wrapper mg-top-8px" style={{ display: 'block' }}>
                            <div>{errors.email.message}</div>
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="discord" className="w-commerce-commercecheckoutlabel">
                        Discord Nickname *
                    </label>
                    <input
                        id="discord"
                        type="text"
                        className="w-commerce-commercecheckoutemailinput input"
                        disabled={isSubmitting}
                        {...register('discordNickname')}
                    />
                    {errors.discordNickname && (
                        <div className="error-message-wrapper mg-top-8px" style={{ display: 'block' }}>
                            <div>{errors.discordNickname.message}</div>
                        </div>
                    )}
                    <p className="text-100 text-neutral-600 mg-top-8px">
                        We'll use this to add you to our Discord community
                    </p>
                </div>
                <div>
                    <label
                        className="w-commerce-commercecheckoutcheckboxlabel checkbox-wrapper"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <input
                            type="checkbox"
                            className="w-commerce-commercecheckoutcheckboxinput checkbox w-checkbox-input"
                            disabled={isSubmitting}
                            {...register('acceptedTerms')}
                            style={{ marginTop: '2px' }}
                        />
                        <span className="w-form-label" style={{ marginLeft: '8px', lineHeight: '1.6' }}>
                            I agree to the{' '}
                            <Link
                                to="/terms#terms-of-service"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-link"
                                style={{
                                    textDecoration: 'underline',
                                    color: 'var(--primary--01)',
                                    fontWeight: 600
                                }}
                            >
                                Terms of Service
                            </Link>
                            {' '}and{' '}
                            <Link
                                to="/terms#privacy-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-link"
                                style={{
                                    textDecoration: 'underline',
                                    color: 'var(--primary--01)',
                                    fontWeight: 600
                                }}
                            >
                                Privacy Policy
                            </Link>
                            {' '}*
                        </span>
                    </label>
                    {errors.acceptedTerms && (
                        <div className="error-message-wrapper mg-top-8px" style={{ display: 'block' }}>
                            <div>{errors.acceptedTerms.message}</div>
                        </div>
                    )}
                </div>
            </fieldset>
        </div>
    )
}
