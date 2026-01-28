import type {CartItem} from '@/entities/cart/cart'
import {formatPrice} from '@/shared/lib/utils/money.ts'
import {calculateEstimatedPrice} from '@/features/checkout/lib/bundleVariants'

interface OrderSummaryProps {
    items: CartItem[]
    onSubmit?: () => void
    isSubmitting?: boolean
}

export const OrderSummary = ({items, onSubmit, isSubmitting}: OrderSummaryProps) => {
    const {originalPrice, bulkDiscountPercent, estimatedPrice} = calculateEstimatedPrice(items)
    const currency = items[0]?.currency || 'USD'

    return (
        <>
            <div className="w-commerce-commercecheckoutordersummarywrapper card checkout-block">
                <div className="w-commerce-commercecheckoutsummaryblockheader checkout-block-header">
                    <h2 className="display-6">Order Summary</h2>
                </div>
                <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                    {/* Items List */}
                    <div className="mg-bottom-16px">
                        {items.map((item) => (
                            <div key={item.id} className="w-commerce-commercecheckoutsummarylineitem">
                                <div>
                                    <div className="text-200 text-weight-semibold">{item.courseTitle}</div>
                                    <div className="text-100 text-neutral-600">{item.tariffTitle}</div>
                                </div>
                                <div>{formatPrice(item.price, item.currency)}</div>
                            </div>
                        ))}
                    </div>

                    {/* Subtotal */}
                    <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Subtotal</div>
                        <div>{formatPrice(originalPrice, currency)}</div>
                    </div>

                    {/* Bundle Discount */}
                    {bulkDiscountPercent > 0 && (
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslist">
                            <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                                <div style={{color: '#16a34a'}}>
                                    Bundle Discount ({bulkDiscountPercent}%)
                                </div>
                                <div style={{color: '#16a34a'}}>
                                    -{formatPrice(originalPrice - estimatedPrice, currency)}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Estimated Total */}
                    <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Estimated Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal text-neutral-800">
                            {formatPrice(estimatedPrice, currency)}
                        </div>
                    </div>

                    {/* Promo Code Notice */}
                    <div className="mg-top-16px" style={{
                        padding: '12px',
                        backgroundColor: '#f3f4f6',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div className="text-100 text-neutral-600" style={{lineHeight: '1.5'}}>
                            💡 You can apply promo codes at checkout
                        </div>
                    </div>
                </fieldset>
            </div>

            {/* Place Order Button */}
            <button
                type="button"
                onClick={onSubmit}
                disabled={isSubmitting}
                className="w-commerce-commercecheckoutplaceorderbutton button-primary width-100"
                data-loading-text="Processing..."
            >
                {isSubmitting ? 'Processing...' : 'Continue to Payment'}
            </button>
        </>
    )
}