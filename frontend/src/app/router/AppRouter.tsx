import { Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";
import {SignInPage} from "@/pages/SignInPage";
import {ForgotPasswordPage} from "@/pages/ForgotPasswordPage";
import {HomePage} from "@/pages/HomePage";
import {ScrollToTop} from "@/shared/lib/components/ScrollToTop";
import {useWebflowAnimations} from "@/shared/lib/hooks/useWebflowAnimations.ts";

export const AppRouter = () => {
    useWebflowAnimations()

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
                <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
                <Route path={ROUTES.HOME} element={<HomePage />}/>

                <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
            </Routes>
        </>


    )
}