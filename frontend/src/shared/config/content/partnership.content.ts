export const PARTNERSHIP_CONTENT = {
    hero: {
        title: 'Our Official Affiliate Program!',
        description: 'We\'ve done the heavy lifting by creating comprehensive, results-driven AP prep courses that students actually love. With 15 courses covering all TOP-15 AP Exams, we offer the high-quality resources juniors and seniors need to boost their scores and confidence.',
        image: '/assets/webflow/images/affiliate.png'
    },
    features: [
        {
            id: '1',
            icon: '/assets/webflow/images/turn.svg',
            text: 'Turn Your Influence Into Income'
        },
        {
            id: '2',
            icon: '/assets/webflow/images/active.svg',
            text: 'Active Impact: Promote Top AP Prep'
        },
        {
            id: '3',
            icon: '/assets/webflow/images/earn.svg',
            text: 'Earn 20% from each sale'
        }
    ],
    form: {
        placeholder: 'Enter your email',
        submitText: 'Become A Partner',
        successMessage: 'Thanks for joining our partnership program!',
        errorMessage: 'Oops! Something went wrong while submitting the form.'
    }
} as const