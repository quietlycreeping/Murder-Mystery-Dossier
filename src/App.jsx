import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; //

//======Pages===========================
import HomePage from './components/homePage/HomePage';
import AdminPage from './components/adminPage/AdminPage';
//======================================

 const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/ad,om' element={<HomePage/>}/>
    </Routes>
  </HashRouter>
)

export default App