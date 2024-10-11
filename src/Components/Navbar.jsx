import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" className="navbar-logo" smooth={true} duration={500}>
          {/* boss se logo lekar lagana hai*/}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home" className="nav-links" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="sponsors" className="nav-links" smooth={true} duration={500}>
              Sponsors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="faqs" className="nav-links" smooth={true} duration={500}>
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-links" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
