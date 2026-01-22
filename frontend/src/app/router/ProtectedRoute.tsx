import type {ReactNode} from "react";
import {tokenService} from "@/features/auth/lib/tokenService.ts";
import {Navigate} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";

interface ProtectedRouteProps {
    children: ReactNode
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const isAuthenticated = tokenService.isAuthenticated()

    if (!isAuthenticated){
        return <Navigate to={ROUTES.SIGN_IN} replace/>
    }

    return <>{children}</>
}