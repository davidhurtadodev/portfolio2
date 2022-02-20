import React from 'react';
import '../styles/Project.css';

const Project = ({ img, title, info, projectClass, figure, index }) => {
  return (
    <div
      className={
        title === 'Time Tracking Dashboard'
          ? 'project-wrapper time-wrapper'
          : 'project-wrapper'
      }
    >
      <span className={figure}></span>
      <div
        className={
          index == 0 || index % 2 == 0
            ? `project left ${projectClass}`
            : `project right ${projectClass}`
        }
      >
        <div className="img-container">
          <img src={img} alt="title" />
        </div>
        <div className="text-btn">
          <div className="text-container">
            <h4>{title}</h4>
            <p>{info}</p>
          </div>
          <div className="btn-container">
            <button type="button" className="demo">
              Demo
            </button>
            <button type="button" className="code">
              <i className="fa-brands fa-github pointer"></i>Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
