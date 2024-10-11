import React from 'react';
import './ContactUs.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, feel free to reach out to us.
        We at codebase will ensure that your each and every query is resolved
      </p>
      <div className="contact-details">
        {/* boss se id contact wagera lene hai aur yaha laga dene hai */}
        <p>Email: ayushkumar@example.com</p>
        <p>Phone: +6397254377</p>
      </div>
    </section>
  );
};

export default Contact;
