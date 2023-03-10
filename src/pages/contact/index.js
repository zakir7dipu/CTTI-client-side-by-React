import React, {useEffect, useState} from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';
import {useOutletContext} from "react-router-dom";
import Preloader from "../../components/Preloader";

const Contact = () => {
    const [isLoading, setLoading] = useState(true)
    const [siteSettings] = useOutletContext();

    useEffect(()=>{
        if(siteSettings) {
            setLoading(false)
        }
    },[siteSettings])

    return (
        <>
            {isLoading && <Preloader/>}
            <div className="react-wrapper">
                <div className="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Contact"
                    />

                    <ContactMain settings={siteSettings}/>

                    {/* scrolltop-start */}
                    <ScrollToTop/>
                    {/* scrolltop-end */}
                </div>
            </div>
        </>
    );
}


export default Contact;

