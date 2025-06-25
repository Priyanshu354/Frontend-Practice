import React, { useState } from 'react';

const StarRating = ({ number = 5 }) => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const getColor = (index) => {
    if (hovered !== null) {
      return index <= hovered ? 'text-yellow-400' : 'text-black';
    }
    if (clicked !== null) {
      return index <= clicked ? 'text-yellow-400' : 'text-black';
    }
    return 'text-black';
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      <h1 className="font-bold text-3xl">Star Rating</h1>
      <div className="flex gap-1 mt-6">
        {[...Array(number)].map((_, i) => (
          <span
            key={i}
            className={`text-3xl cursor-pointer transition-all duration-200 ${getColor(i)}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setClicked(i)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
