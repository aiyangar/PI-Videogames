import React from 'react'
import Card from '../Card/Card.jsx'

import './Cards.styles.css'

const Cards = ({info}) => {
  return (
    <div className='cardsContainer'>
      {
        info.map (item => <Card name = {item.name} description = {item.description} platform = {item.platform} image = {item.image} released = {item.released} rating = {item.rating} genre = {item.genre} key = {item.id}/>)
      }
    </div>
  )
}

export default Cards