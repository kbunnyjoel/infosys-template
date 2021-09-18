import React, { useRef, useEffect, useState, RefObject } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './screens/home'
import DigitalCore from './screens/digitalcore'
import DigitalOperating from './screens/digitalopreating'
import NavBar from './components/navbar'

import './App.css'

const App = () => {

  const [selected, setSelected] = useState<number>(0);

  const homePage = useRef<HTMLDivElement | null>(null);
  const digitalCore = useRef<HTMLDivElement | null>(null);
  const digitalOp = useRef<HTMLDivElement | null>(null);

  const changeSelection = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    scrollToSection(selected);
  }, [selected]);


  const scrollToSection = (index: number) => {
    let refs = [
      homePage,
      digitalCore,
      digitalOp,
    ];

    if (refs[index].current) {
      refs[index]?.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="items" style={{ height: "100vh" }}>
      <NavBar changeSelection={changeSelection} />
      <div className="item" ref={homePage}>
        <HomePage />
      </div>
      <div className="item" ref={digitalCore} >
        <DigitalCore />
      </div>
      <div className="item" ref={digitalOp}>
        <DigitalOperating />
      </div>
    </div >
  );
}

export default App;
