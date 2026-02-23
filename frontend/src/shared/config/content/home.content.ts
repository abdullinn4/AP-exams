import type {TariffDetails} from "@/entities/tariff/tariff.ts";

export const HOME_HERO = {
    avatars: [
        '/assets/webflow/images/john-carter-avatar-image-courselify-x-webflow-template.jpg',
        '/assets/webflow/images/sophie-moore-avatar-image-courselify-x-webflow-template.jpg',
        '/assets/webflow/images/andy-smith-avatar-image-courselify-x-webflow-template.jpg',
        '/assets/webflow/images/lily-woods-avatar-image-courselify-x-webflow-template.jpg'
    ],
    trustedText: 'Trusted by over',
    trustedCount: '2,000+',
    trustedSuffix: 'students',
    title: "Turn Your",
    titleHighlight: 'AP Stress into Perfect Score.',
    description: 'The all-in-one prep engine for high-achieving students. From expert-led breakdowns to real-world exam simulations, we turn your hardest courses into your highest scores.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Preview course',
    images: {
        main: '/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-right-image-courselify-x-webflow-template.png',
        float: '/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-left-image-courselify-x-webflow-template.png',
        floatPyramid: '/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png',
        floatSquare: '/assets/webflow/images/square-figure-courselify-x-webflow-template.png',
        floatCircle: '/assets/webflow/images/circle-figure-courselify-x-webflow-template.png',
        bgTexture: '/assets/webflow/images/home-v1-hero-bg-texture-courselify-webflow-ecommerce-template.png'
    }
} as const

export const HOME_CHAPTERS = {
    title: 'Is This',
    titleHighlight: 'You? Then Hop Into SmashAP!',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Browse chapters',
    items: [
        {
            id: 1,
            wId: '4c73e9c0-4a7b-8bc8-8c70-f4b88699d580',
            title: 'Need top scores on your AP exams?',
            icon: '/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png',
            description: '',
            lessons: [
                `Master exactly what's tested`,
                'Proven strategies for a 5',
                'Maximize your score, minimize stress'
            ],
            lessonsCount: 10,
            className: 'grid-item-margin-top'
        },
        {
            id: 2,
            wId: 'e9706775-6c53-493d-9cf3-cd0dfcb76745',
            title: 'Stuck on where to start?',
            icon: '/assets/webflow/images/typography-course-icon-courselify-webflow-ecommerce-template.png',
            description: '',
            lessons: [
                'Clear roadmap from 0 to 100',
                'Focus on high-yield topics first',
                'No fluff — just what matters'
            ],
            lessonsCount: 12,
            className: ''
        },
        {
            id: 3,
            wId: '774c65d2-3193-ae9e-7382-e4c12b44d25e',
            title: 'Dream of getting into a top-tier college?',
            icon: '/assets/webflow/images/layout-course-icon-courselify-webflow-ecommerce-template.png',
            description: '',
            lessons: [
                'Stand out with killer AP scores',
                'Save money on tuition later',
                'Impress admissions officers'
            ],
            lessonsCount: 8,
            className: 'grid-item-margin-top'
        },
        {
            id: 4,
            wId: '4902c55d-7aab-3647-b637-35bac2a3d80f',
            title: 'Too much material to cover?',
            icon: '/assets/webflow/images/color-course-icon-courselify-webflow-ecommerce-template.png',
            description: '',
            lessons: [
                'Cut through the clutter',
                'Only the essentials, nothing extra',
                'Learn faster, retain more'
            ],
            lessonsCount: 12,
            className: 'grid-bottom-item-margin-top'
        },
        {
            id: 5,
            wId: '680117bc-6d23-3dbd-6db9-46e5a4a97e50',
            title: 'No clue where to start?',
            icon: '/assets/webflow/images/imagery-course-icon-courselify-webflow-ecommerce-template.png',
            description: '',
            lessons: [
                'Zero to hero study plan',
                'Step-by-step video lessons',
                'Know exactly what to study next'
            ],
            lessonsCount: 8,
            className: ''
        },
        {
            id: 6,
            wId: '8c1c1686-60be-c3e5-da93-1fe51396f0a4',
            title: `Don't want to hire a tutor?`,
                icon: '/assets/webflow/images/ui-elements-course-icon-courselify-webflow-ecommerce-template.png',
    description: '',
    lessons: [
    'All-in-one self-study solution',
    'Learn at your own pace',
    'Tutor-level guidance for less'
],
    lessonsCount: 12,
    className: 'grid-bottom-item-margin-top'
}
]
} as const

    export const HOME_WHY_COURSE = {
    title: 'Get Top Scores On Your',
    titleHighlight: 'APs With Us.',
    description1: '',
    description2: '',
    ctaText: 'Start learning',
    videoImage: '/assets/webflow/images/why-this-course-image-courselify-x-webflow-template.jpg',
    playButton: '/assets/webflow/images/play-button-courselify-x-webflow-template.svg',
    stats: [
        { value: '10', suffix: '+', label: 'Courses' },
        { value: '200', suffix: '+', label: 'Videos' },
        { value: '10,000', suffix: '+', label: 'AP-Style Tasks' },
        { value: '300', suffix: '+', label: 'Hours of content' }
    ]
} as const

export const HOME_MEET_CEO = {
    title: 'Team That Goes',
    titleHighlight: 'All-in For You',
    description1: `We're more than just a team — we're your personal study squad obsessed with your success. Every lesson, strategy, and resource is built to help you score higher, stress less, and actually enjoy the journey. From day one to exam day, we're in your corner pushing you forward. No judgment, no pressure — just real support from people who genuinely care. Because your dream deserves a team that fights for it.`,
description2: 'No fluff, no boring lectures — just real people who actually care about helping you crush your goals. When you win, we win.',
    ctaText: 'More about us',
    image: '/assets/webflow/images/meet-andy-smith-image-courselify-x-webflow-template.jpg'
} as const

    export const HOME_CTA = {
    title: "There's no",
    titleHighlight: '"perfect" time to start studying.',
    description: `The clock is ticking. Start now, not tomorrow. Every day you wait is a missed opportunity to boost your score. You don't need to be ready — you just need to begin. And we'll guide you every step of the way.`,
    ctaPrimary: 'Go to the cart',
    ctaSecondary: 'Show all courses',
    images: {
    main: '/assets/webflow/images/stand-as-a-web-designer-main-image-courselify-x-webflow-template.png',
        left: '/assets/webflow/images/stand-as-a-web-designer-image-01-courselify-x-webflow-template.png',
        rightTop: '/assets/webflow/images/stand-as-a-web-designer-image-03-courselify-x-webflow-template.png',
        rightBottom: '/assets/webflow/images/stand-as-a-web-designer-image-02-courselify-x-webflow-template.png',
        floatSquare: '/assets/webflow/images/square-figure-courselify-x-webflow-template.png',
        floatCircle: '/assets/webflow/images/circle-figure-courselify-x-webflow-template.png',
        floatPyramid: '/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png'
}
} as const

    export const HOME_FEATURES = {
    title: 'Is this course',
    titleHighlight: 'for you?',
    description: '',
    ctaText: 'Start learning',
    items: [
        {
            icon: '/assets/webflow/images/beginner-friendly-icon-courselify-webflow-ecommerce-template.png',
            title: `You're aiming for top scores`,
            description: `You're not okay with just passing — you want that 5. You're willing to put in the work, but you need someone to show you exactly what to focus on.`,
    maxWidth: 'max-width-92px'
},
{
    icon: '/assets/webflow/images/amazing-community-icon-courselify-webflow-ecommerce-template.png',
        title: 'You feel lost',
    description: `The textbook is 500 pages long and you don't know where to start. You want a clear roadmap that tells you what actually matters.`,
    maxWidth: 'max-width-102px'
},
{
    icon: '/assets/webflow/images/live-streams-icon-courselify-webflow-ecommerce-template.png',
        title: `You're tired of wasting time`,
    description: `You've tried studying before but ended up focusing on the wrong things. You want system that covers what's actually on the test.`,
    maxWidth: 'max-width-116px'
},
{
    icon: '/assets/webflow/images/free-resources-icon-courselify-webflow-ecommerce-template.png',
        title: 'Your schedule is a mess',
    description: `Between school, sports, and life, you can't commit to rigid class times. You need something that fits around you, not the other way around.`,
    maxWidth: 'max-width-124px'
}
]
} as const

    export const HOME_TESTIMONIALS = {
    title: 'Your Success is',
    titleHighlight: 'Our Reputation',
    items: [
        {
            quote: "Transformed my web design skills completely",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "John Carter",
            position: "Got «5» on AP Calculus AB",
            avatar: "/assets/webflow/images/john-carter-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "Incredible course, highly recommend to anyone!",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sophie Moore",
            position: "Got «5» on AP CSA",
            avatar: "/assets/webflow/images/sophie-moore-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "The best investment I've made for my career.",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Matt Cannon",
            position: "Got «5» on AP Physics 1",
            avatar: "/assets/webflow/images/matt-cannon-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "It gave me the confidence to design websites",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sandy Houston",
            position: "Got «5» on AP Statistics",
            avatar: "/assets/webflow/images/sandy-houston-avatar-courselify-x-webflow-template.jpg"
        }
    ]
} as const

export const HOME_FAQ = {
    title: 'Frequently',
    titleHighlight: 'asked questions',
    ctaText: 'Start learning',
    items: [
        {
            question: 'What are the prerequisites?',
            answer: 'Lorem ipsum dolor sit amet consectetur. In consequat nunc adipiscing mi laoreet. Nunc amet est et dui. Volutpat suscipit tincidunt faucibus tincidunt viverra. Id aliquam aliquam curabitur at massa massa malesuada. Nisl non pretium vel.'
        },
        {
            question: 'Can I test the lessons?',
            answer: 'Lorem ipsum dolor sit amet consectetur. In consequat nunc adipiscing mi laoreet. Nunc amet est et dui. Volutpat suscipit tincidunt faucibus tincidunt viverra. Id aliquam aliquam curabitur at massa massa malesuada. Nisl non pretium vel.'
        },
        {
            question: 'Do you prove a certificate of completion?',
            answer: 'Lorem ipsum dolor sit amet consectetur. In consequat nunc adipiscing mi laoreet. Nunc amet est et dui. Volutpat suscipit tincidunt faucibus tincidunt viverra. Id aliquam aliquam curabitur at massa massa malesuada. Nisl non pretium vel.'
        },
        {
            question: 'Is there a way to get a discount?',
            answer: 'Lorem ipsum dolor sit amet consectetur. In consequat nunc adipiscing mi laoreet. Nunc amet est et dui. Volutpat suscipit tincidunt faucibus tincidunt viverra. Id aliquam aliquam curabitur at massa massa malesuada. Nisl non pretium vel.'
        }
    ]
} as const

export const homeTariffs: TariffDetails[] = [
    {
        id: 'basic',
        courseId: 'general',
        title: 'Basic',
        tier: 'BASIC',
        price: 99,
        currency: 'USD',
        paddleVariantId: '1',
        isActive: true,
    },
    {
        id: 'pro',
        courseId: 'general',
        title: 'Pro',
        tier: 'PRO',
        price: 199,
        currency: 'USD',
        paddleVariantId: '2',
        isActive: true,
    },
] as const