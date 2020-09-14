import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link activeClass="active" to="About" spy smooth duration={500}>
            <a className="nav-item nav-link" href="#About">About</a>
          </Link>
          <Link activeClass="active" to="Skills" spy smooth duration={500}>
            <a className="nav-item nav-link" href="#">Skills</a>
          </Link>
          <Link activeClass="active" to="Experience" spy smooth duration={500}>
            <a className="nav-item nav-link" href="#">Experience</a>
          </Link>
          <Link activeClass="active" to="Projects" spy smooth duration={500}>
            <a className="nav-item nav-link" href="#">Projects</a>
          </Link>
          <Link activeClass="active" to="Contact" spy smooth duration={500}>
            <a className="nav-item nav-link" href="#">Contact</a>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
