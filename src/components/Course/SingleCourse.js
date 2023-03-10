import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'

import courseImg1 from '../../assets/images/course/1.png';
import {currencyFormat} from "../../lib/helper";

const SingleCourse = (props) => {
    const { itemClass,courseID,courseImg,courseTitle,courseLesson,courseDuration,coursePrice } = props;
    useEffect(()=>{
        console.log(coursePrice)
    },[coursePrice])
	return(
        <div className={itemClass ? itemClass : 'course__item mb-30'}>
            <div className="course__thumb">
                <Link to={`/course/${courseID}`}>
                    <img src={courseImg} alt="image" />
                </Link>
            </div>
            <div className="course__inner">
                <ul>
                    {/*<li>{courseName ? courseName : 'UX Design'}</li>*/}
                    <li>{courseLesson} Lessons</li>
                </ul>
                <h3 className="react-course-title">
                    <Link to={`/course/${courseID}`}>
                        {courseTitle}
                    </Link>
                </h3>
                <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{courseDuration}</span>
                    </div>                                            
                    <div className="react__user">
                        {currencyFormat(parseInt(coursePrice))}
                    </div>
                </div>
            </div>                                    
        </div>
	)
}

export default SingleCourse