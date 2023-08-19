import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="sectoion-100px about">
      <div className="container">
        {/* Tittle */}
        <div className="tittle">
          <h4 className="titleh4">About Our Company</h4>
          <p>
            We are Quick, Fast and Efficient on the servies we provide. Our
            Track record of extensive and exclusive 20+ years hands-on expertise
            in the field of IT Assurance, Consulting and Certification
            Assessment Services with vide industry and engagement exposures.
            Having consultants with industry reputed and globally accepted
            qualifications and certifications. At NUK 9 Deliveries is always a
            Top Priority Our Expertise guarantees 100% improvement on the
            client&apos;s Process, Security and Practices (PSP). Your
            Governance, Risk, Compliance and Information Security services under
            on roof, that not only enables you to achieve the needs of the stake
            holders but also shocast Risk on Security Investments (ROSI) to the
            Top Management.
          </p>
        </div>
        <ul className="row">
          <li className="col-sm-4">
            <img
              className="img-responsive"
              // src="assets/images/about-img-1.jpg"
              src="assets/images/nuk9max.jpg"
              alt=""
            />
            <h6 className="margin-top-20 titleh4">Who we are</h6>
            <p>
              Information Systems plays an imperative role to make
              organizational success and create a brand image in minds of
              customers, we are your dedicated partners in navigating the
              complex landscape of cybersecurity. With a relentless commitment
              to securing your digital assets, we stand as a beacon of trust and
              expertise in safeguarding your information. NUK 9 Information
              Security Auditors LLP, commonly referred as,&nbsp;
              <b>“NUK 9 Auditors”</b>, leads into it.
            </p>
          </li>
          <li className="col-sm-4">
            <img
              className="img-responsive"
              // src="assets/images/about-img-2.jpg"
              src="assets/images/nuk9max.jpg"
              alt=""
            />
            <h6 className="margin-top-20 titleh4">our mission</h6>
            <p>
              Our mission is to fortify the digital realm, one organization at a
              time. Through rigorous assessment, proactive strategies, and
              continuous vigilance, we ensure that our clients are equipped to
              face an ever-evolving array of cyber risks. We are driven by the
              mission to protect your data, your operations, and your
              reputation. NUK 9 Information Security Auditors LLP, commonly
              referred as,&nbsp;
              <b>“NUK 9 Auditors”</b>, leads into it.
            </p>
          </li>
          <li className="col-sm-4">
            <img
              className="img-responsive"
              // src="assets/images/about-img-3.jpg"
              src="assets/images/nuk9max.jpg"
              alt=""
            />
            <h6 className="margin-top-20 titleh4">our vision</h6>
            <p>
              Our vision is a digitally connected world where organizations
              thrive without fear of cyber threats. We aspire to be the
              cornerstone of this vision by providing uncompromising
              cybersecurity solutions that empower businesses to innovate, grow,
              and lead with confidence.NUK 9 Information Security Auditors LLP,
              commonly referred as,&nbsp;
              <b>“NUK 9 Auditors”</b>, leads into it.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
