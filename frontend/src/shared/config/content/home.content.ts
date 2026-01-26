export const HOME_HERO = {
    avatars: [
        '/src/assets/webflow/images/john-carter-avatar-image-courselify-x-webflow-template.jpg',
        '/src/assets/webflow/images/sophie-moore-avatar-image-courselify-x-webflow-template.jpg',
        '/src/assets/webflow/images/andy-smith-avatar-image-courselify-x-webflow-template.jpg',
        '/src/assets/webflow/images/lily-woods-avatar-image-courselify-x-webflow-template.jpg'
    ],
    trustedText: 'Trusted by over',
    trustedCount: '10,000+',
    trustedSuffix: 'students',
    title: "It's your turn to stand out as a",
    titleHighlight: 'web designer',
    description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Preview course',
    images: {
        main: '/src/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-right-image-courselify-x-webflow-template.png',
        float: '/src/assets/webflow/images/its-your-turn-to-stand-as-a-web-designer-left-image-courselify-x-webflow-template.png',
        floatPyramid: '/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png',
        floatSquare: '/src/assets/webflow/images/square-figure-courselify-x-webflow-template.png',
        floatCircle: '/src/assets/webflow/images/circle-figure-courselify-x-webflow-template.png',
        bgTexture: '/src/assets/webflow/images/home-v1-hero-bg-texture-courselify-webflow-ecommerce-template.png'
    }
} as const

export const HOME_CHAPTERS = {
    title: 'What will',
    titleHighlight: 'you learn?',
    description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Browse chapters',
    items: [
        {
            id: 1,
            wId: '4c73e9c0-4a7b-8bc8-8c70-f4b88699d580',
            title: 'Start',
            icon: '/src/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Creating design concepts',
                'Using industry-standard software',
                'Planning design projects'
            ],
            lessonsCount: 10,
            className: 'grid-item-margin-top'
        },
        {
            id: 2,
            wId: 'e9706775-6c53-493d-9cf3-cd0dfcb76745',
            title: 'Typography',
            icon: '/src/assets/webflow/images/typography-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Typefaces, fonts and layout',
                'Effective letter spacing',
                'Impact on identity'
            ],
            lessonsCount: 12,
            className: ''
        },
        {
            id: 3,
            wId: '774c65d2-3193-ae9e-7382-e4c12b44d25e',
            title: 'Layout',
            icon: '/src/assets/webflow/images/layout-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Composition and balance',
                'Creating order and structure',
                'Organizing information'
            ],
            lessonsCount: 8,
            className: 'grid-item-margin-top'
        },
        {
            id: 4,
            wId: '4902c55d-7aab-3647-b637-35bac2a3d80f',
            title: 'Color',
            icon: '/src/assets/webflow/images/color-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Understanding color relationships',
                'Using color to convey emotions',
                'Enhancing readability and clarity'
            ],
            lessonsCount: 12,
            className: 'grid-bottom-item-margin-top'
        },
        {
            id: 5,
            wId: '680117bc-6d23-3dbd-6db9-46e5a4a97e50',
            title: 'Imagery',
            icon: '/src/assets/webflow/images/imagery-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Choosing the right file type',
                'Balancing elements in an image',
                'Enhancing and retouching images'
            ],
            lessonsCount: 8,
            className: ''
        },
        {
            id: 6,
            wId: '8c1c1686-60be-c3e5-da93-1fe51396f0a4',
            title: 'UI Elements',
            icon: '/src/assets/webflow/images/ui-elements-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Creating intuitive user flows',
                'Best practices for buttons',
                'Creating user-friendly forms'
            ],
            lessonsCount: 12,
            className: 'grid-bottom-item-margin-top'
        }
    ]
} as const

export const HOME_WHY_COURSE = {
    title: 'Why this',
    titleHighlight: 'course?',
    description1: 'Lorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.',
    description2: 'Lorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.',
    ctaText: 'Start learning',
    videoImage: '/src/assets/webflow/images/why-this-course-image-courselify-x-webflow-template.jpg',
    playButton: '/src/assets/webflow/images/play-button-courselify-x-webflow-template.svg',
    stats: [
        { value: '80', suffix: '+', label: 'Lessons' },
        { value: '2,000', suffix: '+', label: 'Critic videos' },
        { value: '3,500', suffix: '+', label: 'Community members' },
        { value: '40', suffix: '+', label: 'Hours of content' }
    ]
} as const

export const HOME_MEET_CEO = {
    title: 'Meet',
    titleHighlight: 'Andy Smith',
    description1: 'Lorem ipsum dolor sit amet consectetur dictum interdum ut orci elit cras in proin arcu mauris blandit diam velit viverra odio donec bibendum vel a in justo consequat lorem vivamus dolor neque eu purus purus sodales.',
    description2: 'Viverra sit quis id justo placerat vestibulum venenatis nulla semper metus proin eleifend suspendisse mattis. Aliquet.',
    ctaText: 'More about me',
    image: '/src/assets/webflow/images/meet-andy-smith-image-courselify-x-webflow-template.jpg'
} as const

export const HOME_CTA = {
    title: "It's your turn to stand as a",
    titleHighlight: 'web designer',
    description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.',
    ctaPrimary: 'Start learning',
    ctaSecondary: 'Watch video',
    images: {
        main: '/src/assets/webflow/images/stand-as-a-web-designer-main-image-courselify-x-webflow-template.png',
        left: '/src/assets/webflow/images/stand-as-a-web-designer-image-01-courselify-x-webflow-template.png',
        rightTop: '/src/assets/webflow/images/stand-as-a-web-designer-image-03-courselify-x-webflow-template.png',
        rightBottom: '/src/assets/webflow/images/stand-as-a-web-designer-image-02-courselify-x-webflow-template.png',
        floatSquare: '/src/assets/webflow/images/square-figure-courselify-x-webflow-template.png',
        floatCircle: '/src/assets/webflow/images/circle-figure-courselify-x-webflow-template.png',
        floatPyramid: '/src/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png'
    }
} as const

export const HOME_FEATURES = {
    title: 'Is this course',
    titleHighlight: 'for you?',
    description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.',
    ctaText: 'Start learning',
    items: [
        {
            icon: '/src/assets/webflow/images/beginner-friendly-icon-courselify-webflow-ecommerce-template.png',
            title: 'Beginner friendly',
            description: 'Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.',
            maxWidth: 'max-width-92px'
        },
        {
            icon: '/src/assets/webflow/images/amazing-community-icon-courselify-webflow-ecommerce-template.png',
            title: 'Amazing community',
            description: 'Neque euismod massa libero rutrum pulvinar faucibus dis massa curabitur dolor sed risus nec tincidunt eget id accumsan suspendisse sagittis phasellus nibh quam nec volutpat.',
            maxWidth: 'max-width-102px'
        },
        {
            icon: '/src/assets/webflow/images/live-streams-icon-courselify-webflow-ecommerce-template.png',
            title: 'Weekly Q&A live streams',
            description: 'Neque euismod massa libero rutrum pulvinar faucibus dis massa curabitur dolor sed risus nec tincidunt eget id accumsan suspendisse sagittis phasellus nibh quam nec volutpat.',
            maxWidth: 'max-width-116px'
        },
        {
            icon: '/src/assets/webflow/images/free-resources-icon-courselify-webflow-ecommerce-template.png',
            title: '1,000+ free resources',
            description: 'Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.',
            maxWidth: 'max-width-124px'
        }
    ]
} as const

export const HOME_TESTIMONIALS = {
    title: 'What are students saying',
    titleHighlight: 'about the course',
    items: [
        {
            quote: "Transformed my web design skills completely",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "John Carter",
            position: "Marketing Lead at Company",
            avatar: "/src/assets/webflow/images/john-carter-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "Incredible course, highly recommend to anyone!",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sophie Moore",
            position: "Head of Design at StartUp",
            avatar: "/src/assets/webflow/images/sophie-moore-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "The best investment I've made for my career.",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Matt Cannon",
            position: "Marketing Lead at Business",
            avatar: "/src/assets/webflow/images/matt-cannon-avatar-courselify-x-webflow-template.jpg"
        },
        {
            quote: "It gave me the confidence to design websites",
            text: "Lorem ipsum dolor sit amet consectetur integer facilisis sodales lobortis amet nibh id erat ut at viverra vulputate malesuada.",
            name: "Sandy Houston",
            position: "Growth Marketer at Agency",
            avatar: "/src/assets/webflow/images/sandy-houston-avatar-courselify-x-webflow-template.jpg"
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