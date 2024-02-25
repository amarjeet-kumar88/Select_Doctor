// ImageList.js
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <div className="mt-[80px] ">
        <div class=" flex flex-col justify-center items-center mb-16">
  <div class="p-1 font-semibold text-2xl ">Selector Doctor</div>
  <div class="w-[80px] h-[4px] border-b border-blue-400 flex-grow"></div>
</div>

    <div className="container mx-auto mt-8">
        
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
    
    </div>
  );
};

export default ImageList;
