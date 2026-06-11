/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Context to manage localStorarge for an user's character
==========================================================*/
import { useState, useContext, createContext, useEffect } from 'react';
//====== Files ===========================
import data from "../../files/data.json"
//=============================================
import { UserContext } from './UserContext';

//====== CharacterStorage Context ===========================
export const CharacterStorageContext = createContext();

const CharacterStorageContextProvider  = ({children}) => {    
    const {loginStatus} = useContext(UserContext);
    //all character vaules
    const [characterVaules, setCharacterVaules] = useState({
        name: "",
        personalities: [], //array of max 3 vaules
        realtions: [], //array of max 3 vaules
        backstory: "",
        acting: "",
        dress: ""
    })
    const [characterTasks, setCharacterTasks] = useState({
        pre: [],
        preCheckStatus: [], 
        post: [],
        postCheckStatus: [], 
    })

    /*useEffect(() => {
        if (loginStatus==true)
        {
            if (localStorage exists)
                handleLoadStorage();
            else
                handleGenerateStorage();
        }
    }, [loginStatus]);*/

    const handleLoadStorage = () => {
        //TODO: take vaules from storage and set them
    };

    const handleGenerateStorage = () => {
        //TODO: take character vaule and save them in storage
    };


//====== Context Values ===========================
    const value = {
        characterVaules,
        characterTasks
    };
    
    return (
    <CharacterStorageContext.Provider value={value}>
        {children}
    </CharacterStorageContext.Provider>
    );
}
export default CharacterStorageContextProvider;