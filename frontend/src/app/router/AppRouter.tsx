import {Navigate, Route, Routes} from "react-router-dom";
import {ROUTES} from "@/app/router/routes.ts";
import {SignInPage} from "@/pages/SignInPage";
import {ForgotPasswordPage} from "@/pages/ForgotPasswordPage";
import {HomePage} from "@/pages/HomePage";
import {ScrollManager} from "@/shared/lib/components/ScrollManager.tsx";
import {useWebflowAnimations} from "@/shared/lib/hooks/useWebflowAnimations.ts";
import {CheckoutPage} from "@/pages/CheckoutPage";
import {CheckoutSuccessPage} from "@/pages/CheckoutSuccessPage";
import {AboutPage} from "@/pages/AboutPage";
import {CatalogPage} from "@/pages/CatalogPage";
import {CoursePreviewPage} from "@/pages/CoursePreviewPage";
import {MyCoursePage} from "@/pages/MyCoursePage";
import {UnitPage} from "@/pages/UnitPage";
import {LessonPage} from "@/pages/LessonPage";
import {TermsAndConditionsPage} from "@/pages/TermsAndConditionsPage";
import {DashboardPage} from "@/pages/DashboardPage";
import {ProtectedRoute} from "@/app/router/ProtectedRoute.tsx";
import {PublicRoute} from "@/app/router/PublicRoute.tsx";
import {MockExamsPage} from "@/pages/MockExamPage";
import {MockExamTestPage} from "@/pages/MockExamTestPage";
import {ComingSoonCoursePage} from "@/pages/ComingSoonCoursePage";
import {CheckoutCancelPage} from "@/pages/CheckoutCancelPage";

export const AppRouter = () => {
    useWebflowAnimations()

    return (
        <>
            <ScrollManager/>
            <Routes>
                <Route element={<PublicRoute/>}>
                    <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
                    <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage/>}/>
                </Route>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
                <Route path={ROUTES.CATALOG} element={<CatalogPage/>}/>
                <Route path={ROUTES.COURSE_PREVIEW} element={<CoursePreviewPage/>}/>
                <Route path={ROUTES.CHECKOUT} element={<CheckoutPage/>}/>
                <Route path={ROUTES.CHECKOUT_SUCCESS} element={<CheckoutSuccessPage/>}/>
                <Route path={ROUTES.CHECKOUT_CANCEL} element={<CheckoutCancelPage/>}/>
                <Route path={ROUTES.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage/>}/>
                <Route path={ROUTES.COMING_SOON_COURSE} element={<ComingSoonCoursePage/>}/>

                <Route element={<ProtectedRoute/>}>
                    <Route path={ROUTES.MY_COURSE} element={<MyCoursePage/>}/>
                    <Route path={ROUTES.UNIT} element={<UnitPage/>}/>
                    <Route path={ROUTES.LESSON} element={<LessonPage/>}/>
                    <Route path={ROUTES.MOCK_EXAMS} element={<MockExamsPage/>}/>
                    <Route path={ROUTES.MOCK_EXAM_TEST} element={<MockExamTestPage/>}/>
                    <Route path={ROUTES.DASHBOARD} element={<DashboardPage/>}/>
                </Route>

                <Route path="*" element={<Navigate to={ROUTES.HOME} replace/>}/>
            </Routes>
        </>


    )
}