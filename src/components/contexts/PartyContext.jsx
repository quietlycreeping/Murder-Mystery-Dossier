import { useState, createContext } from 'react';
//=======================================================
/* 
 States      siteTemplate│isMystery│isMurder 
 ════════════════════════╪═════════╪════════ 
 Template        True    │   NA    │   NA    
 ────────────────────────┼─────────┼──────── 
 Pre-Party      False    │  False  │ False   
 ────────────────────────┼─────────┼──────── 
 Pre-Murder     False    │  True   │ False   
 ────────────────────────┼─────────┼──────── 
 Post-Murder    False    │  True   │  True   
 ════════════════════════╧═════════╧════════ 
https://plaintexttools.github.io/plain-text-table/ */

export const PartyContext = createContext();

export const PartyContextProvider  = ({ children }) => {
    const [siteTemplate, setsiteTemplate] = useState(true); //did the mystery start?  
    const [isMystery, setIsMystery] = useState(false); 
    const [isMurder, setIsMurder] = useState(false); 

    const value = {siteTemplate,isMystery,isMurder};
    return (
    <PartyContext.Provider value={value}>
        {children}
    </PartyContext.Provider>
    );
}
export default PartyContextProvider;