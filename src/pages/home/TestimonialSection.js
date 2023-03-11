import React from 'react';
import Slider from "react-slick";

import SectionTitle from '../../components/SectionTitle'
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg from '../../assets/images/testimonial/testimonial.png';
import comaImg from '../../assets/images/testimonial/coma.png';
import {getGravatar, uid} from "../../lib/helper";

const Testimonial = ({data, title}) => {

    const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="react-clients react-clientso home-testimonial pt---90 pb---120">
                <div className="container">
                    <SectionTitle Title={title} />
                    <div className="client-slider wow animate__fadeInUp" data-wow-duration="0.3s">
                        <Slider {...testimonialSettings}>
                            {data.length && Array.from(data).map(item=>{
                                const {attributes} = item
                                console.log(attributes)
                                return (
                                    <SingleTestimonial
                                        key={uid()}
                                        itemclassName="single-client"
                                        itemImg={getGravatar(attributes?.Email, 200) }
                                        Title={attributes?.Name}
                                        Designation="Student"
                                        Desc={attributes?.Message}
                                        comaImg={comaImg}
                                    />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial