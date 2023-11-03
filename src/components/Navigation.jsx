import React from "react";
import ReactDOM from "react-dom";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar header-bg">
      <ul className="nav nav-tabs justify-content-around">
        <li className="nav-item text-warning">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active text-info" : "nav-link text-light"}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active text-info" : "nav-link text-light"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active text-info" : "nav-link text-light"
            }
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active text-info" : "nav-link text-light"
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
