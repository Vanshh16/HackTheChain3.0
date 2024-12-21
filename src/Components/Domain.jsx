// Domains.jsx
import React from 'react';
import '../Styles/Domain.css';


const Domains = () => {
  return (
    <div className="domains-container">
      <h1 className="title">DOMAINS</h1>
      <div className="domains-grid">
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          </span>
          <h2 className='heading'>WEB DEVELOPMENT</h2>
          <p>Develop innovative solutions that uses web technologies to sovle the problems efficiently and can actually bring some innovation which benefits the users .</p>
        </div>
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>

         </span>
          <h2 className='heading'>APP DEVELOPMENT</h2>
          <p>Develop innovative solutions that uses web app development technologies to sovle the problems efficiently and can actually bring some innovation which benefits the users .</p>
        </div>
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          </span>
          <h2 className='heading'>AI/ML</h2>
          <p>Leverage Generative AI and Machine Learning to develop apps that enhance automation, analysis, and decision-making.</p>
        </div>
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          </span>
          <h2 className='heading'>ETHEREUM & BLOCKCHAIN</h2>
          <p>This track is for Ethereum ecosystem projects, including those on EVM-compatible chains like Arbitrum, Polygon, Optimism, etc.</p>
        </div>
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          </span>
          <h2 className='heading'>BUSINESS INNOVATION</h2>
          <p>Tackle real-world business challenges and develop innovative solutions that can be scaled into full-fledged startups.</p>
        </div>
        <div className="domain-card">
          <span className="icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H10V22L20 10H13V2Z" fill="#333"/>
          <path d="M13 2L3 14H10V22L20 10H13V2Z" stroke="#000" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          </span>
          <h2 className='heading'>OPEN</h2>
          <p>This track welcomes diverse and boundary-pushing ideas, using emerging technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default Domains;
