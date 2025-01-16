import React from 'react';
import Clock from './Clock';
import '../Styles/Home.css'

const Home = () => {
  return (
    <div
      id="home"
      className="relative bg-grey text-white text-center overflow-hidden"
    >
      {/* <div className="absolute top-24 right-14">
        <Clock />
      </div> */}
{/* 
      <img
        className="dhruv w-full max-w-md mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 object-contain"
        src="../hackTheChain.png"
        alt="not available .."
      /> */}
{/* 
      <div className="grid-container">
        <div className="text">
          <h1>HACK THE CHAIN</h1>
        </div>
      </div> */}

      <div className="text">
          <h1>HACK THE CHAIN</h1>
        </div>

    </div>
  );
};

export default Home;