import React from 'react';
import { Link } from 'react-router-dom';

import courseImg1 from '../../assets/images/course/1.png';
import coursetypeIcon from '../../assets/images/course/beg.png';
import {currencyFormat} from "../../lib/helper";

const SingleCourseThree = (props) => {
    const { itemClass, courseID, courseImg, courseTitle, courseLesson, coursePrice, courseDuration } = props;
	return(
        <div className={itemClass ? itemClass : 'single-studies grid-item'}>
            <div className="inner-course">
                <div className="case-img">
                    <img src={courseImg && courseImg} alt={courseTitle} />
                </div>
                <div className="case-content">
                    <h4 className="case-title"> <Link to={`/course/${courseID}`}>{courseTitle && courseTitle}</Link></h4>

                    <ul className="react-ratings">
                        <ul className="meta-course">
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> {courseLesson} Lesson </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {courseDuration}</li>
                        </ul>
                        <li className="price">{currencyFormat(coursePrice)}</li>
                    </ul>
                </div>
            </div>
        </div>
	)
}

export default SingleCourseThree