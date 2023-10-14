import React, { useState } from 'react'
import './Create.styles.css'
import Astarion from './BG3.jpg'


const create = () => {

  const [state, setState] = useState ({
    name: '',
    description: '',
    platforms: [],
    image: '',
    releaseDate: '',
    rating: '',
    genre: []
  })

  const [errors, setErrors] = useState ({
    name: 'El nombre del juego es requerido',
    description: 'La descripción es requerida',
    platforms: 'Selecciona al menos una plataforma',
    image: 'Escribe la URL de la imagen',
    releaseDate: 'Formato aaaa-mm-dd',
    rating: 'Escribe un número del 1 al 5',
    genre: 'Selecciona al menos un género'
  })

  const genre = [
    'racing', 'shooter', 'action', 'strategy', 'sports', 'puzzle', 'platformer', 'rPG', 'Horror', 'FPS', 'MMORPG'
  ]
  const platforms = ['PC', 'Nintendo', 'Super Nintendo', 'Sega', 'Game Boy']

  const validate = (state, name) => {
    if (name === 'name'){
      if (state.name === ''){
        setErrors({...errors, name: 'El nombre del juego es requerido'})
      } else {
        setErrors({...errors, name: ''})
      }
    }
    if (name === 'description'){
      if (state.description === ''){
        setErrors({...errors, description: 'La descripción es requerida'})
      } else {
        setErrors({...errors, description: ''})
      }
      
    }
    if (name === 'platforms'){
      if (state.platforms.length === 0){
        setErrors({...errors, platforms: 'Selecciona al menos una plataforma'})
      } else {
        setErrors({...errors, platforms: ''})
      }
    }
    if (name === 'image'){
      if (state.image === ''){
        setErrors({...errors, image: 'Escribe la URL de la imagen'})
      } else {
        setErrors({...errors, image: ''})
      }
    }
    if (name === 'releaseDate'){
      if (state.releaseDate === ''){
        setErrors({...errors, releaseDate: 'Formato aaaa-mm-dd'})
      } else {
        setErrors({...errors, releaseDate: ''})
      }
    }
    if (name === 'rating'){
      if ((state.rating > 0) && (state.rating < 6) && (state.rating !== '')){
        setErrors({...errors, rating: ''})
      } else {
        setErrors({...errors, rating: 'Escribe un número del 1 al 5'})
      }
    }
    if (name === 'genre'){
      if (state.genre.length === 0){
        setErrors({...errors, genre: 'Selecciona al menos un género'})
      } else {
        setErrors({...errors, genre: ''})
      }
    }
  }

  const handleChange = (event) => {

    if (event.target.name === 'platforms') {
      if (state.platforms.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
      return
    }

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
    
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const removeElement = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  }

  return (
    <div>
      {console.log(errors)}
      <h1>Registrar un nuevo juego</h1>
      <br />
      <div className='formContainer'>
        <form className='leftSide'>
          <input onChange={handleChange} type="text" name='name' placeholder='nombre'/>
          <input onChange={handleChange} type="text" name='description' placeholder='descripción'/>
          <input onChange={handleChange} type="text" name='image' placeholder='url de la imagen'/>
          <input onChange={handleChange} type="date" name='releaseDate' placeholder='fecha de lanzamiento'/>
          <input onChange={handleChange} type="number" name='rating' placeholder='rating'/>

          <div className='selectContainer'>
            <label>Plataformas: </label>
            <select onChange={handleChange} name="platforms" id="">{
                platforms.map(p =>  <option key={p} value={p}>{p}</option>)
              }
            </select>
            
            
          </div>

          <div className='selectContainer'>
            <label>Géneros: </label>
            <select onChange={handleChange} name="genre" id="">{
                genre.map(p =>  <option key={p} value={p}>{p}</option>)
              }
            </select>
          </div>
          
          <input type="submit" value="Registrar juego" className="formButton" />
        </form>
        <div className="rightSide">
          <img src={Astarion} alt="" />
        </div>
      </div>
      <div className="genrePlatformContainer">
        <div className='platformsContainer'>
          {
            state.platforms.map((p, index) => <div className='item' key={index}><span id={'platforms'}>{p}</span><button name='platforms' id={p} onClick={removeElement} type='button'>x</button></div>)
          }
        </div>
        <div className='genreContainer'>
          {
            state.genre.map((p, index) => <div className='item' key={index}><button name='genre' id={p} onClick={removeElement} type='button'>x</button><span id={'genre'}>{p}</span></div>)
          }
        </div>
        
      </div>
      
    </div>
  )
}

export default create