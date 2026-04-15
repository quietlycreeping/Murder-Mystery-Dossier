import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

//======Pages===========================
import HomePage from './components/homePage/HomePage';
import AdminPage from './components/adminPage/AdminPage';
//======================================

 const App = () => (
  <HashRouter>
    <Route
      exact path='/'
      component={HomePage}
    />
    <Route
      exact path='/admin'
      component={AdminPage}
    />
  </HashRouter>
)

export default App