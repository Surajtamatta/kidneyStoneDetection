/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, createContext, useContext, ReactNode, SetStateAction } from "react";



type LoginState = {
  isLoggedIn: boolean;
  userData?: any;
};

type NavContextType = {
  loginState: LoginState;
  setLoginState: React.Dispatch<SetStateAction<LoginState>>;
};

const LoginContext = createContext<NavContextType | undefined>(undefined);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loginState, setLoginState] = useState<LoginState>({ isLoggedIn: false });

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
