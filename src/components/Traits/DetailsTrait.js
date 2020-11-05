import React from 'react';
import PropTypes from 'prop-types';

import './traits.scss';

const DetailsTrait = ({
  description, coût,
}) => (
  <>
    <div className="task__infos">
      <p className="task__cout">{coût} PC</p>
    </div>
    <p className="task__description">{description}</p>
  </>
);

DetailsTrait.propTypes = {
  description: PropTypes.string.isRequired,
  coût: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
};

export default DetailsTrait;
