import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SytemInfilComp.css";
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
          <img src="assets/images/target.png" alt="Company Logo" />
          <h3>Information System Infiltration Assessment Services (ISIAs)</h3>
        </div>
        <div className="description">
          <p>
            A service that conducted to ensure the information systems,
            processes, technology, functions and above all people who runs the
            show are not exposure to threats, vulnerabilities and risks
          </p>
          <p>
            An assessment conducted to determine the degree to which information
            systems controls are correctly implemented, whether they are
            operating as intended, and whether they are producing the desired
            level of security and assurance to the management.
          </p>
          <p>
            A vulnerability assessment conducted to determine weaknesses
            inherent in information systems that could be exploited leading to
            information system breach. Assessments are performed against all
            information systems on a pre-determined regularly scheduled basis.
          </p>
        </div>
        <div className="sections">
          <div className="section">
            <h2>Our Infiltration Testing Services:</h2>
            <ul>
              <li>
                Tests the network using the same methodologies and tools
                employed by attackers
              </li>
              <li>
                Verifies whether vulnerabilities actually exist or it is just at
                an infant stage
                <ul>
                  <li>
                    Goes beyond surface vulnerabilities and demonstrates how
                    these vulnerabilities are exploited iteratively to gain
                    greater access
                  </li>
                </ul>
              </li>
              <li>Demonstrates vulnerabilities are not purely theoretical</li>
              <li>
                Provides the “realism” necessary to address security issues
              </li>
              <li>
                Allows for testing of procedures and susceptibility of the human
                element to social engineering
              </li>

              <li>
                Gains an insight to the Management and Returns-On Security
                Investment (ROSI)
              </li>
            </ul>
          </div>
          <div className="section">
            <h2>Our ISIAS Practices arena includes:</h2>
            <ul>
              <li>Passive Vulnerability Assessment Services</li>
              <li>Active Vulnerability Assessment Services</li>
              <li>
                Intrusive / Non-Intrusive System Infiltration Testing Services
              </li>
              <li>
                Business Application Security Infiltration Testing Services
              </li>
              <li>Wireless Infiltration Testing Services</li>
              <li>Network Devices Configuration Vulnerability Reviews</li>
              <li>Codes & Logic's Infiltration Testing Services</li>
              <li>Human Element Exploitation Services</li>
              <li>Holes in Physical Perimeter Security Services</li>
              <li>
                Infiltration in the systems, Endure with Top Confidentiality...
              </li>
              <li>
                Providing evidence to support increased investments in security
                personnel and technology
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
