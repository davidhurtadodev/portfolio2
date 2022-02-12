import React from 'react';
import '../styles/Skills.css';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import reactLogo from '../assets/react.svg';
import gitLogo from '../assets/Git-logo.svg';
import linuxLogo from '../assets/linux.svg';
import sassLogo from '../assets/sass.svg';
import webpackLogo from '../assets/webpack.svg';

const Skills = () => {
  return (
    <div className="skills">
      <div className="img-container">
        <img className="skill-img" src={htmlLogo} alt="html" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={cssLogo} alt="css" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={jsLogo} alt="js" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={bootstrapLogo} alt="bootstrap" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={reactLogo} alt="react" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={gitLogo} alt="git" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={linuxLogo} alt="linux" />
      </div>
      <div className="img-container">
        <img className="skill-img" src={sassLogo} alt="sass" />
      </div>
      <div className="img-container webpack">
        <img className="skill-img" src={webpackLogo} alt="webpack" />
      </div>
    </div>
  );
};

export default Skills;
