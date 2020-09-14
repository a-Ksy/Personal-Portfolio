/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import './Card.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  skills: PropTypes.objectOf,
  date: PropTypes.string,
  place: PropTypes.string,
  hasDetails: PropTypes.bool,
};

const defaultProps = {
  date: '',
  place: '',
  hasDetails: false,
  skills: [],
};

function Card(props) {
  const {
    title, subtitle, paragraph, date, hasDetails, skills, place,
  } = props;

  return (
    <div className="card">
      <Scrollbars autohide style={{ height: '42vh' }}>
        <div className="card-body">
          <div className="TitleRow row justify-content-between align-items-baseline">
            <h3 className="card-title">{title}</h3>
            {hasDetails && <a href="https://www.linkedin.com/in/atahan-aksoy-931a94151/" target="_blank" className="card-details">Learn more</a>}
          </div>
          <h4 className="card-subtitle">{subtitle}</h4>
          <h5 className="card-date">{date}</h5>
          <h5 className="card-place">{place}</h5>
          <p className="card-text">{paragraph}</p>
          <p className="practicedSkills">Practiced skills</p>
          <div className="row">
            {skills.map((skill) => (
              <div className="col-lg-3">
                <div className="experienceSkill">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
