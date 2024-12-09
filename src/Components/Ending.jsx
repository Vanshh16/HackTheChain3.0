import React from "react";
import iiitk from "../assets/pictures/iiitk.png";
import PendulumAnimation from "./PendulumAnimation";
const Third = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/stars_background_image')] bg-cover z-0"></div>

      {/* Navbar */}
      <div className="flex justify-start p-4 pl-10 space-x-8 z-10 relative">
        <a href="#about" className="hover:text-gray-400">About Us</a>
        <a href="#contact" className="hover:text-gray-400">Contact Us</a>
        <a href="#sponsor" className="hover:text-gray-400">Sponsor Us</a>
      </div>

      {/* About Section */}
      <div id="about" className="z-10 relative p-10 md:p-20 flex flex-row space-x-8 bg-gray-950">
        <div className="flex justify-center mb-6">
          <img src={iiitk} alt="IIIT KOTA LOGO" className="h-24 md:h-32" />
        </div>
        <div>
            <h2 className="text-3xl md:text-4xl font-semibold">About IIIT Kota</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            IIIT Kota is a premier institute in Rajasthan, specializing in Computer Science and Engineering with focuses in AI. Through expert faculty, advanced facilities, and industry partnerships, IIIT Kota prepares students to excel in technology.
            </p>
        </div> 
        <div> <PendulumAnimation /> </div>
      </div>

      {/* Footer Section */}
      <div className="py-6 mt-12 relative z-10">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm">
            <a href="#terms" className="hover:underline">Terms and Conditions</a> | 
            <a href="#privacy" className="hover:underline ml-2">Privacy Policy</a> |
            <a href="#code" className="hover:underline ml-2">Code of Conduct</a>
          </p>
          <p className="text-sm">Architected with <span className="text-red-500">❤</span> by HackTheChain3.O Team</p>
        </div>

        {/* Social Icons */}
        {/* <div className="absolute right-6 bottom-12 space-y-4">
          <a href="https://facebook.com" className="block p-2 bg-white rounded-full">
            <i className="fab fa-facebook-f text-black"></i>
          </a>
          <a href="https://twitter.com" className="block p-2 bg-white rounded-full">
            <i className="fab fa-twitter text-black"></i>
          </a>
          <a href="https://instagram.com" className="block p-2 bg-white rounded-full">
            <i className="fab fa-instagram text-black"></i>
          </a>
          <a href="https://linkedin.com" className="block p-2 bg-white rounded-full">
            <i className="fab fa-linkedin-in text-black"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Third;
