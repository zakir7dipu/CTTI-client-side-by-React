import React, {useState} from 'react';

import emailjs from 'emailjs-com';
import {errorMessage, errorResponseMessage, infoMessage, successMessage} from "../../lib/helper";
import Api from "../../lib/api"

const ContactForm = (props) => {
    const {api} = Api();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const requestHandler = (e) => {
        e.preventDefault();
        if(!name) {
            errorMessage("Name field is required to send message.")
        }
        if(!email) {
            errorMessage("Email field is required to send message.")
        }
        if(!phone) {
            errorMessage("Phone field is required to send message.")
        }
        if(!subject) {
            errorMessage("Subject field is required to send message.")
        }
        if(!message) {
            errorMessage("Message field is required to send message.")
        }

        if(name && email && phone && subject && message) {
            let data = {
                data: {
                    Name: name,
                    Email: email,
                    Phone: phone,
                    Subject: subject,
                    Message: message
                }
            }
            infoMessage("Please wait a while, We are processing your request.")
            api.post("messages",data)
                .then(res=>{
                    resetHandler()
                    successMessage("Thank you for messaging us. Our Business development team will connect you shortly.")
                })
                .catch(err=>errorResponseMessage(err))
        }

    }

    const resetHandler = () => {
        setName("")
        setEmail("")
        setPhone("")
        setSubject("")
        setMessage("")
    }

    return (
        <div className="react-blog-form">
            <h2 className="contact-title">Questions? <br/> Feel free to contact uo.</h2>
            <div id="blog-form" className="blog-form">
                <div id="form-messages"></div>
                <form id="contact-form" onSubmit={requestHandler}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="back-input">
                                <input id="name" type="text" name="user_name" required placeholder="Name" value={name} onChange={(e)=>{
                                    setName(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="col-lg-6 pdl-5">
                            <div className="back-input">
                                <input id="email" type="email" name="user_email" required placeholder="Email" value={email} onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}/>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="back-input">
                                <input id="subject" type="text" name="user_subject" required placeholder="Subject" value={subject} onChange={(e)=>{
                                    setSubject(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="col-lg-6 pdl-5">
                            <div className="back-input">
                                <input id="phone" type="text" name="user_phone" required placeholder="Phone" value={phone} onChange={(e)=>{
                                    setPhone(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="back-textarea">
                                <textarea id="message" name="user_message" required placeholder="Message" value={message} onChange={(e)=>{
                                    setMessage(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="col-lg-12">                                                
                            <button type="submit" className="back-btn">Send Message <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                        </div>
                    </div>                                                    
                </form>
            </div>
        </div>
    );

}

export default ContactForm;