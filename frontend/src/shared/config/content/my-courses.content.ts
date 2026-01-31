import type { CourseWithProgress } from '@/entities/course/course'

export const MY_COURSES_HEADER = {
    title: 'My',
    titleHighlight: 'Courses',
    description: 'Continue your learning journey. Track your progress and pick up where you left off.'
} as const

export const MOCK_MY_COURSES: CourseWithProgress[] = [
    {
        id: '1',
        title: 'Blockchain',
        slug: 'blockchain',
        snippet: 'Learn the fundamentals of blockchain technology and its applications.',
        coverUrl: 'src/assets/webflow/images/blockchain-image-courselify-x-webflow-template.jpg',
        tier: 'PRO',
        totalModules: 12,
        completedModules: 8,
        progressPercentage: 66.67,
        lastAccessedModuleId: '8',
        lastAccessedModuleTitle: 'Smart Contracts Basics',
    },
    {
        id: '3',
        title: 'AI Tech',
        slug: 'ai-tech',
        snippet: 'Learn the fundamentals of blockchain technology and its applications.',
        coverUrl: 'src/assets/webflow/images/ai-tech-image-courselify-x-webflow-template.jpg',
        tier: 'BASIC',
        totalModules: 10,
        completedModules: 3,
        progressPercentage: 30.0,
        lastAccessedModuleId: '3',
        lastAccessedModuleTitle: 'Neural Networks Introduction',
    },
    {
        id: '5',
        title: 'Darkweb',
        slug: 'darkweb',
        snippet: 'Learn the fundamentals of blockchain technology and its applications.',
        coverUrl: 'src/assets/webflow/images/darkweb-image-courselify-x-webflow-template.jpg',
        tier: 'PRO',
        totalModules: 8,
        completedModules: 8,
        progressPercentage: 100.0,
        lastAccessedModuleId: '8',
        lastAccessedModuleTitle: 'Advanced Security',
    }
]