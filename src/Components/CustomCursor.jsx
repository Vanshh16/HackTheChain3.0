

import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailStars, setTrailStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      
      // jaha jaha mouse ja rha vaha vaha star ja rha
      setCursorPosition({ x, y });

      // naya star add karne ke liye trail me
      const newStar = { x, y, size: Math.random() * 10 + 5 }; // stars ka random size ise descending me karna hai 
      setTrailStars((prevStars) => [newStar, ...prevStars].slice(0, 10)); // max 10 star hai trail me
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor">
      {/* Main cursor star hai ab */}
      <div
        className="cursor-star"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: '35px', 
          height: '35px',
        }}
      />

      {/* stars ki trail banane ke liye */}
      {trailStars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 1 - index * 0.1, // stars ko fade karne ke  liye 
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
