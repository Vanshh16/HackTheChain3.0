    import React, { useState, useEffect } from 'react';
    import Navbar from './Components/Navbar';
    import FAQs from './Components/FAQs';
    import Home from './Components/Home';
    import Sponsors from './Components/Sponsors';
    import About from './Components/About';
    import Prizes from './Components/Prizes.jsx';
    import Timeline from './Components/Timeline.jsx';
    import Stats from "./Components/Stats.jsx";
    import Ending from "./Components/Ending.jsx";

    import './App.css';
    import AnimatedTransition from './Components/AnimatedTransition';
import HamburgerMenu from './Components/HamBurgerMenu.jsx';

    function App() {
        return (
            <div className='flex flex-1'>
                <ScreenOpen />
            </div>
        );
    }

    function ScreenOpen() {
        const [isHomeVisible, setIsHomeVisible] = useState(false); 
        const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);


        useEffect(() => {
            const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

            if (!hasAnimationPlayed) {
                setIsHomeVisible(false); 
            } else {
                setIsHomeVisible(true); 
            }
        }, []);
        useEffect(() => {
            const handleResize = () => {
                setIsSmallScreen(window.innerWidth < 768);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        const handleScreenOpen = () => {
            console.log("Animation...");
            sessionStorage.setItem('animationPlayed', 'true'); 
            setIsHomeVisible(true); 
        };

        return (
            <div className="w-screen h-screen bg-Gray-700">
                {isHomeVisible ? (
                    <div className='justify-center '>
                        {}
                        {isSmallScreen ? <HamburgerMenu /> : <Navbar />}

                        <Home />

                        <section>
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
                        <section>
                        <FAQs />
                        </section>
                        <section> 
                            <Ending />
                        </section>
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
