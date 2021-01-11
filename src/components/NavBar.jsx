import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header>
    <nav className='main-nav'>
      <h4 className='main-nav__item'>
        <Link to='/'>Inicio</Link>
      </h4>
      <ul className='main-nav__items'>
        <li className='main-nav__item'>
          <Link to='/quotes'>Frases</Link>
        </li>
        <li className='main-nav__item'>
          <Link to='/favs'>Favoritos</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
