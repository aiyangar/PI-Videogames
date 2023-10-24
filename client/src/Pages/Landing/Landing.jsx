import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.styles.css';
import image1 from './Videogame1.png';
import image2 from './Videogame2.png';
import image3 from './Videogame3.png';
import image4 from './Videogame4.png';

const Landing = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="mainSlider">
          <Link to={'/videogames'}>
            <ul>
              <li><img src={image1} alt="" /></li>
              <li><img src={image2} alt="" /></li>
              <li><img src={image3} alt="" /></li>
              <li><img src={image4} alt="" /></li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
