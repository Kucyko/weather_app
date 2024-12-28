import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState('metric');
  const [globalFav, setGlobalFav] = useState([]);

  return (
    <AppContext.Provider value={{ selectedOption, setSelectedOption, globalFav, setGlobalFav }}>
      {children}
    </AppContext.Provider>
  );
}
