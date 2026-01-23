import {useState} from 'react'
import type {TariffDetails} from '@/entities/tariff/tariff.ts'
import {formatPrice} from '@/shared/lib/utils/money.ts'
import {useValidatePromoCodeMutation} from '@/shared/api/checkoutApi.ts'
import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import type {SerializedError} from "@reduxjs/toolkit";

interface OrderSummaryProps {
    tariff: TariffDetails
    onPriceChange?: (finalPrice: number, discountPercent: number, discountAmount: number, promoCode?: string) => void
    onSubmit?: () => void
    isSubmitting?: boolean
}

export const OrderSummary = ({tariff, onPriceChange, onSubmit, isSubmitting}: OrderSummaryProps) => {
    const [promoCode, setPromoCode] = useState('')
    const [promoMessage, setPromoMessage] = useState('')
    const [promoApplied, setPromoApplied] = useState(false)
    const [discountPercent, setDiscountPercent] = useState(0)
    const [discountAmount, setDiscountAmount] = useState(0)
    const [finalPrice, setFinalPrice] = useState(tariff.price)

    const [validatePromo, {isLoading: isPromoLoading}] = useValidatePromoCodeMutation()

    const handleApplyPromoCode = async () => {
        const code = promoCode.trim()

        if (!code) {
            setPromoMessage('Please enter a promo code')
            return
        }

        try {
            const result = await validatePromo({
                code: code.toUpperCase(),
                tariffId: tariff.id,
            }).unwrap()

            if (result.valid && result.finalPrice !== undefined) {
                const discount = result.discountedPrice || 0
                const final = result.finalPrice

                setPromoApplied(true)
                setDiscountPercent(result.discountPercent || 0)
                setDiscountAmount(discount)
                setFinalPrice(final)
                setPromoMessage('')

                onPriceChange?.(final, result.discountPercent || 0, discount, code.toUpperCase())
            } else {
                setPromoMessage(result.message || 'Invalid promo code')
                setPromoApplied(false)
            }
        } catch (error) {
            console.error('Promo code validation error:', error)

            let errorMessage = 'Failed to validate promo code'

            if (error && typeof error === 'object') {
                if ('data' in error) {
                    const fetchError = error as FetchBaseQueryError
                    if (fetchError.data && typeof fetchError.data === 'object' && 'message' in fetchError.data) {
                        errorMessage = (fetchError.data as {message: string}).message
                    }
                } else if ('message' in error) {
                    const serializedError = error as SerializedError
                    errorMessage = serializedError.message || errorMessage
                }
            }

            setPromoMessage(errorMessage)
            setPromoApplied(false)
        }
    }

    const handleRemovePromoCode = () => {
        setPromoCode('')
        setPromoApplied(false)
        setDiscountPercent(0)
        setDiscountAmount(0)
        setFinalPrice(tariff.price)
        setPromoMessage('')
        onPriceChange?.(tariff.price, 0, 0, undefined)
    }

    return (
        <>
            <div className="w-commerce-commercecheckoutordersummarywrapper card checkout-block">
                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                    <h2 className="display-6">Order Summary</h2>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                    {/* Subtotal */}
                    <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Subtotal</div>
                        <div>{formatPrice(tariff.price, tariff.currency)}</div>
                    </div>

                    {/* Discount (если применен промокод) */}
                    {promoApplied && discountAmount > 0 && (
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslist">
                            <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                                <div style={{color: '#16a34a'}}>
                                    Discount ({discountPercent}%)
                                </div>
                                <div style={{color: '#16a34a'}}>
                                    -{formatPrice(discountAmount, tariff.currency)}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Total */}
                    <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal text-neutral-800">
                            {formatPrice(finalPrice, tariff.currency)}
                        </div>
                    </div>
                </fieldset>

                {/* Discount Code Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (!promoApplied) {
                            handleApplyPromoCode()
                        }
                    }}
                    className="w-commerce-commercecheckoutdiscounts discounts-block"
                >
                    <label htmlFor="wf-ecom-discounts" className="w-commerce-commercecheckoutdiscountslabel">
                        Discount Code
                    </label>
                    <div className="width-100">
                        {!promoApplied ? (
                            <>
                                <input
                                    id="wf-ecom-discounts"
                                    type="text"
                                    className="w-commerce-commercecheckoutdiscountsinput input width-100 w-input"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    disabled={isSubmitting}
                                    style={{textTransform: 'uppercase'}}
                                />
                                <button
                                    type="button"
                                    onClick={handleApplyPromoCode}
                                    disabled={isPromoLoading || isSubmitting}
                                    className="w-commerce-commercecheckoutdiscountsbutton button-primary discounts-button"
                                    aria-label="Apply Discount"
                                >
                                    {isPromoLoading ? 'Validating...' : 'Apply'}
                                </button>
                            </>
                        ) : (
                            <div className="w-commerce-commercecheckoutsummarylineitem" style={{padding: '12px 0'}}>
                                <div>
                                    <div className="text-200 text-weight-semibold" style={{color: '#16a34a'}}>
                                        ✓ {promoCode.toUpperCase()}
                                    </div>
                                    <div className="text-100 text-neutral-600">
                                        {discountPercent}% discount applied
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleRemovePromoCode}
                                    className="secondary-button small"
                                    disabled={isSubmitting}
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                    </div>
                    {promoMessage && (
                        <div className="error-message-wrapper mg-top-8px" style={{display: 'block'}}>
                            <div>{promoMessage}</div>
                        </div>
                    )}
                </form>
            </div>

            {/* Place Order Button */}
            <button
                type="button"
                onClick={onSubmit}
                disabled={isSubmitting}
                className="w-commerce-commercecheckoutplaceorderbutton button-primary width-100"
                data-loading-text="Processing..."
            >
                {isSubmitting ? 'Processing...' : 'Place a Order'}
            </button>
        </>
    )
}