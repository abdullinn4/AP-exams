import { Link } from 'react-router-dom'

export const PromoBanner = () => {
    return (
        <div className="card bg-neutral-300 mg-bottom-48px" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Image на всю ширину без паддингов */}
            <div style={{ width: '100%', margin: 0 }}>
                <img
                    src="/assets/webflow/images/dashboard_news.png"
                    alt="Promo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '12px 12px 0 0'
                    }}
                />
            </div>

            {/* Content с паддингами */}
            <div style={{ padding: '24px 32px 32px 32px' }}>
                <h3 className="display-4 bold text-neutral-800 mg-bottom-12px">
                    Explore More Courses
                </h3>
                <p className="display-2 text-neutral-700 mg-bottom-24px">
                    Discover our full catalog of courses and start learning something new today.
                </p>
                <Link to="/courses" className="link bold w-inline-block">
                    <div>Browse Catalog</div>
                    <div className="item-icon-right">
                        <div className="icon-font-squared"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}