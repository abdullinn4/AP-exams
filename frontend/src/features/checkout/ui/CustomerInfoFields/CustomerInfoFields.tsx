import {type CheckoutFormData} from "@/features/checkout/lib/checkoutSchema.ts";
import {useForm} from "react-hook-form";

export const CustomerInfoFields = () => {
    const {register, formState: {errors, isSubmitting}} = useForm<CheckoutFormData>()

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
            </fieldset>
        </div>
    )
}
