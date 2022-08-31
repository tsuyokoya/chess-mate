import React from "react";

const Tile = ({ num, image }) => {
  if (num % 2 === 0) {
    return (
      <div className="Board-tile h-[85px] w-[85px] bg-lightGreen">
        {image ? (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="Board-piece h-[85px] w-[85px] bg-no-repeat bg-center bg-cover cursor-grab active:cursor-grabbing"
          ></div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="Board-tile h-[85px] w-[85px] bg-cream">
        {image ? (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="Board-piece h-[85px] w-[85px] bg-no-repeat bg-center bg-cover cursor-grab active:cursor-grabbing"
          ></div>
        ) : null}
      </div>
    );
  }
};

export default Tile;
