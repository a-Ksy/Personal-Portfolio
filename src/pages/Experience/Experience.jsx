import React from 'react';
import { experienceText } from '../../constants/text';
import Card from '../../components/Card/Card';
import './Experience.scss';

function Experience() {
  return (
    <div id="Experience" className="Experience page">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="ExperienceTitle">{experienceText.title}</h1>
          <div className="row">
            {experienceText.data.map((experience) => (
              <div className="col-lg-6">
                <Card title={experience.role} subtitle={experience.company} date={experience.date} place={experience.place} paragraph={experience.paragraph} hasDetails={experience.hasDetails} skills={experience.skills} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
