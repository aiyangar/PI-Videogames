

let initialState = {
  allVideogames: [],
  allGenres: [],
  allPlatforms: [],
}

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'GET_VIDEOGAMES':
      return {
        ...state,
        allVideogames: action.payload
      }
    
    case 'SEARCH':
      return {
        ...state,
        allVideogames: action.payload
      }
      
    case 'GET_GENRES':
      return {
        ...state,
        allGenres: action.payload
      }

    case 'GET_PLATFORMS':
      return {
        ...state,
        allPlatforms: action.payload
      }
    
    case 'GET_VIDEOGAME_DETAILS':
      return {
        ...state,
        videogame: action.payload
      } 
    
    case 'GET_GENRES':
    case 'GET_PLATFORMS':
      return {
        ...state,
        allVideogames: action.payload
      }

    case 'FILTER_VIDEOGAMES':
      return {
        ...state,
        allVideogames: action.payload
      }

    default:
      return state;
      break;
  }

}

export default rootReducer;