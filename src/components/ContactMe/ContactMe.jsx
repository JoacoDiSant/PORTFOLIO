import React from "react";
import "./ContactMe.css";

function Contact() {
  return (
    <div className="container grid grid-flow-col w-11/12 h-5/6 m-40 ">
      <div className="pr-10">
        <div className="contact__information">
          <i className="uil uil-envelope contact__icon hover:animate-bounce"></i>
          <div>
            <h3 className="contact__title">Email</h3>
            <span className="contact__subtitle">joacodi2001@gmail.com</span>
          </div>
        </div>

        <div className="contact__information">
          <i className="uil uil-user-location contact__icon hover:animate-bounce"></i>
          <div>
            <h3 className="contact__title">Location</h3>
            <span className="contact__subtitle">Argentina - Mendoza Ciudad</span>
          </div>
        </div>
      </div>

      <form
        action="https://formspree.io/f/xyyoezzw"
        method="POST"
        className="contact__form"
        id="form"
      >
        <div className="contact__inputs">
          <div className="contact__content">
            <label for="name" className="contact__label">
              Name
            </label>
            <input name="name" type="text" className="contact__input" />
          </div>

          <div className="contact__content">
            <label for="email" className="contact__label">
              Email
            </label>
            <input name="email" type="email" className="contact__input" />
          </div>
        </div>

        <div className="contact__content">
          <label for="title" className="contact__label">
            Title
          </label>
          <input name="title" type="text" className="contact__input" />
        </div>

        <div className="contact__content">
          <label for="message" className="contact__label">
            Message
          </label>
          <textarea
            name="message"
            cols="0"
            rows="7"
            className="contact__input"
          ></textarea>
        </div>

        <div className="contact__status">
          <div>
            <button href="#" type="submit" className="flex text-center hover:animate-pulse">
              Send Me Message
            </button>
          </div>
          <div className="hidden">a</div>
          <div id="status"></div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
