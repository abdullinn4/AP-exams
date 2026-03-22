import {Link, useNavigate} from 'react-router-dom'
import { ProgressBar } from '@/widgets/ProgressBar'
import type { CourseWithProgress } from '@/entities/course/course'

interface CourseCardProps {
    course: {
        id: string
        title: string
        slug: string
        snippet?: string | null
        coverUrl: string | null
        wId?: string
        className?: string
    }
    variant: 'catalog' | 'my-courses' | 'popular-courses' | 'free-materials'
    progress?: Pick<CourseWithProgress, 'progressPercentage' | 'tier'>
    onAddToCart?: () => void
    compact?: boolean
}

export const CourseCard = ({ course, variant, progress, onAddToCart, compact }: CourseCardProps) => {
    const navigate = useNavigate()

    const isComingSoon = course.slug.startsWith('coming-soon/')

    const courseUrl = (variant === 'catalog' || variant === 'popular-courses')
        ? `/courses/${course.slug}/preview`
        : variant === 'free-materials'
            ? `/free-library/${course.slug}/request`
            : `/courses/${course.slug}`

    const handleCardClick = (e: React.MouseEvent) => {
        if (variant === 'free-materials') {
            e.preventDefault()
            navigate(`/free-library/${course.slug}/request`)
        }
    }

    return (
        <Link
            to={courseUrl}
            data-w-id={course.wId}
            className={`card project-card w-inline-block ${course.className || ''}`}
            style={{ position: 'relative' }}
            onClick={handleCardClick}
        >
            <div className="image-wrapper border-radius-32px overflow-hidden image-zoom-wrapper">
                <img
                    src={course.coverUrl || ''}
                    loading="eager"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1439px) 31vw, 404px"
                    alt={`${course.title} - Course Cover`}
                    className="image image-zoom"
                />
            </div>
            <div className="project-card-bottom-content">
                <h3 className="display-5">{course.title}</h3>

                {course.snippet && (
                    <div className="mg-top-16px">
                        <p>{course.snippet}</p>
                    </div>
                )}

                {variant === 'my-courses' && progress && (
                    <div className="mg-top-16px">
                        <ProgressBar
                            percentage={progress.progressPercentage}
                            animated={true}
                        />
                    </div>
                )}

                <div className="mg-top-24px">
                    <div className="buttons-row left">
                        {variant === 'free-materials' && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    navigate(`/free-library/${course.slug}/request`)
                                }}
                                className={`button-primary w-inline-block ${compact ? 'button-compact' : ''}`}
                                style={compact ? { padding: '12px 20px', fontSize: '14px' } : {}}
                            >
                                <div className="text-block">Get for free</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </button>
                        )}


                        {(variant === 'catalog' || variant === 'popular-courses') && onAddToCart && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    if (isComingSoon) {
                                        navigate(courseUrl)
                                    } else {
                                        onAddToCart()
                                    }
                                }}
                                className={`button-primary w-inline-block ${compact ? 'button-compact' : ''}`}
                                style={compact ? { padding: '12px 20px', fontSize: '14px' } : {}}
                            >
                                <div className="text-block">Add to Cart</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </button>
                        )}

                        {variant !== 'free-materials' && (
                            <div className="link-wrapper w-inline-block">
                                <div className={`display-2 bold text-neutral-800 ${compact ? 'compact-link' : ''}`}
                                     style={compact ? { fontSize: '14px' } : {}}>
                                    <div className="flex y-align-center">
                                        <div className="link">
                                            {(variant === 'catalog' || variant === 'popular-courses')
                                                ? (compact ? 'View' : 'View Course')
                                                : 'Continue Learning'}
                                        </div>
                                        <div className="item-icon-right">
                                            <div className="custom-icon-font"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}