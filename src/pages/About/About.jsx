import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">
        <span className="no">02.</span>
        <h1>&nbsp; About</h1>
      </div>
      <div className="row">
        <div className="about-text-container">
          An enthusiastic Software Developer with experience in design and
          development of real world applications . With ability to enhance
          features as per requirement. A self motivated team player. A critical
          thinker, adept with web technologies and frameworks, development
          tools, data structures and Algorithms.
        </div>
        <div className="image-container">
          <img src="./images/me-1.jpg" alt="me-potrait" />
        </div>
      </div>
    </div>
  );
};

export default About;
