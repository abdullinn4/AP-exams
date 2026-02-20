import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean
}

const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('accessToken')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        clearAuth: (state) => {
            state.isAuthenticated = false
        }
    }
})

export const {setAuthenticated, clearAuth} = authSlice.actions
export const authReducer = authSlice.reducer
