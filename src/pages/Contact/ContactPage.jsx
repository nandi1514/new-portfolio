import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div id="contact" className="contactPage">
      <div className="title">
        <span className="no">04. Contact Me</span>
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-text">
        <p>
          I'm not currently looking for any new opportunities, my inbox is
          always open.
          <br /> Whether you have a question or just want to say hi,
          <br /> I'll will definetly get back to you!
        </p>
      </div>
      <button className="btn">Say Hello to ME</button>
    </div>
  );
};

export default ContactPage;
