import React from "react";
import "./styles/Portfolio.css";

export default function Portfolio({ projects }) {
  return (
    <div className="portfolio-container">
      <section id="portfolio" className="ps-4 pe-4">
        <div className="row d-flex align-items-center">
          <div className="col-md-3 order-md-1 order-2">
            <h4 className="text-uppercase my-4 fw-bold">my work</h4>
          </div>
          <div className="col-md-9 order-md-2 order-1">
            <hr className="section-divider"></hr>
          </div>
        </div>
        <div className="row ">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" col-md-4 col-12 d-flex flex-column align-content-center justify-content-between px-3 text-center"
            >
              <div>
                <img
                  className="project-image img-fluid"
                  src={project.src}
                  alt={project.altTag}
                ></img>
                <div>{project.title}</div>
                <div>{project.details}</div>
                <div>{project.specs}</div>
              </div>
              <div>
                <hr></hr>
                <div className="row">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    deployed
                  </a>
                </div>

                <hr></hr>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
