// ImageCard.js
import React, { useState } from "react";

const ImageCard = ({ image }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className={`p-2 transition duration-300 ${selected ? 'bg-blue-200' : 'bg-gray-100'} rounded-lg overflow-hidden shadow-md`} onClick={toggleSelected}>
      <img src={image.url} alt={image.name} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{image.name}</h3>
        <p className="text-sm text-gray-600">{image.field}</p>
      </div>
    </div>
  );
};

export default ImageCard;
