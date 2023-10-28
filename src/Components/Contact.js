import React from "react";
import "./CSS/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact">
        <div id="sub_contact">
          <h4 id="contact_title" data-aos="fade-up">
            Contact Me!
          </h4>
          <form
            action="https://formspree.io/f/xaygvqpl"
            method="POST"
            data-aos="fade-up"
          >
            <div className="user_gmail">
              <h6>Username</h6>
              <input
                type="text"
                className="gmail"
                autoComplete="off"
                placeholder="FullName"
                required
              />
            </div>
            <div className="user_gmail" data-aos="fade-left">
              <h6>Enter Your Email</h6>
              <input
                type="email"
                className="gmail"
                autoComplete="off"
                placeholder="example@gmail.com"
                name="email"
                required
              />
            </div>
            <div className="user_gmail">
              <h6>Subject</h6>
              <input
                type="text"
                className="gmail"
                autoComplete="off"
                placeholder="Enter your Subject"
                name="subject"
                required
              />
            </div>
            <div className="user_gmail">
              <h6>Message</h6>
              <textarea
                placeholder="Type your message"
                name="message"
                className="gmail"
                cols="20"
                rows="5"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
