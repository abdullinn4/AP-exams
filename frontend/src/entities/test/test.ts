export interface QuestionOption {
    id: string
    title: string
}

export interface QuestionForStudent {
    id: string
    text: string
    imageUrl: string | null
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'OPEN'
    orderIndex: number
    options: QuestionOption[]
}

export interface StartTestResponse {
    attemptId: string
    testId: string
    title: string
    timeLimitSec: number | null
    attemptsLimit: number | null
    remainingAttempts: number
    startedAt: string
    questions: QuestionForStudent[]
}

export interface TestAttemptResult {
    attemptId: string
    testId: string
    score: number
    maxScore: number
    percentage: number
    finishedAt: string
    resultJson: string | null
}

export interface TestAnswers {
    [questionId: string]: string // questionId -> selected option ID(s) as string
}