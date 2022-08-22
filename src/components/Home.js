import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <header>
        <h1 className="text-7xl text-lightGreen mt-3 p-3 font-bold underline text-center">
          <FontAwesomeIcon
            icon={faChess}
            className="animate-bounce temporary-bounce mr-2"
          />
          Chess Mate
        </h1>
        <p className="text-3xl text-center">
          Play <span className="text-lightGreen">chess</span> with your favorite{" "}
          <span className="text-lightGreen">mate</span>!
        </p>
      </header>
      <Button
        icon={faChess}
        text="Play as Guest"
        path="/room"
        textSize="text-5xl"
      />
    </div>
  );
};

export default Home;
