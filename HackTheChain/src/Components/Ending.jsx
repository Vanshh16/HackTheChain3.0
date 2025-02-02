import iiitk from "/pictures/iiitk.png";
import PendulumAnimation from "./PendulumAnimation";
import "../Styles/Ending.css";

const Third = () => {
  return (
      <div className="bg-#0E2C26 text-white py-10 border-4 border-green-900 mt-40">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 h-10 w-20 flex items-center justify-center rounded-lg">
                  <span className="text-white text-xl font-bold">CODE</span>
                </div>
                <span className="text-2xl font-bold text-green-400">Base</span>
              </div>
              <p className="text-gray-400 max-w-xs">
              The biggest hackathon in Kota City, presented by the IIIT Kota in association with Codebase IIIT Kota. This event on Devfolio promises a monumental experience, fostering innovation and collaboration. Notably, it stands as the annual flagship Hackathon of IIIT Kota, promising an immersive experience for all participants.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/iiitkota_codebase?igsh=cThlM2FxODkxZnVq" className="text-gray-400 hover:text-green-400 text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/codebase-iiitkota/posts/?feedView=all" className="text-gray-400 hover:text-green-400 text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:underline">Home</a></li>
                <li><a href="#about-us" className="text-gray-400 hover:underline">About Us</a></li>
                <li><a href="#timeline" className="text-gray-400 hover:underline">Timeline</a></li>
                <li><a href="#stats" className="text-gray-400 hover:underline">Stats</a></li>
              </ul>
            </div>  

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Supports</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:underline">Setting & Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:underline">Help & Support</a></li>
                <li><a href="#" className="text-gray-400 hover:underline">24/7 Supports</a></li>
              </ul>
            </div>

         
          </div>
        </div>
      </div>
  );
};

export default Third;
