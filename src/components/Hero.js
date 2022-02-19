import React from 'react';
import '../styles/Hero.css';
import Skills from './Skills';
import davidImg from '../assets/david.png';
import codeVideoSrc from '../assets/videos/code-video.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop id="codeVid">
        <source src={codeVideoSrc} type="video/mp4" />
      </video>
      <div className="circle-img">
        <div className="dev-container">
          <img src={davidImg} className="fluid-img" alt="David" />
        </div>
      </div>
      <h1>David Hurtado</h1>
      <h2>Frontend web developer</h2>
      <p className="intro">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="btn-icons">
        <button type="button" className="contact-btn primary-btn">
          Contact me
        </button>
        <div className="git-in-container">
          <div>
            <i className="fa-brands fa-github pointer"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin-in pointer"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
