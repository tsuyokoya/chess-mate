import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChess,
  faMask,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <h1 className="text-7xl text-lightGreen mt-3 p-3 font-bold underline text-center mb-5">
          <FontAwesomeIcon
            icon={faChess}
            className="animate-bounce temporary-bounce mr-2"
          />
          Chess Mate
        </h1>
      </header>
      <div className="flex justify-around">
        <img
          className="w-[500px] h-[500px]"
          src="assets/images/board.png"
          alt="chess board"
        />
        <div className="flex flex-col items-center justify-evenly">
          <p className="text-6xl text-center">
            Play <span className="text-lightGreen">Chess</span> Online <br />
            with Your Favorite <span className="text-lightGreen">Mate</span>!
          </p>
          <div className="w-[500px] p-2 rounded-lg text-center bg-lightGreen hover:cursor-pointer text-5xl hover:bg-green-600">
            <Link className="block" to={"/room"}>
              <FontAwesomeIcon icon={faMask} /> Play as Guest
            </Link>
          </div>
          <div className="w-[500px] p-2 rounded-lg text-center bg-lightGreen hover:cursor-pointer text-5xl hover:bg-green-600">
            <Link className="block" to={"/login"}>
              <FontAwesomeIcon icon={faCheckSquare} /> Play as Existing User
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
