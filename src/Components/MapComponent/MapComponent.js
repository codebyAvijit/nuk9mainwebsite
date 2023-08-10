import React from "react";
import "./MapComponent.css";

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        title="Embedded Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60266.31275931649!2d72.86343007475209!3d19.254317046351275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0efb20f1cdf%3A0x5bc7b9e25252255f!2sNUK%209%20Information%20Security%20Auditors%20LLP!5e0!3m2!1sen!2sin!4v1690718309677!5m2!1sen!2sin"
        className="map-iframe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
