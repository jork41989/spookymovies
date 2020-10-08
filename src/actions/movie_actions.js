import * as APIUtil from '../util/movie_gen_api_util';

export const RECEIVE_MOVIE_GEN = "RECEIVE_MOVIE_GEN";
export const RECEIVE_MOVIE_GEN_ERRORS = 'RECEIVE_MOVIE_ERRORS'

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE_GEN,
  movie
});

export const receiveErrors = errors => ({
  type: RECEIVE_MOVIE_GEN_ERRORS,
  errors
});

export const addMovie = (payload) => async dispatch =>{
  try{
   const res = await APIUtil.addMovie(payload)
    dispatch(receiveMovie(res))

  } catch (err){
     dispatch(receiveErrors(err))
  }
}