import React from 'react'
import videogamesLogo from './Logo.svg'
import './NavBar.styles.css'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  
  return (
    <div className='navbarContainer'>
      <a href='/' className='logo'><img src={videogamesLogo} alt="Logo" /></a>
      <nav className="mainMenuContainer">
        <ul className="mainMenu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/videogames">Videogames</a></li>
          <li><a href="/create">Create</a></li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  )
}

export default NavBar