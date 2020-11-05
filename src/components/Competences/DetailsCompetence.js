import React from 'react';
import PropTypes from 'prop-types';

import './competences.scss';

const DetailsCompetence = ({
  group, description, specialization, defausse, players,
}) => (
  <>
    <div className="comp__infos">
      <p className="comp__cout">Groupe : {group}</p>
      <p className="comp__cout">Défausse : {defausse}</p>
      <p className="comp__spe">Spécialisations : {specialization}</p>
    </div>
    <div className="comp__container">
      <p className="comp__description">{description}</p>
      <div className="comp__container--avatar">
        {players.map((player) => (
          <img key={player} src={player} className="comp__avatar" alt="" />
        ))}
      </div>
    </div>
  </>
);

DetailsCompetence.propTypes = {
  group: PropTypes.string.isRequired,
  defausse: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
};

export default DetailsCompetence;
