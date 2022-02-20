import React from 'react';
import '../styles/App.css';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
