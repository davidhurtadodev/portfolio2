import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>
        Contact <span className="underline">me</span>
      </h2>
      <div className="form-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" />

          <label htmlFor="message">Message</label>
          <textarea id="message"> </textarea>
          <div className="btn-container">
            <button type="button" className="contact-btn">
              Contact me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
