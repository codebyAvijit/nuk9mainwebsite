import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RiskAssSerComp.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const RiskAssSerComp = () => {
  const carouselItems = [
    {
      id: 1,
      imageSrc: "assets/images/slides/slide-1.jpg",
      altText: "Slide 1",
    },
    {
      id: 2,
      imageSrc: "assets/images/slides/slide-2.jpg",
      altText: "Slide 2",
    },
    {
      id: 3,
      imageSrc: "assets/images/slides/slide-3.jpg",
      altText: "Slide 3",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="responsive-carousel">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <img src={item.imageSrc} alt={item.altText} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="company-info">
        <div className="header">
          <img src="assets/images/risk.png" alt="Company Logo" />
          <h3>Information Security Risk Assessment Services (ISRAs)</h3>
        </div>
        <div className="description">
          <h6>
            An element of managerial science concerned with the identification,
            measurement, control, and minimization of uncertain events. An
            effective risk management program encompasses following four phases:
          </h6>
          <ul>
            <li>
              Risk assessment, as derived from an evaluation of threats and
              vulnerabilities.
            </li>
            <li>Management Decision</li>
            <li>Control Implementaiton</li>
            <li>Effectiveness Review</li>
          </ul>
          <h6>
            Some organizations have, and many others should have, a
            comprehensive Enterprise risk management (ERM) in place. The four
            objectives categories addressed, are:
          </h6>
          <ul>
            <li>
              Strategy - high-level goals, aligned with and supporting the
              organization's mission.
            </li>
            <li>Operations - effective and efficient use of resources</li>
            <li>
              Financial Reporting - reliability of operational and financial
              reporting
            </li>
            <li>
              Compliance - compliance with applicable laws and regulations
            </li>
          </ul>
        </div>
        <div className="sections">
          <div className="section">
            <h2>
              We specializes in to an effective model of Information Risk:
            </h2>
            <ul>
              <li>Identification</li>
              <li>Assessment</li>
              <li>Mitigation and Treatment Controls</li>
              <li>
                Overall Continual Improvement to ensure required organizational,
                statutory, legal and contractual obligations are attained
              </li>
            </ul>
            <p>
              Our approach covers Risk Assessment Frameworks based on ISO 27005,
              COSO, CoBIT, ISO 31000 and NIST SP 800-30
            </p>
          </div>
          <div className="section">
            <h2>Our Information Risk Assessmnet Practices arena includes:</h2>
            <ul>
              <li>
                Information Security Risk Assessment <strong>(ISRA)</strong>
              </li>
              <li>
                Data Privacy Risk Assessment <strong>(DPRA)</strong>
              </li>
              <li>
                Enterprise Risk Management <strong>(ERM)</strong>
              </li>
              <li>
                Functions & Processes Risk Assessment <strong>(FPRA)</strong>
              </li>
              <li>
                Physical Security Risk Assessment <strong>(PSRA)</strong>
              </li>
            </ul>
            <p>
              An extensive experience of approximately 10+ years in the field of
              Information Security Risk Management covers each and every nook
              corners of the Information Systems, Technologies, Processes and
              People
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RiskAssSerComp;
