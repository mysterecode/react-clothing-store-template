import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a premium clothing brand offering high-quality apparel for men. Our goal is to
            redefine fashion with style and comfort.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> support@brand.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
            </li>
            <li>
              123 Fashion St, New York, NY 10001
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brand Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
