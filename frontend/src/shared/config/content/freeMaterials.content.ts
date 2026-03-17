export const FREE_MATERIALS_HEADER = {
    title: 'Get it for',
    titleHighlight: 'free',
    description: 'Access our collection of free educational materials to boost your AP exam preparation'
} as const

export const FREE_MATERIAL_REQUEST_CONTENT = {
    hero: {
        title: 'Get Your Free Material',
        description: 'Enter your email below and we\'ll send you the requested material instantly.',
        image: '/assets/webflow/images/affiliate.png'
    },
    form: {
        placeholder: 'Enter your email',
        submitText: 'Get Free Material',
        successMessage: 'Thanks! Check your email for the material.',
        errorMessage: 'Oops! Something went wrong. Please try again.'
    }
} as const

export const THANK_YOU_CONTENT = {
    title: 'Thank You!',
    message: 'We\'ve sent the material to your email. Check your inbox!',
    buttonText: 'Back to Free Library',
    icon: '✉️'
} as const