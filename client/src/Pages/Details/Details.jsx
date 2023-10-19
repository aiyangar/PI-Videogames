import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogame } from '../../Redux/Action/Action';

import BackButton from '../../Components/BackButton/BackButton'

import './Details.styles.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogame);

  useEffect(() => {
    dispatch(getVideogame(id));
  }, []);

  if (!videogame) {
    return <h1>Loading...</h1>;
  }

  const { name, description, released, rating, genre, image, platforms, platform } = videogame;
  let platformText = []
  if (!platforms) platformText = platform.join(', ')
  else platformText = platforms.join(', ')
  const genreText = genre.join(', ');

  return (
    <div>
      <h1>Videojuego</h1>

      <div className="detailContainer">
        <div className="detailLeft">
          <div className="detailUpperSection">
            <img src={image} alt="Videogame Image" />
          </div>
          <div className="detailLowerSection">
            <h2>Nombre: {name}</h2>
          </div>
        </div>

        <div className="detailRight">
          <p>Fecha de lanzamiento: {released}</p>
          <p>Rating: {rating}</p>
          <p>Generos: {genreText}</p>
          <p>Plataformas: {platformText}</p>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Details;