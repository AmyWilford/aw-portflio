import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="row contact-container gx-0">
        <div className="col-md-7">
          <section id="contact" className="ps-4 pe-4">
            <h2 className="custom-primary fw-bold">get in touch.</h2>
            <div className="py-5">
              <div className="row gx-0">
                <div className="col-4 text-uppercase fw-bold">Email</div>
                <div className="col-8 text-end">wilford.amy@gmail.com</div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-4 text-uppercase fw-bold">social</div>
                <div className="col-8 d-flex justify-content-end">
                  <a
                    href="https://www.linkedin.com/in/amywilford/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-2x fa-linkedin mx-2"></i>
                  </a>
                  <a
                    href="https://github.com/AmyWilford"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-2x fa-github mx-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-5 col-12 contact-img-container"></div>
      </div>
    </>
  );
}
