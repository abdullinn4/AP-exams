import { Link } from 'react-router-dom'

export const BlogSection = () => {
    const articles = [
        {
            id: 1,
            title: "Getting Started with Web Design",
            image: "/src/assets/webflow/images/blog-placeholder-1.jpg",
            category: "Design",
            date: "Jan 15, 2024"
        },
        {
            id: 2,
            title: "Advanced Typography Techniques",
            image: "/src/assets/webflow/images/blog-placeholder-2.jpg",
            category: "Typography",
            date: "Jan 10, 2024"
        },
        {
            id: 3,
            title: "Color Theory for Beginners",
            image: "/src/assets/webflow/images/blog-placeholder-3.jpg",
            category: "Color",
            date: "Jan 5, 2024"
        }
    ]

    return (
        <section className="section">
            <div className="w-layout-blockcontainer container-default w-container">
                <div data-w-id="87c42246-ae17-5ea0-92dc-307f269e3e82" className="inner-container _525px center">
                    <div className="text-center">
                        <h2 className="display-9">News & <span className="heading-gradient">articles</span></h2>
                        <div className="mg-top-16px">
                            <p>Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.</p>
                        </div>
                    </div>
                </div>
                <div className="mg-top-40px">
                    <div className="w-dyn-list">
                        <div role="list" className="grid-3-columns blog-grid-v1---home-v1 w-dyn-items">
                            {articles.map((article) => (
                                <div key={article.id} role="listitem" className="w-dyn-item">
                                    <Link data-w-id="642d2f51-3d83-8ef3-edee-32754406f8d1" to={`/blog/${article.id}`} className="card blog-card-v1 w-inline-block">
                                        <div className="image-wrapper border-radius-32px overflow-hidden">
                                            <img src={article.image} loading="eager" alt={article.title} className="image" />
                                        </div>
                                        <div className="blog-card-v1-bottom-content">
                                            <h3 className="display-3 title">{article.title}</h3>
                                            <div className="mg-top-16px">
                                                <div className="blog-details-wrapper">
                                                    <div className="display-2 text-neutral-600">{article.category}</div>
                                                    <div className="divider-details"></div>
                                                    <div className="display-2 text-neutral-600">{article.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mg-top-48px">
                    <div data-w-id="7d59c400-3d40-91fa-d3df-42aa6bb49f6c" className="buttons-row">
                        <Link to="/blog" className="secondary-button w-inline-block">
                            <div className="text-block">Browse all articles</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
