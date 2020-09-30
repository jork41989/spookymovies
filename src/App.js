import React from 'react';

import './App.css';
import HeaderBar from './components/header/header';
import Homepage from './components/homepage/home'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <HeaderBar/>
     <Switch>
      <Route exact path="/" component={Homepage} />
     </Switch>

    </div>
  );
}

export default App;
