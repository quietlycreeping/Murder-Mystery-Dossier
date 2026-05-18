/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: User Context to manage the current user state. 
            To log the current user in and remember state with
            cookies. It will use the current user to set the correct
            user info per page.
==========================================================*/
import { useState, useContext, createContext } from 'react';

//====== User Context ===========================
export const UserContext = createContext("");

const UserContextProvider  = ({children}) => {    
    const [currentUser, setCurrentUser] = useState(""); 

    //functions

//====== Context Values ===========================
    const value = {
        
    };
    
    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    );
}
export default UserContextProvider;