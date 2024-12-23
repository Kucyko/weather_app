import React, { createContext, useState, useContext } from 'react';

// Stwórz kontekst
const AppContext = createContext();

// Hook do korzystania z kontekstu
export const useAppContext = () => useContext(AppContext);

// Provider do owijania aplikacji
export function AppProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState('metric');

  return (
    <AppContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </AppContext.Provider>
  );
}
