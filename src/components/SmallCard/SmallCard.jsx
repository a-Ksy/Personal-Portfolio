import React from 'react';
import PropTypes from 'prop-types';
import './SmallCard.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
};

function SmallCard(props) {
  const { title } = props;

  return (
    <div className="SmallCard">
      <p>{title}</p>
    </div>
  );
}

SmallCard.propTypes = propTypes;
export default SmallCard;
