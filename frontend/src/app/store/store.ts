import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "@/shared/api/baseApi.ts";
import {authMiddleware} from "@/shared/api/authMiddleware.ts";
import {cartReducer} from "@/features/cart";


export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware, authMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch