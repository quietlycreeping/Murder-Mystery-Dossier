/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: User Context to manage user state. 
			To set the user to the correct character they are assigned to.
			User state will be remembered with cookies
==========================================================*/
import { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';
//=======================================================

// Cookie name for user character = userCharacterCookie

const userName = "name";
const password = "password";

//====== User Context ===========================
export const UserContext = createContext(null);

export const UserContextProvider  = ({ children }) => {
  const [userCharacter, setUserCharacter] = useState();
  const [loggedIn, setLogin] = useState(null);

//====== Context Functions ===========================

const setCookie = (name, vaule) => {
  Cookies.user(name, vaule, {expires: 60});};

//====== Context Values ===========================
  const value = {
    userCharacter,
    //getLoggedIn
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

 