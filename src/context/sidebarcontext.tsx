// SidebarContext.tsx
import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext<{
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  toggle: false,
  setToggle: () => {},
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => useContext(SidebarContext);