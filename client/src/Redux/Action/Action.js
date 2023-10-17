import axios from 'axios'

import {
  GET_VIDEOGAMES,
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