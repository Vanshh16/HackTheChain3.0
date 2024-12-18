// Team.jsx
import React from 'react';
import '../Styles/About.css'
import Domains from './Domain';


const teamData = [
  { id: 1, name: "Avinesh Rathore", imageUrl: "src/assets/pictures/avineshboss.jpg" },
  { id: 2, name: "Anany Srivastava", imageUrl: "src/assets/pictures/ananyboss.jpg" },
  { id: 3, name: "Devansh Gupta", imageUrl: "src/assets/pictures/devanshboss.jpg" },
  { id: 4, name: "Prateek Singh", imageUrl: "src/assets/pictures/prateekboss.jpg" },
  { id: 5, name: "Vansh Nigam", imageUrl: "src/assets/pictures/vanshboss.jpg" },
  { id: 6, name: "Gopal Patidar", imageUrl: "src/assets/pictures/gopalboss.jpg" },
  { id: 7, name: "Jash Parmar", imageUrl: "src/assets/pictures/jashboss.jpg" },
  { id: 8, name: "Hari Om Meena", imageUrl: "src/assets/pictures/hariboss.jpg"},
  { id: 9, name: "Om",  imageUrl: "src/assets/pictures/omboss.jpg"}
];

const Team = () => {
  return (
    <>
    <div className="team-container">
      <h1>ABOUT US</h1>
      <div className="aboutuscontent">
      
      Welcome to HackTheChain 2.0, the biggest hackathon in Kota City, presented by the Indian Institute of Information Technology Kota (IIIT Kota) in association with Codebase IIIT Kota. This hybrid event will be held on Devfolio with a prize pool of ₹1,50,000.
      The hackathon unfolds in two thrilling rounds - Round 1 (Code Submission) is scheduled from February 16th to 18th, 2024, offering participants the opportunity to dive into project code submissions, engage in quizzes, and partake in various fun activities. The excitement peaks in Round 2 (Final Project Showcase) on February 23rd, 2024, where participants present their revolutionary ideas to a panel of judges, eagerly awaiting the announcement of results on the same day.
      It serves as a dynamic platform for students nationwide to converge, exhibit their talents, and glean insights from industry experts within a competitive and collaborative framework. Our aim is to nurture innovation, creativity, and problem-solving skills while fostering a culture of collaboration and community development.
      </div>

      <div className='biggerboxteam'>
      <h1 className="team-title">OUR TEAM</h1>
      <div className="team-members">
      
        {teamData.map((member) => (
          <div key={member.id} className="team-member">
            <div className="team-member-image">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <p className="team-member-name">{member.name}</p>
          </div>
        ))}
      </div>
      </div>
      <div className='domainbox'>
      <Domains></Domains>
      </div>
      
    </div>
    </>
  );
};

export default Team;
