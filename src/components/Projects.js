import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import splitterMobile from '../assets/splitter-mobile.png';
import pokemonMobile from '../assets/pokemon-mobile.png';
import timeTrackerMobile from '../assets/time-tracker-mobile.png';
import shorteningImg from '../assets/shortening.png';
import trackerLaptop from '../assets/time-tracker-laptop.png';

const projectsData = [
  {
    title: 'Time Tracking Dashboard',
    info: 'Tracking Dashboard made with React, class components and states',
    img: trackerLaptop,
    url: '',
    projectClass: 'time-tracking',
    figure: 'triangle',
  },
  {
    title: 'Shortly',
    info: 'Landing page of an app that allows to shortening URL. Made with React Hooks, sessionStorage and REST APi',
    img: shorteningImg,
    url: '',
    projectClass: 'shortly',
    figure: 'circle',
  },
  {
    title: 'Splitter',
    info: 'App that allows to calculate tips. Made with React',
    img: splitterMobile,
    url: '',
    projectClass: 'splitter',
    figure: 'square',
  },
  {
    title: 'Pokemon Memory Game',
    info: 'Memory game made with React with use of REST API',
    img: pokemonMobile,
    url: '',
    projectClass: 'pokemon',
    figure: 'circle',
  },
];

const Projects = () => {
  const renderedProjects = projectsData.map(
    ({ title, img, info, url, projectClass, figure }) => {
      return (
        <Project
          title={title}
          img={img}
          projectClass={projectClass}
          info={info}
          url={url}
          key={title}
          figure={figure}
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
