import { Box, Stack } from '@mui/material'
import { CheckCircle, TrendingUp } from 'lucide-react'

interface TestsStatisticsCardProps {
    totalTestsSolved?: number
    averageCorrectPercentage?: number | null
}

export const TestsStatisticsCard = ({
                                        totalTestsSolved,
                                        averageCorrectPercentage
                                    }: TestsStatisticsCardProps) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: '24px',
                p: 2.5,
                boxShadow: '0 1px 3px rgba(20, 20, 43, 0.06)',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                border: '1px solid var(--neutral--400)',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: 140,
                    height: 140,
                    background: 'linear-gradient(135deg, rgba(121, 58, 255, 0.08) 0%, rgba(121, 58, 255, 0.03) 100%)',
                    borderRadius: '50%',
                    top: -70,
                    right: -40,
                }
            }}
        >
            <Stack spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '14px',
                            bgcolor: 'rgba(121, 58, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <CheckCircle size={24} color="var(--primary--01)" />
                    </Box>
                    <Box>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            lineHeight: 1.2,
                            color: 'var(--neutral--800)',
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            {totalTestsSolved}
                        </div>
                        <div style={{
                            fontSize: '17px',
                            color: 'var(--neutral--600)',
                            marginTop: '4px',
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            Tests Solved
                        </div>
                    </Box>
                </Box>

                {averageCorrectPercentage !== null && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 0.5 }}>
                        <TrendingUp size={18} color="var(--primary--green)" />
                        <div style={{
                            fontSize: '20px',
                            color: 'var(--primary--green)',
                            fontWeight: 600,
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            {averageCorrectPercentage?.toFixed(1)}%
                        </div>
                        <div style={{
                            fontSize: '15px',
                            color: 'var(--neutral--600)',
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            Avg. Correct
                        </div>
                    </Box>
                )}
            </Stack>
        </Box>
    )
}