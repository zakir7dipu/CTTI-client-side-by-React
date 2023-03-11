import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {ToastContainer} from "react-toastify";
import Footer from "../components/Footer";
import Api from "../lib/api"
import {errorResponseMessage} from "../lib/helper";

function GuestLayout() {
    const {api} = Api();
    const [siteSettings, SetSiteSettings] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);
    const getSettingsData = () => {
        api.get("site-setting?populate=*")
            .then(res=>{
                const {attributes} = res.data.data
                SetSiteSettings(attributes)
                setSocialLinks({
                    facebook: attributes.Facebook,
                    twitter: attributes.Twitter,
                    instagram: attributes.Instagram,
                    linkedIn: attributes.LinkedIn,
                    youtube: attributes.Youtube
                })
            })
            .catch(err=>errorResponseMessage(err))
    }
    useEffect(()=>{
        getSettingsData()
        setInterval(()=>{console.clear()},5000)
    },[]);
    return (
        <>
            <Header
                settings={siteSettings}
                parentMenu='home'
                topbarEnable='enable'
                socialLinks={socialLinks}
            />
            <Outlet context={[siteSettings]}/>
            <Footer
                settings={siteSettings}
                socialLinks={socialLinks}
            />
            <ToastContainer />
        </>
    );
}

export default GuestLayout;