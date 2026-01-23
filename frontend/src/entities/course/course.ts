export interface CourseDetails {
    id: string
    title: string
    slug: string
    description: string | null
    previewVideoUrl: string | null
    coverUrl: string | null
    status: 'DRAFT' | 'PUBLISHED'
    discordInviteUrl: string | null
    createdAt: string
    updatedAt: string
}