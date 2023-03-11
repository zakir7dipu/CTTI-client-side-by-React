import React, {useEffect, useState} from 'react';
import HomeMain from './HomeMain';
import Api from "../../lib/api";
import Preloader from "../../components/Preloader";

const HomePage = () => {
    const {api} = Api();
    const [metaData, setMetaData] = useState();
    const [reviews, setReviews] = useState();

    const getHomePageData = () => {
        // api.get("home-page?populate[Hero][populate]=*&populate[AboutUs][populate]=*&populate[Client]=*&populate[Courses]=*")
        api.get("home-page?populate[Hero][populate]=*&populate[AboutUs][populate]=*&populate[Client]=*&populate[Popular][populate][courses][populate]=Thumbnail")
            .then(res => {
                const {attributes} = res.data.data;
                console.log(attributes)
                setMetaData(attributes)
            })
            .catch(err => console.log(err))
    }

    const getReview = () => {
        api.get("reviews")
          .then(res=>{
              setReviews(res.data.data)
          })
          .catch(err=>console.log(err))
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
