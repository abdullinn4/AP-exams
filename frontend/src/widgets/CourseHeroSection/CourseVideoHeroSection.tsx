import type {CourseDetails, CourseDetailsWithProgress} from "@/entities/course/course.ts";

interface CourseVideoHeroSectionProps {
    course?: CourseDetails | CourseDetailsWithProgress
}

export const CourseVideoHeroSection = ({
                                           course
                                       }: CourseVideoHeroSectionProps) => {
    return (
        <section className="section hero-section---lesson-single">
            <div className="w-layout-blockcontainer container-default w-container">
                <div className="mg-top-40px">
                    <div className="inner-container _865px center">
                        <div
                            data-w-id="8a387789-2e11-37d7-14dd-e360478aec1b"
                            className="flex-vertical text-center"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                        >
                            <div className="mg-top-16px">
                                <h1 className="display-9">{course?.title}</h1>
                            </div>
                            <div className="mg-top-16px">
                                <p>{course?.snippet}</p>
                            </div>
                        </div>
                        <div className="mg-top-48px">
                            <div data-w-id="8a387789-2e11-37d7-14dd-e360478aec2d"
                                 style={{
                                     WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                     MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                     msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                     transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                     opacity: 0
                                 }}
                            >
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
                                <div className="mg-top-80px">
                                    <div className="card lesson-single-card">
                                        <div className="rich-text mg-bottom--48px w-richtext">
                                            <h2>About the course</h2>
                                            <p style={{ whiteSpace: 'pre-line' }}>{course?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}