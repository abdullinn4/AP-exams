import { Link } from 'react-router-dom'
import {Fragment} from "react";

export const ChaptersSection = () => {
    const chapters = [
        {
            id: 1,
            wId: '4c73e9c0-4a7b-8bc8-8c70-f4b88699d580',
            title: 'Start',
            icon: '/src/assets/webflow/images/start-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Creating design concepts',
                'Using industry-standard software',
                'Planning design projects'
            ],
            lessonsCount: 10,
            className: 'grid-item-margin-top'
        },
        {
            id: 2,
            wId: 'e9706775-6c53-493d-9cf3-cd0dfcb76745',
            title: 'Typography',
            icon: '/src/assets/webflow/images/typography-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Typefaces, fonts and layout',
                'Effective letter spacing',
                'Impact on identity'
            ],
            lessonsCount: 12,
            className: ''
        },
        {
            id: 3,
            wId: '774c65d2-3193-ae9e-7382-e4c12b44d25e',
            title: 'Layout',
            icon: '/src/assets/webflow/images/layout-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Composition and balance',
                'Creating order and structure',
                'Organizing information'
            ],
            lessonsCount: 8,
            className: 'grid-item-margin-top'
        },
        {
            id: 4,
            wId: '4902c55d-7aab-3647-b637-35bac2a3d80f',
            title: 'Color',
            icon: '/src/assets/webflow/images/color-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Understanding color relationships',
                'Using color to convey emotions',
                'Enhancing readability and clarity'
            ],
            lessonsCount: 12,
            className: 'grid-bottom-item-margin-top'
        },
        {
            id: 5,
            wId: '680117bc-6d23-3dbd-6db9-46e5a4a97e50',
            title: 'Imagery',
            icon: '/src/assets/webflow/images/imagery-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Choosing the right file type',
                'Balancing elements in an image',
                'Enhancing and retouching images'
            ],
            lessonsCount: 8,
            className: ''
        },
        {
            id: 6,
            wId: '8c1c1686-60be-c3e5-da93-1fe51396f0a4',
            title: 'UI Elements',
            icon: '/src/assets/webflow/images/ui-elements-course-icon-courselify-webflow-ecommerce-template.png',
            description: 'Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum.',
            lessons: [
                'Creating intuitive user flows',
                'Best practices for buttons',
                'Creating user-friendly forms'
            ],
            lessonsCount: 12,
            className: 'grid-bottom-item-margin-top'
        }
    ]


    return (
        <section id="chapters" className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="34843878-4922-e140-fb72-ce72b9457d79" className="inner-container _585px center">
                    <div className="text-center">
                        <h2 className="display-9">What will <span className="heading-gradient">you learn?</span></h2>
                        <div className="mg-top-16px">
                            <p>Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div className="section-bg-wrapper">
                        <div className="w-layout-grid grid-3-columns chapters-grid v1">
                            {chapters.map((chapter) => (
                                <div key={chapter.id} data-w-id={chapter.wId} className={`card chapter-card-v1 ${chapter.className}`}>
                                    <div>
                                        <div className="image-wrapper chapter-image-wrapper">
                                            <img src={chapter.icon} loading="eager" alt={`${chapter.title} Icon`} className="max-width-122px width-100" />
                                        </div>
                                        <div className="mg-top-40px">
                                            <h3 className="display-5">{chapter.title}</h3>
                                        </div>
                                        <div className="mg-top-8px">
                                            <p>{chapter.description}</p>
                                        </div>
                                        <div className="mg-top-32px">
                                            <div className="w-layout-grid grid-1-column gap-row-24px">
                                                {chapter.lessons.map((lesson, idx) => (
                                                    <Fragment key={idx}>
                                                        <Link to="/lesson" className="link medium">
                                                            {lesson}
                                                        </Link>
                                                        {idx < chapter.lessons.length - 1 && (
                                                            <div className="divider bg-neutral-300"></div>
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mg-top-40px">
                                        <Link to="/chapter" className="secondary-button w-inline-block">
                                            <div className="text-block">Learn more</div>
                                        </Link>
                                    </div>
                                    <div className="chapter-badge-wrapper">
                                        <div className="badge secondary">
                                            <div>{chapter.lessonsCount} Lessons</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="blur-bg gradient-bg bg-chapters-section"></div>
                    </div>
                </div>
                <div className="mg-top-16px">
                    <address data-w-id="5870b1da-1e6f-e24f-1eb7-df49b3bd71f3" className="buttons-row">
                        <Link to="/pricing" className="button-primary w-inline-block">
                            <div className="text-block">Start learning</div>
                            <div className="item-icon-right">
                                <div className="custom-icon-font"></div>
                            </div>
                        </Link>
                        <Link to="/chapters" className="secondary-button w-inline-block">
                            <div className="text-block">Browse chapters</div>
                        </Link>
                    </address>
                </div>
            </div>
        </section>
    )
}
