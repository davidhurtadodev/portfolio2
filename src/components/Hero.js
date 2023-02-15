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
            Do you think it’s crazy to make a career switch from music to
            software engineering? I can show you that it isn't. I'm a frontend
            developer with a year of experience and a senior symphonic musician.
            I specialize in the frontend of the Web and coding UI, and I am
            passionate about creating visually stunning and user-friendly
            interfaces. In my year of experience, I have worked making the
            frontend of different websites from scratch and improving the
            frontend of existing websites. I love working with React and
            TypeScript. My background in music and my love of web development
            have led me to a career in frontend development, where I am able to
            combine my technical skills with my creative mindset. I've honed my
            communication and teamwork skills in my work as a musician, and I
            bring that same level of assertiveness and self-discipline to a
            frontend developer role.
          </p>
          <div className="btn-icons">
            <a href="#contactMe">
              <button type="button" className="contact-btn primary-btn">
                Contact me
              </button>
            </a>
            <div className="git-in-container">
              <div>
                <a href="https://github.com/davidhurtadodev">
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
