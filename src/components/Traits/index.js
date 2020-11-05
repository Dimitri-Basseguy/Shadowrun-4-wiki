import React from 'react';
import PropTypes from 'prop-types';

import Trait from './Trait';
import './traits.scss';

// {
//   id: "traits-5",
//   coût: 5,
//   category: "Avantages",
//   name: "Apparence humaine",
//   description: "Un métahumain disposant du trait."
// },

const Traits = ({ traitsData, searchValue, setSearchValue }) => (
  <>
    <main>
      <h1 className="main-title">Les Traits</h1>
      <p className="main-desc">Les traits sont des avantages et des défauts spéciaux qui peuvent aider ou desservir votre personnage. Ce ne sont ni des équipements spéciaux, ni des pouvoirs magiques, mais plutôt des caractéristiques innées qui s'expriment lors des situations stressantes dans lesquelles les shadowrunners se retrouvent souvent. Les traits peuvent être soit positifs soit négatifs. Les joueurs acquièrent leurs traits lors de la phase de création de personnage.</p>
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
        {traitsData.map((trait) => (
          <Trait
            key={trait.id}
            // enveloppe -> déverse toutes les données de la task
            // si nouveau éléments les ajouter dans task.js !
            {...trait}
          />
        ))}
      </ul>
    </main>
  </>
);

Traits.propTypes = {
  traitsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default Traits;
