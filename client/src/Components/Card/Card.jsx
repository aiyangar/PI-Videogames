import React from 'react'
import './Card.styles.css'

const Card = ({name, description, platforms, image, resealeDate, rating, genre, id}) => {
  return (
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
        <p>{platforms}</p>
        <p>{resealeDate}</p>
        <p>{rating}</p>
        <p>{genre}</p>
      </div>
    </div>
  )
}

export default Card