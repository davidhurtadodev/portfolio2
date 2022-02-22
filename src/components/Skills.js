import React from 'react';
import '../styles/Skills.css';
import Skill from './Skill';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import reactLogo from '../assets/react.svg';
import gitLogo from '../assets/Git-logo.svg';
import linuxLogo from '../assets/linux.svg';
import sassLogo from '../assets/sass.svg';
import webpackLogo from '../assets/webpack.svg';

const skillsArray = [
  { name: 'HTML', src: htmlLogo },
  { name: 'CSS', src: cssLogo },
  { name: 'JavaScript', src: jsLogo },
  { name: 'Bootstrap', src: bootstrapLogo },
  { name: 'React.js', src: reactLogo },
  { name: 'Git', src: gitLogo },
  { name: 'Linux', src: linuxLogo },
  { name: 'Sass', src: sassLogo },
  { name: 'Webpack', src: webpackLogo },
];

const Skills = () => {
  const renderedSkills = skillsArray.map(({ name, src }) => {
    return <Skill name={name} src={src} key={name} />;
  });
  return (
    <div className="skills">
      <div className="title-span">
        <h2 className="hide-lg">Skills</h2>
        <span className="hide-lg underline"></span>
      </div>
      <div className="skills-container">{renderedSkills}</div>
      <span className="end-line hide-lg"></span>
    </div>
  );
};

export default Skills;
