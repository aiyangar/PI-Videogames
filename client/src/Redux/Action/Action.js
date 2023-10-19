import axios from 'axios'

import {
  GET_VIDEOGAMES,
  SEARCH,
  GET_GENRES,
  GET_PLATFORMS
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