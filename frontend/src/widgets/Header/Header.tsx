import {Link} from 'react-router-dom'
import {useAuth} from '@/features/auth/model/useAuth'
import {ROUTES} from '@/app/router/routes'
import {CartBadge, CartModal} from "@/features/cart";
import {useState} from "react";

interface HeaderProps {
    variant?: 'full' | 'minimal'
    theme?: 'light' | 'dark'
}

export const Header = ({variant = 'full', theme = 'dark'}: HeaderProps) => {
    const {isAuthenticated, logout} = useAuth()
    const [isCartOpen, setIsCartOpen] = useState(false)

    // Выбор логотипа в зависимости от темы
    const logoSrc = theme === 'light'
        ? '/assets/webflow/images/smashap_white_full.svg'
        : '/assets/webflow/images/smashap_dark_full.svg'


    // Минимальный хэдер для auth страниц (Header V3)

    if (variant === 'minimal') {
        return (
            <div data-w-id="b209dc69-0839-20fe-af3a-c9ee1dec5ef2" data-animation="default" data-collapse="all"
                 data-duration="400"
                 data-easing="ease" data-easing2="ease" role="banner" className="header-wrapper w-nav">
                <div className="container-default w-container">
                    <div data-w-id="b209dc69-0839-20fe-af3a-c9ee1dec5ef4" className="header-container-wrapper center">
                        <div className="logo-wrapper v1">
                            <Link to="/" className="logo-link w-inline-block" style={{display:"flex", alignItems: 'center', justifyContent: 'center' }}>
                                <img src={logoSrc} alt="AP Exams Logo" style={{width: 'auto', height: '60px'}}/>
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
        <div data-w-id="c5a10a2d-1ce6-df65-3882-e8a1991bf291" data-animation="default" data-collapse="medium"
             data-duration="400"
             data-easing="ease" data-easing2="ease" role="banner" className={headerClass}>
            <div className="container-default w-container">
                <div data-w-id="c7c25743-3af1-4a48-2846-73035f33d328" className="header-container-wrapper">
                    <div className="nav-menu-left-side v1">
                        <div className="logo-wrapper v1">
                            <Link to="/" className="logo-link w-inline-block" style={{display:"flex", alignItems: 'center', justifyContent: 'center' }}>
                                <img src={logoSrc} alt="AP Exams Logo" style={{width: 'auto', height: '40px'}}/>
                            </Link>
                        </div>
                        <nav role="navigation"
                             className={`nav-menu-wrapper v1 ${theme === 'light' ? 'dark-mode' : ''} w-nav-menu`}>
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
                                        <div
                                            className={`dropdown-toggle ${theme === 'light' ? 'white' : ''} w-dropdown-toggle`}>
                                            <div style={theme === 'light' ? {color: 'white'} : {}}>Pages</div>
                                            <div
                                                className="icon-font-squared dropdown-arrow"
                                                style={theme === 'light' ? {color: 'white'} : {}}
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
                                                                <Link to={ROUTES.HOME}
                                                                      className="dropdown-link">Home</Link>
                                                                <Link to={ROUTES.ABOUT}
                                                                      className="dropdown-link">About</Link>
                                                                <Link to={ROUTES.CATALOG}
                                                                      className="dropdown-link">Courses</Link>
                                                                <Link to={ROUTES.TERMS_AND_CONDITIONS}
                                                                      className="dropdown-link">Terms &
                                                                    Conditions</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {isAuthenticated && (
                                                        <div>
                                                            <h3 className="dropdown-title">My Learning</h3>
                                                            <div className="w-layout-grid main-pages-wrapper">
                                                                <div className="dropdown-link-column">
                                                                    <Link to={ROUTES.DASHBOARD}
                                                                          className="dropdown-link">Dashboard</Link>
                                                                    <Link to={ROUTES.MY_COURSES}
                                                                          className="dropdown-link">My Courses</Link>
                                                                    <Link to={ROUTES.STATISTICS}
                                                                          className="dropdown-link">Statistics</Link>
                                                                    <button
                                                                        onClick={logout}
                                                                        className="dropdown-link"
                                                                        style={{
                                                                            background: 'none',
                                                                            border: 'none',
                                                                            padding: 0,
                                                                            cursor: 'pointer',
                                                                            textAlign: 'left',
                                                                            width: '100%'
                                                                        }}
                                                                    >
                                                                        Logout
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div data-open-product="" data-wf-cart-type="modal" data-wf-cart-query=""
                             data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper cart-wrapper"
                             data-node-type="commerce-cart-wrapper">
                            <a
                                data-w-id="ec261ed6-1354-ca9a-7ff5-ab76103da11a"
                                className="w-commerce-commercecartopenlink cart-button w-inline-block"
                                role="button"
                                aria-haspopup="dialog"
                                aria-label="Open cart"
                                data-node-type="commerce-cart-open-link"
                                href="#"
                                style={{color: theme === 'light' ? '#fff' : '#000'}}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setIsCartOpen(true)
                                }}
                            >
                                <CartBadge theme={theme}/>
                            </a>

                            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
                        </div>
                    </div>

                    <div className="nav-menu-right-side">
                        <div className="buttons-row nav-menu-hidden-on-mobile">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to={ROUTES.DASHBOARD}
                                        className="w-inline-block"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginRight: '16px'
                                        }}
                                    >
                                        <span
                                            className="custom-icon-font"
                                            style={theme === 'light' ? {color: 'white'} : {}}
                                        ></span>
                                    </Link>
                                    <Link to={ROUTES.CATALOG}
                                          className={`button-primary small ${theme === 'light' ? 'white' : ''} w-inline-block`}>
                                        <div className="text-block">Choose a subject</div>
                                        <div className="item-icon-right small">
                                            <div className="custom-icon-font"></div>
                                        </div>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to={ROUTES.SIGN_IN}
                                          className={`secondary-button small ${theme === 'light' ? 'white' : ''} w-inline-block`}>
                                        <div className="text-block">Sign in</div>
                                    </Link>
                                    <Link to={ROUTES.CATALOG}
                                          className={`button-primary small ${theme === 'light' ? 'white' : ''} w-inline-block`}>
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