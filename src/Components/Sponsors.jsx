import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors-section">
      <h1>Our Sponsors</h1>
      <p>We are grateful to our sponsors for their generous support.</p>
      <div className="sponsors-list">
        <div className="sponsor-item">Sponsor 1</div>
        <div className="sponsor-item">Sponsor 2</div>
        <div className="sponsor-item">Sponsor 3</div>
        <div className="sponsor-item">Sponsor 4</div>
        {/* spoonsors ke level bhi dal dena as per info jo bad me milegi */}
      </div>
    </section>
  );
};

export default Sponsors;
