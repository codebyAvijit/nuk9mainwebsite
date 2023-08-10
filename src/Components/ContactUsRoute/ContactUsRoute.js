import React from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "../MapComponent/MapComponent";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const ContactUsRoute = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <section className="sub-banner">
        <div className="container">
          <div className="position-center-center">
            <h2>CONTACT US</h2>
          </div>
        </div>
      </section>
      <MapComponent />
      <section className="sectoion-100px contact contact-page">
        <div className="container">
          {/* Title */}
          <div className="tittle">
            <h4>Your One Step Solution</h4>
            <p>
              We are virually open and committed to full-fill all of the GRC
              needs, and we greatly value your interest and would be delighted
              to connect with you. Please feel free to reach out to us for a
              personalized demo, meeting requests, pricing inquiries, or any
              other queries you may have. We are eagerly awaiting the
              opportunity to assist you.
            </p>
          </div>
          <div className="row">
            {/* Contact Info */}
            <div className="col-sm-4">
              <div className="contct-info">
                <h5>Get in touch</h5>
                <ul>
                  {/* ADDRESS */}
                  <li className="media">
                    <div className="media-left">
                      <div className="icon">
                        {" "}
                        <i className="fa fa-map-marker"></i>{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">ADDRESS</h6>
                      <p>
                        Location: E-702, Arjun, NL Complex, Anand Nagar, Dahisar
                        (East)
                      </p>
                    </div>
                  </li>
                  {/* call */}
                  <li className="media">
                    <div className="media-left">
                      <div className="icon">
                        {" "}
                        <i className="fa fa-mobile-phone"></i>{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">call us</h6>
                      <p>Phone: (022) 400 22 702</p>
                      <p>Open Hours: Mon-Sat: 10AM - 7PM</p>
                    </div>
                  </li>
                  {/* e-mail */}
                  <li className="media">
                    <div className="media-left">
                      <div className="icon">
                        {" "}
                        <i className="fa fa-envelope-o"></i>{" "}
                      </div>
                    </div>
                    <div className="media-body">
                      <h6 className="media-heading">e-mail</h6>
                      <p>Email: info@nuk9.in</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="contact-form">
                {/* FORM */}
                <form
                  id="contact_form"
                  className="contact-form"
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle form submission logic here
                  }}
                >
                  <ul className="row">
                    <li className="col-sm-6">
                      <label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="*NAME"
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="*EMAIL"
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          id="company"
                          placeholder="PHONE"
                        />
                      </label>
                    </li>
                    <li className="col-sm-6">
                      <label>
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          id="website"
                          placeholder="SUBJECT"
                        />
                      </label>
                    </li>
                    <li className="col-sm-12">
                      <label>
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="5"
                          placeholder="*MESSAGE"
                          style={{ resize: "none" }}
                        ></textarea>
                      </label>
                    </li>
                    <li className="col-sm-12 no-margin">
                      <button
                        type="submit"
                        value="submit"
                        className="btn"
                        id="btn_submit"
                      >
                        send message
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectoion-100px promo">
        <div className="container">
          <div className="position-center-center">
            <h5>Your One Step Solution For Every GRC Related Problems</h5>
            <a onClick={homeHandler} href="/" className="btn">
              Back To HOME
            </a>{" "}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUsRoute;
