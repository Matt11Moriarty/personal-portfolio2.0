import { useState } from "react";
import projects from "../assets/projects";
import "../App.css";

const Project = () => {
  return projects.map((project, i) => (
    <div className="card m-3 border border-2 bg-dark" key={i}>
      <img src={project.gif} className="card-img-top" alt={project.title} />
      <div className="card-body text-light">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  ));
};

export default Project;
