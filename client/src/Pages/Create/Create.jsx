import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Create.styles.css'
import Astarion from './BG3.jpg'
import { createVideogame } from '../../Redux/Action/Action'


const create = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState ({
    name: '',
    description: '',
    platform: [],
    image: '',
    released: '',
    rating: '',
    genre: []
  })

  const [errors, setErrors] = useState ({
    name: 'El nombre del juego es requerido',
    description: 'La descripción es requerida',
    platform: 'Selecciona al menos una plataforma',
    image: 'Escribe la URL de la imagen',
    released: 'Selecciona una fecha válida',
    rating: 'Escribe un número del 1 al 5',
    genre: 'Selecciona al menos un género'
  })

  const genre = [
    'racing', 'shooter', 'action', 'strategy', 'sports', 'puzzle', 'platformer', 'rPG', 'Horror', 'FPS', 'MMORPG'
  ]
  const platform = ['PC', 'Nintendo', 'Super Nintendo', 'Sega', 'Game Boy']

  const validate = (state, name) => {
    if (name === 'name'){
      if (state.name === ''){
        setErrors({...errors, name: 'El nombre del juego es requerido'})
      } else if (state.name.length < 3){
        setErrors({...errors, name: 'El nombre del juego debe tener al menos 3 caracteres'})
      } else if (state.name.length > 20){
        setErrors({...errors, name: 'El nombre del juego debe tener menos de 20 caracteres'})
      } else {
        setErrors({...errors, name: ''})
      }
    }

    if (name === 'description'){
      if (state.description === ''){
        setErrors({...errors, description: 'La descripción es requerida'})
      } else if (state.description.length < 20){
        setErrors({...errors, description: 'La descripción debe tener al menos 20 caracteres'})
      } else {
        setErrors({...errors, description: ''})
      }
    }

    if (name === 'platform'){
      if (state.platform.length === 0){
        console.log(state.platform)
        setErrors({...errors, platform: 'Selecciona al menos una plataforma'})
      } else {
        setErrors({...errors, platform:''})
      }
    }

    if (name === 'image'){
      if (state.image === ''){
        setErrors({...errors, image: 'Escribe la URL de la imagen'})
      } else {
        setErrors({...errors, image: ''})
      }
    }

    if (name === 'released'){
      if (state.released === ''){
        setErrors({...errors, released: 'Selecciona una fecha'})
      } else {
        setErrors({...errors, released: ''})
      }
    }

    if (name === 'rating'){
      if ((parseInt(state.rating) > 0) && (parseInt(state.rating) < 6) && (state.rating !== '')){
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
    if (event.target.name !== 'platform' || event.target.name !== 'genre'){
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

    if (event.target.name === 'platform') {
      if (state.platform.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
    }

    if (event.target.name === 'genre') {
      if (state.genre.includes(event.target.value)) return
      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
    }
    
    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const buttonDisabled = () => {
    let disableButton = true;
    for (let error in errors){
      if (errors[error] !== '') {
        disableButton = true
        break
      } else{
        disableButton = false
      }
    }
    return disableButton
  }
  

  const removeElement = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
    validate({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    }, event.target.name)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createVideogame(state))
  }

  return (
    <div>
      <h1>Registrar un nuevo juego</h1>
      <br />
      <div className='formContainer'>
        <form onSubmit={handleSubmit} className='leftSide' >
          <input onChange={handleChange} type="text" name='name' placeholder='nombre'/>
          <span className='validateData'>{errors.name}</span>
          <input onChange={handleChange} type="text" name='description' placeholder='descripción'/>
          <span className='validateData'>{errors.description}</span>
          <input onChange={handleChange} type="text" name='image' placeholder='url de la imagen'/>
          <span className='validateData'>{errors.image}</span>
          <input onChange={handleChange} type="date" name='released'/>
          <span className='validateData'>{errors.released}</span>
          <input onChange={handleChange} type="number" name='rating' placeholder='rating'/>
          <span className='validateData'>{errors.rating}</span>

          <div className='selectContainer'>
            <label>Plataformas: </label>
            <select onChange={handleChange} name="platform" id="">{
                platform.map(p =>  <option key={p} value={p}>{p}</option>)
              }
            </select>
          </div>
          <span className="validateData">{errors.platform}</span>
          <div className='selectContainer'>
            <label>Géneros: </label>
            <select onChange={handleChange} name="genre" id="">{
                genre.map(p =>  <option key={p} value={p}>{p}</option>)
              }
            </select>
          </div>
          <span className="validateData">{errors.genre}</span>
          <input disabled={buttonDisabled()} type="submit" value="Registrar juego" className="formButton" />
        </form>


        <div className="rightSide">
          <img src={Astarion} alt="" />
        </div>
      </div>
      <div className="genrePlatformContainer">
        <div className='platformsContainer'>
          {
            state.platform.map((p, index) => <div className='item' key={index}><span id={'platform'}>{p}</span><button name='platform' id={p} onClick={removeElement} type='button'>x</button></div>)
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