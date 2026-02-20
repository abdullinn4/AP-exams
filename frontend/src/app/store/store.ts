import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "@/shared/api/baseApi.ts";
import {cartReducer} from "@/features/cart";
import {authReducer} from "@/features/auth/model/authSlice.ts";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch