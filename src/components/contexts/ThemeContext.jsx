import { createContext, useState } from 'react';
//=======================================================

export const ThemeContext = createContext();

export const ThemeContextProvider  = ({ children }) => {
  
  const value = {

  }  

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;