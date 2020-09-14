/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { projectsText } from '../../constants/text';
import kugpa from '../../assets/kugpa.JPG';
import laborodor from '../../assets/laborodor.JPG';
import './Projects.scss';

const images = [kugpa, laborodor];

function Projects() {
  return (
    <div id="Projects" className="Projects page">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="ProjectsTitle">{projectsText.title}</h1>
          {projectsText.data.map((project) => (
            <div className="Project row">
              <div className="col-lg-4">
                <div className="row justify-content-between align-align-items-baseline">
                  <h2 className="ProjectTitle">{project.title}</h2>
                  <a className="ProjectLink" href={project.link} target="_blank">Project Link</a>
                </div>
                <p className="ProjectDate">{project.date}</p>
                <p className="ProjectParagraph">{project.paragraph}</p>
              </div>
              <div className="col-lg-8">
                <img src={images[project.index]} alt="project" className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
