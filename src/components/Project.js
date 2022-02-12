import React from 'react';
import '../styles/Project.css';

const Project = ({ img, title, info }) => {
  return (
    <div className="project">
      <div className="img-container">
        <img src={img} alt="title" />
      </div>
      <div className="text-container">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Project;
