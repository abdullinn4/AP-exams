import { Link } from 'react-router-dom'
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
    variant: 'catalog' | 'my-courses'
    progress?: Pick<CourseWithProgress, 'progressPercentage' | 'tier'>
    onAddToCart?: () => void
}

export const CourseCard = ({ course, variant, progress, onAddToCart }: CourseCardProps) => {
    const courseUrl = variant === 'catalog'
        ? `/courses/${course.slug}/preview`
        : `/courses/${course.slug}`

    return (
        <Link
            to={courseUrl}
            data-w-id={course.wId}
            className={`card project-card w-inline-block ${course.className || ''}`}
        >
            <div className="image-wrapper border-radius-32px overflow-hidden">
                <img
                    src={course.coverUrl || ''}
                    loading="eager"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1439px) 31vw, 404px"
                    alt={`${course.title} - Course Cover`}
                    className="image"
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
                        {variant === 'catalog' && onAddToCart && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    onAddToCart()
                                }}
                                className="button-primary w-inline-block"
                            >
                                <div className="text-block">Add to Cart</div>
                                <div className="item-icon-right">
                                    <div className="custom-icon-font"></div>
                                </div>
                            </button>
                        )}

                        <div className="link-wrapper w-inline-block">
                            <div className="display-2 bold text-neutral-800">
                                <div className="flex y-align-center">
                                    <div className="link">
                                        {variant === 'catalog' ? 'View Course' : 'Continue Learning'}
                                    </div>
                                    <div className="item-icon-right">
                                        <div className="custom-icon-font"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}