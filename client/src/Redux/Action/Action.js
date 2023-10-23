import axios from 'axios'

import {
  GET_VIDEOGAMES,
  SEARCH,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAME_DETAILS,
  FILTER_VIDEOGAMES,
} from './ActionTypes'



export function createVideogame(state){
  return async function(){

    try {
      await axios.post('http://localhost:3001/videogames/', state)
      alert('Videogame creado correctamente')
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function getVideogames(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/videogames/')
      return dispatch({
        type: GET_VIDEOGAMES, 
        payload: response.data
      })
    
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function getVideogame(id){
  return async function(dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/videogames/${id}`)
      return dispatch({
        type: GET_VIDEOGAME_DETAILS,
        payload: response.data
      })
    }
    catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function getGenres(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/genres/')
      return dispatch({
        type: GET_GENRES, 
        payload: response.data
      })
    
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function getPlatforms(){
  return async function(dispatch){
    try {
      const response = await axios.get('http://localhost:3001/platforms/')
      return dispatch({
        type: GET_PLATFORMS, 
        payload: response.data
      })
    
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function searchVideogame(search) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/videogames?name=${search}`);
      const noResults = await axios.get('http://localhost:3001/videogames');

      if (response.data === 'No fue encontrado ningún juego que coincida con ese nombre') {
        dispatch({
          type: SEARCH,
          payload: noResults.data
        });
      } else {
        dispatch({
          type: SEARCH,
          payload: response.data,
        });
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}



export function filterVideogamesBy(state) {
  return async function (dispatch) {
    try {
      const { genre, platform, createdAt, criteria, ascending } = state;

      let url = 'http://localhost:3001/videogames?';
      if (genre.length > 0) {
        url += `genre=${genre.join('&genre=')}&`;
      }
      if (platform.length > 0) {
        url += `platform=${platform.join('&platform=')}&`;
      }
      if (createdAt !== undefined) {
        console.log(createdAt);
        url += `created=${createdAt}&`;
      }
      if (criteria && ascending !== undefined) {
        url += `criteria=${criteria}&ascending=${ascending ? 'true' : 'false'}&`;
      }

      const response = await axios.get(url);
      dispatch({
        type: FILTER_VIDEOGAMES,
        payload: response.data
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
}
