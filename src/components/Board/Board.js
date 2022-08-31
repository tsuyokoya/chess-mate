import React from "react";

import Tile from "./Tile";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const pieces = [];

// Placing pawns' starting position on the board
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/images/pawn_black.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/images/pawn_white.png", x: i, y: 1 });
}

// Placing pieces' starting position on the board
for (let i = 0; i < 2; i++) {
  const color = i === 0 ? "white" : "black";
  const yPosition = i === 0 ? 0 : 7;

  // rooks
  pieces.push({
    image: `assets/images/rook_${color}.png`,
    x: 0,
    y: yPosition,
  });
  pieces.push({
    image: `assets/images/rook_${color}.png`,
    x: 7,
    y: yPosition,
  });

  // knights
  pieces.push({
    image: `assets/images/knight_${color}.png`,
    x: 1,
    y: yPosition,
  });
  pieces.push({
    image: `assets/images/knight_${color}.png`,
    x: 6,
    y: yPosition,
  });

  //bishops
  pieces.push({
    image: `assets/images/bishop_${color}.png`,
    x: 2,
    y: yPosition,
  });
  pieces.push({
    image: `assets/images/bishop_${color}.png`,
    x: 5,
    y: yPosition,
  });

  // queen
  pieces.push({
    image: `assets/images/queen_${color}.png`,
    x: 3,
    y: yPosition,
  });

  // king
  pieces.push({
    image: `assets/images/king_${color}.png`,
    x: 4,
    y: yPosition,
  });
}

const Board = () => {
  let board = [];
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const num = i + j + 2;
      let image;

      pieces.forEach((piece) => {
        if (piece["x"] === i && piece["y"] === j) {
          image = piece["image"];
        }
      });
      board.push(<Tile num={num} key={`${i},${j}`} image={image} />);
    }
  }
  return (
    <div className="Board h-[680px] w-[680px] flex flex-wrap">{board}</div>
  );
};

export default Board;
