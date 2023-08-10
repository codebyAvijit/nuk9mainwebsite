import React from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import OurClients from "../OurClients/OurClients";
import Services from "../Services/Services"; // If you have a separate Services component

const ServicesRoute = () => {
  return (
    <>
      <Navbar />
      {/* <Services /> */}
      <section className="sub-banner">
        <div className="container">
          <div className="position-center-center">
            <h2>our services</h2>
          </div>
        </div>
      </section>
      <Services />
      {/* ======= SERVICE SECTION ========= */}
      {/* <section className="sectoion-100px services">
        <div className="container">
        </div>
      </section> */}
      <Testimonials />
      <OurClients />
      <Footer />
    </>
  );
};

export default ServicesRoute;
