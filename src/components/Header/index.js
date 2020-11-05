import React from 'react';
import PropTypes from 'prop-types';
// https://reactrouter.com/web/api/NavLink
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ menus }) => (
  <header className="header">
    <nav>
      {menus.map((menu) => (
        <NavLink
          exact /* égale exact=true */
          to={menu.route}
          key={menu.label}
          className="header__link"
          activeClassName="header__link--active"
        >
          {menu.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
