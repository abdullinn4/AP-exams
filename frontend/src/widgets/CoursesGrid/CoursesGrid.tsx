import { CourseCard } from '@/widgets/CourseCard'
import type { CourseWithProgress } from '@/entities/course/course'
import {getCourseCardAnimationProps} from "@/shared/lib/webflow/courseAnimations.ts";

interface CoursesGridProps {
    title: string
    titleHighlight: string
    description: string
    courses?: Array<{
        id: string
        title: string
        slug: string
        snippet?: string | null
        coverUrl: string | null
        wId?: string
        className?: string
    }>
    variant: 'catalog' | 'my-courses' | 'free-materials'
    coursesProgress?: CourseWithProgress[]
    onAddToCart?: (courseId: string, title: string, coverUrl: string) => void
    disableAnimations?: boolean
    compact?: boolean
    columns?: 2 | 3
}

export const CoursesGrid = ({
                                title,
                                titleHighlight,
                                description,
                                courses = [],
                                variant,
                                coursesProgress,
                                onAddToCart,
                                disableAnimations = false,
                                compact,
                                columns = 3
                            }: CoursesGridProps) => {
    return (
        <section className="section top">
            <div className="w-layout-blockcontainer container-default w-container">
                <div
                    data-w-id={disableAnimations ? {} : "b2447a67-5892-f160-6c20-f07401875c38"}
                    style={disableAnimations ? {} : {
                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        opacity: 0
                    }}
                    className="inner-container _670px _100-tablet"
                >
                    <h2 className="display-9">
                        {title} <span className="heading-gradient">{titleHighlight}</span>
                    </h2>
                    <div className="inner-container _704px center">
                        <div className="mg-top-16px">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div
                    data-w-id={disableAnimations ? {} : "b77c8737-6df8-1c39-d38e-0639668f6b8b"}
                    style={disableAnimations ? {} : {
                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        opacity: 0
                    }}
                    className="projects-wrapper"
                >
                    <div className="z-index-1">
                        <div className={`w-layout-grid ${columns === 2 ? 'grid-2-columns' : 'grid-3-columns'} projects-grid`}>
                            {courses.map((course, index) => {
                                const animationProps = getCourseCardAnimationProps(index)
                                const progress = coursesProgress?.find(p => p.id === course.id)

                                const className = columns === 2
                                    ? (course.className || animationProps.className || '').replace(/top-center|top-right|bottom-left|bottom-right/g, '').trim()
                                    : (course.className || animationProps.className)

                                return (
                                    <CourseCard
                                        key={course.id}
                                        course={{
                                            ...course,
                                            wId: course.wId || animationProps.wId,
                                            className: className
                                        }}
                                        variant={variant}
                                        progress={progress ? {
                                            progressPercentage: progress.progressPercentage,
                                            tier: progress.tier
                                        } : undefined}
                                        onAddToCart={onAddToCart ? () => onAddToCart(
                                            course.id,
                                            course.title,
                                            course.coverUrl || ''
                                        ) : undefined}
                                        compact={compact}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="blur-bg gradient-bg bg-projects"></div>
                </div>
            </div>
        </section>
    )
}