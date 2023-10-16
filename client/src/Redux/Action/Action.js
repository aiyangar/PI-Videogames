import axios from 'axios'

import {
  GET_VIDEOGAMES,} from './ActionTypes'


export function createVideogame(state){
  return async function(dispatch){

    try {
      await axios.post('http://localhost:3001/videogames/', state)
    } catch (error) {
      console.log(error)
    }
  }
}

export function getVideogames(){
  return async function(dispatch){

    try {
      const response = await axios.get('http://localhost:3001/videogames/')
      dispatch({
        type: 'GET_VIDEOGAMES', 
        payload: response.data
      })
    
    } catch (error) {
      console.log(error)
    }
  }
}