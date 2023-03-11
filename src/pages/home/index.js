import React, {useEffect, useState} from 'react';
import HomeMain from './HomeMain';
import Api from "../../lib/api";
import Preloader from "../../components/Preloader";
import {errorResponseMessage} from "../../lib/helper";

const HomePage = () => {
    const {api} = Api();
    const [metaData, setMetaData] = useState();
    const [reviews, setReviews] = useState();

    const getHomePageData = () => {
        // api.get("home-page?populate[Hero][populate]=*&populate[AboutUs][populate]=*&populate[Client]=*&populate[Courses]=*")
        api.get("home-page?populate[Hero][populate]=*&populate[AboutUs][populate]=*&populate[Client]=*&populate[Popular][populate][courses][populate]=Thumbnail")
            .then(res => {
                const {attributes} = res.data.data;
                setMetaData(attributes)
            })
            .catch(err => errorResponseMessage(err))
    }

    const getReview = () => {
        api.get("reviews")
          .then(res=>{
              setReviews(res.data.data)
          })
          .catch(err=>errorResponseMessage(err))
    }

    useEffect(() => {
        getHomePageData();
        getReview();
    }, []);


    return (
        <HomeMain reviews={reviews} meta={metaData}/>
    );
}

export default HomePage;
