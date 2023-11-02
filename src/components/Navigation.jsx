import React from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav nav-tabs justify-content-around">
        <li className="nav-item text-warning">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link text-warning"}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link text-warning"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link text-warning"
            }
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link text-warning"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
