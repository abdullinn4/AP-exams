import { useNavigate } from 'react-router-dom'

interface LessonNavigationButtonsProps {
    prevUrl: string | null
    nextUrl: string | null
    hasPrev: boolean
    hasNext: boolean
}

export const LessonNavigationButtons = ({
                                            prevUrl,
                                            nextUrl,
                                            hasPrev,
                                            hasNext
                                        }: LessonNavigationButtonsProps) => {
    const navigate = useNavigate()

    const handlePrev = () => {
        if (prevUrl) {
            navigate(prevUrl)
        }
    }

    const handleNext = () => {
        if (nextUrl) {
            navigate(nextUrl)
        }
    }

    return (
        <div className="lesson-nav-buttons" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className="secondary-button-icon large lesson-nav-prev"
                style={{
                    opacity: hasPrev ? 1 : 0.35,
                    cursor: hasPrev ? 'pointer' : 'not-allowed'
                }}
            >
                <div className="custom-icon-font">
                    <img src="/assets/webflow/images/arrow-left_black.svg" alt="Previous lesson" />
                </div>
            </button>
            <button
                onClick={handleNext}
                disabled={!hasNext}
                className="secondary-button-icon large lesson-nav-next"
                style={{
                    opacity: hasNext ? 1 : 0.35,
                    cursor: hasNext ? 'pointer' : 'not-allowed'
                }}
            >
                <div className="custom-icon-font">
                    <img src="/assets/webflow/images/arrow-right_black.svg" alt="Next lesson" />
                </div>
            </button>
        </div>
    )
}