/*=========================================================
 Author:     J. Orlando
 Date:       May 2026
 Description: Party Context to manage party state. 
			To set the state of the party. 
            The state will render certain components differently.
==========================================================
 States      siteTemplate│isMystery│isMurder 
 ════════════════════════╪═════════╪════════ 
 Template        True    │   NA    │   NA    
 ────────────────────────┼─────────┼──────── 
 Pre-Party      False    │  False  │ False   
 ────────────────────────┼─────────┼──────── 
 Pre-Murder     False    │  True   │ False   
 ────────────────────────┼─────────┼──────── 
 Post-Murder    False    │  True   │  True   
==========================================================*/
import { useState, useContext, createContext } from 'react';

//====== Party Context ===========================
export const PartyContext = createContext();

const PartyContextProvider  = ({children}) => {    //use default state as hard coded variables
    const [siteTemplate, setsiteTemplate] = useState(true); 
    const [isMystery, setIsMystery] = useState(true); 
    const [isMurder, setIsMurder] = useState(true); 

//====== Context Values ===========================
    const value = {siteTemplate,isMystery,isMurder};
    return (
    <PartyContext.Provider value={value}>
        {children}
    </PartyContext.Provider>
    );
}
export default PartyContextProvider; 