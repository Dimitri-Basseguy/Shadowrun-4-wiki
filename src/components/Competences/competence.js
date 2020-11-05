import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DetailsCompetence from './DetailsCompetence';

import './competences.scss';

const Competence = ({
  name, category, description, coût,
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

  return (
    <article className="task">
      <h2
        className="task__title"
        onClick={onClick}
      >
        {name}
      </h2>
      { showDetails ? (
        <DetailsCompetence
          category={category}
          description={description}
          coût={coût}
        />
      ) : null }
    </article>
  );
};

Competence.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coût: PropTypes.number.isRequired,
};

export default Competence;
