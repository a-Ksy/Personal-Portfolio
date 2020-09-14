import React from 'react';
import { skillsText } from '../../constants/text';
import SmallCard from '../../components/SmallCard/SmallCard';
import './Skills.scss';

function Skills() {
  return (
    <div id="Skills" className="Skills page">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="SkillsTitle">{skillsText.title}</h1>
          <div className="row">
            <p className="SkillType">Technical Skills</p>
            {skillsText.technicalData.map((skill) => (
              <div className="col-lg-4">
                <SmallCard title={skill} />
              </div>
            ))}
          </div>
          <div className="row">
            <p className="SkillType">Sectoral Skills</p>
            {skillsText.sectoralData.map((skill) => (
              <div className="col-lg-4">
                <SmallCard title={skill} />
              </div>
            ))}
          </div>
          <div className="row">
            <p className="SkillType">Soft Skills</p>
            {skillsText.softData.map((skill) => (
              <div className="col-lg-4">
                <SmallCard title={skill} />
              </div>
            ))}
          </div>
          <div className="row">
            <p className="SkillType">Languages</p>
            {skillsText.languageData.map((skill) => (
              <div className="col-lg-4">
                <SmallCard title={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
