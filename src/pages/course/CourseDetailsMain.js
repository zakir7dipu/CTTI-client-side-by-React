import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {currencyFormat, useInternalLink} from "../../lib/helper";
import ReactMarkdown from "react-markdown";

const CourseDetailsMain = (props) => {
    let tab1 = "Discription",
        tab2 = "Curriculum"
    // tab3 = "Reviews",
    // tab4 = "FAQ"
    const tabStyle = 'nav nav-tabs';

    const {
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
        curricula
    } = props;

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