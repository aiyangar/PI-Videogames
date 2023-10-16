import axios from 'axios'


export function createVideogame(state){
  return async function(dispatch){

    try {
      await axios.post('http://localhost:3001/videogames/', state)
    } catch (error) {
      console.log(error)
    }
  }
}