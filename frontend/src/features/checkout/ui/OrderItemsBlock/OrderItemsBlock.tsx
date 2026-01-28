import type {CartItem} from '@/entities/cart/cart'
import {formatPrice} from '@/shared/lib/utils/money'

interface OrderItemsBlockProps {
    items: CartItem[]
}

export const OrderItemsBlock = ({items}: OrderItemsBlockProps) => {
    return (
        <div className="card checkout-block">
            <div className="w-commerce-commercecheckoutblockheader checkout-block-header">
                <h2 className="display-6">Order Items</h2>
            </div>
            <fieldset className="w-commerce-commercecheckoutblockcontent checkout-block-content">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="order-item"
                        style={index > 0 ? {marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb'} : {}}
                    >
                        <div className="order-item-details">
                            <h3 className="display-6 mg-bottom-8px">{item.courseTitle}</h3>
                            <span className="text-200 text-neutral-600 mg-bottom-16px">
                                {item.tariffTitle}
                            </span>
                            <div className="text-200 text-weight-semibold">
                                {formatPrice(item.price, item.currency)}
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>
        </div>
    )
}