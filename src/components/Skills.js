import React from 'react';
import '../styles/Skills.css';
import Skill from './Skill';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import jsLogo from '../assets/js.svg';
import bootstrapLogo from '../assets/bootstrap.svg';
import reactLogo from '../assets/react.svg';
import gitLogo from '../assets/git.svg';
import reduxLogo from '../assets/redux.svg';
import sassLogo from '../assets/sass.svg';
import typeScriptLogo from '../assets/typescript.svg';

const skillsArray = [
  { name: 'React', src: reactLogo },
  { name: 'Redux', src: reduxLogo },
  { name: 'TypeScript', src: typeScriptLogo },
  { name: 'JavaScript', src: jsLogo },
  { name: 'HTML', src: htmlLogo },
  { name: 'CSS', src: cssLogo },
  { name: 'Bootstrap', src: bootstrapLogo },
  { name: 'Git', src: gitLogo },
  { name: 'Sass', src: sassLogo },
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
