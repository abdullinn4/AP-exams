export interface CourseDetails {
    id: string
    title: string
    slug: string
    snippet: string | null
    description: string | null
    previewVideoUrl: string | null
    coverUrl: string | null
    status: 'DRAFT' | 'PUBLISHED'
    discordInviteUrl: string | null
    createdAt: string
    updatedAt: string
}