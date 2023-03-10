import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";

//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import About from '../pages/about';
import Course from '../pages/course';
import CourseList from '../pages/course/course-list';
import CourseDetails from '../pages/course/course-details';
import CourseSidebar from '../pages/course/course-sidebar';
import Instructor from '../pages/instructor';
import InstructorDetails from '../pages/instructor/instructor-details';
import Event from '../pages/event';
import EventSidebar from '../pages/event/event-sidebar';
import EventDetails from '../pages/event/event-details';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Login from '../pages/authentication/login';
import Signup from '../pages/authentication/signup';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'
import GuestLayout from "./GuestLayout";


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading delay
        setTimeout(() => {
        setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='App'>
            {isLoading ?
                <Preloader /> : ''
            }
            <>
                <LoadTop />
                <Routes>
                    <Route path="/" element={<GuestLayout />}>
                        <Route index exact element={<Home />} />
                        <Route path="course" exact element={<Course />} />
                        <Route path="course/:id" element={<CourseDetails />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>

                    {/*<Route path="/home-2" element={<HomeTwo />} />*/}
                    {/*<Route path="/home-3" element={<HomeThree />} />*/}
                    {/*<Route path="/about" element={<About />} />*/}

                    {/*<Route path="/course-list" exact element={<CourseList />} />*/}

                    {/*<Route path="/course-sidebar" element={<CourseSidebar />} />*/}
                    {/*<Route path="/event" exact element={<Event />} />*/}
                    {/*<Route path="/event/:id" element={<EventDetails />} />*/}
                    {/*<Route path="/event-sidebar" element={<EventSidebar />} />*/}
                    {/*<Route path="/blog" exact element={<Blog />} />*/}
                    {/*<Route path="/blog/:id" element={<BlogDetails />} />*/}
                    {/*<Route path="/instructor" exact element={<Instructor />} />*/}
                    {/*<Route path="/instructor/:id" exact element={<InstructorDetails />} />*/}
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/signup" element={<Signup />} />*/}
                    <Route path='*' element={<Error />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
