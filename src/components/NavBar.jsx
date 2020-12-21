import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header>
    <div>
      <button className='toggle-button'>
        <span className='toggle-button__bar'></span>
        <span className='toggle-button__bar'></span>
        <span className='toggle-button__bar'></span>
      </button>
    </div>
    <nav className='main-nav'>
      <ul className='main-nav__items'>
        <li className='main-nav__item'>
          <Link to='/'>Inicio</Link>
        </li>
        <li className='main-nav__item'>
          <Link to='/quotes'>Frases</Link>
        </li>
        {/* <li className='main-nav__item'>
          <a href=''>Favourites</a>
        </li> */}
      </ul>
    </nav>
  </header>
);

export default NavBar;
