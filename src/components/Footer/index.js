
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {goToExternalLink, uid, useInternalLink} from "../../lib/helper";
import Api from "../../lib/api";
import SecondaryMenu from "./FooterMenu/"

const Footer = (props) => {
    const {api} = Api();
    const { footerClass, settings, socialLinks } = props;
    const [footerMeta, setFooterMeta] = useState([]);
    const getFooterData = () => {
        api.get("footet?populate[FooterMenu][populate]=*")
            .then(res=>{
                const {attributes} = res.data.data
                setFooterMeta(attributes)
            })
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getFooterData()
    },[settings]);

    return (
        <>
            <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-1">
                                    <div className="footer-logo white">
                                        <Link to="/" className="logo-text"><img src={settings?.Logo && useInternalLink(settings.Logo.data.attributes.url)} alt="Footer Logo" /></Link>
                                    </div>
                                    <h5 className="footer-subtitle">{footerMeta?.FooterText}</h5>
                                    <ul className="footer-address">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            <span style={{cursor: "pointer"}} onClick={()=>{
                                                goToExternalLink(`tel:${settings?.HotLinkNumber?.replaceAll(" ","")}`)
                                            }}> &nbsp;{settings?.HotLinkNumber}</span></li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            <span style={{cursor: "pointer"}} onClick={()=>{
                                                goToExternalLink(`mailto:${settings?.HotLinkEmail}`)
                                            }}>&nbsp;{settings?.HotLinkEmail}</span></li>
                                    </ul>                               
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-2">
                                    <h3 className="footer-title">About Us</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/course">Courses</Link></li>
                                            <li><Link to="/event">Events</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {footerMeta?.FooterMenu && Array.from(footerMeta.FooterMenu).map((menu)=>{
                                return (
                                    <SecondaryMenu menu={menu} key={uid()}/>
                                )
                            })}

                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget-4">
                                    <h3 className="footer-title">Newsletter</h3> 
                                    <div className="footer3__form">
                                        <p>Get the latest Echooling news <br />delivered to you inbox</p>
                                        <form action="#">
                                            <input type="email" required placeholder="Enter your email" />
                                            <button className="footer3__form-1">
                                                <i className="arrow_right"></i>
                                            </button>
                                        </form>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">  
                    <div className="container">                  
                        <div className="react-copy-left">© {new Date().getFullYear()} <Link to="/">Chartered Technical Training Institute (CTTI)</Link> All Rights Reserved. Design and Develop By <Link to="#" onClick={(e)=>{
                            e.preventDefault();
                            goToExternalLink("https://www.bizzsol.com.bd")
                        }}>Bizz Solutions Plc.</Link> </div>
                        <div className="react-copy-right">
                            <ul className="social-links">
                                <li className="follow">Follow us</li>
                                {Object.keys(socialLinks).map((socialLink, index)=>{
                                    if (socialLinks[socialLink]) {
                                        return (
                                            <li key={uid()}><Link to="#" onClick={(e) => {
                                                e.preventDefault();
                                                goToExternalLink(socialLinks[socialLink])
                                            }}><span aria-hidden="true"
                                                                   className={`social_${socialLink}`}></span></Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;