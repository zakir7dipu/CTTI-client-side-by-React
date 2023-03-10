import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab.png';
import aboutBadge from '../../assets/images/about/badge.png';
import {useEffect} from "react";
import ReactMarkdown from "react-markdown";
import {goToExternalLink} from "../../lib/helper";

const About = ({sectionMeta}) => {
    return (
        <div className="about__area about__area_one p-relative pt---10 pb---120">
            <div className="container">                        
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image">
                            <img src={aboutImg} alt="About" />
                            <img className="react__shape__ab" src={aboutBadge} alt="Shape Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.3s" dangerouslySetInnerHTML={{__html: sectionMeta?.Title}}/>
                            <ReactMarkdown className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.4s">{sectionMeta?.Text}</ReactMarkdown>
                            {sectionMeta?.Button && <ul className="wow animate__fadeInUp" data-wow-duration="0.5s">
                                <li className="last-li">
                                    <em>Get Support</em>
                                    <span style={{cursor: "pointer"}} onClick={(e)=>{
                                        e.preventDefault();
                                        goToExternalLink(sectionMeta?.Button.Url);
                                    }
                                    }>{sectionMeta?.Button.Text}</span>
                                </li>
                            </ul> }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;