import React from 'react';
import '../styles/App.css';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
