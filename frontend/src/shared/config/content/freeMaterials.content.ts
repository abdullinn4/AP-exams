export const FREE_MATERIALS_HEADER = {
    title: 'Get it for',
    titleHighlight: 'free',
    description: 'Access our collection of free educational materials to boost your AP exam preparation'
} as const

export const FREE_MATERIALS_MOCK_DATA = [
    {
        id: 'one-page-cram-sheet-bundle',
        title: 'The "One-Page Cram Sheet" Bundle',
        slug: 'one-page-cram-sheet-bundle',
        snippet: 'The Ultimate 1-Page Cram Sheet for all APs',
        coverUrl: '/assets/webflow/images/free-cram-sheet.png',
    },
    {
        id: 'ap-score-calculator',
        title: 'AP Score Calculator',
        slug: 'ap-score-calculator',
        snippet: 'Convert your points to 2026 AP score whenever you want!',
        coverUrl: '/assets/webflow/images/free-ap-calculator.png',
    },
    {
        id: 'college-admissions-ap-checklist',
        title: 'College Admissions AP Checklist',
        slug: 'college-admissions-ap-checklist',
        snippet: 'How many APs do you need to be in Ivy League?',
        coverUrl: '/assets/webflow/images/free-ap-worth.png',
    }
]

export const FREE_MATERIAL_REQUEST_CONTENT = {
    hero: {
        title: 'Drop your email, We\'ll drop the link!',
        description: 'No spam, No cap. just the good stuff (aka the product) heading straight to your inbox before anyone else even knows it\'s out.',
        image: '/assets/webflow/images/free-material-image.png'
    },
    form: {
        placeholder: 'Enter your email',
        submitText: 'Get',
        successMessage: 'Thanks! Check your email for the material.',
        errorMessage: 'Oops! Something went wrong. Please try again.'
    }
} as const
