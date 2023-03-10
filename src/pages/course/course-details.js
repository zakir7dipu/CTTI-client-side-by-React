import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb/CourseBreadcrumbs';
import CourseDetailsMain from './CourseDetailsMain';
import ScrollToTop from '../../components/ScrollTop';

import Api from "../../lib/api";

const CourseDetails = () => {
    const {api} = Api();
    const [course, setCourse] = useState([]);
    const [banner, setBanner] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [curricula, setCurricula] = useState([]);

    const location = useLocation();
    const courseURL = location.pathname.split('/');
    console.log(courseURL[2])

    const handleChangeCategory = () => {
        api.get(`courses/${courseURL[2]}`)
            .then(res => {
                let {attributes} = res.data.data
                setCourse(attributes)
                setBanner(attributes.Banner.data.attributes.url)
                setCurricula(attributes.curricula.data)
                setThumbnail(attributes.Thumbnail.data.attributes.url)
            })
            .catch(err => console.log(err));
    }

    useEffect(()=>{
        handleChangeCategory()
        document.querySelector("body").classList.add("course-single")
    },[])

    return (
        <div className="react-wrapper">
            <div className="react-wrapper-inner">
                <Breadcrumb
                    courseBannerImg={`${banner}`}
                    courseTitle={course && course.Name}
                    courseName={course && course.Name}
                    courseLesson={course.Classs}
                />

                <CourseDetailsMain
                    videoID={course.VideoId}
                    courseImg={thumbnail}
                    courseTitle={course.Name}
                    courseName={course.Name}
                    courseDetails={course.Discription}
                    courseLesson={course.Classs}
                    courseDuration={course.Duration}
                    couresClassPerWeek={course.ClassPerWeek}
                    couresClassDuration={course.ClassDuration}
                    coursePrice={course.Price}
                    couresDeliveryMode={course.DeliveryMode}
                    courseCurriculumText={course.curriculum_text}
                    // courseRegularPrice={currencyFormat(0)}
                    courseLanguage={course.Language}
                    curricula={curricula}
                />

                {/* scrolltop-start */}
                <ScrollToTop/>
                {/* scrolltop-end */}
            </div>
        </div>
    );
}

export default CourseDetails;