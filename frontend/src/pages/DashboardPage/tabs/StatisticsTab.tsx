import { useState } from 'react'
import { Box, MenuItem, Stack, TextField } from '@mui/material'
import { PotentialGradeCard, TestsStatisticsCard, UnitsProgressChart } from '@/widgets/StudentStatistics'
import type {CourseStatistics, UserStatisticsResponse} from "@/entities/statistics/statistics.ts";

interface StatisticsTabProps {
    statistics?: UserStatisticsResponse
    error: any
}

export const StatisticsTab = ({ statistics, error }: StatisticsTabProps) => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)

    const selectedCourse = statistics?.courses[selectedCourseIndex]

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ color: 'red' }}>
                    Failed to load statistics. Please try again later.
                </p>
            </div>
        )
    }

    if (!statistics) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p>Loading statistics...</p>
            </div>
        )
    }

    return (
        <Stack spacing={3}>
            <div style={{ width: '100%', minWidth: 0 }}>
                {/* Header */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2
                }}>
                    <Box>
                        <h2 style={{ marginBottom: '8px' }}>My Statistics</h2>
                        <p style={{ color: 'var(--neutral--600)', fontSize: '18px' }}>
                            Track your progress and performance
                        </p>
                    </Box>

                    {/* Course Selector */}
                    {(statistics?.courses?.length ?? 0) > 1 && (
                        <TextField
                            select
                            value={selectedCourseIndex}
                            onChange={(e) => setSelectedCourseIndex(Number(e.target.value))}
                            sx={{
                                minWidth: 220,
                                '& .MuiOutlinedInput-root': {
                                    fontFamily: 'Mona Sans, sans-serif',
                                }
                            }}
                            size="small"
                        >
                            {statistics?.courses.map((course: CourseStatistics, index: number) => (
                                <MenuItem key={course.courseId} value={index}>
                                    {course.courseTitle}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                </Box>

                {/* Statistics Cards */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    <TestsStatisticsCard
                        totalTestsSolved={selectedCourse?.totalTestsSolved}
                        averageCorrectPercentage={selectedCourse?.averageCorrectPercentage}
                    />
                    <PotentialGradeCard potentialGrade={selectedCourse?.potentialGrade} />
                </Box>

                {/* Chart */}
                <UnitsProgressChart
                    units={selectedCourse?.units}
                    mockExams={selectedCourse?.mockExams}
                />
            </div>
        </Stack>
    )
}