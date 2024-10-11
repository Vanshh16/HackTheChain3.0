import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // To add custom styling for bubbles

const bubbleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 2, yoyo: Infinity }, // Continuous blooming effect
  },
};

const Home = () => {
  const bubbles = Array.from({ length: 10 });

  return (
    <section id="home" className="home-section">
      {/* Creating multiple animated bubbles */}
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="bubble"
          initial="hidden"
          animate="visible"
          variants={bubbleVariants}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <h1>Home Section</h1>
      <p>Welcome to the Home section.</p>
    </section>
  );
};

export default Home;
