import React from 'react';
import PropTypes from 'prop-types';

import Competence from './competence';
import './competences.scss';

// {
//   id: "traits-5",
//   coût: 5,
//   category: "Avantages",
//   name: "Apparence humaine",
//   description: "Un métahumain disposant du trait."
// },

const Competences = ({ compData, searchValue, setSearchValue }) => (
  <>
    <main>
      <h1 className="main-title">Les Traits</h1>
      <p className="main-desc">Quand vous voulez que votre personnage prenne part à l'action et accomplisse quelque chose de plus compliqué que respirer, parler ou se tenir debout, vous utilisez ses compéten-ces. Les compétences représentent les capacités et les connaissances acquises par un personnage.</p>
      <input
        className="search"
        type="text"
        placeholder="Rechercher des traits"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <ul>
        {compData.map((comp) => (
          <Competence
            key={comp.id}
            // enveloppe -> déverse toutes les données de la task
            // si nouveau éléments les ajouter dans task.js !
            {...comp}
          />
        ))}
      </ul>
    </main>
  </>
);

Competences.propTypes = {
  compData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Competences;
