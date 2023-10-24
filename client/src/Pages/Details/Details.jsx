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
      <h1>{name}</h1>

      <div className="detailContainer">
        <div className="detailLeft">
          <div className="detailUpperSection">
            <img src={image} alt={name} />
          </div>
          <div className="detailLowerSection">
            <h2>{name}</h2>
          </div>
        </div>

        <div className="detailRight">
          <div className="detailUpperSection other">
            <h4>Fecha de lanzamiento: </h4><p>{released}</p>
            <h4>Rating: </h4><p>{rating}</p>
            <h4>Generos: </h4><p>{genreText}</p>
            <h4>Plataformas: </h4><p>{platformText}</p>
            <h4>Descripción: </h4><span dangerouslySetInnerHTML={{ __html: description }}></span>
          </div>
          <div className="detailLowerSection">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;