import React from "react";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here if needed
    // For example, you can use Axios or fetch to send form data to the server
    // You can access form field values using event.target.elements
  };

  return (
    <section className="sectoion-100px contact">
      <div className="container">
        {/* Title */}
        <div className="tittle">
          <h4>contact us</h4>
          <p>
            We are virually open and committed to full-fill all of the GRC
            needs, and we greatly value your interest and would be delighted to
            connect with you. Please feel free to reach out to us for a
            personalized demo, meeting requests, pricing inquiries, or any other
            queries you may have. We are eagerly awaiting the opportunity to
            assist you.
          </p>
        </div>

        <div className="contact-form">
          {/* FORM */}
          <form
            id="contact_form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-12">
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
                </ul>
              </div>
              <div className="col-md-12">
                <ul className="row">
                  <li className="col-sm-12">
                    <label>
                      <textarea
                        className="form-control"
                        style={{ resize: "none" }}
                        name="message"
                        id="message"
                        rows="5"
                        placeholder="*MESSAGE"
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
