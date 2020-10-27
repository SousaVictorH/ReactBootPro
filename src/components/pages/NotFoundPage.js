import React from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import styled from "styled-components";

import { Link } from "react-router-dom";
import {FaHome, FaEnvelope} from "react-icons/fa";

function NotFoundPage(){
    return(
        <ComponentNotFound>
            <Navbar/>
            <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Ops!</h1>
                            <h2>Error 404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error occurred. The requested page was not found.
                            </div>
                            <footer>
                                <div className="error-actions">
                                    <Link to="/" className="btn btn-outline-primary btn-lg">
                                        <FaHome/>&nbsp;Back to Main
                                    </Link>
                                </div>
                                <div className="error-actions">
                                    <Link className="btn btn-outline-secondary btn-lg">
                                        <FaEnvelope/>&nbsp;Support
                                    </Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>          
            </div>
            <Footer/>
        </ComponentNotFound>
    );
}

export default NotFoundPage;

const ComponentNotFound = styled.div`
    .main{
        height: 70vh;
    }

    .error-template{
        padding: 40px 15px;
        text-align: center;
    }

    .error-actions{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn{
        margin-right: 10px;
    }
`;