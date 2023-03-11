import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseGridMain from './CourseGridMain';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/ctti-img/logo-main.png';
import Api from "../../lib/api";
import Preloader from "../../components/Preloader";
import {errorResponseMessage} from "../../lib/helper";

const Course = () => {
    const {api} = Api();
    const [isLoading, setIsLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [paginate, setPaginate] = useState([]);

    const handleChangeCategory = () => {
        api.get("courses?fields[0]=Name&fields[1]=Classs&fields[2]=Duration&fields[3]=Price&fields[4]=Slug&populate[0]=Thumbnail")
            .then(res => {
                setCourses(Array.from(res.data.data))
                setPaginate(res.data.meta.pagination)
            })
            .catch(err => errorResponseMessage(err));
    }

    useEffect(() => {
        handleChangeCategory()
        document.querySelector("body").classList.add("courses-grid-page");
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])

    return (
        <>
            {isLoading && <Preloader/>}
            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Course"
                    />

                    <CourseGridMain courses={courses} paginate={paginate}/>

                    {/* scrolltop-start */}
                    <ScrollToTop/>
                    {/* scrolltop-end */}
                </div>
            </div>
        </>
    );
}


export default Course;

