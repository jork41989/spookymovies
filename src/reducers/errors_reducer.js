import { combineReducers } from 'redux';
import MovieErrorsReducer from './movie_error_reducer';


export default combineReducers({
  movie: MovieErrorsReducer
})