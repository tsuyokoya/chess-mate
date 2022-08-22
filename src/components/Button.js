import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const Button = ({ icon, text, path }) => {
  return (
    <div>
      <Link to={path}>
        <FontAwesomeIcon icon={icon} /> {text}
      </Link>
    </div>
  );
};

export default Button;
