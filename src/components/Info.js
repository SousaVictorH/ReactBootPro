import React, { Component } from "react";
import {InfoConsumer} from "./Context";
import {Link} from "react-router-dom";

class Info extends Component{

    render(){

        const {
            id, headerTitle, headerSubTitle, headerText, img
            } = this.props.item;

        return(
            <InfoConsumer>
                {value => (
                    <div className="col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" style={{width: '18rem'}}>
                            
                        <img src={img} alt={headerTitle} className="card-img-top"/>
                        <div className="card-body">
                            <h3 class="card-title text-uppercase">{headerTitle}</h3>
                            <h5 class="card-title">{headerSubTitle}</h5>
                            <p className="card-text">{headerText}</p>
                            <Link to="/details" onClick={() => value.handleDetail(id)}
                            className="btn btn-outline-primary text-uppercase d-flex justify-content-center">
                                More Info
                            </Link>
                        </div>

                    </div>
                    </div>)}
            </InfoConsumer>
        );
    }
}

export default Info;