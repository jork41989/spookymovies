import * as MoviesApiUtil from '../util/moviedb_api_util';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIES_ERRORS'


const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveErrors = errors => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
});


export const getSearchMovie = (term) => async dispatch => {
  try {
   const res = await MoviesApiUtil.movieAddSearch(term)
    if (res.data.Error) {
      dispatch(receiveErrors(res.data.Error))
    } else {
      dispatch(receiveMovies(res))
    } 
  } catch (err) { 

    dispatch(receiveErrors(err))
  }
}
