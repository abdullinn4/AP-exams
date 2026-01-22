import { Link } from 'react-router-dom'
import { useAuth } from '@/features/auth/model/useAuth'
import { ROUTES } from '@/app/router/routes'

interface HeaderProps {
    variant?: 'full' | 'minimal'
    theme?: 'light' | 'dark'
}

export const Header = ({ variant = 'full', theme = 'dark' }: HeaderProps) => {
    const { isAuthenticated, logout } = useAuth()

    // Выбор логотипа в зависимости от темы
    const logoSrc = theme === 'light'
        ? '/src/assets/webflow/images/logo-white-courselify-webflow-ecommerce-template.svg'
        : '/src/assets/webflow/images/logo-dark-courselify-webflow-ecommerce-template.svg'

    // Минимальный хэдер для auth страниц (Header V3)

    if (variant === 'minimal') {
        return (
            <div data-w-id="b209dc69-0839-20fe-af3a-c9ee1dec5ef2" data-animation="default" data-collapse="all" data-duration="400"
                 data-easing="ease" data-easing2="ease" role="banner" className="header-wrapper w-nav">
                <div className="container-default w-container">
                    <div data-w-id="b209dc69-0839-20fe-af3a-c9ee1dec5ef4" className="header-container-wrapper center">
                        <div className="logo-wrapper v1">
                            <Link to="/" className="logo-link w-inline-block">
                                <img src={logoSrc} alt="AP Exams Logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Полный хэдер (Header V1)
    const headerClass = theme === 'light' ? 'header-wrapper light w-nav' : 'header-wrapper w-nav'
    const linkClass = theme === 'light' ? 'link header-link---dark-mode' : 'link'
    
    return (
        <div data-w-id="c5a10a2d-1ce6-df65-3882-e8a1991bf291" data-animation="default" data-collapse="medium" data-duration="400"
             data-easing="ease" data-easing2="ease" role="banner" className={headerClass}>
            <div className="container-default w-container">
                <div data-w-id="c7c25743-3af1-4a48-2846-73035f33d328" className="header-container-wrapper">
                    <div className="nav-menu-left-side v1">
                        <div className="logo-wrapper v1">
                            <Link to="/" className="logo-link w-inline-block">
                                <img src={logoSrc} alt="AP Exams Logo" />
                            </Link>
                        </div>
                        <nav role="navigation" className={`nav-menu-wrapper v1 ${theme === 'light' ? 'dark-mode' : ''} w-nav-menu`}>
                            <ul role="list" className="list-nav-menu">
                                <li className="link-nav-item">
                                    <Link to="/" className={`${linkClass} w--current`}>
                                        Home
                                    </Link>
                                </li>
                                <li className="link-nav-item">
                                    <Link to="/about" className={linkClass}>
                                        About
                                    </Link>
                                </li>
                                <li className="link-nav-item">
                                    <div
                                        data-w-id="c7c25743-3af1-4a48-2846-73035f33d333"
                                        data-hover="true"
                                        data-delay="0"
                                        className="dropdown-wrapper dropdown-default w-dropdown"
                                    >
                                        <div className={`dropdown-toggle ${theme === 'light' ? 'white' : ''} w-dropdown-toggle`}>
                                            <div style={theme === 'light' ? { color: 'white' } : {}}>Pages</div>
                                            <div
                                                className="icon-font-squared dropdown-arrow"
                                                style={theme === 'light' ? { color: 'white' } : {}}
                                            >
                                                
                                            </div>
                                        </div>
                                        <nav className="dropdown-list dropdown-v1 w-dropdown-list">
                                            <div className="dropdown-pd dropdown-v4">
                                                <div className="w-layout-grid dropodown-column-wrapper">
                                                    <div>
                                                        <h3 className="dropdown-title">Main pages</h3>
                                                        <div className="w-layout-grid main-pages-wrapper">
                                                            <div className="dropdown-link-column">
                                                                <Link to="/" className="dropdown-link">Home V1</Link>
                                                                <Link to="/about" className="dropdown-link">About</Link>
                                                                <Link to="/pricing" className="dropdown-link">Pricing</Link>
                                                                <Link to="/chapters" className="dropdown-link">Chapters</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="" data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper cart-wrapper" data-node-type="commerce-cart-wrapper">
                            <a data-w-id="ec261ed6-1354-ca9a-7ff5-ab76103da11a" className={`w-commerce-commercecartopenlink cart-button ${theme === 'light' ? 'white' : ''} w-inline-block`} role="button" aria-haspopup="dialog" aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#">
                                <div className="w-inline-block">Cart(</div>
                                <div className={`w-commerce-commercecartopenlinkcount cart-quantity ${theme === 'light' ? 'white' : ''}`}>0</div>
                                <div className="w-inline-block">)</div>
                            </a>
                            <div style={{display: 'none'}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper" data-node-type="commerce-cart-container-wrapper">
                                <div data-node-type="commerce-cart-container" role="dialog" className="w-commerce-commercecartcontainer cart-container">
                                    <div className="card">
                                        <div className="w-commerce-commercecartheader cart-header">
                                            <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                                            <a className="w-commerce-commercecartcloselink close-button w-inline-block" role="button" aria-label="Close cart" data-node-type="commerce-cart-close-link">
                                                <div></div>
                                            </a>
                                        </div>
                                        <div className="w-commerce-commercecartformwrapper cart-form-wrapper">
                                            <div className="w-commerce-commercecartemptystate empty-state">
                                                <div>No items found.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-menu-right-side">
                        <div className="buttons-row nav-menu-hidden-on-mobile">
                            {isAuthenticated ? (
                                <>
                                    <Link to="/dashboard" className={linkClass}>
                                        <div className="item-icon-left small">
                                            <div className="custom-icon-font"></div>
                                        </div>
                                        <div>Dashboard</div>
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className={`secondary-button small ${theme === 'light' ? 'white' : ''}`}
                                        style={{ border: 'none', cursor: 'pointer' }}
                                    >
                                        <div className="text-block">Logout</div>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to={ROUTES.SIGN_IN} className={`secondary-button small ${theme === 'light' ? 'white' : ''} w-inline-block`}>
                                        <div className="text-block">Sign in</div>
                                    </Link>
                                    <Link to="/pricing" className={`button-primary small ${theme === 'light' ? 'white' : ''} w-inline-block`}>
                                        <div className="text-block">Choose a subject</div>
                                        <div className="item-icon-right small">
                                            <div className="custom-icon-font"></div>
                                        </div>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="hamburger-menu w-nav-button">
                            <div className="hamburger-menu-flex">
                                <div className="hamburger-menu-line top"></div>
                                <div className="hamburger-menu-line middle"></div>
                                <div className="hamburger-menu-line bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}