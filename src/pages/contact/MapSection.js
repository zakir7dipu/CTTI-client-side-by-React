import React from 'react';


import mapImg from '../../assets/images/contact/1.jpg'

const Map = ({map}) => {
    return (
        <div className="react-contacts pt-106"> 
            <div className="react-image-maping" dangerouslySetInnerHTML={{__html: map}}/>
        </div> 
    );

}

export default Map;