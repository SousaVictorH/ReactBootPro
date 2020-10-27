import React from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import NewsCard from "../NewsCard";
import {InfoConsumer} from "../Context";

function News(){
    return(
        <div className="main">
            <Navbar/>
            <InfoConsumer>
                {value => {
                    return value.news.map(item => {
                        return <NewsCard key={item.id} item={item}/>
                    })
                }}
            </InfoConsumer>
            <Footer/>
        </div>
    );
}

export default News;