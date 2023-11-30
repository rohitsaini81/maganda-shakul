import React from "react";
import "./style.css";
import Nav from "./nav/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Bio from "./components/Bio";

export const App = () => {
  return (
    <div className="index">
      <div className="div">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Bio />
        <Info />
      </div>
    </div>
  );
};
