import React from "react";

const Tile = ({ num }) => {
  if (num % 2 === 0) {
    return <div className="Board-tile h-[100px] w-[100px] bg-lightGreen"></div>;
  } else {
    return <div className="Board-tile h-[100px] w-[100px] bg-cream"></div>;
  }
};

export default Tile;
