import React from 'react';
import './ElevatedImage.css';

const ElevatedImage = ({ src, alt }) => {
  return (
    <div className="elevated-image-container">
      <img src={src} alt={alt} className="elevated-image" />
    </div>
  );
};

export default ElevatedImage; 
