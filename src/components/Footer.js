// Footer.js
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Support: <a href="#docs">Docs</a>, <a href="mailto:support@sleeveapp.com">Email</a>, <a href="#purchase-lookup">Purchase Lookup</a></p>
        <p>Developer: <a href="https://sleeveapp.com">Sleeve</a></p>
        <div className="social-links">
          <a href="https://twitter.com">Twitter</a>
         
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
