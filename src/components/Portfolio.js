import React from "react";
import "./styles/Portfolio.css";

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio-container">
      <section id="portfolio" className="ps-4 pe-4">
        <div className="row d-flex align-items-center">
          <div className="col-sm-3 order-sm-1 order-2">
            <h4 className="text-uppercase my-4 fw-bold">my work:</h4>
          </div>
          <div className="col-sm-9 order-sm-2 order-1">
            <hr className="section-divider"></hr>
          </div>
        </div>
        <div className="row my-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" col-lg-4 col-md-6 col-12 d-flex flex-column align-content-center justify-content-between px-3 mb-5 text-center"
            >
              <div>
                <a  href={project.url}
                    target="_blank"
                    rel="noreferrer">
                  <img
                    className="project-image img-fluid"
                    src={project.src}
                    alt={project.altTag}
                  ></img>
                </a>
                <div className="project-title">{project.title}</div>
                <div className="project-details p-2">{project.details}</div>
                <div className="project-specs p-2">{project.specs}</div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <hr className="section-divider project-divider"></hr>
                <div className="row">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    visit site
                  </a>
                </div>
                <hr className="section-divider project-divider"></hr>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
