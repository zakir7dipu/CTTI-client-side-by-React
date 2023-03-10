import React from 'react';
import { Link } from 'react-router-dom';

// Image
import aboutImg from '../../assets/images/about/ab3.png';
import shapeImg1 from '../../assets/images/about/shape_02.png';

const About = () => {

    return (
        <div className="about__area about2__area about3__area p-relative pb---60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                            <img className="react__shape__1" src={shapeImg1} alt="Shape Image" />
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content">
                            <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">About Us</h6>
                            <h2 className="about__title wow animate__fadeInUp" data-wow-duration="0.5s">The quickest and Effected way for Learing</h2>
                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.7s">Why I say old chap that is spiffing in my flat such a fibber mufty mush, porkies barney pukka only a quid a what a load of rubbish good time.</p>
                            <ul>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.3s"><i className="icon_check"></i> Access more then 100K online courses</li>
                                <li className="wow animate__fadeInUp" data-wow-duration="0.5s"><i className="icon_check"></i> Upskill your organization. </li>
                            </ul>
                            <div className="about__btn wow animate__fadeInUp" data-wow-duration="0.7s">
                                <Link to="/about"> Read More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;