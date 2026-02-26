import type {TariffDetails} from "@/entities/tariff/tariff.ts";

export const HOME_HERO = {
    avatars: [
        '/assets/webflow/images/preview_avatar_1.PNG',
        '/assets/webflow/images/preview_avatar_2.PNG',
        '/assets/webflow/images/preview_avatar_3.PNG',
        '/assets/webflow/images/preview_avatar_4.jpg'
    ],
    trustedText: 'Trusted by over',
    trustedCount: '2,000+',
    trustedSuffix: 'students',
    title: "The most effective",
    titleHighlight: 'AP Prep for 99$',
    description: 'The online school that actually prepares you for AP exams. We\'ll help you save on tuition — and dramatically improve your odds of getting into your dream college.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Who we are?',
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
            type: 'text',
            className: 'grid-item-margin-top'
        },
        {
            id: 2,
            wId: 'e9706775-6c53-493d-9cf3-cd0dfcb76745',
            title: '',
            image: '/assets/webflow/images/chapters_section_1.png',
            type: 'image',
            className: ''
        },
        {
            id: 3,
            wId: '774c65d2-3193-ae9e-7382-e4c12b44d25e',
            title: 'Dream of getting into a top-tier college?',
            icon: '/assets/webflow/images/layout-course-icon-courselify-webflow-ecommerce-template.png',
            type: 'text',
            className: 'grid-item-margin-top'
        },
        {
            id: 4,
            wId: '4902c55d-7aab-3647-b637-35bac2a3d80f',
            title: '',
            image: '/assets/webflow/images/chapters_section_2.png',
            type: 'image',
            className: 'grid-bottom-item-margin-top'
        },
        {
            id: 5,
            wId: '680117bc-6d23-3dbd-6db9-46e5a4a97e50',
            title: 'Worried about spending too much on a tutor?',
            icon: '/assets/webflow/images/imagery-course-icon-courselify-webflow-ecommerce-template.png',
            type: 'text',
            className: ''
        },
        {
            id: 6,
            wId: '8c1c1686-60be-c3e5-da93-1fe51396f0a4',
            title: '',
            image: '/assets/webflow/gifs/chapters_section_3.gif.mp4',
            type: 'video',
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
    title: 'Top-tier AP prep for the',
    titleHighlight: 'price of one tutoring session',
    ctaText: 'Start learning',
    items: [
        {
            // Standard Tutor (левый блок)
            title: 'Standard Tutor',
            features: [
                '✗ Works with a limited number of students and has little practical experience',
                '✗ Relies on textbooks and publicly available resources',
                '✗ Not available to support you anytime',
                '✗ A mountain of notes, printouts, and files that are easy to get confused in'
            ],
            price: 'From $30 per lesson',
            result: 'The result? Good scores are possible — but at a high cost and with no extra perks :/',
            showIcon: false,
            logo: undefined,
            priceHighlight: undefined,
            priceSuffix: undefined,
            isCenter: undefined
        },
        {
            // SmashAP (центральный блок)
            title: '',
            logo: '/assets/webflow/images/smashap_white_full.svg',
            features: [
                '✓ Proven track record teaching generations of AP students',
                '✓ Expert tutors explain complex topics in simple terms',
                '✓ A strong community and mentors to keep you motivated',
                '✓ Everything in one place: videos, practice tests, and materials'
            ],
            price: 'From $99',
            priceHighlight: true, // для градиента
            priceSuffix: ' for the ENTIRE course',
            result: 'The result? Stress-free prep that guarantees exam success at an unbeatable price :)',
            showIcon: false,
            isCenter: true
        },
        {
            // Self-Study (правый блок)
            title: 'Self-Study',
            features: [
                '✗ You have to search for materials on your own among old and outdated resources',
                '✗ Risk misunderstanding something and losing valuable points',
                '✗ Loss of motivation due to lack of support',
                '✗ Lots of links and notes that you need to keep track of'
            ],
            price: `$0 if you don't purchase the prep books`,
            result: `The result? You're in a panic by late April, hire a tutor, and have to start all over from the beginning :(`,
            showIcon: false,
            logo: undefined,
            priceHighlight: undefined,
            priceSuffix: undefined,
            isCenter: undefined
        }
    ]
} as const

export const HOME_TESTIMONIALS = {
    title: 'Your Success is',
    titleHighlight: 'Our Reputation',
    items: [
        {
            quote: "My parents were about to drop like $800 on a private tutor because I was drowning in related rates. Then I found Smash AP. Video lessons, lesson notes, practice tests—everything was absolutely beautiful. Huge respect for the Unit Smash Time lessons, fr. Prof. G explains stuff like he actually remembers what it's like to be confused. Saved my parents like six hundred bucks and I walked out of that exam feeling solid. Scored a 4 and my dad finally got off my back about my math grade. Huge financial W for the family.",
            name: "Marcus 12th Grade (Atlanta, GA)",
            position: "AP Calculus BC",
            avatar: "/assets/webflow/images/marcus_avatar_review.PNG"
        },
        {
            quote: "Okay so I took CSA because I thought it was gonna be easy (spoiler: it wasn't). I was genuinely struggling. Prof. Marat lays everything out in such a concise, clear way. Then I sharpened everything with a ton of practice problems. On the webinars, nobody makes you feel dumb for asking questions—everyone's just trying to lock in. Got a 5 and now I'm actually considering majoring in CS next year. This site lowkey changed my whole career path. Thanks, Smash AP.",
            name: "Jessica 12th Grade (Seattle, WA)",
            position: "AP Computer Science Principles",
            avatar: "/assets/webflow/images/jessica_avatar_review.PNG"
        },
        {
            quote: "My actual teacher was sweet but she retired halfway through the year and we got a sub who had no idea what she was doing. I was STRESSED about the rhetorical analysis essays. Amelia is literally so funny and actually explains things like a normal person. I started looking forward to studying again. The webinars were especially helpful and honestly kinda lovely? Ended up with a 5 and I swear it's because the videos made me feel like I had a real teacher again. Bestie for real.",
            name: "Danielle 12th Grade (Nashville, TN)",
            position: "AP English Language",
            avatar: "/assets/webflow/images/danielle_avatar_review.PNG"
        },
        {
            quote: "So I'm not gonna lie... I did absolutely nothing all semester. Like I was fully locked in on Fortnite and forgot school existed. Week before the exam I'm panicking because I don't know a single thing about acids and bases. Grinded Smash AP for like 5 days straight, no sleep, just straight chem. The practice problems are set up exactly like the real exam. Pulled a 4 and my friends called me a hacker. Highly recommend this school. Doesn't matter what level you're at now, you'll find something new here.",
            name: "Tyler 12th Grade (Phoenix, AZ)",
            position: "AP Chemistry",
            avatar: "/assets/webflow/images/tyler_avatar_review.PNG"
        },
        {
            quote: "My counselor told me if I passed this exam I could skip intro psych in college and save like 3 grand on tuition. So obviously I locked in. Smash AP has all the info you need—aligned with the exam and course book—but explained in such an easy way to understand. The review videos are actually kinda vibey, with a bunch of solved exam-style problems. I was scoring 5s on practice tests by the end. Passed easy and now I'm basically saving my future self thousands of dollars. Highly recommend this online school.",
            name: "Ashley 12th Grade (Orlando, FL)",
            position: "AP Psychology",
            avatar: "/assets/webflow/images/ashley_avatar_review.PNG"
        }
    ]
} as const

export const HOME_FAQ = {
    title: 'Frequently',
    titleHighlight: 'asked questions',
    ctaText: 'Start learning',
    items: [
        {
            question: 'Is it realistic to start preparing now?',
            answer: 'Yes! Our courses are designed to help you make the most of the time you have left — even if it\'s less than a month before the exam. You\'ll cover key topics and fill in any gaps in your knowledge. Plus, mentors (on Pro plans) will make sure you actually understand everything and keep you motivated along the way. That\'s why prepping with SmashAP is as effective as it gets!'
        },
        {
            question: 'How many subjects can I choose?',
            answer: 'As many as you want! You\'ll study on a single online platform, so all your lessons, tests, and materials are stored in one place with a user-friendly interface. That\'s why studying multiple subjects at once in our school is super comfortable.'
        },
        {
            question: 'What are the pricing plans?',
            answer: '1) BASIC: Full platform access — all materials, video lessons, online practice tests, webinars, and our community included. 2) PRO: Everything in BASIC, plus one-on-one mentor support to help you with any questions along the way.'
        },
        {
            question: 'What do I need for SmashAP?',
            answer: 'A device, good internet, and the drive to score high. That\'s it — no textbooks or extra materials required.'
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

export const HOME_POPULAR_COURSES = {
    title: 'Popular',
    titleHighlight: 'Courses',
    ctaText: 'All Courses',
    ctaLink: '/courses',
    courses: [
        {
            id: 'ap-calculus-ab',
            title: 'AP Calculus AB',
            slug: 'ap-calculus-ab',
            snippet: 'Master derivatives, integrals, and the fundamental theorem of calculus with real-world applications.',
            coverUrl: '/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
            wId: 'popular-course-1'
        },
        {
            id: 'ap-physics-1',
            title: 'AP Physics 1',
            slug: 'ap-physics-1',
            snippet: 'Explore mechanics, energy, waves, and electricity through hands-on problem-solving.',
            coverUrl: '/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
            wId: 'popular-course-2'
        },
        {
            id: 'ap-chemistry',
            title: 'AP Chemistry',
            slug: 'ap-chemistry',
            snippet: 'Dive into atomic structure, chemical reactions, thermodynamics, and equilibrium.',
            coverUrl: '/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
            wId: 'popular-course-3'
        },
        {
            id: 'ap-biology',
            title: 'AP Biology',
            slug: 'ap-biology',
            snippet: 'Study evolution, genetics, ecology, and cellular processes with lab-based learning.',
            coverUrl: '/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
            wId: 'popular-course-4'
        }
    ]
} as const

export interface Course {
    id: number
    title: string
    shortTitle: string
    description: string
    image: string
    slug: string
}

export const COURSES_DATA: Course[] = [
    {
        id: 1,
        title: 'AP Calculus AB',
        shortTitle: 'AP Calc AB',
        description: 'Tired? Smash your AP Calc exam with a complete online course packed with engaging video solutions, lectures, and hundreds of practice problems. We cover the official curriculum end-to-end, giving you the ultimate toolkit to boost your score and master calculus the easy way.',
        image: '/assets/webflow/images/slider1.jpg',
        slug: 'ap-calculus-ab'
    },
    {
        id: 2,
        title: 'AP Computer Science Principles',
        shortTitle: 'AP CS Principles',
        description: 'Stop wasting hours searching through scattered tutorials and outdated forums. We’ve consolidated every single concept you need for the AP CSP exam into one seamless, all-in-one course, so you can finally stop hunting for answers and start mastering the material. Buy right now and own your exam confidence!',
        image: '/assets/webflow/images/slider2.jpg',
        slug: 'ap-cs-principles'
    },
    {
        id: 3,
        title: 'AP Calculus BC',
        shortTitle: 'AP Calc BC',
        description: 'It’s everything you need to dominate the AP Calc exam: the full CollegeBoard curriculum, broken down simply, with tons of practice and videos for every tricky task. Master this and you will smash AP. Guaranteed.',
        image: '/assets/webflow/images/slider3.jpg',
        slug: 'ap-calculus-bc'
    },
    {
        id: 4,
        title: 'AP Computer Science A',
        shortTitle: 'AP CS A',
        description: 'Master every single topic College Board requires for AP CS A — ALL 55. We don\'t guess what\'s on the exam—we follow their official description to the letter, so every video, every theory lesson, and every test serves a purpose: your success. Enroll today and be certain—you\'ve learned exactly what College Board expects!"',
        image: '/assets/webflow/images/slider4.jpg',
        slug: 'ap-cs-a'
    },
    {
        id: 5,
        title: 'AP Lang',
        shortTitle: 'AP L',
        description: 'Get the exact skills you need for the AP Lang exam without the boring lectures. We cover all the course material with clear video walkthroughs and plenty of practice, making it super simple to understand what the graders are looking for.',
        image: '/assets/webflow/images/slider5.jpg',
        slug: 'ap-l'
    }
]
export const EXAM_PREP_STEPS = [
    {
        id: 1,
        subtitle: '#1 Step',
        title: 'Choose Your Course',
        description: 'Select the AP course you want to master from our comprehensive catalog of subjects.',
        image: '/assets/webflow/images/chapters_section_2.png'
    },
    {
        id: 2,
        subtitle: '#2 Step',
        title: 'Learn & Practice',
        description: 'Work through our structured lessons and practice problems designed to build your skills.',
        image: '/assets/webflow/images/chapters_section_2.png'
    },
    {
        id: 3,
        subtitle: '#3 Step',
        title: 'Ace Your Exam',
        description: 'Take practice tests and review your progress to ensure you\'re ready for exam day.',
        image: '/assets/webflow/images/chapters_section_2.png'
    }
] as const