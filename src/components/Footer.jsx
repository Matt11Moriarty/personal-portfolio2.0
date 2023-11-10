import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center header-bg">
    {/* //github icon and link */}
      <a href="https://github.com/Matt11Moriarty" target="_blank" class="icon-block">
      <FontAwesomeIcon
        icon={faGithub}
        className="p-3 fa-2xl"
      />
      </a>
    {/* linkedIn icon and link */}
      <a href="https://www.linkedin.com/in/matthew-moriarty-10230770" target="_blank" class="icon-block">
      <FontAwesomeIcon
        icon={faLinkedin}
        className="p-3 fa-2xl"
      />
      </a>
    {/* instagram icon and link  */}
      <a href="https://www.instagram.com/matt.moriarty94" target="_blank" class="icon-block">
      <FontAwesomeIcon
        icon={faInstagram}
        className="p-3 fa-2xl"
      />
      </a>
    </div>
  );
};

export default Footer;
