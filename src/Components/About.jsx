import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 mb-10">
        We, team Codebase, the technical club of IIIT Kota, are here to present the hackathon for the year 2024. We have successfully completed the hackathon twice and are ready to launch HackTheChain 3.0. We are a dedicated team recognizing the potential of students in the tech field and giving them an opportunity to compete and learn with collaboration.
      </p>
      <div className="flex justify-around gap-10 flex-wrap">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-base text-gray-700">
            Our vision is to find the best coders who can solve real-life problems and give them the recognition they deserve.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-base text-gray-700">
            We aim to create healthy competition through this hackathon, providing students a platform to showcase their skills and recognize those who are truly talented in the tech field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
