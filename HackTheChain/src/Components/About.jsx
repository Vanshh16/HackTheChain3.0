
import React from "react";
import Domains from "./Domain";
import { motion } from "framer-motion"; // Import Framer Motion

const Team = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="text-white text-center w-full max-w-5xl px-6 py-10 border border-gray-500 rounded-lg bg-transparent backdrop-blur-md"
        initial={{ scale: 0.8, opacity: 0 }} // Start smaller and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Zooms in and becomes visible
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
      >
        <h1 className="font-orbitron font-semibold text-5xl mb-8">About Us</h1>
        <p className="font-orbitron font-light text-base md:text-xl mb-10 text-gray-300">
          <span>
            Welcome to HackTheChain 3.0, the biggest hackathon in Kota City,
            presented by the Indian Institute of Information Technology Kota
            (IIIT Kota) in association with Codebase IIIT Kota. This hybrid
            event will be hosted on Devfolio with a prize pool of ₹1,00,000.
          </span>
          <br />
          The hackathon unfolds in two thrilling rounds:{" "}
          <strong className="text-blue-500">Round 1 (Code Submission)</strong>{" "}
          is scheduled from February 16th to 18th, 2024, where participants
          will submit project code, engage in quizzes, and partake in fun
          activities. The excitement peaks in{" "}
          <strong className="text-blue-500">Round 2 (Final Project Showcase)</strong>{" "}
          on February 23rd, 2024, where participants will present their
          revolutionary ideas to a panel of judges.
          <br />
        </p>
        <div className="pt-4">Join us for an incredible journey where innovation, creativity, and problem-solving come to life!</div>

        <div className="domainbox mt-10">
          <Domains />
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
