import React from "react";
import Aboutus from "./aboutUs";
import ContactUs from "./contactus";
import Events from "./events";
import "./home.css";
const HomePage = () => {
  return (
    <div className="containerFluid" id="aboutUs">
      <Aboutus />
      <Events />
      <ContactUs />
    </div>
  );
};

export default HomePage;
