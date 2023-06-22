import React from "react";
import "./styles/About.css";
import headshot from "../assets/aw-headshot.png";

export default function About() {
  return (
    <section id="about" className="ps-4 pe-4">
      <h4 className="text-uppercase my-4 fw-bold">about me</h4>

      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-12">
            <div className="pb-5" id="bio">
            Experienced Web Developer fueled by passion and equipped with skills
          developed over a decade in Arts & Culture, and Non-Profit spaces,
          which have cultivated a creative mindset, an open approach to
          collaboration, and refined communication skills. Through my transition
          in to the Tech sector I have brought a fresh perspective on designing
          and developing impactful applications. From building projects from
          scratch to asking insightful questions and finding solutions, I bring
          a relentless drive to find innovative solutions.
            </div>
         
          <hr className="section-divider section-divider-web"></hr>
        </div>
        <div className="col-md-5 col-12 headshot-container text-center pb-5">
          <img className="img-fluid" src={headshot} alt="profile" />
          <div>
            <button>view resume</button>
          </div>
        </div>
        <hr className="section-divider section-divider-mobile"></hr>
      </div>
      <div className="my-4">
        <h4 className="fw-bold text-uppercase my-4">Technical Skills</h4>
        <div>
          <h5 className="my-4 custom-primary">Languages & Frameworks:</h5>
          <div className="about-list-container">
            <ul>
              <li>JavaScriptES6+</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>Express</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>PHP</li>
              <li>REST API</li>
              <li>JQuery</li>
              <li>Handlebars</li>
              <li>HTML</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="my-4 custom-primary">Applications & Industry Processes:</h5>
          <div className="about-list-container">
            <ul>
              <li>Agile</li>
              <li>TDD</li>
              <li>Github</li>
              <li>Heroku</li>
              <li>Insomnia</li>
              <li>MongoDB Atlas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
