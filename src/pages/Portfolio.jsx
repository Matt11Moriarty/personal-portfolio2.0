import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import projects from "../assets/projects";
import { render } from "react-dom";

const Portfolio = () => {
  return (

    <div className='app-background app-container d-flex align-items-start justify-content-around'>
      <Projects />
    </div>
  )
};

export default Portfolio;
