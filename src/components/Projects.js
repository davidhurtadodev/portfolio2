import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import splitterMobile from '../assets/splitter-mobile.png';
import pokemonMobile from '../assets/pokemon-mobile.png';
import timeTrackerMobile from '../assets/time-tracker-mobile.png';
import shorteningImg from '../assets/shortening.png';

const projectsData = [
  {
    title: 'Shortly',
    info: 'Landing page of an app that allows to shortening URL. Made with React Hooks, sessionStorage and REST APi',
    img: shorteningImg,
    url: '',
  },
  {
    title: 'Splitter',
    info: 'App that allows to calculate tips. Made with React',
    img: splitterMobile,
    url: '',
  },
  {
    title: 'Time Tracking Dashboard',
    info: 'Tracking Dashboard made with React, class components and states',
    img: timeTrackerMobile,
    url: '',
  },
  {
    title: 'Pokemon Memory Game',
    info: 'Memory game made with React with use of REST API',
    img: pokemonMobile,
    url: '',
  },
];

const Projects = () => {
  const renderedProjects = projectsData.map(({ title, img, info, url }) => {
    return (
      <Project title={title} img={img} info={info} url={url} key={title} />
    );
  });
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
