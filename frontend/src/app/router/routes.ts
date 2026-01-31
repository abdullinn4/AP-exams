export const ROUTES = {
    HOME: '/',
    SIGN_IN: '/sign-in',
    FORGOT_PASSWORD: '/forgot-password',
    CHECKOUT: '/checkout',
    CHECKOUT_SUCCESS: '/checkout/success',
    ABOUT: '/about',
    CATALOG: '/courses',
    NOT_FOUND: '/404',
    COURSE_PREVIEW: '/courses/:slug/preview',
    MY_COURSES: '/my-courses',
    MY_COURSE: '/courses/:slug',
} as const