import React from "react";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import {Link} from "react-router-dom";
import {FaPaperPlane} from "react-icons/fa";

function Contacts(){
    return(
        <div className="main">
            <Navbar/>
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/d/embed?mid=1h9PyWJ9-uAFIIilnpaebyJB00bZ8EhqT"
                            style={{
                                border: '0',
                                height: '315px',
                                width: '100%',
                            }} allowFullScreen ></iframe>
                        </div>

                        <div className="col-md-5">
                            <h4><strong>Contact Us</strong></h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone"/>
                                </div>
                                <textarea name="form-control" id="Comment" cols="30" rows="3" placeholder="Message"/>
                                <Link className="btn btn-outline-primary text-uppercase mt-1">
                                    <FaPaperPlane/>&nbsp;Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Contacts;