import React from 'react';
import PropTypes from 'prop-types';

import './competences.scss';

const DetailsCompetence = ({
  category, description, coût,
}) => (
  <>
    <div className="task__infos">
      <p className="task__category">{category}</p>
      <p className="task__cout">{coût} PC</p>
    </div>
    <p className="task__description">{description}</p>
  </>
);

DetailsCompetence.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coût: PropTypes.number.isRequired,
};

export default DetailsCompetence;
