import React, {useEffect, useState} from 'react';
import HomeMain from './HomeMain';
import Api from "../../lib/api";
import Preloader from "../../components/Preloader";

const HomePage = () => {
    const {api} = Api();
    const [metaData, setMetaData] = useState();

    const getHomePageData = () => {
        api.get("home-page?populate[Hero][populate]=*&populate[AboutUs][populate]=*&populate[Client]=*")
            .then(res => {
                const {attributes} = res.data.data;
                setMetaData(attributes)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getHomePageData();
    }, []);


    return (
        <HomeMain meta={metaData}/>
    );
}

export default HomePage;
