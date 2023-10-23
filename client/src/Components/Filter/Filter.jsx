import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.styles.css';

import { getGenres, getPlatforms, filterVideogamesBy } from '../../Redux/Action/Action';

const Filter = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
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
    const { name, value } = event.target;
  
    if (name === 'platform' || name === 'genre') {
      if (state[name].includes(value)) return;
      setState({
        ...state,
        [name]: [...state[name], value]
      });
    } else if (name === 'orderBy') {
      const [criteria, order] = value.split('-');
  
      const ascending = order === 'asc';
      setState({
        ...state,
        criteria,
        ascending,
      });
    }
  };
  

  const removeElement = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      await dispatch(filterVideogamesBy(state));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="filterContainer">
        
        <div className='selectContainer'>
          <select onChange={handleChange} name="platform" id="">
            <option value="">Plataformas...</option>
            {platform.map(p =>  <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div className='selectContainer'>
          <select onChange={handleChange} name="genre" id="">
            <option value="">Géneros...</option>
            {genre.map(p =>  <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div className="filterOption">
          <select name='orderBy' onChange={handleChange}>
            <option value="">Ordenar por...</option>
            <option value="nombre-asc">Nombre (Ascendente)</option>
            <option value="nombre-desc">Nombre (Descendente)</option>
            <option value="rating-asc">Rating (Ascendente)</option>
            <option value="rating-desc">Rating (Descendente)</option>
          </select>
        </div>

        <div className="filterOption">
          <input type="submit" className='formButton' value={isLoading ? 'Filtrando...' : 'Filtrar'} />
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
