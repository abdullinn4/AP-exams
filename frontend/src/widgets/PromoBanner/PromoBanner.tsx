import { Link } from 'react-router-dom'

export const PromoBanner = () => {
    return (
        <div className="card bg-neutral-300 mg-bottom-48px" style={{ padding: '32px' }}>
            <div className="image-wrapper mg-bottom-24px">
                <img
                    src="/src/assets/webflow/images/a-professional-web-designer-left-image-courselify-x-webflow-template-p-130x130q80.jpg"
                    alt="Promo"
                    style={{ borderRadius: '12px' }}
                />
            </div>
            <h3 className="display-4 bold text-neutral-800 mg-bottom-12px">
                Explore More Courses
            </h3>
            <p className="display-2 text-neutral-700 mg-bottom-24px">
                Discover our full catalog of courses and start learning something new today.
            </p>
            <Link to="/courses" className="link bold w-inline-block">
                <div>Browse Catalog</div>
                <div className="item-icon-right">
                    <div className="icon-font-squared"></div>
                </div>
            </Link>
        </div>
    )
}