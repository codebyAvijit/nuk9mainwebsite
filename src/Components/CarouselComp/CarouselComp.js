import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComp.css";

const CarouselComp = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNext />,
    // prevArrow: <SamplePrev />,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    beforeChange: (currentSlide, nextSlide) => {
      // Get the active slide and add animation class to it
      const activeSlide = document.querySelector(
        `.slick-slide[data-index="${nextSlide}"]`
      );
      activeSlide
        .querySelectorAll(".slide-from-top, .slide-from-bottom")
        .forEach((element) => {
          element.classList.add("animate");
        });
    },
    afterChange: (currentSlide) => {
      // Remove animation classes from all slides except the active one
      document
        .querySelectorAll(
          ".slick-slide:not([data-index='" + currentSlide + "']) .animate"
        )
        .forEach((element) => {
          element.classList.remove("animate");
        });
    },
  };

  return (
    <section className="home-slider">
      <div className="tp-banner-container">
        <Slider {...sliderSettings}>
          {/* Slider 1 */}
          <div className="slide-item">
            <img
              src="assets/images/slides/slide-1.jpg"
              alt=""
              className="slide-image"
            />
            <div className="slide-caption">
              <div className="slide-title slide-from-top">
                Governance | Risk | Compliance | Security | Coaching
              </div>
              <div className="slide-subtitle slide-from-bottom">
                Destination for all InfoSec Compliances
              </div>
            </div>
          </div>

          {/* Slider 2 */}
          <div className="slide-item">
            <img
              src="assets/images/slides/slide-2.jpg"
              alt=""
              className="slide-image"
            />
            <div className="slide-caption">
              <div className="slide-title slide-from-top">
                INFORMATION TECHNOLOGY IS VERY DIVERSIFIED!!
              </div>
              <div className="slide-subtitle slide-from-bottom">
                WE ALL SHOULD KNOW!!
              </div>
              <div className="slide-description slide-from-bottom">
                Here At Nuk9 &amp; You Name It We Deliver!
              </div>
            </div>
          </div>
          {/* Slider 3 */}
          <div className="slide-item">
            <img
              src="assets/images/slides/slide-3.jpg"
              alt=""
              className="slide-image"
            />
            <div className="slide-caption">
              <div className="slide-title slide-from-top">
                VALUABLE RESOURCES ARE SAFEGUARDED FROM<br></br>RISKS AND
                THREAT!!
              </div>
              <div className="slide-subtitle slide-from-bottom">
                Your Training Skills Development, Our Prime Objective!!
              </div>
              <div className="slide-description slide-from-bottom">
                At Nuk9 &amp; You Risk Assessment Needs, Catered Via Excellence
              </div>
            </div>
          </div>
          {/* Slider 4 */}
          <div className="slide-item">
            <img
              src="assets/images/slides/slide-4.jpg"
              alt=""
              className="slide-image"
            />
            <div className="slide-caption">
              <div className="slide-title slide-from-top">
                IS MY RELIANCE ON INFORMATION SECURITY IS WORTHY ENOUGH?
              </div>
              <div className="slide-subtitle slide-from-bottom">
                HOW SHOULD I SAFEGUARD IT?
              </div>
              <div className="slide-description slide-from-bottom">
                At Nuk9 &amp; Infiltration in the systems, Endure with Top
                Confidentiality
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselComp;
