import React from "react";
import "./styles/Banner.css";

export default function Banner() {
  return (
    <section className="banner-container ps-4 pe-4">
      <div className="fw-bold text-uppercase lead">Web Developer</div>
      <div className="banner-main-text">
        <h1>amy wilford.</h1>
      </div>
      <div className="row m-0">
        <div className="col-sm-8 col-6"></div>
        <div className="col-sm-4 col-6 pt-4">
          <div className="banner-nav-options">
            <div>
              <a href="#about">About Me</a>
            </div>
            <hr></hr>
            <div>
              <a href="#portfolio"> My Work</a>
            </div>
            <hr></hr>
            <div>
              <a href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
