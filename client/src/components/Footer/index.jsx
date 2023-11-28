import React, { useState } from 'react';
import './style.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
      setIsSubmitted(true);
    } else {
     
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-header">
        {isSubmitted ? (
          <p>Thank You!</p>
        ) : (
          <>
            <h4>SIGN UP</h4>
            <p>Get Exclusive Promotions, Coupons, and the Latest Events</p>
            <form onSubmit={handleSubmit} className="email-input">
              <input
                type="email"
                placeholder="Enter Your E-mail"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Subscribe</button>
            </form>
          </>
        )}
      </div>

      {/* ... Other sections */}
    </footer>
  );
};

export default Footer;
