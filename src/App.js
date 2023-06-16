import React from "react";
import './App.css'

import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutLink from "./objects/AboutLink";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import IconClose from "./objects/IconClose";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id='show' value='show' content='Mostrar eventos'/>

    <About>
      <AboutLink className="-light"/>
      <IconClose />
    </About>
  </main>
);

export default App;
