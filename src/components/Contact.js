import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contactMe">
      <h2>
        Contact <span className="underline">me</span>
      </h2>
      <div className="form-container">
        <form
          action="https://formsubmit.co/7757e4feb63e9e3c279f84807a05d439"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="mail">Email</label>
          <input type="email" name="email" id="mail" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <div className="btn-container">
            <button type="submit" className="contact-btn">
              Contact me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
