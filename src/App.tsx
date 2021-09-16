import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './screens/home'
import DigitalCore from './screens/digitalcore'
import DigitalOperating from './screens/digitalopreating'
import NavBar from './components/navbar'

import './App.css'

const App = () => {
  return (
    <div className="items" style={{ height: "100vh" }}>
      <NavBar />
      <div className="item">
        <HomePage />
      </div>
      <div className="item">
        <DigitalCore />
      </div>
      <div className="item">
        <DigitalOperating />
      </div>
    </div >
  );
}

export default App;
