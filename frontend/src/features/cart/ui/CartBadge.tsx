import { useState } from 'react'
import { useCart } from "@/features/cart"

interface CartBadgeProps {
    theme?: 'light' | 'dark'
}

export const CartBadge = ({ theme = 'dark' }: CartBadgeProps) => {
    const { totalItems } = useCart()
    const [isHovered, setIsHovered] = useState(false)

    const iconSrc = theme === 'light'
        ? (isHovered ? '/assets/webflow/images/white-hover-shopping-cart.svg' : '/assets/webflow/images/white-shopping-cart.svg')
        : (isHovered ? '/assets/webflow/images/black-hover-shopping-cart.svg' : '/assets/webflow/images/black-shopping-cart.svg')

    return (
        <div
            className="cart-badge-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}
        >
            <img
                src={iconSrc}
                alt="Cart"
                className="cart-icon"
                style={{
                    width: '20px',
                    height: '20px',
                    display: 'block'
                }}
            />
            {totalItems > 0 && (
                <div
                    style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '-10px',
                        width: '26px',
                        height: '26px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src="/assets/webflow/images/circle-shopping-cart-small.svg"
                        alt=""
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%'
                            }}
                    />
                    <span
                        style={{
                            position: 'relative',
                            fontSize: '11px',
                            fontWeight: '600',
                            lineHeight: '1',
                            color: '#fff',
                            zIndex: 1
                        }}
                    >
                        {totalItems}
                    </span>
                </div>
            )}
        </div>
    )
}