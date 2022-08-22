import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">
          <FontAwesomeIcon icon={faChess} />
          Chess Mate
        </h1>
        <p>Play chess with your favorite mate!</p>
      </header>
      <Button icon={faChess} text="Play as Guest" path="/room" />
    </div>
  );
};

export default Home;
