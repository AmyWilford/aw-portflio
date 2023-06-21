import React from "react";

export default function Nav() {
  return (
    <nav className="header-nav-container d-flex justify-content-between w-100">
      <div id="brand-logo">
        <a href="#">aw</a>
      </div>
      <div className="header-nav d-flex">
        <div className="nav-item">
          <a href="#">about</a>
        </div>
        <div className="nav-item">
          <a href="#">portfolio</a>
        </div>
        <div className="nav-item">
          <a href="#">contact</a>
        </div>
      </div>
    </nav>
  );
}
