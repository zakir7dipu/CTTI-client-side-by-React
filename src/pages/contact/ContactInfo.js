import React, {useEffect} from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'
import {Link} from "react-router-dom";

const ContactInfo = (props) => {
    const { contactBoxClass, contact } = props;

    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image" /></em>
                <span className="text"><em>Address</em> {contact?.Address}</span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contact</em> <Link to="#">{contact?.HotLinkNumber}</Link> <Link to="#">{contact?.HotLinkEmail}</Link></span>
            </li>
        </ul>
    );

}

export default ContactInfo;