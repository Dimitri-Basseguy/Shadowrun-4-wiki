import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DetailsTrait from './DetailsTrait';

import './traits.scss';

const Trait = ({
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
      <div className="comp__header">
        <img src={category} className="task__category" alt="" />
        <h2
          className="task__title"
          onClick={onClick}
        >
          {name}
        </h2>
      </div>
      { showDetails ? (
        <DetailsTrait
          category={category}
          description={description}
          coût={coût}
        />
      ) : null }
    </article>
  );
};

Trait.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coût: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
};

export default Trait;
