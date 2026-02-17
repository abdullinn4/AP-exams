import {useNavigate} from "react-router-dom";
import {useLoginMutation, useLogoutMutation} from "@/shared/api/authApi.ts";
import type {LoginRequest} from "@/entities/users/auth/auth.ts";
import {tokenService} from "@/features/auth/lib/tokenService.ts";
import {ROUTES} from "@/app/router/routes.ts";

export const useAuth = () => {
    const navigate = useNavigate()
    const [loginMutation] = useLoginMutation()
    const [logoutMutation] = useLogoutMutation()

    const login = async (loginRequest: LoginRequest) => {
        try{
            const response = await loginMutation(loginRequest).unwrap()
            tokenService.setTokens(response.tokens.accessToken, response.tokens.refreshToken)

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
            navigate(ROUTES.SIGN_IN)
        }
    }

    const isAuthenticated = tokenService.isAuthenticated()

    return {
        login,
        logout,
        isAuthenticated
    }
}