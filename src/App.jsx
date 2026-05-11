import { Routes, Route, HashRouter, Link } from "react-router-dom";

//======Contexts===========================
import { PartyContextProvider } from "./components/contexts/PartyContext.jsx";
import { UserContextProvider } from "./components/contexts/UserContext.jsx";
import { ThemeContextProvider } from "./components/contexts/ThemeContext.jsx";
//======Pages===========================
import HomePage from "./components/murderSite_pages/homePage/HomePage.jsx";
import Task1Page from "./components/murderSite_pages/taskPage/Task1Page.jsx";
import EvidencePage from "./components/murderSite_pages/evidencePage/EvidencePage.jsx";
import CharacterPage from "./components/murderSite_pages/characterPage/CharacterPage.jsx";
import LoginPage from "./components/murderSite_pages/loginPage/LoginPage.jsx";

import A_HomePage from "./components/admin_pages/admin_HomePage/A_HomePage.jsx";
import A_CharacterPage from "./components/admin_pages/admin_CharacterPage/A_CharacterPage.jsx";
//======================================

 const App = () => (
  <>
 <PartyContextProvider>
  <ThemeContextProvider>
  <UserContextProvider>
  
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/tasks/:userCharacter" element={<Task1Page/>}/>
      <Route path="/evidence" element={<EvidencePage/>}/>
      <Route path="/profile" element={<CharacterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/admin-home" element={<A_HomePage/>}/>
      <Route path="/admin-characters" element={<A_CharacterPage/>}/>
    </Routes>
  </HashRouter>
  
  </UserContextProvider>
  </ThemeContextProvider>
  </PartyContextProvider>
  </>
)

export default App