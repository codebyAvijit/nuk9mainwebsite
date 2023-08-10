import React from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const AboutUsRoute = () => {
  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Navbar />
        <section className="sub-banner">
          <div className="container">
            <div className="position-center-center">
              <h2>About us</h2>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="sectoion-100px about">
          <div className="container">
            {/* Title */}
            <div className="tittle">
              <h4>About our agency</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>
            <ul className="row">
              <li className="col-sm-4">
                <img
                  className="img-responsive"
                  src="assets/images/about-img-1.jpg"
                  alt=""
                />
                <h6 className="margin-top-20">Who we are</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
              <li className="col-sm-4">
                <img
                  className="img-responsive"
                  src="assets/images/about-img-2.jpg"
                  alt=""
                />
                <h6 className="margin-top-20">our mission</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
              <li className="col-sm-4">
                <img
                  className="img-responsive"
                  src="assets/images/about-img-3.jpg"
                  alt=""
                />
                <h6 className="margin-top-20">our vision</h6>
                <p>
                  Can you tell me how to get how to get to SesaStreet. Now the
                  world don't move to the beat of just one um. What might be
                  right for you the.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Parallax Section */}
        <section
          className="sectoion-150px parallax-bg"
          style={{
            background:
              "url(assets/images/bg/bg-2.jpg) center center fixed no-repeat",
          }}
        >
          <div className="container">
            <h4>see how we work to create everything unique</h4>
            <a href="#." className="play-btn">
              <i className="ion-play"></i>{" "}
            </a>{" "}
          </div>
        </section>

        {/* Team Member Section */}
        <section className="team sectoion-100px">
          <div className="container">
            {/* Title */}
            <div className="tittle">
              <h4>our awesome minds</h4>
              <p>
                He's a demon on wheels. The mate was a mighty sailin' man the
                Skipper brave and sure. Five passengers set sail that day for a
                three hour tour a three hour tour the ship set ground on the
                shore of this uncharted
              </p>
            </div>

            {/* Row */}
            <ul className="row">
              {/* Team */}
              <li className="col-md-4">
                <article>
                  <img
                    className="img-responsive"
                    src="assets/images/team-1.jpg"
                    alt=""
                  />
                  <div className="team-name">
                    <h6>Daniel Pasternak</h6>
                    <span>Web designer</span>
                  </div>
                </article>
              </li>

              {/* Team */}
              <li className="col-md-4">
                <article>
                  <img
                    className="img-responsive"
                    src="assets/images/team-2.jpg"
                    alt=""
                  />
                  <div className="team-name">
                    <h6>TOM BURLY</h6>
                    <span>Developer </span>
                  </div>
                </article>
              </li>

              {/* Team */}
              <li className="col-md-4">
                <article>
                  <img
                    className="img-responsive"
                    src="assets/images/team-3.jpg"
                    alt=""
                  />
                  <div className="team-name">
                    <h6>MICHAEL BRADLEY</h6>
                    <span>Designer</span>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>

        {/* Clients-logo */}
        <section className="sectoion-100px promo">
          <div className="container">
            <div className="position-center-center">
              <h5>Do you want to discuss with us?</h5>
              <a href="#." className="btn">
                CONTACT US
              </a>{" "}
            </div>
          </div>
        </section>

        {/* FOOTER UP */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsRoute;
