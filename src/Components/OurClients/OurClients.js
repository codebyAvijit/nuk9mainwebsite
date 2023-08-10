import React from "react";

const OurClients = () => {
  return (
    <section className="sectoion-100px clients-logo light-gray-bg">
      <div className="container">
        {/* Title */}
        <div className="tittle">
          <h4>our trusted clients</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>

        <ul className="row">
          <li className="col-sm-4">
            <img src="assets/images/c-logo-1.png" alt="" />
          </li>
          <li className="col-sm-4">
            <img src="assets/images/c-logo-2.png" alt="" />
          </li>
          <li className="col-sm-4">
            <img src="assets/images/c-logo-3.png" alt="" />
          </li>
          <li className="col-sm-4">
            <img src="assets/images/c-logo-4.png" alt="" />
          </li>
          <li className="col-sm-4">
            <img src="assets/images/c-logo-5.png" alt="" />
          </li>
          <li className="col-sm-4">
            <img src="assets/images/c-logo-6.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurClients;
