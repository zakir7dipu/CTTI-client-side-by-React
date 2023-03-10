import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../assets/images/topics/icon.svg'
import icon2 from '../../assets/images/topics/icon2.svg'
import icon3 from '../../assets/images/topics/icon3.svg'

const Topics = () => {

    return (
        <div className="react_populars_topics react_populars_topics2 pt---100 pb---100">
            <div className="container"> 
                <div className="react__title__section react__title__section-all">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Echooling available courses</h6>
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s"> Online Coaching Lessons For Remote Learning </h2>
                        </div>
                    </div>
                </div> 
                <div className="row pt---30">
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="item__inner">         
                            <div className="icon">
                                <img src={icon1} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Accredited Campus</Link></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                <Link to="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Best Quality Graduate</Link></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                <Link to="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon3} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><Link to="/course">Inspiring Student Life</Link></h3>
                                <p>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                <Link to="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            </div>                                    
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    );
}

export default Topics;