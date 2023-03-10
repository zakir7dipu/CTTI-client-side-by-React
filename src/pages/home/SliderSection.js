import {useEffect, useState} from 'react';
import ModalVideo from 'react-modal-video';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";

import sliderImg1 from "../../assets/images/slider/1.jpg";
import sliderImg2 from "../../assets/images/slider/2.jpg";
import sliderImg11 from "../../assets/images/slider/11.jpg";
import sliderImg12 from "../../assets/images/slider/12.jpg";
import {useInternalLink} from "../../lib/helper";

const HomeSlider = ({carousel}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [sliders, setSliders] = useState([]);
    const [videoId, setVideoId] = useState('e5Hc2B50Z7c');
    const openModal = () => setIsOpen(!isOpen);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };
    useEffect(()=>{
        if(carousel.length) {
            setSliders(carousel)
        }
    },[carousel])

    return (
        <>
            {sliders.length && <div className="react-slider-part">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => {
                    openModal();
                }}/>
                <div className="home-sliders home2">
                    <Slider {...sliderSettings}>
                        {sliders.map((slide, index) => {
                            return (
                                <div className="single-slide" key={index}>
                                    <div className="slider-img">
                                        <img className="desktop"
                                             src={useInternalLink(slide.BackgroundImage.data.attributes.url)}/>
                                        <img className="mobile" src={useInternalLink(slide.BackgroundImage.data.attributes.url)}
                                             alt="Slider Image 1"/>
                                    </div>
                                    <div className="container">
                                        <div className="slider-content">
                                            <div className="content-part">
                                                <span className="slider-pretitle wow animate__fadeInUp"
                                                      data-wow-duration="1s">{slide.Slogan}</span>
                                                <h2 className="slider-title wow animate__fadeInUp"
                                                    data-wow-duration="1s" dangerouslySetInnerHTML={{__html: slide.Title}}>
                                                </h2>
                                                <div className="slider-btn wow animate__fadeInUp"
                                                     data-wow-duration="1.2s">
                                                    <Link to={slide.Button.Url}
                                                          className="react-btn-border">{slide.Button.Text}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event__video-btn--play wow animate__fadeInUp"
                                             data-wow-duration="1.4s">
                                            <Link to="#" className="event__video-btn--play-btn custom-popup"
                                                  onClick={() => {
                                                      openModal();
                                                      setVideoId(slide.VideoID)
                                                  }}>
                                                <i className="arrow_triangle-right"></i>
                                                <em>Watch Video <br/>Intro</em>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        {/*<div className="single-slide">*/}
                        {/*    <div className="slider-img">*/}
                        {/*        <img className="desktop" src={sliderImg2} alt="Slider Image 1" />*/}
                        {/*        <img className="mobile" src={sliderImg12} alt="Slider Image 1" />*/}
                        {/*    </div>*/}
                        {/*    <div className="container">*/}
                        {/*        <div className="slider-content">*/}
                        {/*            <div className="content-part">*/}
                        {/*                <span className="slider-pretitle wow animate__fadeInUp" data-wow-duration="3s">Great Quality Cocial life</span>*/}
                        {/*                <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s">*/}
                        {/*                    Discover the world of<br /> possible university.*/}
                        {/*                </h2>*/}
                        {/*                <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">*/}
                        {/*                    <Link to="/about" className="react-btn-border">Admissions</Link>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="event__video-btn--play wow animate__fadeInUp" data-wow-duration="1.4s">*/}
                        {/*        <Link to="#" className="event__video-btn--play-btn custom-popup" onClick={() => { openModal(); }}>*/}
                        {/*            <i className="arrow_triangle-right"></i>*/}
                        {/*            <em>Watch Video <br />Intro</em>*/}
                        {/*        </Link>*/}
                        {/*        </div>*/}
                        {/*    </div>                        */}
                        {/*</div>*/}
                    </Slider>
                </div>
            </div>}

        </>
    );
}

export default HomeSlider;