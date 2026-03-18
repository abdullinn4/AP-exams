export const COURSE_LIKES_OFFSET: Record<string, number> = {
    'coming-soon/ap-psych-the-upside-down': 327,
    'coming-soon/ap-lang-chamber-of-rhetoric': 556,
    'coming-soon/ap-lit-the-existential-dreamhouse': 479,
    'coming-soon/ap-hug-demographic-drift': 262,
    'coming-soon/ap-bio-the-mutation-games': 124,
    'coming-soon/wh-ap-the-dbq-project': 146,
    'coming-soon/ap-ush-the-last-of-us': 117,
} as const

export const getAdjustedLikeCount = (courseSlug: string, realCount: number): number => {
    const offset = COURSE_LIKES_OFFSET[courseSlug] || 0
    return realCount + offset
}