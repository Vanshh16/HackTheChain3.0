import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-50 h-16 flex justify-center items-center fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-6xl px-5">
        <Link
          to="home"
          className="text-white text-2xl font-bold cursor-pointer"
          smooth={true}
          duration={500}
        >
          {/* boss se logo lekar lagana hai*/}
        </Link>
        <ul className="flex list-none">
          <li className="mr-16">
            <Link
              to="home"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="mr-16">
            <Link
              to="about"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="mr-16">
            <Link
              to="timeline"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Timeline
            </Link>
          </li>
          <li className="mr-16">
            <Link
              to="sponsors"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Sponsors
            </Link>
          </li>
          <li className="mr-16">
            <Link
              to="faqs"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              FAQs
            </Link>
          </li>
          <li className="mr-16">
            <Link
              to="contact"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="/assets/HackTheChain3.O.pdf"
              className="text-white text-lg cursor-pointer transition-colors duration-300 hover:text-yellow-500"
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

