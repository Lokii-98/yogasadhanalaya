import React from "react";
import Aboutus from "./aboutUs";
import ContactUs from "./contactus";
import Events from "./events";
import './home.css'
const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Aboutus />
        <Events />
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
