import * as APIUtil from '../util/session_api_util';
import {setAuthToken} from '../util/baseurl'
import jwt_decode from 'jwt-decode';


export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});



export const login = user => dispatch => {

  return (APIUtil.login(user).then(res => {
    const token = res.data.token; 
    localStorage.setItem('jwtToken', token); 
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
  })
)}



export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(logoutUser())
};