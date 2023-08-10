import React from "react";
import { useNavigate } from "react-router-dom";
const ParallexSection = () => {
  const navigate = useNavigate();
  const clickConHandler = () => {
    navigate("/contact");
  };
  const sectionStyle = {
    background: "url(assets/images/bg/bg-1.jpg) center center fixed no-repeat",
  };

  return (
    <>
      <section className="sectoion-100px parallax-bg" style={sectionStyle}>
        <div className="container">
          <h3>
            We do innovative things at Nuk9, so that we can provide the best
            value to our customers
          </h3>
          <a
            onClick={clickConHandler}
            href="/contact"
            className="btn  margin-right-10"
          >
            contact us
          </a>{" "}
          {/* <a href="#." className="btn btn-1 margin-left-10">
            purchase now
          </a> */}
        </div>
      </section>
    </>
  );
};

export default ParallexSection;
