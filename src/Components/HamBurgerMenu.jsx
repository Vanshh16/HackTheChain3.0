import React, { useState } from "react";
import "../Styles/HamBurgerMenu.css"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative p-5 ayush">
      {/* Hamburger Icon */}
      <button
        className="ayush flex flex-col justify-around w-8 h-8 bg-transparent border-none outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span
          className={`ayush h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`ayush h-1 w-full bg-white rounded-lg transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`ayush h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`ayush absolute left-0 mt-2 w-48 bg-[#150016] text-white rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="ayush flex flex-col">
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#home">Home</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#about">About</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#stats">Stats</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#prizes">Prizes</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#sponsors">Sponsors</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
