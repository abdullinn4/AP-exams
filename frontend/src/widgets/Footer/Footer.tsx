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
                            <p>
                                Copyright © SmashAP 2026 |
                                <a
                                    href="mailto:info@smashap.com"
                                    style={{
                                        marginLeft: '8px',
                                        color: '#7C3AED',
                                        textDecoration: 'none',
                                        fontWeight: '600'
                                    }}
                                >
                                    info@smashap.com
                                </a>
                            </p>
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
                                <p>Join the AP community that gets you results</p>
                            </div>
                            <div className="mg-top-24px mg-top-16px-tablet">
                                <div className="social-media-grid">

                                    <a href="https://www.instagram.com/kamilsmashap?igsh=eXM5aWdhYWF0dGQ4" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media"></div>
                                    </a>

                                    <a href="https://youtube.com/@gabdulkhakovv?si=d80uEKFpzNM8X72C" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media"></div>
                                    </a>
                                    <a href="https://www.tiktok.com/@marat.smashap?_r=1&_t=ZG-94srMyEwlmr" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media">
                                            <img src="/assets/webflow/images/tiktok-icon.svg" alt="tiktok-icon"/>
                                        </div>
                                    </a>
                                    <a href="https://discord.gg/etvUeM62" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://www.facebook.com/share/g/1VAQmeCQbJ/?mibextid=wwXIfr" target="_blank" className="social-media-icon-wrapper-dark w-inline-block">
                                        <div className="icon-font-social-media">
                                            
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
                                                <Link to={ROUTES.FREE_MATERIALS} className="footer-item-link w-inline-block">
                                                    Free Library
                                                </Link>
                                            </li>
                                            <li className="footer-column-item">
                                                <Link to="/about" className="footer-item-link w-inline-block">
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
                                            <Link to='/courses/ap-calc-ab-multiverse-of-calculus/preview' className="footer-item-link w-inline-block">
                                                <div>AP Calc AB</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-cs-principles-breaking-code/preview' className="footer-item-link w-inline-block">
                                                <div>AP CS P</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-calc-bc-67-problems/preview' className="footer-item-link w-inline-block">
                                                <div>AP Calc BC</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/ap-cs-a-escape-the-matrix/preview' className="footer-item-link w-inline-block">
                                                <div>AP CS A</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-lang/preview' className="footer-item-link w-inline-block">
                                                <div>AP Lang</div>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                                <div id="w-node-_4ce7d77c-4018-d530-59d0-9a7e57241a6c-57241a43">
                                    <h3 className="footer-title">Courses</h3>
                                    <ul role="list" className="footer-column-links">
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-psych-the-upside-down/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>AP Psych</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-lit-the-existential-dreamhouse/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>AP Lit</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-hug-demographic-drift/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>AP HuG</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-bio-the-mutation-games/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>AP Bio</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/wh-ap-the-dbq-project/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>WHAP</div>
                                            </Link>
                                        </li>
                                        <li className="footer-column-item">
                                            <Link to='/courses/coming-soon/ap-ush-the-last-of-us/preview'
                                                  className="footer-item-link w-inline-block">
                                                <div>APUSH</div>
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
                                        <li className="footer-column-item">
                                            <Link to={ROUTES.PARTNERSHIP} className="footer-item-link w-inline-block">
                                                <div>Partnership</div>
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
                                Copyright © SmashAP 2026 |
                                <a
                                    href="mailto:info@smashap.com"
                                    style={{
                                        marginLeft: '4px',
                                        color: '#7C3AED',
                                        textDecoration: 'none',
                                        fontWeight: '600'
                                    }}
                                >
                                    info@smashap.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}