import React from "react";

const WhyUs = () => {
  return (
    <section className="sectoion-100px why-choose">
      <div className="container">
        <div className="sec-choose">
          {/* Nav tabs */}
          <div className="choose-tab col-md-5 no-padding">
            <h4 className="padding-left-30 padding-top-30">Why Choose us?</h4>
            <h6 className="padding-left-30 padding-top-20 padding-bottom-20">
              our capabilities
            </h6>
            <p className="padding-left-30 padding-right-40">
              We specializes in to an effective model of Information Risk:
              Identification; Assessment; Mitigation & Treatment Controls; and
              Overall Continual Improvement to ensure required organizational,
              statutory, legal and contractual obligations are attained Our
              approach covers Risk Assessment Frameworks based on ISO 27005,
              COSO, CoBIT, ISO 31000 and NIST SP 800-30
            </p>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#unique"
                  aria-controls="unique"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  <i className="fa fa-rocket"></i> Unique
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#elegant"
                  aria-controls="elegant"
                  role="tab"
                  data-toggle="tab"
                >
                  {" "}
                  <i className="fa fa-dot-circle-o"></i> elegant
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#clean"
                  aria-controls="clean"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="fa fa-leaf"></i> clean
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#minimal"
                  aria-controls="minimal"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="fa fa-pencil"></i> minimal
                </a>
              </li>
            </ul>
          </div>

          {/* Tab panels */}
          <div className="col-md-7 no-padding">
            {/* Tab Content */}
            <div className="tab-content">
              {/* Unique */}
              <div role="tabpanel" className="tab-pane active" id="unique">
                <div className="detail-in">
                  {" "}
                  <img
                    className="img-responsive"
                    // src="assets/images/why-choose-img-1.jpg"
                    src="assets/images/grc.jpg"
                    alt=""
                  />
                  <div className="text-content col-md-8">
                    {" "}
                    <i className="fa fa-rocket"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>

              {/* Elegant */}
              <div role="tabpanel" className="tab-pane" id="elegant">
                <div className="detail-in">
                  {" "}
                  <img
                    className="img-responsive"
                    src="assets/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div className="text-content col-md-8">
                    {" "}
                    <i className="fa fa-dot-circle-o"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean */}
              <div role="tabpanel" className="tab-pane" id="clean">
                <div className="detail-in">
                  {" "}
                  <img
                    className="img-responsive"
                    src="assets/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div className="text-content col-md-8">
                    {" "}
                    <i className="fa fa-leaf"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal */}
              <div role="tabpanel" className="tab-pane" id="minimal">
                <div className="detail-in">
                  {" "}
                  <img
                    className="img-responsive"
                    src="assets/images/why-choose-img-1.jpg"
                    alt=""
                  />
                  <div className="text-content col-md-8">
                    {" "}
                    <i className="fa fa-pencil"></i>
                    <p>
                      The ship set ground on the shore of this uncharted desert
                      isle with Gilligan the Skipper too the million aire and
                      his wife didn't need no welfare states
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
