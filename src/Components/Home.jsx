import React from 'react';
import { motion } from 'framer-motion';

const bubbleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2, yoyo: Infinity },
  },
};

const Home = () => {
  const bubbles = Array.from({ length: 10 });

  return (
    <section
      id="home"
      className="relative bg-black text-white py-12 min-h-screen text-center overflow-hidden"
    >
      {/* Creating multiple animated bubbles */}
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="w-12 h-12 bg-white bg-opacity-60 rounded-full absolute animate-float"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <h1 className="text-4xl font-bold mb-8">Home Section</h1>
      <p className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
        Welcome to the Home section.
      </p>
    </section>
  );
};

export default Home;

