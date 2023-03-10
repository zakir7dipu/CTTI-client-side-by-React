import React, {useEffect} from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Map from './MapSection';

const ContactMain = ({settings}) => {

    return (
        <>
            <div id="react-contact" className="react-contact-page pt---100">
                <div className="container">
                    <div className="row pb---96">
                        <div className="col-lg-4 pt---10">
                            <ContactInfo contact={settings} />
                        </div>
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="row pb---110">
                        <div className="col-lg-12">
                            <Map map={settings?.MapLocation}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}


export default ContactMain;