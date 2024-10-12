
import React from 'react';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
import CustomCursor from './Components/CustomCursor'; // Import the CustomCursor component

//dhruv
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import './App.css'; // Make sure your CSS file is imported
import MacContainer from './Components/MacContainer';

function App() {
  return (
    <div>
      <ScreenOpen />
    </div>
  );
}

function ScreenOpen() {
  const [isHomeVisible, setIsHomeVisible] = useState(false); // State to control rendering of Home component

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
    setIsHomeVisible(true); // Show Home component
  };

  return (
    <div className="w-full h-screen bg-Gray-700">
      {isHomeVisible ? (
        <div>
          <CustomCursor /> {/* Include the custom cursor */}
          <Navbar />
          <Home />

          <section id="about" style={{ height: '100vh', padding: '50px', background: '#d1d1d1' }}>
            <h1>ABOUT SECTION</h1>
            <p>This is the About section.</p>
            <About />
          </section>

          <section id="sponsors" style={{ height: '100vh', padding: '50px', background: '#c1c1c1' }}>
            <h1>Sponsors Section</h1>
            <p>This is the Sponsors section.</p>
            <Sponsors />
          </section>

          <FAQs />

          <section id="contact" style={{ height: '100vh', padding: '50px', background: '#b1b1b1' }}>
            <h1>Contact Us Section</h1>
            <p>This is the Contact Us section.</p>
            <ContactUs />
          </section>
        </div>) : (
        <>
          <div className="absolute text-white top-16 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
            <h3 className="text-7xl tracking-tighter font-[700] hack-the-chain">Hack The Chain 3.0</h3>
          </div>
          <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
            <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
            <ScrollControls>
              <MacContainer onScreenOpen={handleScreenOpen} />
            </ScrollControls>
          </Canvas>
        </>
      )} 
    </div>
  );
}

export default App;

//  <div>
// <CustomCursor /> {/* Include the custom cursor */}
// <Navbar />
// <Home />

// <section id="about" style={{ height: '100vh', padding: '50px', background: '#d1d1d1' }}>
//   <h1>ABOUT SECTION</h1>
//   <p>This is the About section.</p>
//   <About />
// </section>

// <section id="sponsors" style={{ height: '100vh', padding: '50px', background: '#c1c1c1' }}>
//   <h1>Sponsors Section</h1>
//   <p>This is the Sponsors section.</p>
//   <Sponsors />
// </section>

// <FAQs />

// <section id="contact" style={{ height: '100vh', padding: '50px', background: '#b1b1b1' }}>
//   <h1>Contact Us Section</h1>
//   <p>This is the Contact Us section.</p>
//   <ContactUs />
// </section>
// </div>






