import React, { Component } from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {InfoConsumer} from "../Context";
import Info from "../Info";

class Home extends Component{
    
    render(){
        return(
            <div className="main">
                <Navbar/>

                <div className="container">
                    <div className="row mt-5">

                    <InfoConsumer>
                        {value => {
                            return value.info.map(item => {
                                return <Info key={item.id} item={item}/>
                            })
                        }}
                    </InfoConsumer>

                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Home;