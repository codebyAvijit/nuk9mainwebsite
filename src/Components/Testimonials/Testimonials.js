import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "assets/images/avatar-1.png",
      name: "grerry cristal",
      location: "Sydney, Australia",
      text: "So this is the tale of our castaways they're here for a the curves.Well the first thing you know long long time. They'll have to make the best of things uphill climb. Straightnin' Jeds a millionaire. Kinfolk said Jed move away from there.",
    },
    {
      avatar: "assets/images/avatar-1.png",
      name: "M_ADNAN",
      location: "Sydney, Australia",
      text: "So this is the tale of our castaways they're here for a make the best long long time. They'll have to of things uphill climb. Straightnin' the curves.Well the first thing you know Jeds a millionaire. Kinfolk said Jed move away from there.",
    },
    {
      avatar: "assets/images/avatar-1.png",
      name: "FATON DESIGN",
      location: "Sydney, Australia",
      text: "So this is the tale . They'll have to make the best of things of our castaways they're here for a long long time uphill climb. Straightnin' the curves.Well the first thing you know Jeds a millionaire. Kinfolk said Jed move away from there.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="tastimonial tastimonial-bg padding-bottom-100">
      <div className="container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testi">
              <div className="avatar">
                <img src={testimonial.avatar} alt="Avatar" />
              </div>
              <h6>{testimonial.name}</h6>
              <span>{testimonial.location}</span>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
