import { Routes, Route, HashRouter, Link } from 'react-router-dom';

//======Pages===========================
import HomePage from './components/homePage/HomePage';
import AdminPage from './components/adminPage/AdminPage';
//======================================

 const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
  </HashRouter>
)

export default App