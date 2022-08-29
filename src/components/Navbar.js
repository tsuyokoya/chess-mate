import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ logout, currentUser }) => {
  const view = currentUser ? (
    <>
      <Link
        to="/logout"
        onClick={logout}
        className="mr-4 hover:text-lightGreen"
      >
        Logout {currentUser}
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="mr-4 hover:text-lightGreen">
        Login
      </Link>
      <Link to="/signup" className="hover:text-lightGreen">
        Signup
      </Link>
    </>
  );
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
      <span>{view}</span>
    </nav>
  );
};

export default Navbar;
