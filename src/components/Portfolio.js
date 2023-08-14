import React from "react";
import "./styles/Portfolio.css";

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio-container">
      <section id="portfolio" className="ps-4 pe-4">
        <div className="row d-flex align-items-center">
          <div className="col-sm-3 order-sm-1 order-2">
            <h4 className="text-uppercase pt-5 pb-4 fw-bold">my work:</h4>
          </div>
          <div className="col-sm-9 order-sm-2 order-1">
            <hr className="section-divider"></hr>
          </div>
        </div>
        <div className="row my-5 justify-content-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 col-12 d-flex flex-column align-content-center justify-content-between px-3 project-container"
            >
              <div className="px-4">
                {project.url !== "" ? (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img
                      className="project-image img-fluid"
                      src={project.src}
                      alt={project.altTag}
                    ></img>
                  </a>
                ) : (
                  <img
                    className="project-image img-fluid"
                    src={project.src}
                    alt={project.altTag}
                  ></img>
                )}

                <div className="project-title p-2">{project.title}</div>
                <div className="project-details p-2">{project.details}</div>
                <div className="project-specs p-2">{project.specs}</div>
                <div>
                  {project.url !== "" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-uppercase p-2 fw-bold"
                    >
                      visit site
                    </a>
                  ) : (
                    <span className="text-decoration-none text-uppercase p-2 fw-bold coming-soon-color">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
