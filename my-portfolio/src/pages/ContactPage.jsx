import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="wrapper">
        <div className="contact__wrapper">
          <div className="contact__icons">
            <div className="icon__call icon">
              <i class="far fa-phone-alt"></i>
              <div className="call__text">
                <h3>Call Me</h3>
                <span>08142074224</span>
              </div>
            </div>
            <div className="icon__email icon">
              <i class="far fa-envelope"></i>
              <div className="call__text">
                <h3>Email</h3>
                <span>ejeziechinedu07@gmail.com</span>
              </div>
            </div>
            <div className="icon_local icon">
              <i class="far fa-map-marker-alt icon__location"></i>
              <div className="call__text">
                <h3>Location</h3>
                <span>Lagos</span>
              </div>
            </div>
          </div>
          <form className="contact__form" action="">
            <div className="name__email">
              <div className="contact__content"  id="contact__content1">
                <label htmlFor="">Name</label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="">Email</label>
                <input type="text" className="contact__input" />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="">Project Type</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                className="contact__input"
                id=""
                cols="30"
                rows="7"></textarea>
            </div>
              <a href="#" className="contact__button">
                Send Message <i class="fal fa-paper-plane send"></i>
              </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
