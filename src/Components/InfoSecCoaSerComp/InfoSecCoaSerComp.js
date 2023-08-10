import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InfoSecCoaSerComp.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const InfoSecCoaSerComp = () => {
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
          <img src="assets/images/chaining.png" alt="Company Logo" />
          <h3>Information Security Coaching Services (ISCs)</h3>
        </div>
        <div className="description">
          <p>
            The number one benefit of information technology is that it empowers
            people to do what they want to do. It lets people be creative. It
            lets people be productive. It lets people learn things they didn't
            think they could learn before, and so in a sense it is all about
            potential.
          </p>
          <p>Our Information Security Coaching Practices includes:</p>
        </div>
        <div className="sections">
          <div className="section">
            <h2>ISO Training Sphere</h2>
            <ul>
              <li>ISO 27001:2013 ISMS Awareness Training</li>
              <li>ISO 27001:2013 ISMS Internal Audit Training</li>
              <li>ISO 27001:2013 ISMS Lead Auditor Training</li>
            </ul>
          </div>
          <div className="section">
            <h2>Security Assessment Certification Sphere</h2>
            <ul>
              <li>
                NUK 9 Certified Vulnerability Assessment Analyst (NCVAA) 09-01
              </li>
              <li>
                HIPAA (Security, Privacy & Breach) Compliant Lead Assessor
                (HIPAA-LA) 09-02
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoSecCoaSerComp;
