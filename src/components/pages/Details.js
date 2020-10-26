import React, { Component } from "react";
import styled from "styled-components";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {InfoConsumer} from "../Context";
import Reviews from "../Reviews";

import {FaFacebook, FaTwitter, FaGooglePlusG, FaReddit,
FaWhatsapp, FaFacebookMessenger} from "react-icons/fa";

class Details extends Component{
    render(){

        return(
            <div className="main">
                <Navbar/>

                <InfoConsumer>
                    {data => {
                        const {
                            id,
                            headerTitle,
                            headerSubTitle,
                            headerText,
                            img,
                            title,
                            maps,
                            description
                        } = data.detailInfo;

                        return(
                            <React.Fragment>
                                <HeaderDetails className="container-fluid align-items-center">
                                    <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                    <h4 className="display-5">{headerSubTitle}</h4>
                                    <p>{headerText}</p>

                                    {/* SOCIAL ICONS */}

                                    <div className="container mt-5">
                                        <div className="row justify-content-center">
                                            <div className="col-2 icon">
                                                <FaFacebook size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                            <div className="col-2 icon">
                                                <FaTwitter size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                            <div className="col-2 icon">
                                                <FaGooglePlusG size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                            <div className="col-2 icon">
                                                <FaReddit size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                            <div className="col-2 icon">
                                                <FaWhatsapp size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                            <div className="col-2 icon">
                                                <FaFacebookMessenger size="1.875rem" color="var(--mainDark)"/>
                                            </div>
                                        </div>
                                    </div>
                                </HeaderDetails>
                                <div>
                                    {/* NAV LINKS */}
                                    <div className="container">
                                        <ul className="nav nav-tabs">
                                            {/* ABOUT */}
                                            <li className="nav-item">
                                                <a href="#aboutPlace" className="nav-link active"
                                                role="tab" data-toggle="tab">About</a>
                                            </li>
                                            {/* REVIEWS */}
                                            <li className="nav-item">
                                                <a href="#reviews" className="nav-link"
                                                role="tab" data-toggle="tab">Reviews</a>
                                            </li>
                                            {/* MAP */}
                                            <li className="nav-item">
                                                <a href="#map" className="nav-link"
                                                role="tab" data-toggle="tab">Map</a>
                                            </li>
                                        </ul>
                                        {/* TAB PANE */}
                                        <div className="tab-content mb-5">
                                            {/* ABOUT PLACE TAB */}
                                            <div id="aboutPlace" className="tab-pane in active text-center mt-5"
                                            role="tabpanel">
                                                <h2 className="mb-3">{title}</h2>
                                                <p>{description}</p>
                                                <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                                            </div>
                                            {/* REVIEWS */}
                                            <div className="tab-pane" id="reviews"
                                            role="tabpanel">
                                                <Reviews/>
                                            </div>
                                            {/* MAP */}
                                            <div className="tab-pane" id="map"
                                            role="tabpanel">
                                                <iframe src={maps} className="mt-5" frameborder="0"
                                                style={{border: '0',height: '28.125rem', width: '100%'}}></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </InfoConsumer>

                <Footer/>
            </div>
        );

    }
}

export default Details;

const HeaderDetails = styled.header`
    background: linear-gradient(rgba(140, 140, 140), rgba(225, 225, 225));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;

    h1{
        padding-top: 10%;
        color: var(--mainDark);
    }

    h4{
        color: var(--mainDark);
    }

    p{
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 10%;
        color: var(--mainDark);
    }

    .nav-item{
        height: 18.75rem;
    }

    @media(max-width: 760px){
        h1,h4{
            color: var(--mainWhite);
        }
    }
`;