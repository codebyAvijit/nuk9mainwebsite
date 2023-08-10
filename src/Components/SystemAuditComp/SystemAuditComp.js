import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SystemAuditComp.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const SystemAuditComp = () => {
  const carouselItems = [
    {
      id: 1,
      // imageSrc: "assets/images/slides/slide-1.jpg",
      imageSrc: "assets/images/about-img-1.jpg",
      altText: "Slide 1",
    },
    {
      id: 2,
      // imageSrc: "assets/images/slides/slide-2.jpg",
      imageSrc: "assets/images/about-img-2.jpg",
      altText: "Slide 2",
    },
    {
      id: 3,
      // imageSrc: "assets/images/slides/slide-3.jpg",
      imageSrc: "assets/images/about-img-3.jpg",
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
          <img src="assets/images/auditor.png" alt="Company Logo" />
          <h3>Information System Audit Services (ISAs)</h3>
        </div>
        <div className="description">
          <p>
            An Information Technology (IT) Audit is review of Organization's
            Management, Operational and Technical Controls. Evaluating the
            reliability of Data from IT Systems which have an impact on the
            Financial Statements
          </p>
          <h4>The prime objective of IT Audits includes:</h4>
          <ul>
            <li>
              Evaluating the reliability of Data from IT Systems which have an
              impact on the Financial Statements.
            </li>
            <li>
              Ascertaining the Level of Compliance with the applicable Laws,
              Policies and Standards in relation to IT.
            </li>
            <li>
              Ensuring if there are instances of excess, extravagances,
              inefficiency and wastage in the use and management of IT Systems.
            </li>
            <li>
              Ensures asset safeguarding - assets includes: Data, Application
              Systems, Technologies, Facilities, People, etc.
            </li>
            <li>
              Ensures that Effectiveness <strong>(EF)</strong>, Efficiency{" "}
              <strong>(EC)</strong>, Confidentiality <strong>(C)</strong>,
              Integrity <strong>(I)</strong>, Availability <strong>(A)</strong>,
              Compliance <strong>(CO)</strong>, and Reliability of Information
              <strong>(RI)</strong>, all these seven <strong>(7)</strong>{" "}
              attributes of data or information are maintained.
            </li>
          </ul>
          <p>
            IT Audits are important because it gives assurance that the IT
            Systems are adequately protected, provide reliable information to
            users and properly managed to achieve their intended benefits. IT
            Audit may also help to reduce risks of data tampering, data loss or
            leakage, service disruption, and poor management of IT Systems. With
            the increase in the investment and dependence on computerized
            systems by the organizations, it has become imperative for audit to
            change the methodology and approach to audit because of the risks to
            data integrity, abuse, privacy, etc.
          </p>
        </div>
        <div className="sections">
          <div className="section">
            <h2>Our Approach & Methodology includes</h2>
            <ul>
              <li>Establishing the IT Audit Objectives and Scope</li>
              <li>Developing Audit Plans to achieve the IT Audit Objectives</li>
              <li>
                Information Gathering on relevant IT Controls and Evaluating
                them
              </li>
              <li>
                Use of Audit Techniques using CAATs and/or Manual review to
                obtain sufficient and appropriate Audit Evidence through the use
                of any one and/or all of audit assertions:
                <ul>
                  <li>Inquiry</li>
                  <li>Observation</li>
                  <li>Confirmation</li>
                  <li>Testing</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Our System Audit Practices includes:</h2>
            <ul>
              <li>ITGC Controls Testing</li>
              <li>
                Regulatory Annual System Audits &nbsp;
                <span style={{ color: "red" }}>
                  e.g., RBI, Stock Exchanges, CCA, IRDA, CERT-In, IT Act, SEBI,
                  FMC, CVC, Payment & Settlement Act and many more
                </span>
              </li>
              <li>
                Information Gathering on relevant IT Controls and Evaluating
                them
              </li>
              <li>Establishing the IT Audit Objectives and Scope</li>
              <li>Developing Audit Plans to achieve the IT Audit Objectives</li>
              <li>
                Information Gathering on relevant IT Controls and Evaluating
                them
              </li>
              <li>Establishing the IT Audit Objectives and Scope</li>
              <li>Developing Audit Plans to achieve the IT Audit Objectives</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SystemAuditComp;
