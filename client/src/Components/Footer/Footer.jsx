import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.styles.css';

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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/videogames">Videogames</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
        <div className="socialNetworks">
          <Link to="/">
            <i className="fa-brands fa-facebook-f" />
          </Link>
        
          <Link to="/">
            <i className="fa-brands fa-twitter" />
          </Link>
        
          <Link to="/">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
