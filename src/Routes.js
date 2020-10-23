import React from "react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {Switch, Route, BrowserRouter} from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details";
import News from "./components/pages/News";
import NotFoundPage from "./components/pages/NotFoundPage";

function Routes(){
    return(
        <div className="main">
            <BrowserRouter>

                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contacts" component={Contact}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/not-found-page" component={NotFoundPage}/>

                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default Routes;