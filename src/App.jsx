import React from "react";
import "./style.css";
import './components/css/background.css'
import Nav from "./nav/Nav";
import Home from "./components/Home";
import About from "./components/new/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import Contactt from "./components/Contactt";
import Album from "./components/css/Album";


export const App = () => {




  return (
    <div className="div">
      <Nav />
      <Home />
      <About />
      <Album />
      <Gallery />
      {/* <About /> */}
      {/* <Skills /> */}
      <Contact />
      {/* <Bio /> */}
      {/* <Info /> */}
      {/* <Contactt /> */}


    </div>
  );
};
