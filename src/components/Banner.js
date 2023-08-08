// import React, { useState, useEffect } from "react";
import "./styles/Banner.css";

export default function Banner() {
  return (
    <section className="banner-container pe-4">
      <div className="fw-bold text-uppercase lead">Web Developer</div>
      <div className="banner-main-text">
        <h1>amy wilford.</h1>
      </div>
      <div className="row m-0">
        <div className="col-sm-8 col-6"></div>
        <div className="col-sm-4 col-6 pt-4">
          <div className="banner-nav-options d-flex flex-column">
            <div>
              <a href="#about">About Me</a>
            </div>
            <hr className="banner-hr"></hr>

            <div>
              <a href="#portfolio"> Portfolio</a>
            </div>
            <hr></hr>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
