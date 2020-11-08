import React from 'react';
import PropTypes from 'prop-types';

import etaneiAvatar from 'src/assets/images/etanei-avatar.png';
import baranAvatar from 'src/assets/images/baran.png';
import jessAvatar from 'src/assets/images/jess.png';
import khaineAvatar from 'src/assets/images/khaine.png';
import edrianAvatar from 'src/assets/images/edrian.png';
import Competence from './competence';
import './competences.scss';

// {
//   id: "traits-5",
//   coût: 5,
//   category: "Avantages",
//   name: "Apparence humaine",
//   description: "Un métahumain disposant du trait."
// },

const Competences = ({
  compData, searchValue, setSearchValue, setPlayerValue,
}) => (
  <>
    <main>
      <h1 className="main-title">Les Compétences</h1>
      <p className="main-desc">Quand vous voulez que votre personnage prenne part à l'action et accomplisse quelque chose de plus compliqué que respirer, parler ou se tenir debout, vous utilisez ses compéten-ces. Les compétences représentent les capacités et les connaissances acquises par un personnage.</p>
      <div className="comp__container--avatar">
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('');
          }}
        >
          All
        </button>
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('etanei');
          }}
        >
          <img
            className="comp__avatar"
            src={etaneiAvatar}
            alt="bouton étanei"
          />
        </button>
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('baran');
          }}
        >
          <img
            className="comp__avatar"
            src={baranAvatar}
            alt="bouton baran"
          />
        </button>
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('jess');
          }}
        >
          <img
            className="comp__avatar"
            src={jessAvatar}
            alt="bouton étanei"
          />
        </button>
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('khaine');
          }}
        >
          <img
            className="comp__avatar"
            src={khaineAvatar}
            alt="bouton khaine"
          />
        </button>
        <button
          type="button"
          className="comp__btn"
          onClick={() => {
            setPlayerValue('edrian');
          }}
        >
          <img
            className="comp__avatar"
            src={edrianAvatar}
            alt="bouton edrian"
          />
        </button>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Rechercher des compétences"
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
  setPlayerValue: PropTypes.func.isRequired,
};

export default Competences;
