export const HOME_HERO = {
    avatars: [
        '/assets/webflow/images/preview_avatar_1.PNG',
        '/assets/webflow/images/preview_avatar_2.PNG',
        '/assets/webflow/images/preview_avatar_3.PNG',
        '/assets/webflow/images/preview_avatar_4.jpg'
    ],
    trustedText: 'Trusted by over',
    trustedCount: '1,000+',
    trustedSuffix: 'students',
    title: "Join the ",
    titleHighlight: 'AP Community ',
    titleHighlight1: 'that ',
    titleHighlight2: 'Gets you results',
    description: 'The online school that actually prepares you for AP exams. We\'ll help you save on tuition — and dramatically improve your odds of getting into your dream college.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Who we are',
    images: {
        main: '/assets/webflow/images/preview.png',
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
            icon: '/assets/webflow/images/beginner-friendly-icon-courselify-webflow-ecommerce-template.png',
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
            icon: '/assets/webflow/images/free-resources-icon-courselify-webflow-ecommerce-template.png',
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
            icon: '/assets/webflow/images/amazing-community-icon-courselify-webflow-ecommerce-template.png',
            type: 'text',
            className: ''
        },
        {
            id: 6,
            wId: '8c1c1686-60be-c3e5-da93-1fe51396f0a4',
            title: '',
            image: '/assets/webflow/gifs/hop.mp4',
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
    videoImage: '/assets/webflow/gifs/preview.mp4',
    playButton: '/assets/webflow/images/play-button-courselify-x-webflow-template.svg',
    stats: [
        {value: '10', suffix: '+', label: 'Courses'},
        {value: '200', suffix: '+', label: 'Videos'},
        {value: '10,000', suffix: '+', label: 'AP-Style Tasks'},
        {value: '300', suffix: '+', label: 'Hours of content'}
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
    ctaSecondary: 'View all courses',
    images: {
        main: '/assets/webflow/images/noperfect.png',
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
            price: `$0 without prep books`,
            result: `The result? You're finally in a panic, hire a tutor, and have to start all over again:(`,
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
            quote: "Okay so I took CSP because I thought it was gonna be easy (spoiler: it wasn't). I was genuinely struggling. Prof. Marat lays everything out in such a concise, clear way. Then I sharpened everything with a ton of practice problems. On the webinars, nobody makes you feel dumb for asking questions—everyone's just trying to lock in. Got a 5 and now I'm actually considering majoring in CS next year. This site lowkey changed my whole career path. Thanks, Smash AP.",
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
            answer: '1) BASIC: Full platform access — all materials, video lessons, online practice tests, webinars, and our community included;' +
                ' 2) PRO: Everything from Basic + more tasks and materials'
        },
        {
            question: 'What do I need for SmashAP?',
            answer: 'A device, good internet, and the drive to score high. That\'s it — no textbooks or extra materials required.'
        }
    ]
} as const

export const HOME_POPULAR_COURSES = {
    title: 'Popular',
    titleHighlight: 'Courses',
    ctaText: 'All Courses',
    ctaLink: '/courses',
    courses: [
        {
            id: '91b822a3-c75a-40bc-b5b5-27683acdfdd2',
            title: 'AP CS P: Breaking Code',
            slug: 'ap-cs-principles-breaking-code',
            snippet: 'All you need to smash AP Computer Science Principles 2026',
            coverUrl: '/assets/webflow/images/breaking-code.png',
            wId: 'popular-course-1'
        },
        {
            id: 'ap-lang-chamber-of-rhetoric',
            title: 'AP Lang: Chamber of Rhetoric',
            slug: 'coming-soon/ap-lang-chamber-of-rhetoric',
            snippet: 'All you need to smash AP English Language 2026',
            coverUrl: '/assets/webflow/images/AP Lang (2).png',
            wId: 'popular-course-2'
        },
        {
            id: '701d0484-c177-4229-88a5-c4c89554c9e5',
            title: 'AP Calc AB: Multiverse of Calculus',
            slug: 'ap-calc-ab-multiverse-of-calculus',
            snippet: 'All you need to smash AP Calculus AB 2026',
            coverUrl: '/assets/webflow/images/multiverse-of-calc.png',
            wId: 'popular-course-3'
        },
        {
            id: 'ap-psych-the-upside-down',
            title: 'AP Psych: The Upside Down',
            slug: 'coming-soon/ap-psych-the-upside-down',
            snippet: 'All you need to smash AP Psychology 2026',
            coverUrl: '/assets/webflow/images/AP Psych.png',
            wId: 'popular-course-4'
        },
        {
            id: '30814740-674c-4bf1-ba6c-2d118e11f9ac',
            title: 'AP CS A: Escape the Matrix ',
            slug: 'ap-cs-a-escape-the-matrix',
            snippet: 'All you need to smash AP Computer Science A 2026',
            coverUrl: '/assets/webflow/images/escape-the-matrix.png',
            wId: 'popular-course-5'
        },
        {
            id: '0110f48a-c940-41ca-91b3-fc9bb7af2e4a',
            title: 'AP Calc BC: 67 Problems',
            slug: 'ap-calc-bc-67-problems',
            snippet: 'All you need to smash AP Calculus BC 2026',
            coverUrl: '/assets/webflow/images/67_problems.png',
            wId: 'popular-course-6'
        },
        {
            id: 'ap-lit-the-existential-dreamhouse',
            title: 'AP Lit: The Existential Dreamhouse',
            slug: 'coming-soon/ap-lit-the-existential-dreamhouse',
            snippet: 'All you need to smash AP English Literature 2026',
            coverUrl: '/assets/webflow/images/AP Lit.png',
            wId: 'popular-course-7'
        },
        {
            id: 'ap-hug-demographic-drift',
            title: 'AP HuG: Demographic Drift',
            slug: 'coming-soon/ap-hug-demographic-drift',
            snippet: 'All you need to smash AP Human Geography 2026',
            coverUrl: '/assets/webflow/images/AP HuG.png',
            wId: 'popular-course-8'
        },
        {
            id: 'ap-bio-the-mutation-games',
            title: 'AP Bio: The Mutation Games',
            slug: 'coming-soon/ap-bio-the-mutation-games',
            snippet: 'All you need to smash AP Biology 2026',
            coverUrl: '/assets/webflow/images/AP Bio.png',
            wId: 'popular-course-9'
        },
        {
            id: 'wh-ap-the-dbq-project',
            title: 'WHAP: The DBQ Project',
            slug: 'coming-soon/wh-ap-the-dbq-project',
            snippet: 'All you need to smash AP World History: Modern 2026',
            coverUrl: '/assets/webflow/images/WHAP.png',
            wId: 'popular-course-10'
        },
        {
            id: 'ap-ush-the-last-of-us',
            title: 'APUSH: The Last of US',
            slug: 'coming-soon/ap-ush-the-last-of-us',
            snippet: 'All you need to smash AP US History 2026',
            coverUrl: '/assets/webflow/images/APUSH.png',
            wId: 'popular-course-11'
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
        id: 2,
        title: 'AP Calculus AB',
        shortTitle: 'AP Calc AB',
        description: 'Tired? Smash your AP Calc exam with a complete online course packed with engaging video solutions, lectures, and hundreds of practice problems. We cover the official curriculum end-to-end, giving you the ultimate toolkit to boost your score and master calculus the easy way.',
        image: '/assets/webflow/images/AP Calculus AB.png',
        slug: 'ap-calc-ab-multiverse-of-calculus'
    },
    {
        id: 1,
        title: 'AP Computer Science Principles',
        shortTitle: 'AP CS P',
        description: 'Stop wasting hours searching through scattered tutorials and outdated forums. We’ve consolidated every single concept you need for the AP CSP exam into one seamless, all-in-one course, so you can finally stop hunting for answers and start mastering the material. Buy right now and own your exam confidence!',
        image: '/assets/webflow/images/AP Computer Science Principles.png',
        slug: 'ap-cs-principles-breaking-code'
    },
    {
        id: 3,
        title: 'AP Psychology',
        shortTitle: 'AP Psych',
        description: 'Can\'t tell your Freud from your Piaget? We make every psychologist, theory, and concept crystal clear. Our streamlined course uses dynamic videos, smart mnemonics, and targeted practice to help you finally master the material—and crush the exam.',
        image: '/assets/webflow/images/AP Psychology.png',
        slug: 'coming-soon/ap-psych'
    },
    {
        id: 4,
        title: 'AP Computer Science A',
        shortTitle: 'AP CS A',
        description: 'Master every single topic College Board requires for AP CS A — ALL 55. We don\'t guess what\'s on the exam—we follow their official description to the letter, so every video, every theory lesson, and every test serves a purpose: your success. Enroll today and be certain—you\'ve learned exactly what College Board expects!"',
        image: '/assets/webflow/images/AP Computer Science A.png',
        slug: 'ap-cs-a-escape-the-matrix'
    },
    {
        id: 5,
        title: 'AP Calculus BC',
        shortTitle: 'AP Calc BC',
        description: 'It’s everything you need to dominate the AP Calc exam: the full CollegeBoard curriculum, broken down simply, with tons of practice and videos for every tricky task. Master this and you will smash AP. Guaranteed.',
        image: '/assets/webflow/images/AP Calculus BC.png',
        slug: 'ap-calc-bc-67-problems'
    },
    {
        id: 6,
        title: 'AP Lang',
        shortTitle: 'AP Lang',
        description: 'Get the exact skills you need for the AP Lang exam without the boring lectures. We cover all the course material with clear video walkthroughs and plenty of practice, making it super simple to understand what the graders are looking for.',
        image: '/assets/webflow/images/AP Lang.png',
        slug: 'coming-soon/ap-lang'
    }
]
export const EXAM_PREP_STEPS = [
    {
        id: 1,
        subtitle: 'All materials. One place. No drama',
        title: 'Our platform',
        description: 'The slickest interface you\'ve ever touched. Crisp videos, straight-to-the-point text, and tons of tests—all in AP style. Practice drills, full exam simulations—the whole package. No fluff. Just results.',
        ghostName: 'Convenient platform',
        ghostRole: 'that has everything',
        buttonText: 'Choose a course',
        buttonLink: '/courses',
        video: '/assets/webflow/gifs/platf.mp4',
        subtitleColor: '#FF8A3C',
        titleColor: '#fff',
        descriptionColor: '#fff',
        buttonColor: '#FF8A3C',
        ghostInfoColor: '#FF8A3C',
        bgGradient: '#1b1b40',
        ghostTextColor: '#fff',
    },
    {
        id: 2,
        subtitle: 'Free webinars every week',
        title: 'Support & Community',
        description: 'Free webinars. Every week. Level up with live sessions and get your questions answered on the spot. Plus, we\'re everywhere you hang—Discord, Insta, TikTok. Daily content, real talk, and a whole community rooting for you. We\'re not just support. We\'re your squad.',
        ghostName: 'Join our Discord',
        ghostRole: 'and Instagram & Tiktok',
        buttonText: 'Move to Discord',
        buttonLink: 'https://discord.gg/Fh9eM23Y',
        video: '/assets/webflow/gifs/supp.mp4',
        subtitleColor: '#303056',
        titleColor: '#303056',
        descriptionColor: '#303056',
        buttonColor: '#FF5B79',
        ghostInfoColor: '#303056',
        bgGradient: '#e8cafb',
        ghostTextColor: '#303056',
    },
    {
        id: 3,
        subtitle: 'New Exams. Every Week',
        title: 'Endless AP Practice.',
        description: 'Fresh exams dropping every week. Simulate the real deal, track your progress, and lock in them concepts. You studied. Now prove it. No surprises on test day. Just mastery.',
        ghostName: 'Master',
        ghostRole: 'What You\'ve Learned',
        buttonText: 'Coming soon',
        buttonLink: '/free-library',
        video: '/assets/webflow/gifs/tests.mp4',
        subtitleColor: '#000',
        titleColor: '#000',
        descriptionColor: '#000',
        buttonColor: '#5B3A8C',
        ghostInfoColor: '#5B3A8C',
        bgGradient: '#f8a874',
        ghostTextColor: '#fff',
    }
] as const

interface SliderVideo {
    src: string
    alt: string
}

export const SLIDER_VIDEOS_TOP: SliderVideo[] = [
    {src: '/assets/webflow/gifs/preview1.mp4', alt: 'AP Course Preview 1'},
    {src: '/assets/webflow/gifs/preview7.mp4', alt: 'AP Course Preview 2'},
    {src: '/assets/webflow/gifs/preview3.mp4', alt: 'AP Course Preview 3'},
    {src: '/assets/webflow/gifs/preview5.mp4', alt: 'AP Course Preview 4'},
]

export const SLIDER_VIDEOS_BOTTOM: SliderVideo[] = [
    {src: '/assets/webflow/gifs/preview2.mp4', alt: 'AP Course Preview 5'},
    {src: '/assets/webflow/gifs/preview8.mp4', alt: 'AP Course Preview 6'},
    {src: '/assets/webflow/gifs/preview6.mp4', alt: 'AP Course Preview 7'},
    {src: '/assets/webflow/gifs/preview4.mp4', alt: 'AP Course Preview 8'},
]