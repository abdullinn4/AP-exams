import { Box, Stack, Chip } from '@mui/material'
import { Award, TrendingUp } from 'lucide-react'
import type { PotentialGrade } from '@/entities/statistics/statistics'

interface PotentialGradeCardProps {
    potentialGrade?: PotentialGrade
}

const getGradeColor = (grade: number | null) => {
    if (!grade) return 'var(--neutral--500)'
    if (grade >= 4) return 'var(--primary--green)'
    if (grade >= 3) return 'var(--primary--03)'
    return 'var(--secondary--red-400)'
}

const getGradeLabel = (grade: number | null) => {
    if (!grade) return 'Not Available'
    if (grade === 5) return 'Excellent'
    if (grade === 4) return 'Good'
    if (grade === 3) return 'Satisfactory'
    if (grade === 2) return 'Poor'
    return 'Fail'
}

export const PotentialGradeCard = ({ potentialGrade }: PotentialGradeCardProps) => {
    if (!potentialGrade) return null

    const { isAvailable, grade, percentage } = potentialGrade

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
                    background: `linear-gradient(135deg, ${getGradeColor(grade)}15 0%, ${getGradeColor(grade)}08 100%)`,
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
                            bgcolor: `${getGradeColor(grade)}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Award size={24} color={getGradeColor(grade)} />
                    </Box>
                    <Box>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: getGradeColor(grade),
                            lineHeight: 1.2,
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            {isAvailable && grade ? grade : '—'}
                        </div>
                        <div style={{
                            fontSize: '17px',
                            color: 'var(--neutral--600)',
                            marginTop: '4px',
                            fontFamily: 'Mona Sans, sans-serif'
                        }}>
                            Potential Grade
                        </div>
                    </Box>
                </Box>

                {isAvailable && percentage !== null ? (
                    <Box sx={{ pt: 0.5 }}>
                        <Chip
                            label={getGradeLabel(grade)}
                            size="small"
                            sx={{
                                bgcolor: `${getGradeColor(grade)}15`,
                                color: getGradeColor(grade),
                                fontWeight: 600,
                                fontSize: '13px',
                                height: '24px',
                                mb: 1,
                                fontFamily: 'Mona Sans, sans-serif'
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <TrendingUp size={16} color={getGradeColor(grade)} />
                            <div style={{
                                fontSize: '15px',
                                color: 'var(--neutral--600)',
                                fontFamily: 'Mona Sans, sans-serif'
                            }}>
                                {percentage.toFixed(1)}% overall
                            </div>
                        </Box>
                    </Box>
                ) : (
                    <div style={{
                        fontSize: '15px',
                        color: 'var(--neutral--600)',
                        lineHeight: 1.5,
                        fontFamily: 'Mona Sans, sans-serif'
                    }}>
                        Complete all units and at least one mock exam
                    </div>
                )}
            </Stack>
        </Box>
    )
}