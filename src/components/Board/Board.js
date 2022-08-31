import React from "react";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Board = () => {
  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const key = horizontalAxis[i] + verticalAxis[j];
      const num = i + j + 2;

      if (num % 2 === 0) {
        board.push(
          <div
            key={key}
            className="Board-tile h-[100px] w-[100px] bg-lightGreen"
          ></div>
        );
      } else {
        board.push(
          <div
            key={key}
            className="Board-tile h-[100px] w-[100px] bg-cream"
          ></div>
        );
      }
    }
  }
  return (
    <div className="Board h-[800px] w-[800px] flex flex-wrap">{board}</div>
  );
};

export default Board;
