import React from 'react';
import { aboutText } from '../../constants/text';
import myPicture from '../../assets/me2.png';
import './About.scss';

function About() {
  return (
    <div id="About" className="About page">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="AboutTitle">{aboutText.title}</h1>
          <p className="AboutParagraph">{aboutText.paragraph}</p>
        </div>
        <div className="col-lg-6">
          <img src={myPicture} alt="me" className="img-fluid myImage" />
        </div>
      </div>
    </div>
  );
}

export default About;
