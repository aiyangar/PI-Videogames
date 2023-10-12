import React from 'react'
import Cards from '../../Components/Cards/Cards'

const videogames = () => {

  const arr = [
    {
      "id": "57b37260-035e-45f0-b06b-03c546f51679",
      "name": "Nombrechiditoone",
      "description": "Descripción del juego",
      "platforms": "Plataformas del juego",
      "image": "Imagen chidita",
      "releaseDate": "1985-06-06",
      "rating": 3.2,
      "genre": "Racing",
      "created": true
    },
    {
      "id": "191d09e0-9b86-429f-bcee-d0710549a3fa",
      "name": "otro",
      "description": "Descripción del juego",
      "platforms": "Plataformas del juego",
      "image": "Imagen chidita",
      "releaseDate": "1985-06-06",
      "rating": 3.2,
      "genre": "Racing",
      "created": true
    },
    {
      "id": "c0a0327e-ff10-4673-b470-f32a7e5a28ff",
      "name": "otro",
      "description": "Descripción del juego",
      "platforms": "Plataformas del juego",
      "image": "Imagen chidita",
      "releaseDate": "1985-06-06",
      "rating": 3.2,
      "genre": "Racing",
      "created": true
    }
  ]

  return (
    <div>
      <Cards info={arr}>

      </Cards>
    </div>
  )
}

export default videogames