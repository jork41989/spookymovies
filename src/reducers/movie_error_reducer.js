import {
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_ERRORS
} from '../actions/moviedb_actions';

import {
  RECEIVE_MOVIE_GEN_ERRORS
} from '../actions/movie_actions'

const _nullErrors = [];

const MovieErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_ERRORS:
      return action.errors;
    case RECEIVE_MOVIE_GEN_ERRORS:
        return action.errors;
    case RECEIVE_MOVIES:
      return _nullErrors;
    default:
      return state;
  }
};

export default MovieErrorsReducer;