import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {InfoProvider} from "./components/context";

ReactDOM.render(
    <InfoProvider>
            <App/>
    </InfoProvider>
    , document.getElementById('root'));
