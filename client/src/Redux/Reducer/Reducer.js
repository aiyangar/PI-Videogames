

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
      break;

    default:
      return state;
      break;
  }

}

export default rootReducer;