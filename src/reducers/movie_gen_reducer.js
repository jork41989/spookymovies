import {RECEIVE_MOVIE_GEN, RECEIVE_MOVIE_GEN_ERRORS} from '../actions/movie_actions'

const moviesGenReducer = (state = {}, action) => {
  Object.freeze(state);
    let newState;
    let moviesArr;
    let moviesObj;
    let movie;
    switch (action.type) {
       case RECEIVE_MOVIE_GEN:
         movie = action.movie.data
         newState = Object.assign({}, state, {
           [movie._id]: movie
         });
         return newState;
      case RECEIVE_MOVIE_GEN_ERRORS:
        moviesObj = {};
        newState = Object.assign({}, moviesObj);
        return newState
      default:
        return state;
    }

}

export default moviesGenReducer;