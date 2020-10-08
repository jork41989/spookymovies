import { combineReducers } from 'redux';
import session from './session_reducer';
import moviesearch from './moviedb_reducer';
import errors from './errors_reducer';


const RootReducer = combineReducers({
    session,
    moviesearch,
    errors
});

export default RootReducer;