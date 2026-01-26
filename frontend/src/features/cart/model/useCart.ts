import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/app/store/store'
import { addToCart, removeFromCart, clearCart } from './cartSlice'
import type { CartItem } from '@/entities/cart/cart'

export const useCart = () => {
    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector((state: RootState) => state.cart)

    const addItem = (item: CartItem) => {
        dispatch(addToCart(item))
    }

    const removeItem = (itemId: string) => {
        dispatch(removeFromCart(itemId))
    }

    const clear = () => {
        dispatch(clearCart())
    }

    const hasItem = (courseId: string) => {
        return cart.items.some(item => item.courseId === courseId)
    }

    const canAddMore = () => {
        return cart.items.length < 5
    }

    return {
        items: cart.items,
        totalItems: cart.totalItems,
        totalPrice: cart.totalPrice,
        addItem,
        removeItem,
        clear,
        hasItem,
        canAddMore,
    }
}