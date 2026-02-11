import type { DashboardResponse } from '@/entities/dashboard/dashboard'

export const MOCK_DASHBOARD_DATA: DashboardResponse = {
    myCourses: [
        {
            id: '1',
            title: 'Blockchain Fundamentals',
            slug: 'blockchain',
            coverUrl: 'src/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
        },
        {
            id: '3',
            title: 'AI Technology',
            slug: 'ai-tech',
            coverUrl: 'src/assets/webflow/images/ai-tech-image-courselify-x-webflow-template.jpg',
        },
    ],
    availableCourses: [
        {
            id: '2',
            title: 'Web Development',
            slug: 'web-dev',
            coverUrl: 'src/assets/webflow/images/web-dev-image-courselify-x-webflow-template.jpg',
        },
        {
            id: '4',
            title: 'Data Science',
            slug: 'data-science',
            coverUrl: 'src/assets/webflow/images/data-science-image-courselify-x-webflow-template.jpg',
        },
    ],
    selectedCourseDetail: [
        {
            courseId: '1',
            courseTitle: 'Blockchain Fundamentals',
            courseSlug: 'blockchain',
            snippet: 'Master the fundamentals of blockchain technology and cryptocurrency.',
            lessons: [
                {
                    lessonId: 'lesson-1',
                    lessonTitle: 'Introduction to Blockchain',
                    orderIndex: 1,
                    unitId: 'unit-1',
                    unitTitle: 'Getting Started',
                    status: 'IN_PROGRESS',
                },
                {
                    lessonId: 'lesson-2',
                    lessonTitle: 'Cryptography Basics',
                    orderIndex: 2,
                    unitId: 'unit-1',
                    unitTitle: 'Getting Started',
                    status: 'IN_PROGRESS',
                },
                {
                    lessonId: 'lesson-3',
                    lessonTitle: 'Distributed Ledger Technology',
                    orderIndex: 3,
                    unitId: 'unit-2',
                    unitTitle: 'Core Concepts',
                    status: 'NOT_STARTED',
                },
            ],
        },
        {
            courseId: '3',
            courseTitle: 'AI Technology',
            courseSlug: 'ai-tech',
            snippet: 'Explore artificial intelligence and machine learning concepts.',
            lessons: [
                {
                    lessonId: 'lesson-ai-1',
                    lessonTitle: 'What is AI?',
                    orderIndex: 1,
                    unitId: 'unit-ai-1',
                    unitTitle: 'Introduction',
                    status: 'NOT_STARTED',
                },
                {
                    lessonId: 'lesson-ai-2',
                    lessonTitle: 'Machine Learning Basics',
                    orderIndex: 2,
                    unitId: 'unit-ai-1',
                    unitTitle: 'Introduction',
                    status: 'NOT_STARTED',
                },
                {
                    lessonId: 'lesson-ai-3',
                    lessonTitle: 'Neural Networks',
                    orderIndex: 3,
                    unitId: 'unit-ai-2',
                    unitTitle: 'Deep Learning',
                    status: 'NOT_STARTED',
                },
            ],
        },
    ],
}