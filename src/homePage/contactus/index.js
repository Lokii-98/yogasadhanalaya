import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUsSection" id="contactUs">
      <div>
        <div className="ctHeader">
          <h1>Contact Us</h1>
          <h3 className="yogaSadhanalaya">Yogasadhanalaya</h3>
        </div>
        <div className="contactDetails">
          <div className="flexContainer">
            <img src="/assests/user.png" alt="name" className="contactIcons" />
            <div className="para">
              <span className="span">Name:</span> Jyothi Venkatesh/Seethalakshmi
            </div>
          </div>
          <div className="flexContainer">
            <img
              src="/assests/address.png"
              alt="address"
              className="contactIcons"
            />
            <div className="para">
              <span className="span">Address:</span> 64, SBOA Colony, 6th
              Street, Maduari-16
            </div>
          </div>
          <div className="flexContainer">
            <img
              src="/assests/wtsapp.png"
              alt="phone"
              className="contactIcons"
            />
            <div className="para">
              <span className="span">Phone:</span>+91 94437 17774
            </div>
          </div>
        </div>
      </div>
      <div className="contactImgContainer">
        <img
          alt="contactus"
          src="/assests/ContactUs.png"
          className="contactImg"
        />
      </div>
    </section>
  );
};

export default ContactUs;
