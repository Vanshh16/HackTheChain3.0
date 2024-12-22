import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 h-16 flex justify-between items-center fixed w-full top-0 z-50 px-5 sm:px-10">
      <div className="flex justify-between items-center w-full max-w-6xl">

        {/* Hamburger icon for small screens */}
        <div className="sm:hidden" onClick={toggleMenu}>
          <button className="text-white text-2xl">☰</button>
        </div>

        {/* Navbar items */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex flex-wrap gap-4 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-12 list-none sm:flex-row sm:ml-auto`}
        >
          <li>
            <Link
              to="home"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="timeline"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="sponsors"
              className="text-white text-lg sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="faqs"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="/assets/HackTheChain3.O.pdf"
              className="text-white text-sm sm:text-base md:text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              download
            >
              Download Brochure
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
