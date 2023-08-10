import React from "react";
import Navbar from "../NavBar/NavBar";
import CarouselComp from "../CarouselComp/CarouselComp";
import AboutUS from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import WhyUs from "../WhyUs/WhyUs";
import OurLatestWorks from "../OurLatestWorks/OurLatestWorks";
import ParallexSection from "../ParallexSection/ParallexSection";
import BlogPosts from "../BlogPosts/BlogPosts";
import Testimonials from "../Testimonials/Testimonials";
import OurClients from "../OurClients/OurClients";
import ContactUs from "../ContactUs/ContactUs";
import MapComponent from "../MapComponent/MapComponent";
import Footer from "../Footer/Footer";
const HomeRoutesComp = () => {
  return (
    <div>
      <Navbar />
      <CarouselComp />
      <AboutUS />
      <Services />
      <WhyUs />
      <OurLatestWorks />
      <ParallexSection />
      <BlogPosts />
      <Testimonials />
      <OurClients />
      <ContactUs />
      <MapComponent />
      <Footer />
    </div>
  );
};
export default HomeRoutesComp;
