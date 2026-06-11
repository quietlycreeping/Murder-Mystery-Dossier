/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Component that holds all the context providers
==========================================================*/
//======Contexts===========================
import PartyContextProvider from "./components/contexts/PartyContext";
import UserContextProvider from "./components/contexts/UserContext";
import CharacterStorageContextProvider from "./components/contexts/CharacterStorageContext";



function ContextProviderList({ children }) {
  return (
    <>
      <PartyContextProvider> 
      <UserContextProvider>
      <CharacterStorageContextProvider>
        {children}
      </CharacterStorageContextProvider>
      </UserContextProvider>    
      </PartyContextProvider>
    </>
  );
}
export default ContextProviderList;