import React from 'react'
import Card from '../Card/Card.jsx'

import './Cards.styles.css'

const Cards = ({info}) => {
  return (
    <div className='cardsContainer'>
      {
        info.map (item => <Card name = {item.name} description = {item.description} platforms = {item.platforms} image = {item.image} releaseDate = {item.releaseDate} rating = {item.rating} genres = {item.genres} key = {item.id}/>)
      }
    </div>
  )
}

export default Cards