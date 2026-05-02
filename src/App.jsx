import { Routes, Route, HashRouter, Link } from 'react-router-dom';

//======Pages===========================
import HomePage from './components/murderSite_pages/homePage/HomePage.jsx';
import TaskPage from './components/murderSite_pages/taskPage/TaskPage.jsx';
import EvidencePage from './components/murderSite_pages/evidencePage/EvidencePage.jsx';
import CharacterPage from './components/murderSite_pages/characterPage/CharacterPage.jsx';

import A_HomePage from './components/admin_pages/admin_HomePage/A_HomePage.jsx';
import A_CharacterPage from './components/admin_pages/admin_CharacterPage/A_CharacterPage.jsx';
//======================================

 const App = () => (
  <>
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/tasks" element={<TaskPage/>}/>
      <Route path="/evidence" element={<EvidencePage/>}/>
      <Route path="/profile" element={<CharacterPage/>}/>

      <Route path="/admin-home" element={<A_HomePage/>}/>
      <Route path="/admin-characters" element={<A_CharacterPage/>}/>
    </Routes>
  </HashRouter>
  </>
)

export default App