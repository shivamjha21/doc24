import React, { Component } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./Contact_option";

const Contact = () => {
  return (
    <section id="contact" className="contact py">
      <div style={{ background: "#2888BB" }}>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="contact-left">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.6268289831164!2d-6.214682984112116!3d53.29621947996855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709e0c9c80f8f%3A0x92f408d10f2277c2!2sREVO!5e0!3m2!1sen!2snp!4v1636264848776!5m2!1sen!2snp"
                  width="600"
                  height="350"
                  style={{ border: 0, height: "530px", marginTop: "82px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-5">
              <div className="contact-right text-center bg-blue">
                <div className="contact-head mt-5">
                  <h3 className="lead">Contact Us</h3>
                  <p className="text text-md text-white">
                    For more Enquiry, Submit a form and we will get back to you.
                  </p>
                </div>
                <form>
                  <div className="form-element">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-element">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-element">
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-secondary btn-submit">
                    <i className=""></i> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

