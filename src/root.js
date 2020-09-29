import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';

import {
  Auth0Provider
} from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';
import keys from './keys/keys'


const Root = ({ store }) => (
    <Provider store={store}>
        < Auth0Provider
          domain = {keys.domain}
          clientId = {keys.clientId}
          redirectUri = {
              window.location.origin
            } >
              <HashRouter>
                  <App />
              </HashRouter>
      </ Auth0Provider> 
    </Provider>
);


export default Root;

