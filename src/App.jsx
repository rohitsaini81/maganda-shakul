import React from "react";
// import "./style.css";
import Nav from "./nav/Nav";
import Home from "./components/Home";
import About from "./components/new/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";

export const App = () => {
  return (
      <div className="div">
        <Nav />
        <Home />
        <About />
        <Gallery />
        {/* <About />
        <Skills />
        <Contact />
        <Bio />
        <Info /> */}

      </div>
  );
};
