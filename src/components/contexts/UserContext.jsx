/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: User Context to manage the current user state. 
            To log the current user in and remember state with
            cookies. It will use the current user to set the correct
            user info per page.
==========================================================*/
import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import Papa from 'papaparse';
//====== Files ===========================


//====== User Context ===========================
export const UserContext = createContext();

const UserContextProvider  = ({children}) => {    
    const [currentUser, setCurrentUser] = useState((Cookies.get("userCharacter"))); //check if user has a character cookie and then set vaule
    const [loginStatus, setLoginStatus] = useState(false);

    const handleLogin = () => {

    }

//====== Context Values ===========================
    const value = {
       currentUser,
       loginStatus 
    };
    
    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    );
}
export default UserContextProvider;