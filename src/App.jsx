import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

//====Pages=======================
import HomePage from './components/homePage/HomePage';

 const App = () => (
  <HashRouter>
    <Route
      exact path='/'
      component={HomePage}
    />
  </HashRouter>
)

export default App