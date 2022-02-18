import React from 'react';
import '../styles/Project.css';

const Project = ({ img, title, info, projectClass, figure }) => {
  return (
    <div className="project-wrapper">
      <span className={figure}></span>
      <div className={`project ${projectClass}`}>
        <div className="img-container">
          <img src={img} alt="title" />
        </div>
        <div className="text-container">
          <h4>{title}</h4>
          <p>{info}</p>
        </div>
        <div className="btn-container">
          <button type="button" className="demo">
            Demo
          </button>
          <button type="button" className="code">
            <i class="fa-brands fa-github pointer"></i>Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
