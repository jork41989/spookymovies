import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';
import keys from './keys/keys'
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    < Auth0Provider
    domain = {keys.domain}
    clientId = {keys.clientId}
    redirectUri = {
        window.location.origin
      } >
      <Root />
    </ Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
