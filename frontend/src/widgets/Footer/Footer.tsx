import { Link } from 'react-router-dom'
import {ROUTES} from "@/app/router/routes.ts";

interface FooterProps {
    variant?: 'full' | 'minimal'
}

export const Footer = ({ variant = 'full' }: FooterProps) => {
    const logoSrc = '/assets/webflow/images/smashap_dark.svg';

    // Минимальный футер (Footer V3)
    if (variant === 'minimal') {
        return (
            <footer data-w-id="369acd65-337f-5722-d652-5227d6299733" className="footer-wrapper">
                <div className="footer-card v3">
                    <div className="w-layout-blockcontainer container-default w-container">
                        <div className="footer-bottom v2">
                            <div className="footer-logo-wrapper v3">
                                <Link to={ROUTES.HOME} className="logo-link w-inline-block">
                                    <img src={logoSrc} alt="AP Exams Logo" style={{width: 'auto', height: '40px'}}/>
                                </Link>
                            </div>
                            <p>Copyright © SmashAP 2026</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    // Полный футер (Footer V1)
    return (
        <footer data-w-id="016d8e1b-8412-bb5e-68d3-3aceb3839135" className="footer-wrapper">
            <div className="footer-card">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="footer-top v1">
                        <div id="w-node-_4ce7d77c-4018-d530-59d0-9a7e57241a47-57241a43" className="mg-top-64px mg-top-0-tablet">
                            <div className="footer-logo-wrapper">
                                <Link to={ROUTES.HOME} className="logo-link w-inline-block">
                                    <img src={logoSrc} alt="AP Exams Logo" style={{width: '50%', height: 'auto'}}/>
                                </Link>
                            </div>
                            <div className="mg-top-16px mg-top-8px-tablet">
                                <p>Online School that will really  prepare you to your AP exams</p>
                            </div>
                            <div className="mg-top-24px mg-top-16px-tablet">
                                <div className="social-media-grid">

                                    <a href="https://www.twitter.com/" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media"></div>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media"></div>
                                    </a>

                                    <a href="https://www.youtube.com/" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media"></div>
                                    </a>
                                    <a href="https://www.tiktok.com/" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media">
                                            <img src="/assets/webflow/images/tiktok-icon.svg" alt="tiktok-icon"/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column-card">
                            <div className="w-layout-grid grid-footer-columns">
                                <div id="w-node-_4ce7d77c-4018-d530-59d0-9a7e57241a53-57241a43">
                                    <h3 className="footer-title">Main pages</h3>
                                    <div className="footer-column---main-pages">
                                        <ul role="list" className="footer-column-links">
                                            <li className="footer-column-item">
                                                <Link to={ROUTES.HOME} className="footer-item-link w-inline-block">
                                                    <div>Home</div>
                                                </Link>
                                            </li>
                                            <li className="footer-column-item">
                                                <Link to={ROUTES.CATALOG} className="footer-item-link w-inline-block">
                                                    <div>Buy Courses</div>
                                                </Link>
                                            </li>
                                            <li className="footer-column-item">
                                                <Link to={ROUTES.ABOUT} className="footer-item-link w-inline-block">
                                                    <div>About</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="w-node-_4ce7d77c-4018-d530-59d0-9a7e57241a6c-57241a43">
                                    <h3 className="footer-title">Courses</h3>
                                    <ul role="list" className="footer-column-links">
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-calc-ab-game-of-graphs/preview' className="footer-item-link w-inline-block">
                                                <div>AP Calc AB</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-csp-breaking-code/preview' className="footer-item-link w-inline-block">
                                                <div>AP Cs P</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-calc-bc-67-problems/preview' className="footer-item-link w-inline-block">
                                                <div>AP Calc BC</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-csa-escape-the-matrix/preview' className="footer-item-link w-inline-block">
                                                <div>AP Cs A</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-lang/preview' className="footer-item-link w-inline-block">
                                                <div>AP Lang</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-psych/preview' className="footer-item-link w-inline-block">
                                                <div>AP Psych</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="w-node-_4ce7d77c-4018-d530-59d0-9a7e57241a6c-57241a43">
                                    <h3 className="footer-title">Other</h3>
                                    <ul role="list" className="footer-column-links">
                                        <li className="footer-column-item">
                                            <Link to={ROUTES.SIGN_IN} className="footer-item-link w-inline-block">
                                                <div>Sign in</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to={ROUTES.TERMS_AND_CONDITIONS} className="footer-item-link w-inline-block">
                                                <div>Terms & Conditions</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom v1">
                        <div className="text-center">
                            <p>
                                Copyright © SmashAP 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}