import { useEffect, useState } from 'react'

interface ProgressBarProps {
    percentage?: number
    showLabel?: boolean
    animated?: boolean
    height?: string
}

export const ProgressBar = ({
                                percentage = 0,
                                showLabel = true,
                                animated = true,
                                height = '8px'
                            }: ProgressBarProps) => {
    const [displayPercentage, setDisplayPercentage] = useState(animated ? 0 : percentage)

    useEffect(() => {
        if (animated) {
            const timer = setTimeout(() => {
                setDisplayPercentage(percentage)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [percentage, animated])

    const clampedPercentage = Math.min(Math.max(percentage, 0), 100)

    return (
        <div className="progress-bar-wrapper">
            <div
                className="progress-bar-track"
                style={{
                    height,
                    backgroundColor: '#E5E7EB',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <div
                    className="progress-bar-fill"
                    style={{
                        height: '100%',
                        width: `${displayPercentage}%`,
                        background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                        borderRadius: '999px',
                        transition: animated ? 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                    }}
                />
            </div>
            {showLabel && (
                <div className="mg-top-8px">
                    <p className="text-200 medium text-neutral-600">
                        Completed {clampedPercentage.toFixed(0)}%
                    </p>
                </div>
            )}
        </div>
    )
}