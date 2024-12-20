import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
import CustomCursor from './Components/CustomCursor';
import Prizes from './Components/Prizes.jsx';
import Timeline from './Components/Timeline.jsx';
import Stats from "./Components/Stats.jsx";
import Ending from "./Components/Ending.jsx";
import AnimatedTransition from './Components/AnimatedTransition';
import Chatbot from './Components/ChatBot.jsx';

import './App.css';

function App() {
    return (
        <div>
            <ScreenOpen />
        </div>
    );
}

function ScreenOpen() {
    const [isHomeVisible, setIsHomeVisible] = useState(false); // State to control rendering of Home component
    const [isChatbotVisible, setIsChatbotVisible] = useState(false); // State to toggle chatbot visibility

    // Check if animation has already been played
    useEffect(() => {
        const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

        // If it hasn't been played yet, show the animation
        if (!hasAnimationPlayed) {
            setIsHomeVisible(false); // Show animation
        } else {
            setIsHomeVisible(true); // Skip animation and show Home component
        }
    }, []);

    const handleScreenOpen = () => {
        console.log("Animation...");
        sessionStorage.setItem('animationPlayed', 'true'); // Mark animation as played
        setIsHomeVisible(true); 
    };

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible); // Toggle visibility of chatbot
    };

    return (
        <div className="w-full h-screen bg-Gray-700">
            {isHomeVisible ? (
                <div>
                    <CustomCursor />
                    <Navbar />
                    <Home />

                    <section id="about" style={{ padding: '5px', background: '#d1d1d1' }}>
                        <About />
                    </section>
                    
                    <section id="timeline" className='flex flex-col justify-center align-middle min-h-screen m-10'>
                        <h1 className='text-white text-center m-8 text-6xl font-black p-8'>Timeline</h1>
                        <Timeline/>
                    </section>
                    <section>
                        <Stats />
                    </section>
                    <section> 
                        <Prizes />
                    </section>
                    <section id="sponsors" className='flex flex-col justify-center align-middle p-10'>
                       <Sponsors />
                    </section>

                    <FAQs />

                    <section id="contact" style={{ height: '100vh', padding: '50px', background: '#b1b1b1' }}>
                        <h1>Contact Us Section</h1>
                        <p>This is the Contact Us section.</p>
                        <ContactUs />
                    </section>
                    <section> 
                        <Ending />
                    </section>

                    {/* Chatbot */}
                    {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}
                    
                    {/* Chatbot toggle icon */}
                    {!isChatbotVisible && (
                        <div className="fixed bottom-10 right-10 cursor-pointer z-[9999]" onClick={toggleChatbot}>
                            <img src="chat-icon.png" alt="Chatbot Icon" className="w-12 h-12" />
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-slicer">
                    <AnimatedTransition onAnimationComplete={handleScreenOpen} />
                </div>
            )}
        </div>
    );
}

export default App;
