import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.styles.css';
import videogameImage from './videogame.png';

const Landing = () => {
  return (
    <div>
      <div className="sinBuilder">
        <img src={videogameImage} alt="videogameImage" />
        <Link to="/videogames">
          <button>Comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
