/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: User Context to manage the current user state. 
            To log the current user in and remember state with
            cookies. It will then use the current user's character's
            index to set the correct character info to localStorage
            user info per page.
            -- COOKIE NAMES --
            user's character: "userCharacter"
            -- LOCAL STORAGE NAMES --
            user's character's traits (object): "CharacterTraits"
            user's character's tasks (object): "CharacterTasks"
==========================================================*/
import { useState, useContext, createContext, useEffect } from 'react';
import Cookies from 'js-cookie';
//====== Files ===========================
import characterFacts from "../../files/characterFacts.json"
//=============================================

export const UserContext = createContext();

const UserContextProvider  = ({children}) => {
//----- STATE VALUES----------------------------------------
    const [currentUser, setCurrentUser] = useState();
    const [loginStatus, setLoginStatus] = useState();
    const [characterValues, setCharacterValues] = useState({
    name: "",
    title: "",
    personalities: [],
    Pkey: [],
    realtions: [],
    Rkey: [],
    backstory: "",
    acting: "",
    dress: ""
    });
    const [characterTasks, setCharacterTasks] = useState({
        pre: [],
        secrets: [],
        post: [],
    });

//----- CONTEXT FUNCTIONS ---------------------------------
    //upon sucess login use found character index and save character info from JSON to local storage
    const handleSaveCharacter = (indexVaule) => {
        var characterName = characterFacts.characterData.name;
        
        var characterPersonality = [];
        var newPkey = [];

        var characterRealtion = [];
        var newRkey= [];

        var characterPreTasks = [];
        var characterSecrets = [];
        var characterPostTasks = [];

        for (let i=0; i<5; i++) //iterates 5 times for personality, realtions, secrets
        {
            var trait = characterFacts.characterData.personalities[indexVaule][i];
            var connection = characterFacts.characterData.relations[indexVaule][i];
            var secret = characterFacts.characterData.secrets[indexVaule][i];
            if ( trait !== undefined)
            {
                characterPersonality.push(trait);
                newPkey.push(characterName+"P"+i);
            }
            if ( connection !== undefined)
            {
                characterRealtion.push(trait);
                newRkey.push(characterName+"R"+i);    
            }
            if ( secret !== undefined)
                characterSecrets.push(secret);
        }
        for (let i=0; i<12; i++)
        {
            //iterate for tasks
        }

        const newValues = {
            name: characterName,
            title: characterFacts.characterData.title,
            personalities: characterPersonality,
            Pkey: newPkey,
            realtions: characterRealtion,
            Rkey: newRkey,
            backstory: characterFacts.characterData.backstory,
            acting: characterFacts.characterData.acting,
            dress: characterFacts.characterData.dress
        };
        const newTasks ={
            pre: characterPreTasks,
            secrets: characterSecrets,
            post: characterPostTasks,
        };

        localStorage.setItem("CharacterTraits", JSON.stringify(newValues));
        localStorage.setItem("CharacterTasks", JSON.stringify(newTasks));
    };

    const handleLoadStorage = () => {
        var traits = JSON.parse(localStorage.getItem('CharacterTraits'))
    };
    
    //upon initial page load check cookies to see if a character is saved if so set loginStatus to true and grab character info from storage
    useEffect(() => {
        var userCharacter = Cookies.get('userCharacter');
        setCurrentUser(userCharacter);

        if (userCharacter != undefined)
        {
           setLoginStatus(true);
           handleLoadStorage; 
        }
    }, []);

    const handleLogin = (inputUsername, inputPassword) => {
        //Looks and compares .username array to inputUsername. If a match is found return the index of .username | No match found returns -1
        var index = characterFacts.loginData.username.findIndex((compareVaule => compareVaule == inputUsername)) 

        //If username was found, then checks if password matches at the index
        if ((index !== -1)) {
            if (characterFacts.loginData.password[index] == inputPassword)
            {
                var authUser = characterFacts.loginData.username[index];
                setCurrentUser(authUser);
                Cookies.set("userCharacter", authUser, { expires: 45 }); //cookie expires in a month and a half
                
                handleSaveCharacter(index);
                setLoginStatus(true);
            }}
        else
            alert('Wrong username or password.');
    };

//----- EXPORTED VALUES ---------------------------------
    const value = {
        currentUser,
        loginStatus,
        characterValues,
        characterTasks,
        handleLogin
    };
    
    return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
    );
}
export default UserContextProvider;