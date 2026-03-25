export const ABOUT_HERO = {
    name: 'Kamil',
    name2: 'Marat',
    images: {
        main: '/assets/webflow/images/k_about.png',
        secondary: '/assets/webflow/images/m_about.png'
    }
} as const

export const ABOUT_PORTFOLIO = {
    title: 'Tutors who set out',
    subtitle: 'to teach thousands',
    description: 'For over 5 years, we have been creating and testing our preparation technique on several\n' +
        'generations of graduates and have compiled it in our courses.',
    images: {
        left: '/assets/webflow/images/m_block_tutors.png',
        right: '/assets/webflow/images/m_block2_tutors.png'
    }

} as const

export const ABOUT_QUOTE = {
    quote: `"We built SmashAP to give students the ultimate toolkit for AP success.
    Whether you're watching a video or drilling a test, we're right there with
    you every step of the way"`
} as const

export const HOME_SURPRISES = {
    title: 'Introduce ',
    subtitle: 'Our Team',

    blocks: [
        {
            id: 1,
            title: 'AP Calculus AB | BC',
            description: `Kamil believes that Calculus shouldn't feel like a foreign language. With high energy and an obsession for problem-solving, he flips the script on complex math, turning nightmares about derivatives and integrals into "aha!" moments. Kamil doesn't just teach you how to solve a problem; he trains your brain to think like a mathematician so you can walk into exam day with absolute confidence and crush the curve!`,
            ctaPrimary: 'Start learning',
            image: '/assets/webflow/images/about-calc.png',
            imagePosition: 'right'
        },
        {
            id: 2,
            title: 'AP CS A | Principles',
            description: 'Ready to hack the AP exam? Marat is your ultimate tech guru. Whether you’ve been coding in your sleep or you’re writing your very first line of Java, Marat brings an electric energy to the screen that makes programming dangerously fun. He strips away the confusing tech jargon and gives you the exact cheat codes you need to ace your multiple-choice questions and flawlessly execute your Free Response Questions.',
            ctaPrimary: 'Start learning',
            image: '/assets/webflow/images/about-cs.png',
            imagePosition: 'left'
        },
        {
            id: 3,
            title: 'AP Psychology',
            description: 'Ever wonder why you procrastinate or how your brain actually learns? Diana is here to blow your mind. She brings AP Psych to life with high-octane storytelling and fascinating psychological experiments. Diana knows that this exam is basically a massive vocabulary test in disguise, so she brings the energy and the memory tricks you need to make every single concept stick. Get ready to psychoanalyze your friends and easily secure your 5!',
            image: '/assets/webflow/images/about-psych.png',
            imagePosition: 'right'
        },
        {
            id: 4,
            title: 'AP English Language',
            description: 'Words are power, and Kamilla is here to make you unstoppable. She knows that AP Lang isn’t about reading old books; it’s about mastering the art of the argument. Kamilla brings fierce, high-energy coaching to the table, transforming you from a hesitant writer into a persuasive powerhouse. With her battle-tested essay templates and sharp reading strategies, you’ll be effortlessly destroying the prompts and leaving the graders speechless!',
            image: '/assets/webflow/images/about-lang.png',
            imagePosition: 'left'
        },
        {
            id: 5,
            title: 'AP Human Geography',
            description: 'The world is way more than just lines on a map, and Hannah is your ultimate tour guide! She brings an infectious, world-traveler energy to AP HuG, helping you decode how humans interact with the planet. From population pyramids to urban sprawl, Hannah makes the globe feel small and manageable. She’ll have you analyzing spatial data like a pro, ensuring you can map out your path straight to a 5!',
            image: '/assets/webflow/images/about-hug.png',
            imagePosition: 'right'
        },
        {
            id: 6,
            title: 'AP English Literature',
            description: 'Forget boring book reports—Sophia makes classic literature electric. She has a superpower for taking 300-year-old texts and making them feel like modern-day thrillers. Sophia knows exactly what the College Board wants to see in your essays, and she delivers the ultimate toolkit to help you read faster, analyze deeper, and write like a literary genius. With her, you won\'t just survive Shakespeare; you’ll totally own him.\n',
            image: '/assets/webflow/images/about-lit.png',
            imagePosition: 'left'
        },
        {
            id: 7,
            title: 'AP Biology',
            description: 'Biology is the study of life, and Emma absolutely brings it to life! If you’re terrified of cellular respiration or genetics, take a breath. Emma’s high-energy, visually driven teaching style turns massive, intimidating biological concepts into fun, easy-to-digest puzzles. She doesn\'t just want you to memorize the textbook; she wants you to think like a cutting-edge scientist so you can dominate the data and ace the exam!',
            image: '/assets/webflow/images/about-bio.png',
            imagePosition: 'right'
        },
        {
            id: 8,
            title: 'AP U.S. History',
            description: 'History isn\'t just dead guys and dates—it’s the ultimate drama, and Maria is the ultimate storyteller. She brings relentless energy to APUSH, connecting the dots of the American past so you don\'t have to rely on rote memorization. Maria\'s absolute superpower is the Document-Based Question (DBQ); she’ll hand you the exact blueprint to write historical essays so brilliant, the AP graders won\'t know what hit them.',
            image: '/assets/webflow/images/about-ush.png',
            imagePosition: 'left'
        }
        ,{
            id: 9,
            title: 'AP World History',
            description: 'Buckle up, because Mina is taking you on a high-speed journey through time! AP World History covers a massive amount of ground, but Mina’s vibrant, energetic approach makes global empires and ancient trade routes feel incredibly relevant. She trains you to zoom out and see the big picture, making it easy to compare civilizations and spot the historical trends that the AP exam tests. With Mina as your guide, conquering the world has never been easier!',
            image: '/assets/webflow/images/about-world.png',
            imagePosition: 'right'
        },
    ]
} as const

export const ABOUT_CTA_CARDS = {
    title: 'What About ',
    titleGradient: 'Competitors?',
    cards: [
        {
            id: 1,
            logo: '/assets/webflow/images/smashap_white_full.svg',
            title: 'Unique Structure of SmashAP',
            backgroundColor: '#261d61',
            variant: 'dark',
            points: [
                {
                    type: 'positive',
                    text: '✓ Content depth: Units with video, theory, and tests – fully structured progression.'
                },
                {
                    type: 'positive',
                    text: '✓ Community & support: Live Discord + Facebook group. Real curators and admins help students and parents daily.'
                },
                {
                    type: 'positive',
                    text: '✓ Long‑term opportunity: We hire our graduates. Curators, marketers, programmers, etc. – your next job starts here.'
                },
                {
                    type: 'positive',
                    text: '✓ Parent involvement: Dedicated Facebook group with admins answering parents directly.'
                },
                {
                    type: 'positive',
                    text: '✓ Personalization: Curators help you on Discord – human support tailored to your struggle.'
                },
                {
                    type: 'negative',
                    text: '✗ Price: Paid course – Yes, we cost money. But look at everything above – a real community, career opportunity, and human support. Doesn\'t that make it worth it?'
                }
            ],
            ctaText: 'Worth, Show Me Courses →',
            ctaLink: '/catalog',
            ctaTextColor: '#000000'
        },
        {
            id: 2,
            logo: '/assets/webflow/images/competitors.png',
            title: 'Khan Academy, UWorld and other competitors',
            backgroundColor: '#fff',
            variant: 'light',
            points: [
                {
                    type: 'positive',
                    text: '✓ Proven track record teaching generations of AP students'
                },
                {
                    type: 'negative',
                    text: '✗ Community & support: No community or human support (except paid tutoring with Princeton Review).'
                },
                {
                    type: 'negative',
                    text: '✗ Long‑term opportunity: No career path.'
                },
                {
                    type: 'negative',
                    text: '✗ Parent involvement: Not designed for parents (Khan, UWorld) or only if parent pays extra (Princeton).'
                },
                {
                    type: 'negative',
                    text: '✗ Personalization: Algorithm‑based (Khan), static content (Princeton), Q‑bank only (UWorld) – no direct mentor.'
                },
                {
                    type: 'mixed',
                    text: 'Price: ✓ Khan – Free; ✗ Princeton – expensive books & courses; ✗ UWorld – paid Q‑bank; ✗ No single competitor offers community, support, and career.'
                }
            ],
            ctaText: null,
            ctaLink: null
        }
    ]
} as const