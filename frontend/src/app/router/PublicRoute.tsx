import {tokenService} from "@/features/auth/lib/tokenService.ts";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";

export const PublicRoute = () => {
    const isAuthenticated = tokenService.isAuthenticated()

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DASHBOARD} replace/>
    }

    return <Outlet/>
}