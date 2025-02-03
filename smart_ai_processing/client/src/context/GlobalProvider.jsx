/* eslint-disable react/prop-types */

import { Toaster } from "react-hot-toast";
import { createContext, useContext } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider>
      <Toaster />
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProvider = () => useContext(GlobalContext);
