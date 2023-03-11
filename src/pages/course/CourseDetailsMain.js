import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {
    currencyFormat,
    errorMessage,
    getGravatar,
    infoMessage,
    stringToTime, successMessage,
    uid,
    useInternalLink
} from "../../lib/helper";
import ReactMarkdown from "react-markdown";
import Api from "../../lib/api";
import Notify from "../../lib/Notify";

const CourseDetailsMain = (props) => {
    const {api} = Api();
    let tab1 = "Discription",
        tab2 = "Curriculum",
        tab3 = "Reviews"
    // tab4 = "FAQ"
    const
        tabStyle = 'nav nav-tabs';

    const {
        courseID,
        videoID,
        courseImg,
        courseName,
        courseDetails,
        courseLesson,
        courseDuration,
        coursePrice,
        courseCurriculumText,
        courseRegularPrice,
        courseLanguage,
        couresClassPerWeek,
        couresClassDuration,
        couresDeliveryMode,
        curricula,
        reviews
    } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const requestHandler = (e) => {
        e.preventDefault();
        if (!name) {
            errorMessage("Name field is required to review.")
        }
        if (!email) {
            errorMessage("Email field is required to review.")
        }
        if (!phone) {
            errorMessage("Phone field is required to review.")
        }
        if (!message) {
            errorMessage("Message field is required to review.")
        }
        if(name && email && phone && message && courseID) {
            let data = {
                data: {
                    Name: name,
                    Email: email,
                    Phone: phone,
                    Message: message,
                    course: courseID
                }
            }
            infoMessage("Please wait a while, We are processing your request.")
            api.post("reviews",data)
                .then(res=>{
                    resetHandler()
                    successMessage("Your review has been posted successfully.Thank you for your review.")
                    // console.log(res.data)
                })
                .catch(err=>console.log(err))
        }
    }

    const resetHandler = () => {
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    return (
        <div className="back__course__page_grid react-courses__single-page pb---16 pt---110">
            <div className="container pb---70">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-details-video mb---30">
                            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${videoID}`}
                                    title="YouTube video player" allow="accelerometer"></iframe>
                        </div>
                        <Tabs>
                            <div className="course-single-tab">
                                <TabList className={tabStyle}>
                                    <Tab>
                                        <button>{tab1}</button>
                                    </Tab>
                                    <Tab>
                                        <button>{tab2}</button>
                                    </Tab>
                                    <Tab>
                                        <button>{tab3}</button>
                                    </Tab>
                                </TabList>

                                <div className="tab-content" id="back-tab-content">
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>Course Overview</h3>
                                            <ReactMarkdown>{courseDetails}</ReactMarkdown>
                                            <div className="image-banner"><img src={useInternalLink(courseImg)}
                                                                               alt="user"/></div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>Course Curriculum</h3>
                                            <ReactMarkdown>{courseCurriculumText}</ReactMarkdown>
                                            {curricula.map((item, index) => {
                                                return (
                                                    <div className="single-week" key={index}>
                                                        <h3>{item.attributes.Name}</h3>
                                                        {item.attributes.Discription &&
                                                            <ReactMarkdown>{item.attributes.Discription}</ReactMarkdown>}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="tab-pane">
                                            <h3>Reviews</h3>
                                            {reviews && Array.from(reviews).map((review)=>{
                                                const {attributes} = review;
                                                return (
                                                    <Link to="#" className="post-author" key={uid()}>
                                                        <div className="avatar col-lg-2 col-mb-12">
                                                            <img src={attributes?.Email && getGravatar(attributes.Email)} alt="user" />
                                                        </div>
                                                        <div className="info col-lg-10 col-mb-12">
                                                            <h4 className="name">{attributes?.Name} <span className="designation">{stringToTime(attributes?.createdAt)}</span></h4>
                                                            <p>{attributes?.Message}</p>
                                                        </div>
                                                    </Link>
                                                )
                                            })}

                                            <div className="blog-form pt---30">
                                                <h3>Write a Review</h3>
                                                <p className="pb---15">Your email address will not be published. Required fields are marked *</p>
                                                <form id="contact-form" onSubmit={requestHandler}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="back-input">
                                                                <input id="name" type="text" name="name" placeholder="Name*" value={name} onChange={(e)=>{
                                                                    setName(e.target.value)
                                                                }}/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 pdl-5">
                                                            <div className="back-input">
                                                                <input id="email" type="email" name="email" placeholder="Email*" value={email} onChange={(e)=>{
                                                                    setEmail(e.target.value)
                                                                }}/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="back-input">
                                                                <input id="phone" type="tel" name="phone" placeholder="Phone*" value={phone} onChange={(e)=>{
                                                                    setPhone(e.target.value)
                                                                }}/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="back-textarea">
                                                                <textarea id="message" name="message" placeholder="Message*" value={message} onChange={(e)=>{
                                                                    setMessage(e.target.value)
                                                                }}/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <button type="submit" className="back-btn">Submit Review <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                    <div className="col-lg-4 md-mt-60">
                        <div className="react-sidebar react-back-course2 ml----30">
                            <div className="widget get-back-course">
                                <ul className="price">
                                    <li>{currencyFormat(parseInt(coursePrice))}</li>
                                    {/*<li>{courseRegularPrice} USD</li>*/}
                                    {/*<li>25% OFF</li>*/}
                                </ul>
                                <ul className="price__course">
                                    <li><i className="icon_tag_alt"></i> Subject <b>{courseName}</b></li>
                                    <li><i className="icon_clock_alt"></i> Duration <b>{courseDuration}</b></li>
                                    <li><i className="icon_clock_alt"></i> <b>{couresClassPerWeek}</b></li>
                                    <li><i className="icon_clock_alt"></i> <b>{couresClassDuration}</b></li>
                                    <li><i className="icon_book_alt"></i> Lectures <b>{courseLesson} lectures</b></li>
                                    <li><i className="icon_map_alt"></i> Language <b> {courseLanguage}</b></li>
                                    <li><i className="icon_map_alt"></i> Delivery Mode <b> {couresDeliveryMode}</b></li>
                                </ul>
                                <Link to="#" className="start-btn">Start Now <svg xmlns="http://www.w3.org/2000/svg"
                                                                                  width="24" height="24"
                                                                                  viewBox="0 0 24 24" fill="none"
                                                                                  stroke="currentColor" strokeWidth="2"
                                                                                  strokeLinecap="round"
                                                                                  strokeLinejoin="round"
                                                                                  className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg></Link>
                                <div className="share-course">Share this course <em>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-share-2">
                                        <circle cx="18" cy="5" r="3"></circle>
                                        <circle cx="6" cy="12" r="3"></circle>
                                        <circle cx="18" cy="19" r="3"></circle>
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                    </svg>
                                </em>
                                    <span>
                                        <Link to="#"><i aria-hidden="true" className="social_facebook"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_twitter"></i></Link>
                                        <Link to="#"><i aria-hidden="true" className="social_linkedin"></i></Link>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsMain;