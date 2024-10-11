import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Us</h1>
      <p>
        We , team Codebase the technical cub of IIIT Kota are here to present the hackathon for the year 2024 , we have successfully comppleted hackathon twice and ready to launch HackTheChain 3.0
        We are a dedicated team to recognise the potential of the students in tech field and give them an opportunity  to compete and learn with collaboration.
      </p>
      <div className="about-content">
        <div className="about-item">
          <h2>Our Vision</h2>
          <p>our vision is to find the best of the coders who actually can solve real life problems and give recognition to them .</p>
        </div>
        <div className="about-item">
          <h2>Our Mission</h2>
          <p>We have to make healty competion through this hackathon and give students a platform to show their skills and also to recognise the skills of those who are really talented in the tech field</p>
        </div>
      </div>
    </section>
  );
};

export default About;
