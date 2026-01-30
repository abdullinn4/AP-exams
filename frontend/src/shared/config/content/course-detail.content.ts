import type {CourseWithUnits} from "@/entities/course/course.ts";

export const MOCK_COURSE_DETAIL: CourseWithUnits = {
    id: '1',
    title: 'Blockchain',
    slug: 'blockchain',
    snippet: 'Learn professional web design from scratch with industry-standard tools and techniques',
    description: 'Lorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.\n\nLorem ipsum dolor sit amet consectetur aenean in ornare hendrerit ac interdum ac sit etiam commodo euismod ultrices maecenas commodo amet ornare vel lacus vel et non lobortis ullamcorper quis interdum.',
    previewVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    coverUrl: '/src/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
    status: 'PUBLISHED',
    discordInviteUrl: null,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    units: [
        {
            id: '1',
            courseId: '1',
            title: 'Start',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Introduction to web design fundamentals',
            iconUrl: '/src/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 1,
            isPublished: true,
            lessonsCount: 10,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: '2',
            courseId: '1',
            title: 'Typography',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Master the art of typography in web design',
            iconUrl: '/src/assets/webflow/images/typography-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 2,
            isPublished: true,
            lessonsCount: 12,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: '3',
            courseId: '1',
            title: 'Layout',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Learn composition and balance in layouts',
            iconUrl: '/src/assets/webflow/images/layout-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 3,
            isPublished: true,
            lessonsCount: 8,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: '4',
            courseId: '1',
            title: 'Color',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Understanding color relationships and emotions',
            iconUrl: '/src/assets/webflow/images/color-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 4,
            isPublished: true,
            lessonsCount: 12,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: '5',
            courseId: '1',
            title: 'Imagery',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Working with images in web design',
            iconUrl: '/src/assets/webflow/images/imagery-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 5,
            isPublished: true,
            lessonsCount: 8,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        },
        {
            id: '6',
            courseId: '1',
            title: 'UI Elements',
            snippet: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            description: 'Creating intuitive user interfaces',
            iconUrl: '/src/assets/webflow/images/ui-elements-course-icon-courselify-webflow-ecommerce-template.png',
            orderIndex: 6,
            isPublished: true,
            lessonsCount: 12,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z'
        }
    ]
} as const