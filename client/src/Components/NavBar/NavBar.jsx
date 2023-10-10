import React from 'react'
import videogamesLogo from './Logo.svg'
import './NavBar.styles.css'

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
      <div className="searchBarContainer">
        <input type="text" placeholder='Búsqueda...' />
        <button>Buscar</button>
      </div>
    </div>
  )
}

export default NavBar