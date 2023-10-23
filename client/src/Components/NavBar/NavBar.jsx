import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import videogamesLogo from './Logo.svg';
import './NavBar.styles.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <div className='navbarContainer'>
      <Link to="/" className='logo'>
        <img src={videogamesLogo} alt="Logo" />
      </Link>
      <nav className="mainMenuContainer">
        <ul className="mainMenu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/videogames">Videogames</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  );
};

export default NavBar;
