import React, { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState(""); // State for the typing effect
  const [showContent, setShowContent] = useState(false); // State to show the secondary content
  const [typingComplete, setTypingComplete] = useState(false); // State to remove cursor
  const [triangleVisible, setTriangleVisible] = useState(false); // State to control triangle visibility
  const fullText = "HaackTheChain 3.0"; // Full text to display

  useEffect(() => {
    let index = 0; // Index to track the current character

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Append one character at a time
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the full text is displayed
        setTypingComplete(true); // Mark typing as complete
        setTimeout(() => setShowContent(true), 500); // Show the secondary content after typing effect
        setTimeout(() => setTriangleVisible(true), 1000); // Show the triangle after the content
      }
    }, 150); // Typing speed in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-2 bg-transparent text-white px-4 sm:px-8 min-h-screen relative">
      {/* Text Section */}
      <div className="md:w-1/2 w-full space-y-6 text-center md:text-left z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-10xl googlefont text-white"
          style={{
            textShadow: "-1px 7px 0px rgba(69, 248, 130, 0.66)",
          }}
        >
          {text}
          {!typingComplete && <span className="text-pink-500">|</span>} {/* Cursor disappears when typingComplete is true */}
        </h1>

        {/* Card Section */}
        <div
          className={`${
            showContent ? "animate-fade-up" : "opacity-0"
          } bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-6 ml-0`} 
          style={{ background: "linear-gradient(135deg,rgba(23, 31, 37, 0.46), rgb(81, 209, 119))" }}
        >
          <h2
            className="text-xl sm:text-2xl md:text-3xl text-white"
            style={{
              textShadow:
                "0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 20px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
            }}
          >
            The Biggest Hackathon in Kota City
          </h2>
          <p
            className="text-sm sm:text-lg leading-relaxed mt-4"
            style={{ fontFamily: "cursive" }}
          >
            As part of our Tech-Summit organized by TechKnow Society, join the
            ultimate hackathon for developers of all skill levels! Hack your way
            to success at HackTheChain 3.0!
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
        <img
          src="/pictures/logo2.png"
          alt="HackTheChain Illustration"
          className="max-w-[80%] sm:max-w-[90%] md:max-w-[100%] lg:max-w-[95%] h-auto hover:wobble"
        />
      </div>

      {/* Green Triangular Section */}
      <div
        className={`absolute bottom-0 w-full ${triangleVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          clipPath: "polygon(100% 100%, 0% 0%,0% 100%, 100% 0%, 100% 100%)", // Mirrored triangle
          backgroundColor: "#45F882", // Green background
          height: "40px", // Adjust height for size
          transition: "opacity 1s ease-out", // Transition for opacity
          zIndex: "-1", // Make sure the triangle is behind the text
          
        }}
      ></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(-5deg);
          }
          30% {
            transform: rotate(5deg);
          }
          45% {
            transform: rotate(-5deg);
          }
          60% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-2deg);
          }
          90% {
            transform: rotate(2deg);
          }
        }
        .hover\:wobble:hover {
          animation: wobble 1s ease-in-out;
        }
        .text-pink-500 {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start from slightly below */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Move to original position */
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards; /* Fade and slide up */
        }
      `}</style>
    </div>
  );
};

export default Home;
