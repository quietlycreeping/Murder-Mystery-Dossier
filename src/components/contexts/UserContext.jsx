import { createContext, useState } from 'react';
//=======================================================

export const UserContext = createContext();

export const UserContextProvider  = ({ children }) => {
  const [userCharacter, setUserCharacter] = useState();
  const [isLoggedIn, setLogInStatus] = useState(false);
//================================================
  

//================================================
  const value = {
    userCharacter,
    isLoggedIn
  }  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

 