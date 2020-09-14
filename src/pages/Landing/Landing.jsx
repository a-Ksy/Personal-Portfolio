import React from 'react';
import { Link } from 'react-scroll';
import Button from '../../components/Button/Button';
import { landingText } from '../../constants/text';

import './Landing.scss';

function Landing() {
  return (
    <div id="Landing" className="Landing page">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="LandingTitle">{landingText.title}</h1>
          <p className="LandingTitle">{landingText.paragraph}</p>
          <Link activeClass="active" to="About" spy smooth duration={500}>
            <Button title={landingText.button} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
