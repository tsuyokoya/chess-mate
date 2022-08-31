import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-center p-1 border-t-2 fixed bottom-0 left-0 w-full">
      <a
        className="mr-3 hover:text-lightGreen"
        href="https://github.com/tsuyokoya"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a
        className="hover:text-lightGreen"
        href="https://www.linkedin.com/in/tsuyoshi-koyama-2018/"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
    </footer>
  );
};

export default Footer;
