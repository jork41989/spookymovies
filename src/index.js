import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import {
  setAuthToken
} from './util/baseurl';
import {
  logout
} from './actions/session_actions';

//test//

import axios from 'axios';
//test//

document.addEventListener('DOMContentLoaded', () => {
      let store;
      if (localStorage.jwtToken === "undefined") {
        store = configureStore({});
      } else if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {
          session: {
            isAuthenticated: true,
            user: decodedUser
          }
        }
  

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
          store.dispatch(logout());
          window.location.href = '/';
        }
      } else {
        store = configureStore({});
      }
      const root = document.getElementById('root');
      //test
      window.axios = axios
      //test
      ReactDOM.render( < Root store = {store}
        />, root);
      });