import projects from "../assets/projects";
import "../App.css";

const Projects = () => {
  return (
    <div className="row justify-content-center">
      {/* project cards */}
      {projects.map((project, index) => (
        <div className="card m-3 p-3 border border-2 bg-dark text-center col-lg-3 col-md-5 col-sm-8 col-8" key={index}>
          <img src={project.image} className="card-img-top" alt={project.title} />
          <div className="card-body text-light">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.link} target="_blank" className="btn btn-light">
              Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
