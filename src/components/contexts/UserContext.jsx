import { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
//=======================================================

// Cookie name for user character = userCharacterCookie

const userName = "name";
const password = "password";

export const UserContext = createContext();

export const UserContextProvider  = ({ children }) => {
  const [userCharacter, setUserCharacter] = useState(Cookies.get('userCharacterCookie'));
  const [loggedIn, setLogin] = useState();
//================================================

  const isLoggedIn = () => {
    if (userCharacter !== null)
        setLogin(true);
  }

  function checkLogin (formUserName, formPassword) {
    if ((userName == formUserName) && (password == formPassword))
      setLogin(true);
    else
      setLogin(false);
  }


//================================================
  const value = {
    userCharacter,
    loggedIn,
    checkLogin
  }  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

 