import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.styles.css';

import { getGenres, getPlatforms, filterVideogamesBy } from '../../Redux/Action/Action';

const Filter = () => {

  const dispatch = useDispatch();
  const allGenres = useSelector(state => state.allGenres);
  const allPlatforms = useSelector(state => state.allPlatforms);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, []);

  const [state, setState] = useState ({
    genre: [],
    platform: []
  })

  const genre = allGenres.map(genre => genre.name)
  const platform = allPlatforms.map(platform => platform.name)

  const handleChange = (event) => {
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
  }

  const removeElement = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(filterVideogamesBy(state))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="filterContainer">
        
        <div className='selectContainer'>
          <label>Plataformas: </label>
          <select onChange={handleChange} name="platform" id="">{
              platform.map(p =>  <option key={p} value={p}>{p}</option>)
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

        <div className="filterOption">
          <label>Ordenar por: </label>
          <select>
            <option value="nombre-asc">Nombre (Ascendente)</option>
            <option value="nombre-desc">Nombre (Descendente)</option>
            <option value="rating-asc">Rating (Ascendente)</option>
            <option value="rating-desc">Rating (Descendente)</option>
          </select>
        </div>

        <div className="filterOption">
          <input type="submit" className='formButton' value='Filtrar'/>
        </div>
      </form>


      <div className="genrePlatformContainer">
        <div className='platformsContainer'>
          {
            state.platform.map((p, index) => <div className='item' key={index}><span id={'platform'}>{p}</span><button name='platform' id={p} onClick={removeElement} type='button'>eliminar</button></div>)
          }
        </div>
        <div className='genreContainer'>
          {
            state.genre.map((p, index) => <div className='item' key={index}><button name='genre' id={p} onClick={removeElement} type='button'>eliminar</button><span id={'genre'}>{p}</span></div>)
          }
        </div>
        
      </div>
      
    </div>
  );
};

export default Filter;
