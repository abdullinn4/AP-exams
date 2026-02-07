import type { StartTestResponse, TestAttemptResult, TestResultDetailsResponse } from '@/entities/test/test'

export const MOCK_START_TEST_RESPONSE: StartTestResponse = {
    attemptId: '550e8400-e29b-41d4-a716-446655440030',
    testId: '550e8400-e29b-41d4-a716-446655440020',
    testTitle: 'Vectors Quiz',
    timeLimitSec: 1880,
    startedAt: new Date().toISOString(),
    questions: [
        {
            id: 'q1',
            prompt: 'What is a **vector**?\n\nA vector is a quantity that has both magnitude and direction.',
            optionsJson: JSON.stringify([
                { id: 'a', text: 'A quantity with only magnitude' },
                { id: 'b', text: 'A quantity with both magnitude and direction' },
                { id: 'c', text: 'A quantity with only direction' },
                { id: 'd', text: 'A dimensionless quantity' }
            ]),
            type: 'MULTIPLE_CHOICE'
        },
        {
            id: 'q2',
            prompt: 'Calculate the displacement if an object moves 5m east, then 3m west.\n\n![Displacement Diagram](/lesson-images/displacement.png)',
            optionsJson: JSON.stringify([
                { id: 'a', text: '2m east' },
                { id: 'b', text: '8m east' },
                { id: 'c', text: '2m west' },
                { id: 'd', text: '8m west' }
            ]),
            type: 'SINGLE_CHOICE',
            imageUrl: '/lesson-images/displacement.png'
        },
        {
            id: 'q3',
            prompt: 'Write the formula for **velocity** in terms of displacement and time.\n\nUse LaTeX notation: $v = \\frac{\\Delta x}{\\Delta t}$',
            optionsJson: '',
            type: 'OPEN'
        },
        {
            id: 'q4',
            prompt: 'Which of the following is a **scalar** quantity?',
            optionsJson: JSON.stringify([
                { id: 'a', text: 'Velocity' },
                { id: 'b', text: 'Displacement' },
                { id: 'c', text: 'Speed' },
                { id: 'd', text: 'Acceleration' }
            ]),
            type: 'SINGLE_CHOICE'
        },
        {
            id: 'q5',
            prompt: 'Explain the difference between **distance** and **displacement** in your own words.',
            optionsJson: '',
            type: 'OPEN'
        }
    ]
}

export const MOCK_TEST_RESULT: TestAttemptResult = {
    id: '550e8400-e29b-41d4-a716-446655440030',
    testId: '550e8400-e29b-41d4-a716-446655440020',
    userId: 'user-123',
    startedAt: new Date(Date.now() - 1800000).toISOString(),
    finishedAt: new Date().toISOString(),
    answersJson: JSON.stringify({
        q1: 'b',
        q2: 'a',
        q3: 'v = dx/dt',
        q4: 'c',
        q5: 'Distance is total path length, displacement is shortest path with direction'
    }),
    score: 85,
    resultJson: JSON.stringify({
        correctCount: 4,
        totalCount: 5,
        results: {
            q1: true,
            q2: true,
            q3: false,
            q4: true,
            q5: true
        }
    })
}

export const MOCK_TEST_RESULT_DETAILS: TestResultDetailsResponse = {
    attemptId: '550e8400-e29b-41d4-a716-446655440030',
    testTitle: 'Vectors Quiz',
    correctCount: 4,
    totalCount: 5,
    score: 80,
    finishedAt: new Date().toISOString(),
    questionResults: [
        {
            questionId: 'q1',
            prompt: 'What is a **vector**?\n\nA vector is a quantity that has both magnitude and direction.',
            type: 'SINGLE_CHOICE',
            optionsJson: JSON.stringify([
                { id: 'a', text: 'A quantity with only magnitude' },
                { id: 'b', text: 'A quantity with both magnitude and direction' },
                { id: 'c', text: 'A quantity with only direction' },
                { id: 'd', text: 'A dimensionless quantity' }
            ]),
            userAnswer: 'b',
            correctAnswer: 'b',
            isCorrect: true,
            explanation: 'A vector is indeed a quantity that has both magnitude (size) and direction. Examples include velocity, force, and displacement.'
        },
        {
            questionId: 'q2',
            prompt: 'Calculate the displacement if an object moves 5m east, then 3m west.',
            type: 'SINGLE_CHOICE',
            imageUrl: '/lesson-images/displacement.png',
            optionsJson: JSON.stringify([
                { id: 'a', text: '2m east' },
                { id: 'b', text: '8m east' },
                { id: 'c', text: '2m west' },
                { id: 'd', text: '8m west' }
            ]),
            userAnswer: 'a',
            correctAnswer: 'a',
            isCorrect: true,
            explanation: 'Displacement is the net change in position. Moving 5m east (+5) and then 3m west (-3) results in a net displacement of 2m east (+2).'
        },
        {
            questionId: 'q3',
            prompt: 'Write the formula for **velocity** in terms of displacement and time.\n\nUse LaTeX notation: $v = \\frac{\\Delta x}{\\Delta t}$',
            type: 'OPEN',
            optionsJson: '',
            userAnswer: 'v = dx/dt',
            correctAnswer: 'v = Δx/Δt',
            isCorrect: false,
            explanation: 'The correct formula is v = Δx/Δt, where Δx is the change in displacement and Δt is the change in time. While dx/dt is used in calculus for instantaneous velocity, the question asked for the formula in terms of displacement and time using delta notation.'
        },
        {
            questionId: 'q4',
            prompt: 'Which of the following is a **scalar** quantity?',
            type: 'SINGLE_CHOICE',
            optionsJson: JSON.stringify([
                { id: 'a', text: 'Velocity' },
                { id: 'b', text: 'Displacement' },
                { id: 'c', text: 'Speed' },
                { id: 'd', text: 'Acceleration' }
            ]),
            userAnswer: 'c',
            correctAnswer: 'c',
            isCorrect: true,
            explanation: 'Speed is a scalar quantity because it only has magnitude (how fast something is moving) without direction. Velocity, displacement, and acceleration are all vector quantities because they have both magnitude and direction.'
        },
        {
            questionId: 'q5',
            prompt: 'Explain the difference between **distance** and **displacement** in your own words.',
            type: 'OPEN',
            optionsJson: '',
            userAnswer: 'Distance is total path length, displacement is shortest path with direction',
            correctAnswer: 'Distance is the total length of the path traveled (scalar), while displacement is the straight-line distance from start to finish with direction (vector).',
            isCorrect: true,
            explanation: 'Your answer correctly identifies the key difference: distance is the total path length traveled (a scalar), while displacement is the shortest straight-line path from the starting point to the ending point with direction (a vector).'
        }
    ]
}