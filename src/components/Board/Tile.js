import React from "react";

const Tile = ({ num, image }) => {
  if (num % 2 === 0) {
    return (
      <div className="Board-tile h-[100px] w-[100px] bg-lightGreen">
        {image ? (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="Board-piece h-[100px] w-[100px] bg-no-repeat bg-center bg-cover cursor-grab active:cursor-grabbing"
          ></div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="Board-tile h-[100px] w-[100px] bg-cream">
        {image ? (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="Board-piece h-[100px] w-[100px] bg-no-repeat bg-center bg-cover cursor-grab active:cursor-grabbing"
          ></div>
        ) : null}
      </div>
    );
  }
};

export default Tile;
