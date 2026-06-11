/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: User Context to manage the current user state. 
            To log the current user in and remember state with
            cookies. It will use the current user to set the correct
            user info per page.
            -- COOKIE NAMES --
            user's character: "userCharacter"
            user's character key vaule: "userKey"
==========================================================*/
import { useState, useContext, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';
//====== Files ===========================
import data from "../../files/data.json"
//=============================================

//====== User Context =======================================
export const UserContext = createContext();

const UserContextProvider  = ({children}) => {    
    const [currentUser, setCurrentUser] = useState(); //check if user has a character cookie, then sets vaule
    const [characterKey, setCharacterKey] = useState(); //if user has character set the id/index of the character array
    const [loginStatus, setLoginStatus] = useState();

    useEffect(() => {
        var userCharacter = Cookies.get('userCharacter');
        setCurrentUser(userCharacter);
        var userKey = Cookies.get('userKey');
        setCharacterKey(userKey);
        (userCharacter !== undefined) && setLoginStatus(true);    
    }, []);

    const handleLogin = (inputUsername, inputPassword) => {
        //Looks and compares .username array to inputUsername. If a match is found return the index of .username | No match found returns -1
        var indexVaule = data.loginData.username.findIndex((compareVaule => compareVaule == inputUsername)) 

        //If username was found, then checks if password matches at the index
        if ((indexVaule !== -1)) {
            if (data.loginData.password[indexVaule] == inputPassword)
            {
                var authUser = data.loginData.username[indexVaule];
                setCurrentUser(authUser);
                Cookies.set("userCharacter", authUser, { expires: 45 }); //cookie expires in a month and a half
                
                setCharacterKey(indexVaule);
                Cookies.set("userKey", indexVaule, { expires: 45 }); //cookie expires in a month and a half
                
                setLoginStatus(true);}}
        else
            alert('Wrong username or password.');
    };
//====== Context Values ===========================
    const value = {
        currentUser,
        characterKey,
        loginStatus,
        handleLogin
    };
    
    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    );
}
export default UserContextProvider;