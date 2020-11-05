// == Import npm
import React, { useState } from 'react';
import {
  Route,
} from 'react-router-dom';

// == Import
import menuData from 'src/data/menu';
import traitsData from 'src/data/traits';
import compdata from 'src/data/comp';

import './app.scss';

import Header from '../Header';
import Traits from '../Traits';
import Competences from '../Competences';

// == Composant
const App = () => {
  /** Chargement des menus */
  const [menus, setMenus] = useState(menuData);
  /** Chargement des traits */
  const [traits, setTraits] = useState(traitsData);
  /** Chargement des compétences */
  const [competences, setComptences] = useState(compdata);
  /** Valeur du champ de recherche traits */
  const [searchTraits, setSearchTraits] = useState('');
  /** Valeur du champ de recherche Comp */
  const [searchComp, setSearchComp] = useState('');

  const handleChangeSearch = (newValue) => {
    setSearchTraits(newValue);
  };

  const handleChangeSearchComp = (newValue) => {
    setSearchComp(newValue);
  };

  const gettraits = () => {
    let filteredTraits;
    if (searchTraits.trim().length === 0) {
      filteredTraits = traits;
    }
    else {
      // on prépare search (variable intermediaire pour ne pas refaire à chaque boucle
      const searchoptimized = searchTraits.trim().toLowerCase();
      // filter la liste des devises en fonction de search
      // eslint-disable-next-line arrow-body-style
      filteredTraits = traits.filter((trait) => {
        // true si je veux conserver l'élément, false sinon
        return trait.name.toLowerCase().includes(searchoptimized);
      });
    }
    // retourner la liste ou la stocker dans le state
    return filteredTraits;
  };

  const getComps = () => {
    let filteredComps;
    if (searchComp.trim().length === 0) {
      filteredComps = competences;
    }
    else {
      // on prépare search (variable intermediaire pour ne pas refaire à chaque boucle
      const searchoptimized = searchComp.trim().toLowerCase();
      // filter la liste des devises en fonction de search
      // eslint-disable-next-line arrow-body-style
      filteredComps = competences.filter((competence) => {
        // true si je veux conserver l'élément, false sinon
        return competence.name.toLowerCase().includes(searchoptimized);
      });
    }
    // retourner la liste ou la stocker dans le state
    return filteredComps;
  };

  const filteredTraits = gettraits();
  const filteredComps = getComps();

  return (
    <>
      <img className="top-img" src="https://i.pinimg.com/originals/22/31/25/2231252d6207c004bac24d3e6e6a3277.gif" alt="logo" />
      <div className="app">
        <Header menus={menus} />
        <Route exact path="/traits">
          <Traits
            traitsData={filteredTraits}
            searchValue={searchTraits}
            setSearchValue={handleChangeSearch}
          />
        </Route>
        <Route exact path="/competences">
          <Competences
            compData={filteredComps}
            searchValue={searchComp}
            setSearchValue={handleChangeSearchComp}
          />
        </Route>
      </div>
      <footer className="footer">
        <img src="https://opengameart.org/sites/default/files/forum-attachments/giphy.gif" alt="me" />
        <p>Made with &hearts; by <a href="https://dimitri-basseguy.github.io" target="_blank" rel="noopener noreferrer">Dimitri Basseguy</a></p>
      </footer>
    </>
  );
};

// == Export
export default App;
