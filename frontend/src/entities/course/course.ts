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

export interface Lesson {
    id: string,
    unitId: string,
    title: string,
    orderIndex: number,
    releaseAt: string | null
}

export interface CourseWithUnits extends CourseDetails {
    units: Unit[]
}