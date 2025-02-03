/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createContext, useContext } from "react";
import { useAuthStore } from "../store/useAuthStore";
import PageLoading from "../components/PageLoading";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { isAuthenticate, userAuthCheck, user } = useAuthStore();

  useEffect(() => {
    userAuthCheck();
  }, [userAuthCheck]);

  return (
    <GlobalContext.Provider
      value={{
        isAuthenticate,
        user,
      }}
    >
      <Toaster />
      {isAuthenticate === null ? <PageLoading /> : children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProvider = () => useContext(GlobalContext);
