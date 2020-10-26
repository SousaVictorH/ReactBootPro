import React from 'react';
import Routes from "./Routes";

import {InfoProvider} from "./components/Context";

function App() {

  return(
    <div>
      <InfoProvider>
        <Routes/>
      </InfoProvider>
    </div>
  );

}

export default App;
