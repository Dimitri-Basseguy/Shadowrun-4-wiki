import React from 'react';
import PropTypes from 'prop-types';

import './competences.scss';

const DetailsCompetence = ({
  group, description, specialization, defausse,
}) => (
  <>
    <div className="comp__infos">
      <p className="comp__cout">Groupe : {group}</p>
      <p className="comp__cout">Défausse : {defausse}</p>
      <p className="comp__cout">Spécialisations : {specialization}</p>
    </div>
    <div className="comp__container">
      <p className="comp__description">{description}</p>
    </div>
  </>
);

DetailsCompetence.propTypes = {
  group: PropTypes.string.isRequired,
  defausse: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
};

export default DetailsCompetence;
