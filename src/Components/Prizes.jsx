import React, { useState, useEffect, useRef } from 'react';
import first from "../assets/pictures/first.png";
import second from "../assets/pictures/second.png";
import third from "../assets/pictures/third.png";

const trophies = [
  {
    image: first,
    title: 'Winner',
    color: 'bg-gray-800',
    borderColor: 'border-yellow-400',
    details: '1st place prize details go here.',
  },
  {
    image: second,
    title: 'Runner-Up',
    color: 'bg-gray-800',
    borderColor: 'border-gray-500',
    details: '2nd place prize details go here.',
  },
  {
    image: third,
    title: 'Third Place',
    color: 'bg-gray-800',
    borderColor: 'border-orange-700',
    details: '3rd place prize details go here.',
  },
];

const TrophyCard = ({ image, title, color, borderColor, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative ${color} p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border ${borderColor} border-2`}
      style={{ width: '300px', height: '400px' }}
    >
      <div
        className={`flex items-center justify-center rounded-full p-4 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl `}
        style={{ width: '100%', height: '70%' }}
      >
        <img
          src={image}
          alt="Trophy"
          className="w-full h-svhobject-contain" // Increased trophy size
          style={{ transform: 'perspective(500px) rotateX(15deg) rotateY(-10deg)' }}
        />
      </div>
      <div className="mt-4 text-center flex flex-col items-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <div className="cursor-pointer mt-2" onClick={toggleDropdown}>
          <svg
            className={`w-6 h-6 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-lg flex items-center justify-center p-4 text-white"
          style={{ zIndex: 10 }}
        >
          <div className="text-center">
            {details}
          </div>
        </div>
      )}
    </div>
  );
};

const Prizes= () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-white mb-12">Prizes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trophies.map((trophy, index) => (
          <TrophyCard
            key={index}
            image={trophy.image}
            title={trophy.title}
            color={trophy.color}
            borderColor={trophy.borderColor}
            details={trophy.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Prizes;
