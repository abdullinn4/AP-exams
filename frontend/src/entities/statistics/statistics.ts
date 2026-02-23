export interface UnitStatistics {
    unitId: string
    unitTitle: string
    orderIndex: number
    totalLessons: number
    completedLessons: number
    averageScore: number | null
}

export interface MockExamStatistics {
    examId: string
    examTitle: string
    isSolved: boolean
    score: number | null
}

export interface PotentialGrade {
    isAvailable: boolean
    grade: number | null
    percentage: number | null
}

export interface CourseStatistics {
    courseId: string
    courseTitle: string
    courseSlug: string
    units: UnitStatistics[]
    mockExams: MockExamStatistics[]
    potentialGrade: PotentialGrade
    totalTestsSolved: number
    averageCorrectPercentage: number | null
}

export interface UserStatisticsResponse {
    courses: CourseStatistics[]
}