import type { CourseDetails, CourseDetailsWithProgress } from "@/entities/course/course.ts"

interface CourseAboutSectionProps {
    course?: CourseDetails | CourseDetailsWithProgress
}

export const CourseAboutSection = ({ course }: CourseAboutSectionProps) => {
    return (
        <div
            data-w-id="614b9de1-cbf3-7c3e-6b04-8d9a1f6faa86"
            style={{
                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 0
            }}
        >
            <div className="rich-text w-richtext">
                <h2>About the course</h2>
                <p style={{whiteSpace: 'pre-line', paddingTop: '10px', paddingBottom: '10px' }}>{course?.description}</p>
            </div>

            <div className="image-wrapper video-bg-image-wrapper">
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0,
                            borderRadius: '32px'
                        }}
                        src={course?.previewVideoUrl}
                        title={`${course?.title} - Preview Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}