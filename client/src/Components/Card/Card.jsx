import React from 'react';
import { Link } from 'react-router-dom';
import './Card.styles.css';

const Card = ({ id, name, platform, image, released, rating, genre }) => {
  const platformText = platform.join(', ');
  const genreText = genre.join(', ');

  return (
    <Link className='cardLink' to={`/videogames/${id}`}>
      <div className="cardContainer">
        <div className="frontCard">
          <div className="upperSection">
            <img src={image} alt={name} />
          </div>
          <div className="lowerSection">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="backCard">
          <p>Platforms: {platformText}</p>
          <p>Released: {released}</p>
          <p>Rating: {rating}</p>
          <p>Genres: {genreText}</p>
        </div>
      </div>
    </Link> 
  );
};

export default Card;