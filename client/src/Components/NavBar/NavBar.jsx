import { useDispatch } from 'react-redux'
import React from 'react'
import videogamesLogo from './Logo.svg'
import './NavBar.styles.css'
import { searchVideogame } from '../../Redux/Action/Action'

const NavBar = () => {
  const dispatch = useDispatch()

  const handleSubmit = () =>{
    const searchTerm = document.getElementById('search').value.toLowerCase();
    dispatch(searchVideogame(searchTerm));

    window.location.href = '/videogames';
  }
  
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
        <input id='search' type="text" placeholder='Búsqueda...' />
        <button onClick={handleSubmit} >Buscar</button>
      </div>
    </div>
  )
}

export default NavBar