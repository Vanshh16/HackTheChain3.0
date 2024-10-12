// import React from 'react';
// import Navbar from './Components/Navbar';
// import FAQs from './Components/FAQs';
// import Home from './Components/Home';
// import ContactUs from './Components/ContactUs';
// import Sponsors from './Components/Sponsors';
// import About from './Components/About';


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />

//       <section id="about" style={{ height: '100vh', padding: '50px', background: '#d1d1d1' }}>
//         <h1>About Section</h1>
//         <p>This is the About section.</p>
//         <About></About>
//       </section>

//       <section id="sponsors" style={{ height: '100vh', padding: '50px', background: '#c1c1c1' }}>
//         <h1>Sponsors Section</h1>
//         <p>This is the Sponsors section.</p>
//         <Sponsors></Sponsors>
//       </section>

//       <FAQs />

//       <section id="contact" style={{ height: '100vh', padding: '50px', background: '#b1b1b1' }}>
//         <h1>Contact Us Section</h1>
//         <p>This is the Contact Us section.</p>
//         <ContactUs></ContactUs>
//       </section>

//     </div>
//   );
// };

// export default App;



// src/App.jsx

import React from 'react';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
import CustomCursor from './Components/CustomCursor'; // Import the CustomCursor component

const App = () => {
  return (
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
    </div>
  );
};

export default App;

