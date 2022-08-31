import React from "react";

import Tile from "./Tile";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Board = () => {
  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const id = horizontalAxis[i] + verticalAxis[j];
      const num = i + j + 2;
      board.push(<Tile num={num} key={id} />);
    }
  }
  return (
    <div className="Board h-[800px] w-[800px] flex flex-wrap">{board}</div>
  );
};

export default Board;
