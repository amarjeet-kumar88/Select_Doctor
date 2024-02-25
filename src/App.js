// App.js
import React, { useState } from "react";
import ImageList from "./components/ImageList";
import imagesData from "./data/images.json"; // Import JSON data

const App = () => {
  const [images] = useState(imagesData); // Use useState to store images data

  return <div>
    <ImageList images={images} />
  </div>;
};

export default App;
