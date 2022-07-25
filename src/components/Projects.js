import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import splitterMobile from '../assets/splitter-mobile.png';
import todoImg from '../assets/todo-app.png';
import shorteningImg from '../assets/shortening.png';
import trackerLaptop from '../assets/time-tracker-laptop.png';
import spaceApp from '../assets/space-app.png';

const projectsData = [
  {
    title: 'TODO App',
    info: 'TODO app made with React and Typescript. It has dark theme and use localStorage',
    img: todoImg,
    url: 'https://incomparable-zuccutto-99f90c.netlify.app/',
    projectClass: 'todo',
    figure: 'triangle',
    repo: 'https://github.com/davidhuertado/todo-list-react',
  },
  {
    title: 'Time Tracking Dashboard',
    info: 'Tracking Dashboard made with React, class components and states',
    img: trackerLaptop,
    url: 'https://distracted-archimedes-a76d3e.netlify.app',
    projectClass: 'time-tracking',
    figure: 'circle',
    repo: 'https://github.com/davidhuertado/timeTrackingDashboard',
  },
  {
    title: 'SpaceApp',
    info: 'Space app made with React and React Router',
    img: spaceApp,
    url: 'https://sleepy-poincare-4948ea.netlify.app/',
    projectClass: 'space-app',
    figure: 'square',
    repo: 'https://github.com/davidhuertado/space-app',
  },
  {
    title: 'Shortly',
    info: 'Landing page of an app that allows to shortening URL. Made with React Hooks, sessionStorage and REST APi',
    img: shorteningImg,
    url: 'https://pedantic-perlman-6ce2c6.netlify.app/',
    projectClass: 'shortly',
    figure: 'triangle',
    repo: 'https://github.com/davidhuertado/shortening-landing',
  },
  {
    title: 'Splitter',
    info: 'App that allows to calculate tips. Made with React',
    img: splitterMobile,
    url: 'https://affectionate-euler-2101cc.netlify.app/',
    projectClass: 'splitter',
    figure: 'circle',
    repo: 'https://github.com/davidhuertado/tip-calculator',
  },
];

const Projects = () => {
  const renderedProjects = projectsData.map(
    ({ title, img, info, url, projectClass, figure, repo }, index) => {
      return (
        <Project
          title={title}
          img={img}
          projectClass={projectClass}
          info={info}
          url={url}
          key={title}
          figure={figure}
          index={index}
          repo={repo}
        />
      );
    }
  );
  return (
    <section className="projects">
      <h2>
        Last <span className="underline">Projects</span>
      </h2>
      {renderedProjects}
    </section>
  );
};

export default Projects;
