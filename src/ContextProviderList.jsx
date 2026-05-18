/*=========================================================
 Author:     J. Orlando
 Date:       June 2026
 Description: Component that holds all the context providers
==========================================================*/
//======Contexts===========================
import PartyContextProvider from "./components/contexts/PartyContext";


function ContextProviderList({ children }) {
  return (
    <PartyContextProvider>
        {children}
    </PartyContextProvider>
  );
}
export default ContextProviderList;