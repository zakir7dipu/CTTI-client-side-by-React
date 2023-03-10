import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
import SingleCourseThree from '../../components/Course/SingleCourseThree';
import {useInternalLink} from "../../lib/helper";

const CourseGridMain = ({courses, paginate}) => {

    const {page,pageCount} = paginate;
    const [btnItems, setBtnItems] = useState([])

    const paginateFunction = () => {
        let actionBtn = [];
        for (let number = 1; number <= pageCount; number++) {

            let isActive = false;
            if(number === page) isActive = true;

            let item = (
                <li className={isActive && "active"}><Link to="#">{number}</Link></li>
            )
            actionBtn = [...actionBtn, item]
            setBtnItems(actionBtn)
        }
    }

    return (
        <div className="react-course-filter back__course__page_grid pb---40 pt---110">
            <div className="container pb---70"> 

                <div className="row align-items-center back-vertical-middle shorting__course2 mb-50">
                    <div className="col-md-6">
                        <div className="all__icons"> 
                            <div className="result-count">We found {courses.length} courses available for you</div>
                        </div>
                    </div>
                </div>                                                  
                <div className="row"> 
                    {courses.map((data, index) => {
                        const { attributes } = data;
                        return (  
                            <div key={index} className="col-lg-4">
                            {
                                <SingleCourseThree
                                    courseID={attributes.Slug}
                                    courseImg= {`${useInternalLink(attributes.Thumbnail.data.attributes.formats.small.url)}`}
                                    courseTitle= {attributes.Name}
                                    courseLesson= {attributes.Classs}
                                    courseDuration= {attributes.Duration}
                                    coursePrice= {attributes.Price}
                                />
                            }
                            </div>
                        )
                    })}
                </div>
                {pageCount > 1 && <ul className="back-pagination pt---20">{btnItems}</ul>}

            </div>
        </div>
    );
}

export default CourseGridMain;