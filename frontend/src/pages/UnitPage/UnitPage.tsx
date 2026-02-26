import {Link, useParams} from 'react-router-dom'
import {Header} from '@/widgets/Header'
import {Footer} from '@/widgets/Footer'
import {ProgressBar} from '@/widgets/ProgressBar'
import playIcon from '/assets/webflow/images/play-icon-courselify-x-webflow-template.svg'
import learningHoursIcon from '/assets/webflow/images/learning-hours-icon-courselify-x-webflow-template.svg'
import lessonsIcon from '/assets/webflow/images/lessons-icon-courselify-x-webflow-template.svg'
import {useGetUnitDetailsQuery} from "@/shared/api/courseApi.ts";

const getStatusIcon = (status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED') => {
    switch (status) {
        case 'COMPLETED':
            return <span style={{ color: '#A6EB61' }}>✔️</span>
        case 'IN_PROGRESS':
            return <span style={{ color: '#EBE061' }}>⏳</span>
        case 'NOT_STARTED':
            return <span style={{ color: '#F43F3F' }}>❌</span>
    }
}

export const UnitPage = () => {
    const {slug, unitId} = useParams<{ slug: string; unitId: string }>()
    const {data: unit, error} = useGetUnitDetailsQuery(
        {courseSlug: slug!, unitId: unitId!},
        {skip: !slug || !unitId}
    )

    if (!slug || !unitId) {
        return (
            <div className="page-wrapper">
                <Header/>
                <div style={{textAlign: 'center', padding: '100px 0'}}>
                    <p style={{color: 'red'}}>Course slug or unit ID is missing</p>
                </div>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="page-wrapper">
            <Header/>

            {error ? (
                <div style={{textAlign: 'center', padding: '100px 0'}}>
                    <p style={{color: 'red'}}>Failed to load unit details. Please try again later.</p>
                </div>
            ) : (
                <>
                    <section className="section hero-section---chapter-single-premium">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div
                                data-w-id="32acf298-0698-5e73-ac83-f73b692fe101"
                                style={{
                                    WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                    opacity: 0
                                }}
                            >
                                <div>
                                    {/* Иконка и название в одной строке */}
                                    <div style={{display: 'flex', alignItems: 'center', gap: '24px'}}>
                                        <div className="image-wrapper chapter-single-premium-image">
                                            <img
                                                /*src={unit.iconUrl || ''}*/
                                                src='/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png'
                                                loading="eager"
                                                alt={`${unit?.title} Icon`}
                                                className="image"
                                            />
                                        </div>
                                        <h1 className="display-10" style={{flex: 1, margin: 0}}>{unit?.title}</h1>
                                    </div>
                                    <div className="mg-top-16px">
                                        <p>{unit?.snippet}</p>
                                    </div>
                                    <div className="mg-top-24px">
                                        <ProgressBar
                                            percentage={unit?.progressPercentage}
                                            animated={true}
                                            showLabel={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content Section */}
                    <section className="section chapter-single-section">
                        <div className="w-layout-blockcontainer container-default w-container">
                            <div className="w-layout-grid grid-2-columns chapter-single-grid">
                                {/* Left Column - Lessons */}
                                <div
                                    data-w-id="32acf298-0698-5e73-ac83-f73b692fe121"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        opacity: 0
                                    }}
                                >
                                    <div>
                                        <div className="rich-text mg-bottom--24px w-richtext">
                                            <h2>About the unit</h2>
                                            <p>{unit?.description}</p>
                                        </div>
                                    </div>
                                    <div className="mg-top-64px">
                                        <h2 className="display-7">Lessons</h2>
                                        <div className="mg-top-24px">
                                            <div className="w-layout-grid grid-1-column gap-row-24px">
                                                {unit?.lessons.map((lesson) => (
                                                    <Link
                                                        key={lesson.id}
                                                        to={`/courses/${slug}/units/${unitId}/lessons/${lesson.id}`}
                                                        className="card chapter-card-v3 w-inline-block"
                                                        data-w-id={`32acf298-0698-5e73-ac83-f73b692fe13c`}
                                                    >
                                                        <div className="chapter-card-left-content">
                                                            {/* Order Index вместо play icon */}
                                                            <div className="image-wrapper play-icon">
                                                                <div className="display-2 bold text-neutral-800">
                                                                    {unit.orderIndex}.{lesson.orderIndex}
                                                                </div>
                                                            </div>
                                                            <h3 className="display-2 title">{lesson.title}</h3>
                                                        </div>
                                                        <div className="chapter-detail-wrapper">
                                                            {/* Play icon */}
                                                            <div className="image-wrapper play-icon">
                                                                <img
                                                                    src={playIcon}
                                                                    loading="eager"
                                                                    alt="Play"
                                                                />
                                                            </div>
                                                            <div className="divider-details large"></div>
                                                            {/* Status Icon */}
                                                            <div className="image-wrapper play-icon">
                                                                {getStatusIcon(lesson.progressStatus)}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Unit Information */}
                                <div
                                    data-w-id="32acf298-0698-5e73-ac83-f73b692fe17c"
                                    style={{
                                        WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                        opacity: 0
                                    }}
                                    className="card chapter-information-card"
                                >
                                    <h2 className="display-5">Unit information</h2>
                                    <div className="mg-top-12px">
                                        <p>{unit?.snippet}</p>
                                    </div>
                                    <div className="mg-top-24px">
                                        <div className="w-layout-grid grid-1-column gap-row-24px">
                                            <div className="chapter-information-wrapper">
                                                <img
                                                    src={learningHoursIcon}
                                                    loading="eager"
                                                    alt="Learning Hours Icon"
                                                />
                                                <div>3+ learning hours</div>
                                            </div>
                                            <div className="chapter-information-wrapper">
                                                <img
                                                    src={lessonsIcon}
                                                    loading="eager"
                                                    alt="Lessons"
                                                />
                                                <div>{unit?.totalLessons} lessons</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Отступ перед футером */}
                            <div className="mg-bottom-80px"></div>
                        </div>
                    </section>
                </>
            )}


            <Footer/>
        </div>
    )
}