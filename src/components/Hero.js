import React from 'react';
import '../styles/Hero.css';
import Skills from './Skills';

const Hero = () => {
  return (
    <section className="hero">
      <h1>David Hurtado</h1>
      <h2>Frontend web developer</h2>
      <p className="intro">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="btn-icons">
        <button type="button" className="contact primary-btn">
          Contact me
        </button>
        <div>
          <i className="fa-brands fa-github pointer"></i>
        </div>
        <div>
          <i className="fa-brands fa-linkedin-in pointer"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
