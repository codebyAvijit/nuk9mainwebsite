import React from "react";

const Footer = () => {
  return (
    <section className="footer-up">
      <div className="col-sm-6">
        <div className="work">
          {/* <img src="assets/images/mapicon4.png" alt="map" /> */}
          <i class="ion-map"></i>
          <p>
            E-702, Arjun, NL Complex
            <br />
            Anand Nagar, Dahisar (East)
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="contact">
          {/* Social Icon */}
          <ul className="social_icons">
            <li className="facebook">
              <a className="facebook" href="#.">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="twitter">
              <a className="twitter" href="#.">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="linkedin">
              <a
                className="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/nu9auditors/?originalSubdomain=in"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
          {/* <p>Copyright © 2023 - All Rights Reserved</p> */}
          <p>
            Copyright &copy; NUK 9 Information Security Auditors LLP
            <sup>TM</sup> - All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
