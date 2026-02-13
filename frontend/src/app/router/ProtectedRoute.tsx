import {tokenService} from "@/features/auth/lib/tokenService.ts";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";

export const ProtectedRoute = () => {
    const isAuthenticated = tokenService.isAuthenticated()

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.SIGN_IN} replace/>
    }

    return <Outlet/>
}