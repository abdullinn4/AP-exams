import type {TestAttemptStatus, TestAttemptSummary} from "@/entities/test/test.ts";

export interface CourseDetails {
    id: string
    title: string
    slug: string
    snippet: string | null
    description: string | null
    previewVideoUrl: string | undefined
    coverUrl: string | null
    status: 'DRAFT' | 'PUBLISHED'
    discordInviteUrl: string | null
    createdAt: string
    updatedAt: string
}

export interface CourseWithProgress {
    id: string
    title: string
    slug: string
    snippet: string | null
    coverUrl: string | null
    tier: 'BASIC' | 'PRO'
    totalModules: number
    completedModules: number
    progressPercentage: number
    lastAccessedModuleId: string | null
    lastAccessedModuleTitle: string | null
}

export interface Unit {
    id: string
    courseId: string,
    title: string,
    snippet: string | null,
    description: string | null,
    iconUrl: string | null,
    orderIndex: number,
    isPublished: boolean,
    lessonsCount: number,
    createdAt: string,
    updatedAt: string
}

export interface LessonWithProgress {
    id: string
    unitId: string
    title: string
    orderIndex: number
    releaseAt: string | null
    progressStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
    progressCompletedAt: string | null
}

export interface UnitWithProgress {
    id: string
    courseId: string
    title: string
    snippet: string | null
    description: string | null
    iconUrl: string | null
    orderIndex: number
    isPublished: boolean
    createdAt: string
    updatedAt: string
    lessons: LessonWithProgress[]
    totalLessons: number
    completedLessons: number
    progressPercentage: number
}

export interface CourseDetailsWithProgress {
    id: string
    title: string
    slug: string
    description: string | null
    snippet: string | null
    previewVideoUrl: string | undefined
    coverUrl: string | null
    status: 'DRAFT' | 'PUBLISHED'
    discordInviteUrl: string | null
    units: UnitWithProgress[]
}

export interface CourseWithUnits extends CourseDetails {
    units: Unit[]
}

export interface LessonDetails {
    id: string
    unitId: string
    title: string
    orderIndex: number
    releaseAt: string | null

    // Контент
    videoPayload: string | null
    textPayload: string | null

    // Прогресс
    progressStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
    progressCompletedAt: string | null

    // Тест
    testId: string | null
    testTitle: string | null
    testTimeLimitSec: number | null
    testAttemptStatus: TestAttemptStatus | null;
    testAttemptId: string | null
    testAttemptSummary: TestAttemptSummary | null

    // Куратор
    canContactCurator: boolean
    discordInviteUrl: string | null
}
