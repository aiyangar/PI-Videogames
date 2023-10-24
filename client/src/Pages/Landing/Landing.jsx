import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './Landing.styles.css';
import image1 from './Videogame1.png';
import image2 from './Videogame2.png';
import image3 from './Videogame3.png';
import image4 from './Videogame4.png';
import contentImage1 from './Landing1.jpeg'

import { getVideogames } from '../../Redux/Action/Action';
import Cards from '../../Components/Cards/Cards';

import shuffleArray from '../../Utils/Utilities'; 

const Landing = () => {

  const dispatch = useDispatch() 
  const allVideogames = useSelector(state => state.allVideogames)

  const numberOfGamesToShow = 6;

  useEffect(() => {
    dispatch(getVideogames())
  }, [])

  const shuffledVideogames = shuffleArray(allVideogames)
  const randomVideogames = shuffledVideogames.slice(0, numberOfGamesToShow)

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
        <div className="cardsContainer">
          <Cards info={randomVideogames}/>
        </div>
        <div className="contentContainer">
          <div className="landingLeft">
            <h2>Últimas Noticias</h2>
            <span>
              Mantente al día con las últimas noticias del mundo de los videojuegos. Desde lanzamientos de juegos hasta actualizaciones importantes, lo cubrimos todo.
            </span>
            <h2>Reseñas</h2>
            <span>
              Nuestro equipo de expertos juega y revisa los últimos títulos para darte una idea de qué esperar. Ya sea que estés buscando el próximo gran juego AAA o una joya indie, nuestras reseñas te ayudarán a tomar la mejor decisión.
            </span>
            <h2>Avances</h2>
            <span>
              Echa un vistazo a los próximos juegos con nuestros avances detallados. Te damos un vistazo a lo que puedes esperar de los juegos más esperados.
            </span>
            <h2>
              Comunidad
            </h2>
            <span>
              Únete a nuestra comunidad de jugadores apasionados. Discute tus juegos favoritos, comparte consejos y trucos, y conoce a otros jugadores.
            </span>
          </div>
          <div className="landingRight">
            <img src={contentImage1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
