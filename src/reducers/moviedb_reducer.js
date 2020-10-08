import {
  // RECEIVE_MOVIE,
  RECEIVE_MOVIES, RECEIVE_MOVIE_ERRORS
} from '../actions/moviedb_actions';


const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let movie;
    let moviesArr;
    let moviesObj;

    switch (action.type) {
      // case RECEIVE_MOVIE:
      //   movie = action.movie.data
      //   newState = Object.assign({}, state, {
      //     [movie._id]: movie
      //   });
      //   return newState;
      case RECEIVE_MOVIES:
        moviesArr = action.movies.data.Search;
        moviesObj = {};
        moviesArr.forEach(movie => {
          moviesObj[movie.imdbID] = movie
        })
        newState = Object.assign({}, moviesObj);
        return newState;
      case RECEIVE_MOVIE_ERRORS:
        moviesObj = {};
        newState = Object.assign({}, moviesObj);
        return newState;
      default:
          return state;
       }
       
    }

export default moviesReducer;