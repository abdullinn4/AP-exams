import {useMemo} from 'react'
import {Box, Stack} from '@mui/material'
import Chart from 'react-apexcharts'
import type {ApexOptions} from 'apexcharts'
import type {MockExamStatistics, UnitStatistics} from '@/entities/statistics/statistics'

interface UnitsProgressChartProps {
    units?: UnitStatistics[]
    mockExams?: MockExamStatistics[]
}

export const UnitsProgressChart = ({units = [], mockExams = []}: UnitsProgressChartProps) => {
    const series = useMemo(() => {
        const unitScores = units.map(u => u.averageScore ?? 0)

        const solvedMockExams = mockExams.filter(
            m => m.isSolved && m.score != null
        )

        const mockExamsAverage =
            solvedMockExams.length > 0
                ? solvedMockExams.reduce((sum, m) => sum + m.score!, 0) / solvedMockExams.length
                : 0

        return [
            {
                name: 'Average Score',
                data: [...unitScores, mockExamsAverage],
            },
        ]
    }, [units, mockExams])

    const chartOptions = useMemo<ApexOptions>(() => {
        const categories = [
            ...units.map(u => `Unit ${u.orderIndex}`),
            'Mock Exams',
        ]

        const fullNames = [
            ...units.map(u => u.unitTitle),
            'Mock Exams Average',
        ]

        return {
            chart: {
                type: 'bar',
                height: 380,
                toolbar: {show: false},
                fontFamily: 'Mona Sans, sans-serif',
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    columnWidth: '65%',
                    dataLabels: {position: 'top'},
                },
            },
            dataLabels: {
                enabled: true,
                formatter: (val: number) => `${val.toFixed(1)}%`,
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['var(--neutral--800)'],
                    fontFamily: 'Mona Sans, sans-serif',
                    fontWeight: 600
                }
            },
            colors: ['var(--primary--01)'],
            xaxis: {
                categories,
                labels: {
                    style: {
                        fontSize: '13px',
                        colors: 'var(--neutral--600)',
                        fontFamily: 'Mona Sans, sans-serif'
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: (_value: string, opts?: any) => {
                        const index = opts?.dataPointIndex ?? 0
                        return fullNames[index]
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                labels: {
                    formatter: (val: number) => `${val}%`,
                    style: {
                        fontSize: '13px',
                        colors: 'var(--neutral--600)',
                        fontFamily: 'Mona Sans, sans-serif'
                    }
                },
            },
            grid: {
                borderColor: 'var(--neutral--400)',
                strokeDashArray: 3,
            },
            tooltip: {
                theme: 'light',
                style: {
                    fontFamily: 'Mona Sans, sans-serif',
                    fontSize: '13px'
                },
                y: {
                    formatter: (val: number) => `${val.toFixed(1)}%`,
                    title: {
                        formatter: () => 'Score: '
                    }
                },
                x: {
                    formatter: (_value: string, opts?: any) => {
                        const index = opts?.dataPointIndex ?? 0
                        return fullNames[index]
                    }
                }
            },
        }
    }, [units])

    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: '24px',
                p: 2.5,
                boxShadow: '0 1px 3px rgba(20, 20, 43, 0.06)',
                border: '1px solid var(--neutral--400)',
            }}
        >
            <Stack spacing={2.5}>
                <Box>
                    <h3 style={{ marginBottom: '6px', fontSize: '24px' }}>
                        Units Progress
                    </h3>
                    <p style={{ fontSize: '16px', color: 'var(--neutral--600)', margin: 0 }}>
                        Average test scores by unit
                    </p>
                </Box>
                <Box>
                    <Chart options={chartOptions} series={series} type="bar" height={380}/>
                </Box>
            </Stack>
        </Box>
    )
}