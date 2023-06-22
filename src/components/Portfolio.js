import React from "react";

export default function Portfolio({ projects }) {
  return (
    <section className="ps-4 pe-4">
      <hr className="section-divider my-5"></hr>
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
  );
}
