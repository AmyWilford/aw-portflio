import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">|aw|</div>

      <div className={`navbar-links ${isMobileNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>

      <div className="navbar-toggle" onClick={handleMobileNavToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
