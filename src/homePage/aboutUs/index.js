import React from "react";
import "../home.css";
const Aboutus = () => {
  return (
    <section className="sectionContainer">
      <div className="aboutUs">
        <div className="yogaImageCont avatar">
          <img alt="imagr" src="/assests/Yoga.png" className="yogaImage" />
        </div>
        <div className="aboutUsPara">
          <h3 className="aboutUsHeader">Yogasadhanalaya</h3>
          <p>
            Yoga is an extraordinary spiritual science of self-development and
            self-realization that shows us how to develop our full potential in
            our many-sided lives. It was first devised by the rishis and sages
            of ancient India and has been maintained by a stream of living
            teachers ever since, who have continually adapted this science to
            every generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
