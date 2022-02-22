import React from 'react';
import '../styles/Hero.css';
import Skills from './Skills';
import davidImg from '../assets/david.png';
import codeVideoSrc from '../assets/videos/code-video.mp4';

const Hero = () => {
  return (
    <div className="hero-skills">
      <section className="hero-inside">
        <video autoPlay muted loop id="codeVid">
          <source src={codeVideoSrc} type="video/mp4" />
        </video>
        <div className="circle-img">
          <div className="dev-container">
            <img src={davidImg} className="fluid-img" alt="David" />
          </div>
        </div>
        <div className="text-btn-container">
          <h1>David Hurtado</h1>
          <h2>Frontend web developer</h2>
          <p className="intro">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="btn-icons">
            <a href="#contactMe">
              <button type="button" className="contact-btn primary-btn">
                Contact me
              </button>
            </a>
            <div className="git-in-container">
              <div>
                <a href="https://github.com/davidhuertado">
                  <i className="fa-brands fa-github pointer"></i>
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/david-hurtado-g">
                  <i className="fa-brands fa-linkedin-in pointer"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default Hero;
