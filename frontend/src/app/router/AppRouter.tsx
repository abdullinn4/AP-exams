import { Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";
import {SignInPage} from "@/pages/SignInPage";
import {ForgotPasswordPage} from "@/pages/ForgotPasswordPage";
import {HomePage} from "@/pages/HomePage";
import {ScrollToTop} from "@/shared/lib/components/ScrollToTop";
import {useWebflowAnimations} from "@/shared/lib/hooks/useWebflowAnimations.ts";
import {CheckoutPage} from "@/pages/CheckoutPage";
import {CheckoutSuccessPage} from "@/pages/CheckoutSuccessPage";
import {AboutPage} from "@/pages/AboutPage";
import {CatalogPage} from "@/pages/CatalogPage";
import {CoursePreviewPage} from "@/pages/CoursePreviewPage";
import {MyCoursesPage} from "@/pages/MyCoursesPage";
import {MyCoursePage} from "@/pages/MyCoursePage";
import {UnitPage} from "@/pages/UnitPage";
import {LessonPage} from "@/pages/LessonPage";

export const AppRouter = () => {
    useWebflowAnimations()

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
                <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
                <Route path={ROUTES.HOME} element={<HomePage />}/>
                <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
                <Route path={ROUTES.CATALOG} element={<CatalogPage/>}/>
                <Route path={ROUTES.COURSE_PREVIEW} element={<CoursePreviewPage />}/>
                <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />}/>
                <Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutSuccessPage/>}/>

                <Route path={ROUTES.MY_COURSES} element={<MyCoursesPage />} />
                <Route path={ROUTES.MY_COURSE} element={<MyCoursePage />} />
                <Route path={ROUTES.UNIT} element={<UnitPage />} />
                <Route path={ROUTES.LESSON} element={<LessonPage />} />

                <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
            </Routes>
        </>


    )
}