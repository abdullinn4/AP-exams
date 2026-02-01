import type { UnitWithProgress } from '@/entities/course/course'

export const MOCK_UNIT_DETAIL: UnitWithProgress = {
    id: '550e8400-e29b-41d4-a716-446655440001',
    courseId: '550e8400-e29b-41d4-a716-446655440000',
    title: 'Introduction to Programming',
    snippet: 'Learn the fundamentals of programming and computational thinking',
    description: 'This unit covers the basic concepts of programming, including variables, data types, control structures, and functions. You will learn how to write simple programs and understand the logic behind computational thinking.',
    iconUrl: '/src/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png',
    orderIndex: 1,
    isPublished: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z',
    totalLessons: 6,
    completedLessons: 2,
    progressPercentage: 33,
    lessons: [
        {
            id: '550e8400-e29b-41d4-a716-446655440010',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'What is Programming?',
            orderIndex: 1,
            releaseAt: null,
            progressStatus: 'COMPLETED',
            progressCompletedAt: '2024-01-16T12:00:00Z'
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440011',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'Variables and Data Types',
            orderIndex: 2,
            releaseAt: null,
            progressStatus: 'IN_PROGRESS',
            progressCompletedAt: null
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440012',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'Control Structures: If-Else',
            orderIndex: 3,
            releaseAt: null,
            progressStatus: 'NOT_STARTED',
            progressCompletedAt: null
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440013',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'Loops and Iterations',
            orderIndex: 4,
            releaseAt: null,
            progressStatus: 'NOT_STARTED',
            progressCompletedAt: null
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440014',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'Functions and Methods',
            orderIndex: 5,
            releaseAt: null,
            progressStatus: 'NOT_STARTED',
            progressCompletedAt: null
        },
        {
            id: '550e8400-e29b-41d4-a716-446655440015',
            unitId: '550e8400-e29b-41d4-a716-446655440001',
            title: 'Practice: Build Your First Program',
            orderIndex: 6,
            releaseAt: null,
            progressStatus: 'NOT_STARTED',
            progressCompletedAt: null
        }
    ]
}