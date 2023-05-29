// DogItem.js
import React from "react";

function DogItem({ imgSrc, alt }) {
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="img-thumbnail w-25"
    />
  );
}

export default DogItem;

