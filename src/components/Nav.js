import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        (navbarRef.current && !navbarRef.current.contains(event.target)) ||
        event.target.classList.contains("nav-item")
      ) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">{/* <span>|aw|</span> */}</div>

      <div className={`navbar-links ${isMobileNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a className="nav-item" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="nav-item" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-item" href="#contact">
              contact
            </a>
          </li>
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
