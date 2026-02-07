import type { LessonDetails } from '@/entities/course/course'
import { TestAttemptStatus } from '@/entities/test/test'
import lessonTheoryMd from './lesson-theory.md?raw'

export const MOCK_LESSON_DETAIL: LessonDetails = {
    id: '550e8400-e29b-41d4-a716-446655440010',
    unitId: '550e8400-e29b-41d4-a716-446655440001',
    title: 'Scalars and Vectors in One Dimension',
    orderIndex: 1,
    releaseAt: null,

    videoPayload: 'https://www.youtube.com/watch?v=Ojiv9Smi4XE',
    textPayload: lessonTheoryMd,

    progressStatus: 'IN_PROGRESS',
    progressCompletedAt: null,

    testId: '550e8400-e29b-41d4-a716-446655440020',
    testTitle: 'Vectors Quiz',
    testTimeLimitSec: 1800,
    testAttemptStatus: TestAttemptStatus.NOT_STARTED,
    testAttemptId: '550e8400-e29b-41d4-a716-446655440030',
    testAttemptSummary: {
        correctCount: 4,
        totalCount: 5,
        score: 80,
        attemptedAt: new Date(Date.now() - 86400000).toISOString() // 1 день назад
    },

    canContactCurator: true,
    discordInviteUrl: 'https://discord.gg/example'
}