import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="text-2xl flex justify-between border-b-2 p-3">
      <span>
        <Link to="/">
          <FontAwesomeIcon
            icon={faChess}
            className="text-lightGreen hover:text-white"
            size="lg"
          />
        </Link>
      </span>
      <span>
        <Link to="/login" className="mr-4 hover:text-lightGreen">
          Login
        </Link>
        <Link to="/signup" className="hover:text-lightGreen">
          Signup
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
