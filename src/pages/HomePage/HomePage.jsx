import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="#home" className="homepage">
      <span>Hi, my name is</span>
      <h1>
        <span>Akash Nandi.</span>
        <br />
        An enthusiastic Software Developer <br />
        with experience in design and development <br />
        of real world applications.
      </h1>

      <button className="btn">Contact Me</button>
    </div>
  );
};

export default HomePage;
