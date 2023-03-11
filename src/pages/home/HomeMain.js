import React, {useEffect, useState} from 'react';
import Blog from './BlogSection';
import About from './AboutSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import Campus from './CampusSection';
import Course from './CourseSection';
import Event from './EventSection';
import Counter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';
import Preloader from "../../components/Preloader";

const HomeMain =({reviews,meta}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hero, setHero] = useState([]);
	const [popular, setPopular] = useState([]);
	const [aboutUs, setAboutUs] = useState([]);
	const [clients, setClients] = useState([]);
	const [eventTitle, setEventTitle] = useState("");
	const [quoteTitle, setQuoteTitle] = useState("");
	// const {Hero,WorkTitle,AboutUs,Client,EventTitle,QuoteTitle} = meta;
	useEffect(()=>{
		// console.log(meta)
		if(meta){
			setAboutUs(meta.AboutUs)
			setHero(meta.Hero);
			setPopular(meta.Popular);
			setClients(meta.Client);
			setEventTitle(meta.EventTitle);
			setQuoteTitle(meta.QuoteTitle);
			// Simulate data loading delay
			setTimeout(() => {
				setIsLoading(false);
			}, 500);
		}
	},[meta,reviews])
		return (
			<>
				{ isLoading && <Preloader/>	}

				<div className="react-wrapper">
            		<div className="react-wrapper-inner">
						{/* SliderSection-start */}
						<HomeSlider carousel={Array.from(hero)}/>
						{/* SliderSection-start */}

						{/* Course-area-start */}
						<Course sectionMeta={popular}/>
						{/* Course-area-end */}

						{/* About-area-start */}
						<About sectionMeta={aboutUs}/>
						{/* About-area-end */}

						{/* Counter-area-start */}
						<Counter sectionMeta={clients}/>
						{/* Counter-area-end */}

						{/* Event-area-start */}
						{/*<Event title={eventTitle}/>*/}
						{/* Event-area-end */}

						{/* testmonial-area-start */}
						{reviews && <Testimonial data={reviews} title={quoteTitle}/>}
						{/* testmonial-area-end */}

						{/* scrolltop-start */}
						<ScrollToTop
							scrollClassName="home react__up___scroll"
						/>
						{/* scrolltop-end */}
					</div>
				</div>
			</>
		);
	}

export default HomeMain;