import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
const Services = () => {
  const navigate = useNavigate();
  const serviceHandlerOne = () => {
    navigate("/systemaudit");
  };
  const serviceHandlerTwo = () => {
    navigate("/riskassesment");
  };
  const serviceHandlerThree = () => {
    navigate("/systeminfiltration");
  };
  const serviceHandlerFour = () => {
    navigate("/grcs");
  };
  const serviceHandlerFive = () => {
    navigate("/secucoahing");
  };
  return (
    <section className="sectoion-100px services light-gray-bg">
      <div className="container">
        {/* Tittle */}
        <div className="tittle">
          <h4 className="tittleh4">OUR portfolio of services</h4>
          <p>
            Services that are conducted to ensure the information systems,
            processes, technology, functions and above all people who runs the
            show are not exposed to threats, vulnerabilities and risks. Your
            Governance, Risk, Compliance and Information Security services under
            on roof, that not only enables you to achieve the needs of the stake
            holders but also shocast Risk on Security Investments (ROSI) to the
            Top Management
          </p>
        </div>

        {/* Service Row */}
        <ul className="row">
          {/* Service */}
          <li
            style={{ cursor: "pointer" }}
            onClick={serviceHandlerOne}
            className="col-md-4"
          >
            <div className="ser-in margin-bottom-30">
              <div className="icon">
                {" "}
                <img src="assets/images/auditor503.png" alt="" />{" "}
              </div>
              <h5 className="tittleh5">
                Information System Audit Services (ISAs)
              </h5>
              <hr />
              <p>
                An Information Technology (IT) Audit is review of Organization's
                Management, Operational and Technical Controls. Evaluating the
                reliability of Data from IT Systems which have an impact on the
                Financial Statements
              </p>
            </div>
          </li>

          {/* Service */}
          <li
            style={{ cursor: "pointer" }}
            onClick={serviceHandlerTwo}
            className="col-md-4"
          >
            <div className="ser-in margin-bottom-30">
              <div className="icon">
                {" "}
                <img src="assets/images/risk503.png" alt="" />{" "}
              </div>
              <h5 className="tittleh5">
                Information Security Risk Assessment Services (ISRAs)
              </h5>
              <hr />
              <p>
                An element of managerial science concerned with the
                identification, measurement, control, and minimization of
                uncertain events. Risk assessment, as derived from an evaluation
                of threats and vulnerabilities.
              </p>
            </div>
          </li>

          {/* Service */}
          <li
            style={{ cursor: "pointer" }}
            onClick={serviceHandlerThree}
            className="col-md-4 margin-bottom-30"
          >
            <div className="ser-in">
              <div className="icon">
                {" "}
                <img src="assets/images/target503.png" alt="" />{" "}
              </div>
              <h5 className="tittleh5">
                System Infiltration Assessment Services
              </h5>
              <hr />
              <p>
                A service that conducted to ensure the information systems,
                processes, technology, functions and above all people who runs
                the show are not exposure to threats, vulnerabilities and risks.
              </p>
            </div>
          </li>

          {/* Service */}
          <li
            style={{ cursor: "pointer" }}
            onClick={serviceHandlerFour}
            className="col-md-4"
          >
            <div className="ser-in margin-bottom-30">
              <div className="icon">
                {" "}
                <img src="assets/images/earth503.png" alt="" />{" "}
              </div>
              <h5 className="tittleh5">
                Information Security Implementaiton, Assessment & Certification
                Services (ISIACs)
              </h5>
              <hr />
              <p>
                These are the voyages of the Starship Enterpr movin' on up to
                the east side. We finally got a piece of the pie.
              </p>
            </div>
          </li>

          {/* Service */}
          <li
            style={{ cursor: "pointer" }}
            onClick={serviceHandlerFive}
            className="col-md-4"
          >
            <div className="ser-in margin-bottom-30">
              <div className="icon">
                {" "}
                <img src="assets/images/chaining503.png" alt="" />{" "}
              </div>
              <h5 className="tittleh5">
                Information Security Coaching Services (ISCs)
              </h5>
              <hr style={{ marginTop: "40px" }} />
              <p>
                These are the voyages of the Starship Enterpr movin' on up to
                the east side. We finally got a piece of the pie.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
