import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer beige text-black text-center py-3">
      <div className="container">
        <p>© 2024 JATE ltd. All Rights Reserved.</p>
        <p>
          <Link to="/" className="text-black">HOMEPAGE</Link> | 
          <Link to="/blog" className="text-black">BLOG</Link> | 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
