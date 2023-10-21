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

export function searchVideogame(search){
  return async function(dispatch){

    try {
      const response = await axios.get(`http://localhost:3001/videogames?name=${search}`)
      dispatch({
        type: SEARCH,
        payload: response.data
      })
    } catch (error) {
      alert(error.response.data.message)
    }
  }
}

export function filterVideogamesBy(search) {
  return async function (dispatch) {
    try {
      const filters = search.split('&');
      const genreFilter = filters.find(filter => filter.startsWith('genre='));
      const platformFilter = filters.find(filter => filter.startsWith('platform='));
      console.log(genreFilter, platformFilter);

      let url = 'http://localhost:3001/videogames?';
      if (genreFilter) {
        url += `${genreFilter}&`;
      }
      if (platformFilter) {
        url += `${platformFilter}&`;
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
