import type { StartTestResponse, TestAttemptResult } from '@/entities/test/test'

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
            type: 'SINGLE_CHOICE'
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