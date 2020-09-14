import React from 'react';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Landing/Landing';
import AboutPage from './pages/About/About';
import SkillsPage from './pages/Skills/Skills';
import ExperiencePage from './pages/Experience/Experience';
import ProjectsPage from './pages/Projects/Projects';
import ContactPage from './pages/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </Container>
    </div>
  );
}

export default App;
