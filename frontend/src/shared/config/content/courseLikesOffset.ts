export const COURSE_LIKES_OFFSET: Record<string, number> = {
    'ap-psych-the-upside-down': 327,
    'ap-lang-chamber-of-rhetoric': 556,
    'ap-lit-the-existential-dreamhouse': 479,
    'ap-hug-demographic-drift': 262,
    'ap-bio-the-mutation-games': 124,
    'wh-ap-the-dbq-project': 146,
    'ap-ush-the-last-of-us': 117,
} as const

export const getAdjustedLikeCount = (courseSlug: string, realCount: number): number => {
    const offset = COURSE_LIKES_OFFSET[courseSlug] || 0
    return realCount + offset
}