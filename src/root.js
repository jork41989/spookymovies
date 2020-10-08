import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';

import {
  Auth0Provider
} from "@auth0/auth0-react";
const ClientID = process.env.CLIENTID || require('./config/keys').clientId;
const Domain = process.env.DOMAIN || require('./config/keys').domain;



const Root = ({ store }) => (
    <Provider store={store}>
        < Auth0Provider
          domain = {Domain}
          clientId = {ClientID}
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

