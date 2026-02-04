export interface QuestionOption {
    id: string;
    text: string;
}

export interface QuestionForStudent {
    id: string;
    prompt: string;
    optionsJson: string;
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'OPEN';
    imageUrl?: string;
}

export interface StartTestResponse {
    attemptId: string;
    testId: string;
    testTitle: string;
    timeLimitSec: number;
    startedAt: string;
    questions: QuestionForStudent[];
}

export interface TestAttemptResult {
    id: string;
    testId: string;
    userId: string;
    startedAt: string;
    finishedAt: string;
    answersJson: string;
    score: number;
    resultJson: string;
}

export interface TestAnswers {
    [questionId: string]: string;
}

export interface TestAttemptSummary {
    correctCount: number;
    totalCount: number;
    score: number;
    attemptedAt: string;
}

export const TestAttemptStatus = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED'
} as const

export type TestAttemptStatus =
    typeof TestAttemptStatus[keyof typeof TestAttemptStatus]