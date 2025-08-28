import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-accent">M</span>aiyo
            </a>
            <p className="footer-tagline">Software Engineer & Developer</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="footer-social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/denis-maiyo-0a80aa363" className="footer-social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="footer-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/MaiyoDenis" className="footer-social-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-divider">
          <p className="footer-copyright">
            &copy; 2024 Maiyo Denis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
