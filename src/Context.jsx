import React, { createContext, useContext, useState } from "react";

// Create a context for managing the selected city
const SelectedCityContext = createContext();

// Custom hook to access the selected city context
export const useSelectedCity = () => useContext(SelectedCityContext);

// Provider component for the selected city context
export const SelectedCityProvider = ({ children }) => {
  // State to store the selected city
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    // Provide the selected city state and setter to the context
    <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </SelectedCityContext.Provider>
  );
};
