import type {CartItem, CartState} from "@/entities/cart/cart.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const CART_STORAGE_KEY = 'ap-exams-cart'

const loadCartFromStorage = (): CartState => {
    try{
        const stored = localStorage.getItem(CART_STORAGE_KEY)
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
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
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
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer