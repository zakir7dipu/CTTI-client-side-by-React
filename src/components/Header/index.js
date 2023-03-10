import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import MenuItems from './MenuItems';

import normalLogo from '../../assets/ctti-img/logo-main.png';
import stickyLogo from '../../assets/ctti-img/logo-main.png';
import {goToExternalLink} from "../../lib/helper";

const Header = (props) => {
    const {
        topbarEnable,
        menuCategoryEnable,
        headerClass,
        parentMenu,
        headerNormalLogo,
        headerStickyLogo,
        settings,
        socialLinks
    } = props;
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sticky is displayed after scrolling for 100 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    useEffect(() => {
        setPhone(settings.HotLinkNumber)
        setEmail(settings.HotLinkEmail)
    }, [settings])

    return (
        <>

            <header id="react-header" className={headerClass ? headerClass : 'react-header react-header-three'}>
                <div className={isVisible ? 'header-area react-sticky' : 'header-area'}>
                    {
                        topbarEnable ?
                            <div className="topbar-area style1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="topbar-contact">
                                                <ul>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round" className="feather feather-phone">
                                                            <path
                                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                        </svg>
                                                        <Link to={`tel:${phone?.replaceAll(" ", "")}`}> {phone}</Link>
                                                    </li>
                                                    <li>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round" className="feather feather-mail">
                                                            <path
                                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                            <polyline points="22,6 12,13 2,6"></polyline>
                                                        </svg>
                                                        <Link to={`mailto:${email}`}>{email}</Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 text-right">
                                            <div className="toolbar-sl-share">
                                                <ul className="social-links">
                                                    {Object.keys(socialLinks).map((socialLink, index) => {
                                                        if (socialLinks[socialLink]) {
                                                            return (
                                                                <li key={index}><span style={{cursor: "pointer"}}
                                                                                      onClick={() => goToExternalLink(socialLinks[socialLink])}><span
                                                                    aria-hidden="true"
                                                                    className={`social_${socialLink}`}></span></span>
                                                                </li>
                                                            )
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }
                    <div className="menu-part">
                        <div className="container">
                            <div className="react-main-menu">
                                <nav>
                                    <div className="menu-toggle">
                                        <div className="logo">
                                            {
                                                isVisible ?
                                                    <Link to="/" className="logo-text">
                                                        <img src={headerStickyLogo ? headerStickyLogo : stickyLogo}
                                                             alt=""/>
                                                    </Link> :
                                                    <Link to="/" className="logo-text">
                                                        <img src={headerNormalLogo ? headerNormalLogo : normalLogo}
                                                             alt=""/>
                                                    </Link>
                                            }
                                        </div>
                                        <button type="button" id="menu-btn"
                                                className={menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"}
                                                onClick={() => {
                                                    setMenuOpen(!menuOpen)
                                                }}>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className={menuOpen ? "react-inner-menus menu-open" : "react-inner-menus"}>
                                        {
                                            menuCategoryEnable ?
                                                <div className="cate-part">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="feather feather-more-vertical">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokLinecap="round" strokeLinejoin="round"
                                                         className="feather feather-more-vertical">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                         className="feather feather-more-vertical">
                                                        <circle cx="12" cy="12" r="1"></circle>
                                                        <circle cx="12" cy="5" r="1"></circle>
                                                        <circle cx="12" cy="19" r="1"></circle>
                                                    </svg>
                                                    <ul className="react-category-menu">
                                                        <li><Link to="#">Categories <i
                                                            className="arrow_carrot-down"></i></Link>
                                                            <ul>
                                                                <li><Link to="/course">English Book</Link></li>
                                                                <li><Link to="/course">Math Book</Link></li>
                                                                <li><Link to="/course">Story Book</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div> : ''
                                        }
                                        <ul id="backmenu" className="react-menus react-sub-shadow">
                                            <MenuItems
                                                parentMenu={parentMenu}
                                            />
                                        </ul>
                                        {/*<div className="searchbar-part"> */}
                                        {/*	<form className="search-form">*/}
                                        {/*		<input type="text" className="form-input" placeholder="Search Course" />*/}
                                        {/*		<Link to="/course" className="form-button">*/}
                                        {/*			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke?inejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>*/}
                                        {/*		</Link>*/}
                                        {/*	</form>*/}
                                        {/*</div>*/}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;