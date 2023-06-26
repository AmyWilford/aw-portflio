import React from "react";
import "./styles/About.css";
import headshot from "../assets/aw-headshot.png";

export default function About() {
  return (
    <section id="about" className="ps-4 pe-4">
      <h4 className="text-uppercase my-4 fw-bold">about me</h4>

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-12">
          <div className="pb-5" id="bio">
            Experienced Web Developer fueled by passion and equipped with skills
            developed over a decade in Arts & Culture, Education, and Non-Profit
            spaces, which have cultivated a creative mindset, an open approach
            to collaboration, and refined communication skills. Through my
            transition in to the Tech sector I have brought a fresh perspective
            on designing and developing impactful applications. From building
            projects from scratch to asking insightful questions and finding
            solutions, I bring a relentless drive to find innovative solutions.
          </div>

          {/* <hr className="section-divider section-divider-web"></hr> */}
        </div>
        <div className="col-sm-5 col-12 headshot-container text-center">
          <img className="img-fluid" src={headshot} alt="profile" />
          <div>
            <button>view resume</button>
          </div>
        </div>
        {/* <hr className="section-divider section-divider-mobile"></hr> */}
      </div>
      <div className="my-4">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 col-sm-5 order-sm-1 order-2">
            <h4 className="text-uppercase my-4 fw-bold">Technical Skills:</h4>
          </div>
          <div className="col-md-8 col-sm-7 order-sm-2 order-1">
            <hr className="section-divider"></hr>
          </div>
        </div>
        {/* <h4 className="fw-bold text-uppercase my-4">Technical Skills</h4> */}
        <div>
          <h5 className="my-4 custom-primary">Languages & Frameworks:</h5>
          <div className="about-list-container">
            <ul>
              <li>Bootstrap</li>
              <li>CSS3</li>
              <li>GraphQL</li>
              <li>Express</li>
              <li>Handlebars</li>
              <li>HTML</li>
              <li>JavaScriptES6+</li>
              <li>JQuery</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>REST API</li>
              <li>SASS</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="my-4 custom-primary">
            Applications & Industry Processes:
          </h5>
          <div className="about-list-container">
            <ul>
              <li>Agile Methodology</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Insomnia</li>
              <li>MongoDB Atlas</li>
              <li>TDD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
