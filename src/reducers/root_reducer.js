import { combineReducers } from 'redux';
import session from './session_reducer';
import moviesearch from './moviedb_reducer';
import moviesMain from './movie_gen_reducer'
import errors from './errors_reducer';


const RootReducer = combineReducers({
    session,
    moviesearch,
    moviesMain,
    errors
});

export default RootReducer;