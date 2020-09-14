/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import CV from '../../assets/AtahanAksoy.pdf';
import variables from '../../sass/_variables.scss';
import './Contact.scss';

function Contact() {
  return (
    <div id="Contact" className="Contact page">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <h1 className="ContactTitle">I would love to hear from you.</h1>
          <div className="row iconBlock">
            <a id="CVIcon" href={CV} target="_blank">CV</a>
            <SocialIcon id="socialIcon" bgColor={variables.primary} target="_blank" url="https://www.linkedin.com/in/atahan-aksoy-931a94151/" />
            <SocialIcon id="socialIcon" bgColor={variables.primary} target="_blank" url="mailto:aaksoy17@ku.edu.tr" />
            <SocialIcon id="socialIcon" bgColor={variables.primary} target="_blank" url="https://github.com/a-Ksy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
