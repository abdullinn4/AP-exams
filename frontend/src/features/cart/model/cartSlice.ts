import type {CartItem, CartState} from "@/entities/cart/cart.ts";
import { tokenService } from "@/features/auth/lib/tokenService";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const CART_STORAGE_KEY_PREFIX = 'ap-exams-cart'

const getCartKey = (userEmail?: string | null): string => {
    return userEmail
        ? `${CART_STORAGE_KEY_PREFIX}-${userEmail}`
        : `${CART_STORAGE_KEY_PREFIX}-anonymous`
}

const getUserEmail = (): string | null => {
    const token = tokenService.getAccessToken()
    if (!token) return null
    try {
        const payload = JSON.parse(atob(token.split(".")[1]))
        return payload.sub || null
    } catch {
        return null
    }
}

const loadCartFromStorage = (): CartState => {
    try {
        const userEmail = getUserEmail()
        const key = getCartKey(userEmail)
        const stored = localStorage.getItem(key)
        if (stored) {
            return JSON.parse(stored)
        }
    } catch (error) {
        console.error('Failed to load cart from localStorage:', error)
    }
    return { items: [], totalItems: 0, totalPrice: 0 }
}

const saveCartToStorage = (state: CartState) => {
    try {
        const userEmail = getUserEmail()
        const key = getCartKey(userEmail)
        localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
        console.error('Failed to save cart to localStorage:', error)
    }
}

const calculateTotals = (items: CartItem[]): Pick<CartState, 'totalItems' | 'totalPrice'> => {
    return {
        totalItems: items.length,
        totalPrice: items.reduce((sum, item) => sum + item.price, 0)
    }
}

const initialState: CartState = loadCartFromStorage()

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItems = state.items.find(item => item.courseId === action.payload.courseId)

            if (existingItems) {
                return
            }

            if (state.items.length > 5) {
                return
            }

            state.items.push(action.payload)
            const totals = calculateTotals(state.items)
            state.totalItems = totals.totalItems
            state.totalPrice = totals.totalPrice
            saveCartToStorage(state)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            const totals = calculateTotals(state.items)
            state.totalItems = totals.totalItems
            state.totalPrice = totals.totalPrice
            saveCartToStorage(state)
        },
        clearCart: (state) => {
            state.items = []
            state.totalItems = 0
            state.totalPrice = 0
            saveCartToStorage(state)
        },
        reloadCart: (state) => {
            const freshCart = loadCartFromStorage()
            state.items = freshCart.items
            state.totalItems = freshCart.totalItems
            state.totalPrice = freshCart.totalPrice
        },
    }
})

export const { addToCart, removeFromCart, clearCart, reloadCart } = cartSlice.actions
export default cartSlice.reducer