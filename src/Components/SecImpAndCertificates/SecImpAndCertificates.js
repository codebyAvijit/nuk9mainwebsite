import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecImpAndCertificates.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const SystemInfilComp = () => {
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
          <img src="assets/images/earth.png" alt="Company Logo" />
          <h3>
            Information Security Implementaiton, Assessment & Certification
            Services (ISIACs)
          </h3>
        </div>
        <div className="description">
          <p>
            Our Portfolio of Security Framework Implementation, Assessment and
            Certification Services assures organization's stake holders to
            abreast in the field of Information Security Governance, Assurance,
            Risk and Compliance Domains.
          </p>
          <p>Our ISIAC Practice arena includes:</p>
        </div>
        <div className="sections">
          <div className="section">
            <h2>Implementation & Assessment Services</h2>
            <ul>
              <li>
                ISO Standards Implementation & Consultancy
                <ul>
                  <li>
                    Various ISO Standards Implementation e.g., 9001, 14001,
                    18001, 22000, 22301, 27001, 15489 & 14721
                  </li>
                  <li>ISO Certification & Readiness Assessment</li>
                  <li>ISO Standard Certification Assistance</li>
                </ul>
              </li>
              <li>
                PCI-DSS Security Framework Implementation and Certification
                Assessment e.g., Banks, BPOs, KPOs, etc.
              </li>
              <li>HIPAA Security & Privacy Controls Implementation</li>
            </ul>
          </div>
          <div className="section">
            <h2>Certification Services Includes:</h2>
            <ul>
              <li>
                HIPAA Compliant Assessment Certification
                <ul>
                  <li>Security</li>
                  <li>Privacy</li>
                  <li>Breach Notification Rule</li>
                </ul>
              </li>
              <li>
                Governance, Risk, Compliance & Security (GRCS) Assessment
                Certification
                <ul>
                  <li>
                    Information Security Governance | Regulations | Risk |
                    Compliance
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SystemInfilComp;
