import React, { useState, createContext, useContext, ReactNode } from "react";


type NavigationState = {
  activePage: string;
};
type NavContextType = {
  navigate: NavigationState;
  setNavigate: React.Dispatch<React.SetStateAction<NavigationState>>;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

interface NavProviderProps {
  children: ReactNode;
}


export const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [navigate, setNavigate] = useState<NavigationState>({activePage:'Form'});
  return (
    <NavContext.Provider value={{ navigate, setNavigate }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavigate = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavigate must be used within a NavProvider");
  }
  return context;
};
