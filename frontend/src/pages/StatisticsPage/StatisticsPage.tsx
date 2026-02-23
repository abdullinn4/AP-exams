import {useState} from 'react'
import {Box, MenuItem, Stack, TextField} from '@mui/material'
import {useGetUserStatisticsQuery} from '@/shared/api/statisticsApi'
import {PotentialGradeCard, TestsStatisticsCard, UnitsProgressChart} from "@/widgets/StudentStatistics"
import {Header} from "@/widgets/Header"
import {Footer} from "@/widgets/Footer"

export const StatisticsPage = () => {
    const {data, error} = useGetUserStatisticsQuery()
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)


    const selectedCourse = data?.courses[selectedCourseIndex]

    return (
        <div className="page-wrapper">
            <Header/>

            {error ? (
                <div style={{textAlign: 'center', padding: '100px 0'}}>
                    <p style={{color: 'red'}}>Failed to load courses. Please try again later.</p>
                </div>
            ) : (
                <section className="section" style={{paddingTop: '80px', paddingBottom: '80px'}}>
                    <div className="w-layout-blockcontainer container-default w-container">
                        <Stack spacing={3}>
                            {/* Header */}
                            <Box
                                data-w-id="1819300e-1d78-a2f1-bd4d-1ac37fd71a62"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: 2
                                }}
                            >
                                <Box>
                                    <h2 style={{marginBottom: '8px'}}>My Statistics</h2>
                                    <p style={{color: 'var(--neutral--600)', fontSize: '18px'}}>
                                        Track your progress and performance
                                    </p>
                                </Box>

                                {/* Course Selector */}
                                {(data?.courses?.length ?? 0) > 1 && (
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
                                        {data?.courses.map((course, index) => (
                                            <MenuItem key={course.courseId} value={index}>
                                                {course.courseTitle}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Box>

                            {/* Statistics Cards */}
                            <Box
                                data-w-id="de0f2413-a92c-917b-973b-07d5dd072903"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                                sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'}, gap: 2}}
                            >
                                <TestsStatisticsCard
                                    totalTestsSolved={selectedCourse?.totalTestsSolved}
                                    averageCorrectPercentage={selectedCourse?.averageCorrectPercentage}
                                />
                                <PotentialGradeCard potentialGrade={selectedCourse?.potentialGrade}/>
                            </Box>

                            {/* Chart */}
                            <Box
                                data-w-id="d866b9b2-84e1-a506-4feb-c6702d72eca1"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                            >
                                <UnitsProgressChart
                                    units={selectedCourse?.units}
                                    mockExams={selectedCourse?.mockExams}
                                />
                            </Box>
                        </Stack>
                    </div>
                </section>
            )}

            <Footer/>
        </div>
    )
}