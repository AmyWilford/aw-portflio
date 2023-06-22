import React from "react";

export default function Portfolio({ projects }) {
  return (
    <section className="ps-4 pe-4">
        <div className="row ">
        {projects.map((project) => (
        <div key={project.id} className=" col-md-4 col-12 d-flex justify-content-center px-3">
                <img
                  className="project-image img-fluid"
                  src={project.src}
                  alt={project.altTag}
                ></img>
        </div>
      ))}
        </div>
      
    </section>
  );
}
