import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, text, path, textSize = "text-xl" }) => {
  return (
    <div
      className={
        "bg-lightGreen text-center block p-2 w-1/2 border-none rounded-lg hover:bg-green-600 hover:cursor-pointer " +
        textSize
      }
    >
      <Link to={path}>
        {icon ? <FontAwesomeIcon icon={icon} /> : null} {text}
      </Link>
    </div>
  );
};

export default Button;
