import {useNavigate} from "react-router-dom";
import {useLoginMutation, useLogoutMutation} from "@/shared/api/authApi.ts";
import type {LoginRequest} from "@/entities/users/auth/auth.ts";
import {tokenService} from "@/features/auth/lib/tokenService.ts";
import {ROUTES} from "@/app/router/routes.ts";
import {useDispatch, useSelector} from "react-redux";
import { setAuthenticated, clearAuth } from './authSlice'
import type {RootState} from "@/app/store/store.ts";
import {clearCart, reloadCart} from "@/features/cart/model/cartSlice";
import {baseApi} from "@/shared/api/baseApi.ts";
import {clearDismissed} from "@/features/notifications/model/notificationsSlice.ts";

export const useAuth = () => {
    const navigate = useNavigate()
    const [loginMutation] = useLoginMutation()
    const [logoutMutation] = useLogoutMutation()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    const login = async (loginRequest: LoginRequest) => {
        try{
            const response = await loginMutation(loginRequest).unwrap()
            tokenService.setTokens(response.tokens.accessToken, response.tokens.refreshToken)
            dispatch(setAuthenticated(true))
            dispatch(reloadCart())
            navigate(ROUTES.DASHBOARD)
            return {success: true}
        }catch (error: any){
            return {
                success: false,
                error: error?.data?.message || 'Invalid email or password'
            }
        }
    }

    const logout = async () => {
        try{
            const refreshToken = tokenService.getRefreshToken()
            if (refreshToken){
                await logoutMutation({refreshToken})
            }
        } catch (error) {
            console.error('Logout failed:', error)
        } finally {
            tokenService.clearTokens()
            dispatch(clearAuth())
            dispatch(clearCart())
            dispatch(clearDismissed())
            dispatch(baseApi.util.resetApiState())

            // Используем window.location для жесткого редиректа
            window.location.href = '/'
        }
    }

    return {
        login,
        logout,
        isAuthenticated
    }
}