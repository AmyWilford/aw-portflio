import React from "react";
import "./styles/Banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <div>
        <div className="text-uppercase ">Web Developer</div>
        <div className="banner-main-text">
          <h1>amy wilford.</h1>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-7"></div>
        <div className="col-4">
          <div id="banner-nav-options">
            <div>
              <a href="#">About Me</a>
            </div>
            <hr></hr>
            <div>
              <a href="#"> My Work</a>
            </div>
            <hr></hr>
            <div>
              <a href="#">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
