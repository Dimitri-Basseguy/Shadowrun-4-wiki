import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DetailsCompetence from './DetailsCompetence';

import './competences.scss';

const Competence = ({
  name, group, description, specialization, attribut, defausse, players,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => {
    if (showDetails === true) {
      setShowDetails(false);
    }
    else {
      setShowDetails(true);
    }
  };

  // const loardPlayerAvatar = () => {
  //   players.map((player)) => (
  //     console.log('player test');
  //   )
  // };

  return (
    <article className="comp">
      <div className="comp__header">
        <h2
          className="comp__title"
          onClick={onClick}
        >
          {name}
        </h2>
        <p className="comp__category">({attribut})</p>
      </div>
      { showDetails ? (
        <DetailsCompetence
          group={group}
          players={players}
          defausse={defausse}
          attribut={attribut}
          description={description}
          specialization={specialization}
        />
      ) : null }
    </article>
  );
};

Competence.propTypes = {
  name: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  defausse: PropTypes.string.isRequired,
  attribut: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};

export default Competence;
