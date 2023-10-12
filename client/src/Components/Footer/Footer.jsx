import React from 'react'

import './Footer.styles.css'

const Footer = () => {
  return (
    <div>
      <div className="linea"></div>

      <div className='footerStyle'>
        <div className="leftRow">
          <p>
            © 2023 -  Todos los derechos reservados
          </p>
        </div>
        <div className="footerMenu">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/videogames">Videogames</a>
            </li>
            <li>
              <a href="/create">Create</a>
            </li>
          </ul>
        </div>
        <div className="socialNetworks">
          <a href="/">
            <i className="fa-brands fa-facebook-f" />
          </a>
        
          <a href="/">
            <i className="fa-brands fa-twitter" />
          </a>
        
          <a href="/">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer