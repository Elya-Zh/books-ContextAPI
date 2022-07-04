import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USA");

  const handleCurrency = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };
  return (
    <GlobalContext.Provider value={{ currency, handleCurrency }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useCurrency = () => useContext(GlobalContext);
