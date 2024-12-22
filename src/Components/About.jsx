import React, { useState, useEffect } from 'react';
import '../Styles/About.css';
import Domains from './Domain';


const teamData = [
  { id: 1, name: "Avinesh Rathore", imageUrl: "src/assets/pictures/avineshboss.jpg" },
  { id: 2, name: "Anany Srivastava", imageUrl: "src/assets/pictures/ananyboss.jpg" },
  { id: 3, name: "Devansh Gupta", imageUrl: "src/assets/pictures/devanshboss.jpg" },
  { id: 4, name: "Prateek Singh", imageUrl: "src/assets/pictures/prateekboss.jpg" },
  { id: 5, name: "Vansh Nigam", imageUrl: "src/assets/pictures/vanshboss.jpg" },
  { id: 6, name: "Gopal Patidar", imageUrl: "src/assets/pictures/gopalboss.jpg" },
  { id: 7, name: "Jash Parmar", imageUrl: "src/assets/pictures/jashboss.jpg" },
  { id: 8, name: "Hari Om Meena", imageUrl: "src/assets/pictures/hariboss.jpg" },
  { id: 9, name: "Om", imageUrl: "src/assets/pictures/omboss.jpg" }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleMembers = () => {
    let members = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamData.length;
      members.push(teamData[index]);
    }
    return members;
  };

  const visibleMembers = getVisibleMembers();

  return (
    <div className="team-container">
      <h1 className="aboutus text-3xl font-semibold mb-8 text-blue-500">About Us</h1>
      <p className="aboutusp text-base md:text-xl mb-10 text-gray-300 font-sans px-24">
        <span>Welcome to HackTheChain 3.0, the biggest hackathon in Kota City, presented by the Indian Institute of Information Technology Kota (IIIT Kota) in association with Codebase IIIT Kota.
        This hybrid event will be hosted on Devfolio with a prize pool of ₹1,00,000.</span>
        <br />
        The hackathon unfolds in two thrilling rounds: 
        <strong className="text-blue-500">Round 1 (Code Submission)</strong> is scheduled from February 16th to 18th, 2024, where participants will submit project code, engage in quizzes, and partake in fun activities.
        The excitement peaks in <strong className="text-blue-500">Round 2 (Final Project Showcase)</strong> on February 23rd, 2024, where participants will present their revolutionary ideas to a panel of judges.
        <br />
        <div className="pt-4">Join us for an incredible journey where innovation, creativity, and problem-solving come to life!</div>
      </p>




      <div className="biggerboxteam">
        <h1 className="team-title">OUR TEAM</h1>
        <div className="team-members">
          {visibleMembers.map((member, index) => (
            <div key={member.id} className={`team-member ${index === 1 ? 'center' : ''}`}>


          <div class="testimonial-container">
              <div className="team-member-image">
                <img src={member.imageUrl} />
              </div>
          </div>



              <p className="team-member-name">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="dot-navigation">
          {teamData.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>


<div className='domainbox'>
      <Domains />
      </div>
    




    </div>
  );
};

export default Team;
