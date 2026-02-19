import { useCart } from "@/features/cart"
import { Link } from "react-router-dom"

interface CartModalProps {
    isOpen: boolean
    onClose: () => void
}

export const CartModal = ({ isOpen, onClose}: CartModalProps) => {
    const { items, totalPrice, removeItem } = useCart()

    if (!isOpen) return null

    const isEmpty = items.length === 0

    return (
        <div
            className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
            data-node-type="commerce-cart-container-wrapper"
        >
            <div
                data-node-type="commerce-cart-container"
                role="dialog"
                className="w-commerce-commercecartcontainer cart-container"
            >
                <div className="card overflow-visible">
                    {/* Header */}
                    <div className="w-commerce-commercecartheader cart-header">
                        <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                        <a
                            className="w-commerce-commercecartcloselink close-button w-inline-block"
                            role="button"
                            aria-label="Close cart"
                            data-node-type="commerce-cart-close-link"
                            onClick={onClose}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="icon-font-squared">&#x2715;</div>
                        </a>
                    </div>

                    {/* Content */}
                    <div className="w-commerce-commercecartformwrapper cart-form-wrapper">
                        {isEmpty ? (
                            // Empty state
                            <div className="w-commerce-commercecartemptystate pd-sides-24px flex-vertical">
                                <div
                                    aria-label="This cart is empty"
                                    aria-live="polite"
                                    className="display-2 text-neutral-800 mg-bottom-24px"
                                >
                                    No items found.
                                </div>
                                <Link
                                    to="/courses"
                                    className="button-primary small w-button"
                                    onClick={onClose}
                                >
                                    Go to pricing
                                </Link>
                            </div>
                        ) : (
                            // Cart with items
                            <form className="w-commerce-commercecartform" data-node-type="commerce-cart-form">
                                {/* Cart items list */}
                                <div className="w-commerce-commercecartlist cart-list-wrapper">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="w-commerce-commercecartitem cart-item"
                                        >
                                            <div className="cart-item-wrapper" style={{ display: 'flex'}}>
                                                {/* Course image */}
                                                <div className="cart-item-image-wrapper">
                                                    <img
                                                        alt={`${item.tariffTier} Plan`}
                                                        loading="lazy"
                                                        src={`/assets/webflow/images/${item.tariffTier.toLowerCase()}-plan-courselify-x-webflow-template.png`}
                                                        className="max-width-64px"
                                                    />
                                                </div>

                                                {/* Course info */}
                                                <div className="cart-item-info">
                                                    <div className="w-commerce-commercecartiteminfo">
                                                        <div className="cart-item-title">
                                                            <h6 className="text-neutral-800">{item.courseTitle} - {item.tariffTitle}</h6>
                                                        </div>
                                                        <div className="cart-item-details mg-top-8px">
                                                            {/* Price and remove button */}
                                                            <div className="cart-item-price">
                                                                <div className="text-neutral-800 bold">
                                                                    {item.currency === 'USD' ? '$' : item.currency}
                                                                    {item.price}
                                                                </div>
                                                            </div>
                                                            <a
                                                                onClick={() => removeItem(item.id)}
                                                                className="w-commerce-commercecartremovelink link-wrapper remove-button"
                                                                aria-label="Remove item from cart"
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <div className="text-size-small" style={{textDecoration: 'underline'}}>Remove</div>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer with subtotal and checkout */}
                                <div className="w-commerce-commercecartfooter cart-footer">
                                    <div
                                        aria-atomic="true"
                                        aria-live="polite"
                                        className="w-commerce-commercecartlineitem"
                                    >
                                        <div>Subtotal</div>
                                        <div className="w-commerce-commercecartordervalue text-neutral-800">
                                            ${totalPrice.toFixed(2)}
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            to="/checkout"
                                            className="w-commerce-commercecartcheckoutbutton secondary-button"
                                            data-node-type="cart-checkout-button"
                                            onClick={onClose}
                                        >
                                            Continue to Checkout
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}