// == Import npm
import React, { useState } from 'react';
import {
  Route,
} from 'react-router-dom';

// == Import
import menuData from 'src/data/menu';
import traitsData from 'src/data/traits';
import compdata from 'src/data/comp';
import logo from 'src/assets/images/logo-shadow.png';

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
  /** Valeur du champ de recherche */
  const [search, setSearch] = useState('');
  /** Valeur des joueurs */
  const [player, setPlayer] = useState('');

  const handleChangeSearch = (newValue) => {
    setSearch(newValue);
  };

  const handleClicPlayers = (newValue) => {
    setPlayer(newValue);
  };

  /**
   * Filtre les traits en fonction de la recherche
   * @return array of object
   */
  const gettraits = () => {
    let filteredTraits;
    if (search.trim().length === 0) {
      filteredTraits = traits;
    }
    else {
      // on prépare search (variable intermediaire pour ne pas refaire à chaque boucle
      const searchoptimized = search.trim().toLowerCase();
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

  /**
   * Filtre les compétences en fonction d'un joueur
   * @return array of object
   */
  const getCompsByPlayer = () => {
    let filteredCompsByPlayers = competences;
    if (player === '') {
      filteredCompsByPlayers = competences;
    }
    else {
      filteredCompsByPlayers = competences.filter(
        (competence) => competence.players.includes(player),
      );
    }

    return filteredCompsByPlayers;
  };

  const filteredCompsByPlayers = getCompsByPlayer();

  /**
   * Filtre les compétences en fonction de la recherche
   * @return array of object
   */
  const getComps = () => {
    let filteredComps = filteredCompsByPlayers;
    if (search.trim().length === 0) {
      filteredComps = filteredCompsByPlayers;
    }
    else {
      // on prépare search (variable intermediaire pour ne pas refaire à chaque boucle
      const searchoptimized = search.trim().toLowerCase();
      // filter la liste des devises en fonction de search
      // eslint-disable-next-line arrow-body-style
      filteredComps = filteredCompsByPlayers.filter((competence) => {
        // true si je veux conserver l'élément, false sinon
        return competence.name.toLowerCase().includes(searchoptimized);
      });
    }
    // retourner la liste ou la stocker dans le state
    return filteredComps;
  };

  const filteredTraits = gettraits();
  const filteredComps = getComps();

  // https://i.pinimg.com/originals/22/31/25/2231252d6207c004bac24d3e6e6a3277.gif
  return (
    <>
      <img className="top-img" src="https://wallpaperset.com/w/full/e/a/e/190868.jpg" alt="logo" />
      <div className="app">
        <Header menus={menus} />
        <Route exact path="/">
          <img src={logo} alt="" />
        </Route>
        <Route exact path="/traits">
          <Traits
            traitsData={filteredTraits}
            searchValue={search}
            setSearchValue={handleChangeSearch}
          />
        </Route>
        <Route exact path="/competences">
          <Competences
            compData={filteredComps}
            searchValue={search}
            setSearchValue={handleChangeSearch}
            setPlayerValue={handleClicPlayers}
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
