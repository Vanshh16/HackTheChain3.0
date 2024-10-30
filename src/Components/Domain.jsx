// Domains.jsx
import React from 'react';
import '../Styles/Domains.css';

const Domains = () => {
  return (
    <div className="domains-container">
      <h1 className="title">DOMAINS</h1>
      <div className="domains-grid">
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>WEB DEVELOPMENT</h2>
          <p>Develop innovative solutions that uses web technologies to sovle the problems efficiently and can actually bring some innovation which benefits the users .</p>
        </div>
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>APP DEVELOPMENT</h2>
          <p>Develop innovative solutions that uses web app development technologies to sovle the problems efficiently and can actually bring some innovation which benefits the users .</p>
        </div>
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>AI/ML</h2>
          <p>Leverage Generative AI and Machine Learning to develop apps that enhance automation, analysis, and decision-making.</p>
        </div>
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>ETHEREUM & BLOCKCHAIN</h2>
          <p>This track is for Ethereum ecosystem projects, including those on EVM-compatible chains like Arbitrum, Polygon, Optimism, etc.</p>
        </div>
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>BUSINESS INNOVATION</h2>
          <p>Tackle real-world business challenges and develop innovative solutions that can be scaled into full-fledged startups.</p>
        </div>
        <div className="domain-card">
          <span className="icon">⚡</span>
          <h2>OPEN</h2>
          <p>This track welcomes diverse and boundary-pushing ideas, using emerging technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default Domains;
