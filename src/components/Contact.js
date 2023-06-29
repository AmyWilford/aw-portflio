import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="row contact-container gx-0 d-flex align-items-center">
        <div id="contact" className="col-md-6 col-12 contact-img-container">
          <h2 className="custom-secondary fw-bold text-center">
            get in touch.
          </h2>
        </div>
        <div className="col-md-6 col-12">
          <section className="ps-4 pe-4">
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
                    <i className="fa fa-linkedin mx-2"></i>
                  </a>
                  <a
                    href="https://github.com/AmyWilford"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-github mx-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
