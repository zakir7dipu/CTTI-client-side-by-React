import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle'

import SingleCourse from '../../components/Course/SingleCourse';
import Api from "../../lib/api";
import {useInternalLink} from "../../lib/helper";


// import courses from '../../data/Courses.json';

const Course = ({sectionMeta}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        if(sectionMeta) {
            const {courses} = sectionMeta
            if(courses){
                setCourses(courses.data)
            }
        }

    },[sectionMeta])

    return (

        <div className="popular__course__area pt---100 pb---100">
            <div className="container">
                <SectionTitle Title={sectionMeta?.Title} />
                <div className="row">
                    {Array.from(courses).map((data, index) => {
                        const {attributes} = data
                        return (
                            <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow animate__fadeInUp" data-wow-duration="0.3s">
                                {
                                    <SingleCourse
                                        courseID={attributes.Slug}
                                        courseImg= {useInternalLink(attributes.Thumbnail?.data.attributes.formats.small.url)}
                                        courseTitle= {attributes.Name}
                                        courseLesson= {attributes.Classs}
                                        courseDuration= {attributes.Duration}
                                        coursePrice= {attributes?.Price}
                                        itemClass={""}
                                    />
                                }

                            </div>
                        )
                    }).slice(0, 4)}
                </div>
                <div className="text-center">
                    <Link to="/course" className="view-courses"> View All Courses <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                </div>
            </div>
        </div>
    );
}

export default Course;