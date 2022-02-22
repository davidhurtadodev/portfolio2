import React from 'react';
import '../styles/Skill.css';

const Skill = ({ name, src }) => {
  return (
    <div className="img-container tooltip top">
      <span className="tiptext">{name}</span>
      <img className="skill-img" src={src} alt={name} />
    </div>
  );
};

export default Skill;
