import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className='main-header'>
    <div>
      <button className='toggle-button'>
        <span className='toggle-button__bar'></span>
        <span className='toggle-button__bar'></span>
        <span className='toggle-button__bar'></span>
      </button>
      <h4 className='main-nav__item'>
        <Link to='/'>Home</Link>
      </h4>
    </div>
    <nav className='main-nav'>
      <ul className='main-nav__items'>
        <li className='main-nav__item'>
          <Link to='/quotes'>Quotes</Link>
        </li>
        <li className='main-nav__item'>
          <a href=''>Favourites</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
