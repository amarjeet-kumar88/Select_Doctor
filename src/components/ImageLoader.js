// ImageLoader.js
import React, { useState, useEffect } from 'react';

const ImageLoader = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from JSON file
    fetch('/images.json')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image.image} alt={`Image ${index + 1}`} className="rounded-lg" />
      ))}
    </div>
  );
};

export default ImageLoader;
