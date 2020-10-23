import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function Footer(){
    return(
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Columns */}
                    <div className="col-md-3 aol-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                    <div className="col-md-3 aol-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 aol-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 aol-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                            <li><Link to="/">Lorem ipsum</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App - All rights reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a{
    color: var(--mainGrey);
    text-decoration: none;
    transition: .3s;
}

ul li a:hover{
    color: var(--mainLightGray);
}
`;