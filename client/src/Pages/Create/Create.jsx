import React, { useState } from 'react'
import './Create.styles.css'
import Astarion from './BG3.jpg'


const create = () => {

  const [state, setState] = useState ({
    name: '',
    description: '',
    platforms: '',
    image: '',
    releaseDate: '',
    rating: '',
    genre: ''
  })

  const genre = [
    'racing', 'shooter', 'action', 'strategy', 'sports', 'puzzle', 'platformer', 'rPG', 'Horror', 'FPS', 'MMORPG'
  ]

  const handleChange = (event) => {

    if (event.target.name === 'genre') {
      if (state.genre.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
      return
    }

    setState({
      ...state,
      [event.target.name]: event.target.value
    })
    console.log(state)

  }

  return (
    <div>
      {console.log(state)}
      <h1>Registrar un nuevo juego</h1>
      <br />
      <div className='formContainer'>
        <form className='leftSide'>
          <input onChange={handleChange} type="text" name='name' placeholder='nombre'/>
          <input onChange={handleChange} type="text" name='description' placeholder='descripción'/>
          <input onChange={handleChange} type="text" name='platforms' placeholder='plataformas'/>
          <input onChange={handleChange} type="text" name='image' placeholder='url de la imagen'/>
          <input onChange={handleChange} type="date" name='releaseDate' placeholder='fecha de lanzamiento'/>
          <input onChange={handleChange} type="float" name='rating' placeholder='rating'/>
          <div>
            <label>Genre: </label>
            <select onChange={handleChange} name="genre" id="">{
                genre.map(g =>  <option key={g} value={g}>{g}</option>)
              }
            </select>
          </div>
          <input type="submit" value="Registrar juego" className="formButton" />
        </form>
        <div className="rightSide">
          <img src={Astarion} alt="" />
        </div>
      </div>
    </div>
  )
}

export default create